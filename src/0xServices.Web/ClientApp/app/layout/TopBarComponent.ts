import { Component } from "@angular/core";
import { UserDialogService } from "../user/UserDialogService";
import { Profile } from "../fabric/account/Profile";
import { AccountService } from "../fabric/account/AccountService";

@Component({
    selector: "top-bar",
    templateUrl: "./TopBarComponent.html",
    styleUrls: ["./TopBarComponent.css"]
})
export class TopBarComponent {

    constructor(private userDialogService: UserDialogService,
            private accountService: AccountService,
            public profile: Profile) {
    }

    login() {
        this.userDialogService.login();
    }

    logout() {
        this.accountService.logout().subscribe(() => {
            this.profile.logout();
        })
    }
}
