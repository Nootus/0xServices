import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";

import { TopBarComponent } from "./TopBarComponent";
import { LayoutComponent } from "./LayoutComponent";

@NgModule({
    declarations: [
        LayoutComponent,
        TopBarComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule {
}
