import { Component } from "@angular/core";

import { UserDialogService } from "../user/UserDialogService";
import { Profile } from "../fabric/account/Profile";
import { AccountService } from "../fabric/account/AccountService";
import { MenuModel } from "./models/MenuModel";

@Component({
    selector: "top-bar",
    templateUrl: "./TopBarComponent.html",
    styleUrls: ["./TopBarComponent.css"]
})
export class TopBarComponent {

    registerMenuItem: MenuModel = { name: "register", text: "Register", routerUrl: "#", iconCss: "register-icon", tooltip: "Register a new User", tooltipPosition: "below" };
    loginMenuItem: MenuModel = { name: "login", text: "Login", routerUrl: "#", iconCss: "login-icon", tooltip: "Login", tooltipPosition: "below" };
    changePasswordMenuItem: MenuModel = { name: "changePassword", text: "Change Password", routerUrl: "#", iconCss: "change-password-icon", tooltip: "Change Password", tooltipPosition: "below" };
    logoutMenuItem: MenuModel = { name: "logout", text: "Logout", routerUrl: "#", iconCss: "logout-icon", tooltip: "Logout", tooltipPosition: "below" };


    constructor(private userDialogService: UserDialogService,
            private accountService: AccountService,
            public profile: Profile) {
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
        this.accountService.logout().subscribe(() => {
            this.profile.logout();
        })
    }
}
