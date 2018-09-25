import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AccountService } from "../fabric/account/AccountService";
import { RegisterUserModel } from "../fabric/account/models/RegisterUserModel";
import { NTValidators } from "../fabric/validator/NTValidators";
import { ValidationMessage } from "../core/messages/ValidationMessage";

import { UserDialogComponent } from "./UserDialogComponent";

@Component({
    selector: "register",
    templateUrl: "./RegisterDialogComponent.html",
    styleUrls: ["./RegisterDialogComponent.css"],
    encapsulation: ViewEncapsulation.None
})
export class RegisterDialogComponent {
    @ViewChild(UserDialogComponent) userDialogComponent: UserDialogComponent<RegisterUserModel>;
    registerForm: FormGroup;

    constructor(private fb: FormBuilder,
        private accountService: AccountService) {
        this.registerForm = fb.group({
            firstName: ["Prasanna", [Validators.required, Validators.maxLength(100)]],
            lastName: ["Kumar", [Validators.required, Validators.maxLength(100)]],
            userName: ["pprasannak@yahoo.com", [Validators.required, Validators.maxLength(100), Validators.email]],
            password: ["Nootus@123", [Validators.required, Validators.maxLength(20)]],
            confirmPassword: ["Nootus@123", [Validators.required, Validators.maxLength(20), NTValidators.mathchOther("password", ValidationMessage.confirmPasswordMismatch)]]
        });
    }

    submitForm(model: RegisterUserModel) {
        this.userDialogComponent.submit(
            this.accountService.register(model));
    }
}
