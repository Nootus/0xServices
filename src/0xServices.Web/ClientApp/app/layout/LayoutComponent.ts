import { Component } from "@angular/core";
import { AccountService } from "../fabric/account/AccountService";
import { SnackBarService } from "../fabric/notification/SnackBarService";

@Component({
    selector: "layout",
    templateUrl: "./LayoutComponent.html",
    styleUrls: ["./LayoutComponent.css"]
})
export class LayoutComponent {
    testvar: string = "Temp variable";
    hideNow: boolean = false;

    constructor(private accountService: AccountService, private snackBarService: SnackBarService) {
    }

    testClick(messageType: number) {
        this.snackBarService.showMessage("This is Message", messageType);
        // this.accountService.get();
    }
}
