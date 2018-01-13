import { Component, ViewEncapsulation } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators/catchError";
import "rxjs/add/observable/empty";

import { NTException } from "../fabric/exception/NtException";
import { NTError } from "../fabric/exception/NtError";
import { ValidationMessage } from "../core/messages/ValidationMessage";
import { AccountService } from "../fabric/account/AccountService";
import { LoginModel } from "../fabric/account/models/LoginModel";


@Component({
    selector: "register",
    templateUrl: "./RegisterDialogComponent.html",
    styleUrls: ["./RegisterDialogComponent.css"],
    encapsulation: ViewEncapsulation.None
})
export class RegisterDialogComponent {
    registerForm: FormGroup;
    showError: boolean = false;
    errorMessage: string;
    errors: NTError[];

    constructor(private fb: FormBuilder,
        private dialogRef: MatDialogRef<RegisterDialogComponent>,
        private accountService: AccountService,
        private messages: ValidationMessage) {
        this.registerForm = fb.group({
            userName: ["prasanna@nootus.com", [Validators.required, Validators.email]],
            userPassword: ["Nootus@123", Validators.required]
        });
    }

    close() {
        this.dialogRef.close();
    }

    register() {
        this.showError = false;
        if (this.registerForm.valid) {
            this.accountService.register(this.registerForm.value)
                .pipe(
                catchError((exp: NTException) => {
                    this.errorMessage = exp.message;
                    this.errors = exp.errors;
                    this.showError = true;
                    return Observable.empty();
                }))
                .subscribe(data => {
                    this.close();
                });
        }
    }
}
