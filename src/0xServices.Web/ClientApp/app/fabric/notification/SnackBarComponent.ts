import { Component, Inject, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { SnackBarModel } from "./models/SnackBarModel";
import { SnackBarMessageType } from "./models/SnackBarMessageType";

@Component({
    selector: "fab-snack-bar",
    templateUrl: "./SnackBarComponent.html",
    styleUrls: ["./SnackBarComponent.css"],
    encapsulation: ViewEncapsulation.None
})
export class SnackBarComponent implements OnInit {
    iconClass: string;

    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarModel) { }

    ngOnInit(): void {
        this.iconClass = this.data.iconCss;
    }
}
