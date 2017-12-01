import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { SnackBarComponent } from "./SnackBarComponent";
import { SnackBarMessageType } from "./models/SnackBarMessageType";

@Injectable()
export class SnackBar {
    duration: number = 200000;

    constructor(private matSnackBar: MatSnackBar) { }

    public showError(message: string): void {
        this.showMessage(message, SnackBarMessageType.error);
    }

    public showMessage(message: string, messageType: SnackBarMessageType): void {
        this.matSnackBar.openFromComponent(SnackBarComponent, {
            data: { message: message, messageType: messageType },         
            duration: this.duration, panelClass: "error"
        });
    }
}
