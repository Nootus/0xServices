import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog, MatDialogRef } from "@angular/material"

import { LoginDialogComponent } from "./LoginDialogComponent";

@Injectable()
export class UserDialogService {

    constructor(private dialog: MatDialog) {
    }

    login() : void {
        let dialogRef: MatDialogRef<LoginDialogComponent> = this.dialog.open(LoginDialogComponent, {
            panelClass: "sign-in-dialog"
        });

        dialogRef.afterClosed().subscribe(result => {
            //  alert(result);
        });
    }
}
