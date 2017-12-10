﻿import { Component } from "@angular/core";
import { AccountService } from "../fabric/account/AccountService";
import { SnackBar } from "../fabric/notification/SnackBar";

@Component({
    selector: "layout",
    templateUrl: "./LayoutComponent.html",
    styleUrls: ["./LayoutComponent.css"]
})
export class LayoutComponent {
    testvar: string = "Temp variable";
    hideNow: boolean = false;

    constructor(private accountService: AccountService, private snackBar: SnackBar) {
    }

    testClick(messageType: number) {
        this.snackBar.showMessage("This is Message", messageType);
        // this.accountService.get();
    }
}
