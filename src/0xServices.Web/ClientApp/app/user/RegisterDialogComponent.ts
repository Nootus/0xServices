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
            firstName: ["", [Validators.required, Validators.maxLength(100)]],
            lastName: ["", [Validators.required, Validators.maxLength(100)]],
            userName: ["", [Validators.required, Validators.maxLength(100), Validators.email]],
            password: ["", [Validators.required, Validators.maxLength(20)]],
            confirmPassword: ["", [Validators.required, Validators.maxLength(20), NTValidators.mathchOther("password", ValidationMessage.confirmPasswordMismatch)]]
        });
    }

    submitForm(model: RegisterUserModel) {
        this.userDialogComponent.subscribe(
            this.accountService.register(model));
    }
}
