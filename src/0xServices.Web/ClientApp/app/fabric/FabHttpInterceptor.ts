import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class FabHttpInterceptor implements HttpInterceptor {

    private rawApiUrl: string = '/api/';
    private apiUrl: string;


    constructor(@Inject('BASE_URL') private baseUrl: string) {
        this.apiUrl = baseUrl + '/api/'
    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let url: string = req.url;

        if (url.indexOf(this.rawApiUrl) === 0) {
            url = this.baseUrl + url;
        }

        if (url.indexOf(this.apiUrl) === 0) {
            // setting companyid in the header
            // config.headers.companyId = $window.profile.companyId
        }

        debugger;
        const reqNew = req.clone({ url: url });
        return next.handle(reqNew);
    }
}