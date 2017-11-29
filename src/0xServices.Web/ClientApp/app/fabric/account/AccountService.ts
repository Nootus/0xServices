import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Profile } from "./Profile";
import { ProfileModel } from "./models/ProfileModel";
import { LoginModel } from "./models/LoginModel";
import { ChangePasswordModel } from "./models/ChangePasswordModel";

import { Observable } from "rxjs";
import "rxjs/add/operator/do";

@Injectable()
export class AccountService {

    constructor(private http: HttpClient, private profile: Profile) {
    }

    public validate(model: LoginModel): Observable<ProfileModel> {
        return this.http.post<ProfileModel>("/api/account/validate", model)
            .do(data => {
                this.profile.populate(data);
            });
    }

    public logout(): Observable<void> {
        return this.http.get<void>("/api/account/logout");
    }

    public changePassword(model: ChangePasswordModel): Observable<void> {
        return this.http.post<void>("/api/account/changepassword", model);
    }

    public get(): void {
        this.http.get<ProfileModel>("/api/account/profileget")
            .subscribe(data => {
                this.profile.populate(data);
            });
    }
}
