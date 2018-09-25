import { Injectable, OnDestroy } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material"
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { LoginDialogComponent } from "./LoginDialogComponent";
import { RegisterDialogComponent } from "./RegisterDialogComponent";
import { ChangePasswordDialogComponent } from "./ChangePasswordDialogComponent";

@Injectable()
export class UserDialogService implements OnDestroy {

    private unsubscribe: Subject<void> = new Subject();

    constructor(private dialog: MatDialog) {
    }

    login() : void {
        let dialogRef: MatDialogRef<LoginDialogComponent> = this.dialog.open(LoginDialogComponent, {
            panelClass: "login-dialog"
        });

        dialogRef.afterClosed()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe();
    }

    register(): void {
        let dialogRef: MatDialogRef<RegisterDialogComponent> = this.dialog.open(RegisterDialogComponent, {
            panelClass: "register-dialog"
        });

        dialogRef.afterClosed()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe();
}

    changePassword(): void {
        let dialogRef: MatDialogRef<ChangePasswordDialogComponent> = this.dialog.open(ChangePasswordDialogComponent, {
            panelClass: "password-dialog"
        });

        dialogRef.afterClosed()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe();
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
