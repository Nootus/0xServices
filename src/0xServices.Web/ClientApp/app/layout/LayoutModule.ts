import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material";

import { FabricModule } from "../fabric/FabricModule";

import { TopBarComponent } from "./TopBarComponent";
import { LayoutComponent } from "./LayoutComponent";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,

        FabricModule
    ],
    declarations: [
        LayoutComponent,
        TopBarComponent
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule {
}
