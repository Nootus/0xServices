import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule, MatToolbarModule } from "@angular/material"

import { FabricModule } from "../fabric/FabricModule";

import { SignInDialogComponent } from "./SignInDialogComponent";
import { UserDialogService } from "./UserDialogService";

@NgModule({
    declarations: [
        SignInDialogComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatToolbarModule,
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
