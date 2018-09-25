import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AccountService } from "../fabric/account/AccountService";
import { LoginModel } from "../fabric/account/models/LoginModel";

import { UserDialogComponent } from "./UserDialogComponent";

@Component({
    selector: "login-in",
    templateUrl: "./LoginDialogComponent.html",
    styleUrls: ["./LoginDialogComponent.css"],
    encapsulation: ViewEncapsulation.None
})
export class LoginDialogComponent {
    @ViewChild(UserDialogComponent) userDialogComponent: UserDialogComponent<LoginModel>;
    loginForm: FormGroup;

    constructor(private fb: FormBuilder,
        private accountService: AccountService) {
        this.loginForm = fb.group({
            userName: ["prasanna@nootus.com", [Validators.required, Validators.maxLength(100), Validators.email]],
            userPassword: ["Nootus@123", [Validators.required, Validators.maxLength(20)]]
        });
    }

    submitForm(model: LoginModel) {
        this.userDialogComponent.submit(
            this.accountService.validate(model));
    }
}
