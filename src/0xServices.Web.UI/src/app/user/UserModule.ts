import { NgModule } from "@angular/core";
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
    imports: [
        CommonModule,
        MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule,
        FabricModule,
        ControlModule
    ],
    exports: [
    ],
    providers: [
        UserDialogService
    ],
    declarations: [
        LoginDialogComponent,
        RegisterDialogComponent,
        ChangePasswordDialogComponent,
        UserDialogComponent
    ],
    entryComponents: [
        LoginDialogComponent,
        RegisterDialogComponent,
        ChangePasswordDialogComponent
    ]
})
export class UserModule {
}
