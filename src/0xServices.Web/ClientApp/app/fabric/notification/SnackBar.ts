import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { SnackBarComponent } from "./SnackBarComponent";

@Injectable()
export class SnackBar {
    constructor(private matSnackBar: MatSnackBar) { }

    public showError(message: string): void {
        this.matSnackBar.openFromComponent(SnackBarComponent, {
            data: { message: message }, duration: 2000,
        });
    }

}
