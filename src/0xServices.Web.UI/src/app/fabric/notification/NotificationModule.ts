import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSnackBarModule, MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { SnackBarComponent } from "./SnackBarComponent";
import { SnackBarService } from "./SnackBarService";
import { LoaderComponent } from "./LoaderComponent";
import { LoaderService } from "./LoaderService";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatSnackBarModule, 
        MatProgressSpinnerModule
    ],
    exports: [
        SnackBarComponent,
        LoaderComponent
    ],
    providers: [
        SnackBarService,
        LoaderService
    ],
    declarations: [
        SnackBarComponent,
        LoaderComponent
    ],
    entryComponents: [
        SnackBarComponent
    ]
})
export class NotificationModule {
}
