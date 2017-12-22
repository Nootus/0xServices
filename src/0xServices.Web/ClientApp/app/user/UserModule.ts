import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material"

import { SignInDialogComponent } from "./SignInDialogComponent";
import { UserDialogService } from "./UserDialogService";

@NgModule({
    declarations: [
        SignInDialogComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule
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
