import { Component, ViewEncapsulation } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators/catchError";
import "rxjs/add/observable/empty";

import { NTException } from "../fabric/exception/NtException";
import { ValidationMessage } from "../core/messages/ValidationMessage";
import { AccountService } from "../fabric/account/AccountService";
import { LoginModel } from "../fabric/account/models/LoginModel";

@Component({
    selector: "login-in",
    templateUrl: "./LoginDialogComponent.html",
    styleUrls: ["./LoginDialogComponent.css"],
    encapsulation: ViewEncapsulation.None
})
export class LoginDialogComponent {
    loginForm: FormGroup;
    showError: boolean = false;
    errorMessage: string;

    constructor(private fb: FormBuilder,
        private dialogRef: MatDialogRef<LoginDialogComponent>,
        private accountService: AccountService,
        private messages: ValidationMessage) {
        this.loginForm = fb.group({
            userName: ["prasanna@nootus.com", [Validators.required, Validators.email]],
            userPassword: ["Nootus@123", Validators.required]
        });
    }

    close() {
        this.dialogRef.close();
    }

    validate() {
        this.showError = false;
        if (this.loginForm.valid) {           
            this.accountService.validate(this.loginForm.value)
                .pipe(
                catchError((exp: NTException) => {
                    this.errorMessage = exp.message;
                    this.showError = true;
                    return Observable.empty();
                }))
                .subscribe(data => {
                    this.close();
                });
        }
    }
}
