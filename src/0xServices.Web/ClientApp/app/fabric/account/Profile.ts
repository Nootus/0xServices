import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';

import { ProfileModel } from "./models/ProfileModel";

@Injectable()
export class Profile {

    public user: ProfileModel = <ProfileModel>{};
    public isAuthenticated: boolean = false;


    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {

        //http.re.get(baseUrl + 'api/SampleData/WeatherForecasts'). .map()


        //    .subscribe(result => {
        //    this.forecasts = result.json() as WeatherForecast[];
        //}, error => console.error(error));

    }

    public populate(data: ProfileModel): void {
        this.isAuthenticated = true;

        Object.assign(this.user, data);
    };

    public logout(): void {
        const self: Profile = this;

        self.isAuthenticated = false;
    };

    public isAuthorized(authorizeClaims: string[]): boolean {
        const self: Profile = this;

        let response: boolean = false;

        //for (let claimCounter: number = 0; claimCounter < authorizeClaims.length; claimCounter++) {
        //    let arr: string[] = authorizeClaims[claimCounter].split(":");
        //    let claimModule: string = arr[0];
        //    let claim: string = arr[1];
        //    if (self.adminRoles.indexOf(claimModule + "Admin") === -1) {
        //        for (let counter: number = 0; counter < self.claims.length; counter++) {
        //            if (self.claims[counter].claimType === claimModule && self.claims[counter].claimValue === claim) {
        //                response = true;
        //                break;
        //            }
        //        }
        //    } else {
        //        response = true;
        //    }

        //    if (response) {
        //        break;
        //    }
        //}

        return response;
    }

    //public get(): ng.IHttpPromise<Models.IProfileModel> {
    //    const self: Profile = this;

    //    return self.$http.get<Models.IProfileModel>("/api/account/profileget")
    //        .then(function (data: Models.IProfileModel): Models.IProfileModel {
    //            self.populate(data);
    //            return data;
    //        });
    //}
}