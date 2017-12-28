import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog, MatDialogRef } from "@angular/material"

import { SignInDialogComponent } from "./SignInDialogComponent";

@Injectable()
export class UserDialogService {

    constructor(private dialog: MatDialog) {
    }

    signIn() : void {
        let dialogRef: MatDialogRef<SignInDialogComponent> = this.dialog.open(SignInDialogComponent, {
            panelClass: "sign-in-dialog"
        });

        dialogRef.afterClosed().subscribe(result => {
            //  alert(result);
        });
    }
}
