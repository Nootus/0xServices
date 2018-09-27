import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { UserDialogService } from "../user/UserDialogService";
import { Profile } from "../fabric/account/Profile";
import { AccountService } from "../fabric/account/AccountService";
import { AuthService } from "../fabric/account/AuthService";
import { MenuModel } from "./models/MenuModel";

@Component({
    selector: "top-bar",
    templateUrl: "./TopBarComponent.html",
    styleUrls: ["./TopBarComponent.css"]
})
export class TopBarComponent implements OnDestroy {

    private unsubscribe: Subject<void> = new Subject();

    registerMenuItem: MenuModel = { name: "register", text: "Register", routerUrl: undefined, iconCss: "register-icon", tooltip: "Register a new User", tooltipPosition: "below" };
    loginMenuItem: MenuModel = { name: "login", text: "Login", routerUrl: undefined, iconCss: "login-icon", tooltip: "Login", tooltipPosition: "below" };
    changePasswordMenuItem: MenuModel = { name: "changePassword", text: "Change Password", routerUrl: undefined, iconCss: "change-password-icon", tooltip: "Change Password", tooltipPosition: "below" };
    logoutMenuItem: MenuModel = { name: "logout", text: "Logout", routerUrl: undefined, iconCss: "logout-icon", tooltip: "Logout", tooltipPosition: "below" };


    constructor(private router: Router,
            private userDialogService: UserDialogService,
            private accountService: AccountService, private authService: AuthService,
            public profile: Profile) {

        this.authService.challenge
            .pipe(takeUntil(this.unsubscribe))
            .subscribe((state: boolean) => {
                if(state) {
                    this.login();
                }
            });
    }

    login() {
        this.userDialogService.login();
    }

    register() {
        this.userDialogService.register();
    }

    changePassword() {
        this.userDialogService.changePassword();
    }

    logout() {
        this.accountService.logout()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(() => {
                this.profile.logout();
                this.router.navigateByUrl("");
            })
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
