﻿import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from "@angular/material"

import { FabricModule } from "../fabric/FabricModule";
import { ControlModule } from "../core/controls/ControlModule";

import { LoginDialogComponent } from "./LoginDialogComponent";
import { RegisterDialogComponent } from "./RegisterDialogComponent";
import { ChangePasswordDialogComponent } from "./ChangePasswordDialogComponent";
import { UserDialogComponent } from "./UserDialogComponent";
import { UserDialogService } from "./UserDialogService";

@NgModule({
    declarations: [
        LoginDialogComponent,
        RegisterDialogComponent,
        ChangePasswordDialogComponent,
        UserDialogComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule,
        FabricModule,
        ControlModule
    ],
    providers: [
        UserDialogService
    ],
    exports: [
    ],
    entryComponents: [
        LoginDialogComponent,
        RegisterDialogComponent,
        ChangePasswordDialogComponent
    ]
})
export class UserModule {
}