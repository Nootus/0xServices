import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSnackBarModule, MAT_SNACK_BAR_DATA } from "@angular/material";

import { SnackBarComponent } from "./SnackBarComponent";
import { SnackBar } from "./SnackBar";

@NgModule({
    imports: [
        CommonModule,
        MatSnackBarModule
    ],
    entryComponents: [
        SnackBarComponent
    ],
    declarations: [
        SnackBarComponent
    ],
    providers: [
        SnackBar,
    ],
    exports: [
        SnackBarComponent
    ]
})
export class NotificationModule {
}
