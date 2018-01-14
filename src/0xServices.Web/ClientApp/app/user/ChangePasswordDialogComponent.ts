import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AccountService } from "../fabric/account/AccountService";
import { LoginModel } from "../fabric/account/models/LoginModel";

import { UserDialogComponent } from "./UserDialogComponent";

@Component({
    selector: "login-in",
    templateUrl: "./ChangePasswordDialogComponent.html",
    styleUrls: ["./ChangePasswordDialogComponent.css"],
    encapsulation: ViewEncapsulation.None
})
export class ChangePasswordDialogComponent {
    @ViewChild(UserDialogComponent) userDialogComponent: UserDialogComponent<LoginModel>;
    loginForm: FormGroup;

    constructor(private fb: FormBuilder,
        private accountService: AccountService) {
        this.loginForm = fb.group({
            userName: ["prasanna@nootus.com", [Validators.required, Validators.email]],
            userPassword: ["Nootus@123", Validators.required]
        });
    }

    submitForm(model: LoginModel) {
        this.userDialogComponent.subscribe(
            this.accountService.validate(model));
    }
}
