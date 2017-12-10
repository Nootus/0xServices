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
        let panelClass: string;
        let iconClass: string;

        switch (messageType) {
            case SnackBarMessageType.error:
                panelClass = "error";
                iconClass = "error";
                break;
            case SnackBarMessageType.warning:
                panelClass = "warning";
                iconClass = "warning";
                break;
            case SnackBarMessageType.success:
                panelClass = "success";
                iconClass = "check_circle";
                break;
            case SnackBarMessageType.info:
                panelClass = "info";
                iconClass = "info";
                break;
            default:
                panelClass = "info";
                iconClass = "info";
                break;
        }

        this.matSnackBar.openFromComponent(SnackBarComponent, {
            data: { message: message, iconCss: iconClass, messageType: messageType },         
            duration: this.duration, panelClass: panelClass
        });
    }
}
