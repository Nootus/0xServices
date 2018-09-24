import { Injectable, Inject } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, empty, throwError } from "rxjs";

import { catchError, switchMap, filter } from "rxjs/operators";

import { AppSettings } from '../../environments/environment';
import { SnackBarService } from "./notification/SnackBarService";
import { LoaderService } from "./notification/LoaderService";
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
        private snackBarService: SnackBarService, private loaderService: LoaderService,
        private message: Message) {
        this.baseUrl = baseUrl.charAt(baseUrl.length - 1) === "/" ? baseUrl.substr(0, baseUrl.length - 1) : baseUrl;
        this.apiUrl = this.apiBaseUrl + "/api/"
    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let url: string = req.url;
        let withCredentials = req.withCredentials;
        let headers: any = {};

        if (url.indexOf(this.rawApiUrl) === 0) {
            url = this.apiBaseUrl + url;
        }

        if (url.indexOf(this.apiUrl) === 0) {
            // setting companyid and timezone in the header
            if (this.profile.user.companyId !== undefined) {
                headers.companyId = this.profile.user.companyId;
            }

            headers.browserTimezoneOffset = new Date().getTimezoneOffset();
            withCredentials = true;
        }
        
        this.loaderService.showLoader();
        const reqNew = req.clone({ url: url, withCredentials: withCredentials, setHeaders: headers });
        return next
            .handle(reqNew)
            .pipe(
            filter((event: HttpEvent<any>) => (event instanceof HttpResponse)),
            switchMap((event: HttpEvent<any>, index: number): Observable<any> => {
                let response: HttpResponse<any> = event as HttpResponse<any>;
                let mapReturn: Observable<any> = empty();
                if (response.body.hasOwnProperty("result") && response.body.hasOwnProperty("message") && response.body.hasOwnProperty("model")) {
                    switch (response.body.result) {
                        case 1: // unhandled exceptions in C#
                            mapReturn = throwError({ message: response.body.message });
                        case 2: //validation error messages
                            mapReturn = throwError(new NTException(response.body.message, response.body.errors));
                        default:
                            this.snackBarService.showSuccess(response.body.message);
                            let data = undefined;
                            if (response.body.dashboard === null) {
                                data = response.body.model;
                            }
                            else {
                                data = {
                                    model: response.body.model,
                                    dashboard: response.body.dashboard
                                }
                            }
                            mapReturn = of(response.clone({ body: data }));
                    }
                }
                this.loaderService.hideLoader();
                return mapReturn;
            }),
            catchError((err: HttpErrorResponse) => {
                if (err instanceof NTException) {
                    this.loaderService.hideLoader();
                    return throwError(err);
                }
                if (err.status === 403) {
                    this.snackBarService.showError(this.message.unAuthorized);
                } else {
                    console.error(err.message);
                    this.snackBarService.showError(err.message);
                }
                this.loaderService.hideLoader();
                return empty();
            }));
    }
}
