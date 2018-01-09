import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSnackBarModule, MAT_SNACK_BAR_DATA } from "@angular/material";

import { SnackBarComponent } from "./SnackBarComponent";
import { SnackBarService } from "./SnackBarService";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatSnackBarModule
    ],
    entryComponents: [
        SnackBarComponent
    ],
    declarations: [
        SnackBarComponent
    ],
    providers: [
        SnackBarService,
    ],
    exports: [
        SnackBarComponent
    ]
})
export class NotificationModule {
}
