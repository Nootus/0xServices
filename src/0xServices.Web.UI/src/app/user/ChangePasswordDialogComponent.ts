import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AccountService } from "../fabric/account/AccountService";
import { ChangePasswordModel } from "../fabric/account/models/ChangePasswordModel";
import { NTValidators } from "../fabric/validator/NTValidators";
import { ValidationMessage } from "../core/messages/ValidationMessage";

import { UserDialogComponent } from "./UserDialogComponent";

@Component({
    selector: "change-password",
    templateUrl: "./ChangePasswordDialogComponent.html",
    styleUrls: ["./ChangePasswordDialogComponent.css"],
    encapsulation: ViewEncapsulation.None
})
export class ChangePasswordDialogComponent {
    @ViewChild(UserDialogComponent) userDialogComponent: UserDialogComponent<ChangePasswordModel>;
    changePasswordForm: FormGroup;

    constructor(private fb: FormBuilder,
        private accountService: AccountService) {
        this.changePasswordForm = fb.group({
            currentPassword: ["", [Validators.required, Validators.maxLength(20)]],
            newPassword: ["", [Validators.required, Validators.maxLength(20)]],
            confirmPassword: ["", [Validators.required, Validators.maxLength(20), NTValidators.mathchOther("newPassword", ValidationMessage.confirmPasswordMismatch)]]
        });
    }

    submitForm(model: ChangePasswordModel) {
        this.userDialogComponent.submit(
            this.accountService.changePassword(model));
    }
}
