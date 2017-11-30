import { Component, Inject } from "@angular/core";
import { SnackBarModel } from "./models/SnackBarModel";
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
    selector: "fab-snack-bar",
    templateUrl: "./SnackBarComponent.html",
    styleUrls: ["./SnackBarComponent.css"]
})
export class SnackBarComponent {
    constructor( @Inject(MAT_SNACK_BAR_DATA) public data: SnackBarModel) { }
}
