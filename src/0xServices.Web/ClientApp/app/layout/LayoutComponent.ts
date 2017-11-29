import { Component } from '@angular/core';
import { AccountService } from "../fabric/account/AccountService";

@Component({
    selector: 'layout',
    templateUrl: './LayoutComponent.html',
    styleUrls: ['./LayoutComponent.css']
})
export class LayoutComponent {
    testvar: string = "Temp variable";
    hideNow: boolean = false;

    constructor(private accountService: AccountService) {
    }

    testClick() {
        this.accountService.get();
    }
}
