import { Component, Inject, Input, OnInit } from "@angular/core";
import { SnackBarModel } from "./models/SnackBarModel";
import { SnackBarMessageType } from "./models/SnackBarMessageType";
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
    selector: "fab-snack-bar",
    templateUrl: "./SnackBarComponent.html",
    styleUrls: ["./SnackBarComponent.css"]
})
export class SnackBarComponent implements OnInit {
    // @Input() data: SnackBarModel;
    cssClass: string;
    iconClass: string;

    constructor( @Inject(MAT_SNACK_BAR_DATA) public data: SnackBarModel) { }

    ngOnInit(): void {
        switch (this.data.messageType) {
            case SnackBarMessageType.error:
                this.cssClass = "error";
                this.iconClass = "error";
                break;
            case SnackBarMessageType.warning:
                this.cssClass = "warning";
                this.iconClass = "warning";
                break;
            case SnackBarMessageType.success:
                this.cssClass = "success";
                this.iconClass = "check_circle";
                break;
            case SnackBarMessageType.info:
                this.cssClass = "info";
                this.iconClass = "info";
                break;
            default:
                this.cssClass = "info";
                this.iconClass = "info";
                break;
        }
    }
}
