import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from "@angular/material"

import { FabricModule } from "../fabric/FabricModule";

import { SignInDialogComponent } from "./SignInDialogComponent";
import { UserDialogService } from "./UserDialogService";

@NgModule({
    declarations: [
        SignInDialogComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule,
        FabricModule
    ],
    providers: [
        UserDialogService
    ],
    exports: [
    ],
    entryComponents: [
        SignInDialogComponent
    ]
})
export class UserModule {
}
