import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog, MatDialogRef } from "@angular/material"

import { LoginDialogComponent } from "./LoginDialogComponent";
import { RegisterDialogComponent } from "./RegisterDialogComponent";
import { ChangePasswordDialogComponent } from "./ChangePasswordDialogComponent";

@Injectable()
export class UserDialogService {

    constructor(private dialog: MatDialog) {
    }

    login() : void {
        let dialogRef: MatDialogRef<LoginDialogComponent> = this.dialog.open(LoginDialogComponent, {
            panelClass: "login-dialog"
        });

        dialogRef.afterClosed().subscribe();
    }

    register(): void {
        let dialogRef: MatDialogRef<RegisterDialogComponent> = this.dialog.open(RegisterDialogComponent, {
            panelClass: "register-dialog"
        });

        dialogRef.afterClosed().subscribe();
    }

    changePassword(): void {
        let dialogRef: MatDialogRef<ChangePasswordDialogComponent> = this.dialog.open(ChangePasswordDialogComponent, {
            panelClass: "password-dialog"
        });

        dialogRef.afterClosed().subscribe();
    }
}
