import { Injectable, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { tap, takeUntil } from "rxjs/operators";

import { Profile } from "./Profile";
import { AuthService } from "./AuthService";
import { ProfileModel } from "./models/ProfileModel";
import { LoginModel } from "./models/LoginModel";
import { ChangePasswordModel } from "./models/ChangePasswordModel";
import { RegisterUserModel } from "./models/RegisterUserModel";

@Injectable()
export class AccountService  implements OnDestroy {

    private unsubscribe: Subject<void> = new Subject();

    constructor(private http: HttpClient, private profile: Profile, private authService: AuthService) {
    }

    public register(model: RegisterUserModel): Observable<ProfileModel> {
        return this.registerOrValidate("/api/user/register", model);
    }

    public validate(model: LoginModel): Observable<ProfileModel> {
        return this.registerOrValidate("/api/account/validate", model);
    }

    private registerOrValidate(url: string, model: LoginModel | RegisterUserModel): Observable<ProfileModel> {
        return this.http.post<ProfileModel>(url, model)
            .pipe(
            tap((data: ProfileModel) => {
                this.profile.populate(data);
                this.authService.redirectFromLogin();
            }));
    }

    public logout(): Observable<void> {
        return this.http.get<void>("/api/account/logout");
    }

    public changePassword(model: ChangePasswordModel): Observable<void> {
        return this.http.post<void>("/api/account/changepassword", model);
    }

    public get(): void {
        this.http.get<ProfileModel>("/api/account/profileget")
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(data => {
                this.profile.populate(data);
            });
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
