import { Injectable, Inject } from "@angular/core";

import { ProfileModel } from "./models/ProfileModel";

@Injectable()
export class Profile {

    public user: ProfileModel = <ProfileModel>{};
    public isAuthenticated: boolean = false;


    constructor() {
    }

    public populate(data: ProfileModel): void {
        this.isAuthenticated = true;

        Object.assign(this.user, data);
    };

    public logout(): void {
        this.isAuthenticated = false;
    };

    public isAuthorized(authorizeClaims: string[]): boolean {
        let response: boolean = false;

        for (let claimCounter: number = 0; claimCounter < authorizeClaims.length; claimCounter++) {
            let arr: string[] = authorizeClaims[claimCounter].split(":");
            let claimModule: string = arr[0];
            let claim: string = arr[1];
            if (this.user.adminRoles.indexOf(claimModule + "Admin") === -1) {
                for (let counter: number = 0; counter < this.user.claims.length; counter++) {
                    if (this.user.claims[counter].claimType === claimModule && this.user.claims[counter].claimValue === claim) {
                        response = true;
                        break;
                    }
                }
            } else {
                response = true;
            }

            if (response) {
                break;
            }
        }

        return response;
    }
}
