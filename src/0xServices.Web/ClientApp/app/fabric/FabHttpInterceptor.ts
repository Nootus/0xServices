import { Injectable, Inject } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { Profile } from "./account/Profile";
import { ProfileModel } from "./account/models/ProfileModel";

@Injectable()
export class FabHttpInterceptor implements HttpInterceptor {

    private rawApiUrl: string = "/api/";
    private apiUrl: string;


    constructor(private profile: Profile, @Inject("BASE_URL") private baseUrl: string) {
        this.baseUrl = baseUrl.charAt(baseUrl.length - 1) === "/" ? baseUrl.substr(0, baseUrl.length - 1) : baseUrl;
        this.apiUrl = this.baseUrl + "/api/"
    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let url: string = req.url;
        let headers: HttpHeaders = req.headers;

        if (url.indexOf(this.rawApiUrl) === 0) {
            url = this.baseUrl + url;
        }

        if (url.indexOf(this.apiUrl) === 0) {
            // setting companyid in the header
            if (this.profile.user.companyId !== undefined) {
                debugger;
                headers.set("companyId", this.profile.user.companyId.toString());
            }
        }

        const reqNew = req.clone({ url: url });
        return next
            .handle(reqNew)
            .map(event => {

                if (event instanceof HttpResponse) {
                    debugger;
                    if (event.body.hasOwnProperty("result") && event.body.hasOwnProperty("message") && event.body.hasOwnProperty("model")) {
                        switch (event.body.result) {
                            case 1:
                                // utility.showError(event.body.message);
                                return event;
                            case 2: //validation error messages
                                var exp = { message: event.body.message, errors: event.body.model.data };
                                //return $q.reject(exp);
                                return event;
                            default:
                                // utility.showInfo(event.body.message);
                                var data = undefined;
                                if (event.body.dashboard === null) {
                                    data = event.body.model;
                                }
                                else {
                                    data = {
                                        model: event.body.model,
                                        dashboard: event.body.dashboard
                                    }
                                }
                                return event.clone({ body: data });
                        }
                    }
                }
                return event;
            });
    }
}