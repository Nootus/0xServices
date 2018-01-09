import { Component } from "@angular/core";
import { UserDialogService } from "../user/UserDialogService";

@Component({
    selector: "top-bar",
    templateUrl: "./TopBarComponent.html",
    styleUrls: ["./TopBarComponent.css"]
})
export class TopBarComponent {

    constructor(private userDialogService: UserDialogService){
    }

    login() {
        this.userDialogService.login();
    }
}
