import { Injectable, Inject } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, empty, throwError } from "rxjs";

import { catchError, switchMap, filter } from "rxjs/operators";

import { AppSettings } from '../../environments/environment';
import { SnackBarService } from "./notification/SnackBarService";
import { Profile } from "./account/Profile";
import { NTException } from "./exception/NtException";
import { Message } from "./Message";

@Injectable()
export class FabHttpInterceptor implements HttpInterceptor {

    private rawApiUrl: string = "/api/";
    private apiUrl: string;
    private apiBaseUrl: string = AppSettings.ApiBaseUrl;

    constructor(private profile: Profile,
        @Inject("BASE_URL") private baseUrl: string,
        private snackBarService: SnackBarService,
        private message: Message) {
        this.baseUrl = baseUrl.charAt(baseUrl.length - 1) === "/" ? baseUrl.substr(0, baseUrl.length - 1) : baseUrl;
        this.apiUrl = this.apiBaseUrl + "/api/"
    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let url: string = req.url;
        let headers: HttpHeaders = req.headers;

        if (url.indexOf(this.rawApiUrl) === 0) {
            url = this.apiBaseUrl + url;
        }

        if (url.indexOf(this.apiUrl) === 0) {
            // setting companyid in the header
            if (this.profile.user.companyId !== undefined) {
                headers.set("companyId", this.profile.user.companyId.toString());
            }
        }

        const reqNew = req.clone({ url: url });
        return next
            .handle(reqNew)
            .pipe(
            filter((event: HttpEvent<any>) => (event instanceof HttpResponse)),
            switchMap((event: HttpEvent<any>, index: number): Observable<any> => {
                let response: HttpResponse<any> = event as HttpResponse<any>;
                if (response.body.hasOwnProperty("result") && response.body.hasOwnProperty("message") && response.body.hasOwnProperty("model")) {
                    switch (response.body.result) {
                        case 1: // unhandled exceptions in C#
                            return throwError({ message: response.body.message });
                        case 2: //validation error messages
                            return throwError(new NTException(response.body.message, response.body.errors));
                        default:
                            this.snackBarService.showSuccess(response.body.message);
                            var data = undefined;
                            if (response.body.dashboard === null) {
                                data = response.body.model;
                            }
                            else {
                                data = {
                                    model: response.body.model,
                                    dashboard: response.body.dashboard
                                }
                            }
                            return of(response.clone({ body: data }));
                    }
                }
                return empty();
            }),
            catchError((err: HttpErrorResponse) => {
                if (err instanceof NTException) {
                    return throwError(err);
                }
                if (err.status === 403) {
                    this.snackBarService.showError(this.message.unAuthorized);
                } else {
                    console.error(err.message);
                    this.snackBarService.showError(err.message);
                }
                return empty();
            }));
    }
}
