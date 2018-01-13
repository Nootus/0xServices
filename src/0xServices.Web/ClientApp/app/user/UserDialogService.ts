import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog, MatDialogRef } from "@angular/material"

import { LoginDialogComponent } from "./LoginDialogComponent";
import { RegisterDialogComponent } from "./RegisterDialogComponent";

@Injectable()
export class UserDialogService {

    constructor(private dialog: MatDialog) {
    }

    login() : void {
        let dialogRef: MatDialogRef<LoginDialogComponent> = this.dialog.open(LoginDialogComponent, {
            panelClass: "user-dialog"
        });

        dialogRef.afterClosed().subscribe();
    }

    register(): void {
        let dialogRef: MatDialogRef<RegisterDialogComponent> = this.dialog.open(RegisterDialogComponent, {
            panelClass: "user-dialog"
        });

        dialogRef.afterClosed().subscribe();
    }
}
