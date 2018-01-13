import { Component, ViewEncapsulation, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators/catchError";
import "rxjs/add/observable/empty";

import { NTException } from "../fabric/exception/NtException";
import { NTError } from "../fabric/exception/NtError";

@Component({
    selector: "user-dialog",
    templateUrl: "./UserDialogComponent.html",
    styleUrls: ["./UserDialogComponent.css"],
    encapsulation: ViewEncapsulation.None
})
export class UserDialogComponent<TDialogComponent> {
    @Input() userForm: FormGroup;
    @Output() ntSubmit: EventEmitter<any> = new EventEmitter();
    showError: boolean = false;
    errorMessage: string;
    errors: NTError[];

    constructor(private dialogRef: MatDialogRef<TDialogComponent>) {
    }

    close() {
        this.dialogRef.close();
    }

    submitForm() {
        this.showError = false;
        if (this.userForm.valid) {
            this.ntSubmit.emit(this.userForm.value);
        }
    }

    subscribe(submitted :Observable<any>) {
        submitted
            .pipe(
            catchError((exp: NTException) => {
                this.errorMessage = exp.message;
                this.errors = exp.errors;
                this.showError = true;
                return Observable.empty();
            }))
            .subscribe(() => {
                this.close();
            });
    }
}
