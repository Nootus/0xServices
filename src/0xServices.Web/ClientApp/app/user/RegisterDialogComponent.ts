import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AccountService } from "../fabric/account/AccountService";
import { RegisterUserModel } from "../fabric/account/models/RegisterUserModel";

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
            firstName: ["", [Validators.required]],
            lastName: ["", [Validators.required]],
            userName: ["", [Validators.required, Validators.email]],
            password: ["", Validators.required],
            confirmPassword: ["", Validators.required]
        });
    }

    submitForm(model: RegisterUserModel) {
        this.userDialogComponent.subscribe(
            this.accountService.register(model));
    }
}
