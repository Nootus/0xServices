import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from "@angular/material"

import { FabricModule } from "../fabric/FabricModule";
import { CoreModule } from "../core/CoreModule";

import { SignInDialogComponent } from "./SignInDialogComponent";
import { UserDialogService } from "./UserDialogService";

@NgModule({
    declarations: [
        SignInDialogComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule,
        FabricModule,
        CoreModule
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
