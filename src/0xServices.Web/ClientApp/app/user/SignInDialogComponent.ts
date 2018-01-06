import { Component, ViewEncapsulation } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

import { ValidationMessage } from "../core/messages/ValidationMessage";

@Component({
    selector: "sign-in",
    templateUrl: "./SignInDialogComponent.html",
    styleUrls: ["./SignInDialogComponent.css"],
    encapsulation: ViewEncapsulation.None
})
export class SignInDialogComponent {
    loginForm: FormGroup;
    showError: boolean = false;
    errorMessage: string = "Checking with error";

    constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<SignInDialogComponent>, private messages: ValidationMessage) {
        this.loginForm = fb.group({
            userName: ["", [Validators.required, Validators.email]],
            userPassword: ["", Validators.required]
        });
    }

    close() {
        this.dialogRef.close();
    }

    validate() {
        this.showError = true;
        if (this.loginForm.valid) {
            alert("validated");
        }
    }

    getErrorMessage(control: FormControl): string {
        return control.hasError("required") ? this.messages.required :
            control.hasError("email") ? this.messages.email :
                "";
    }
}
