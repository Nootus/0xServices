import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule, MatButtonModule, MatTooltipModule } from "@angular/material";

import { ButtonIconComponent } from "./ButtonIconComponent";

@NgModule({
    imports: [
        CommonModule, BrowserAnimationsModule,
        FlexLayoutModule,
        MatIconModule, MatButtonModule, MatTooltipModule
    ],
    declarations: [
        ButtonIconComponent
    ],
    providers: [
    ],
    exports: [
        ButtonIconComponent
    ]
})
export class ButtonModule {
}
