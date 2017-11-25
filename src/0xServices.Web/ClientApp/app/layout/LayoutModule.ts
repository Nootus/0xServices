import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule, MatButtonModule } from "@angular/material";

import { FabricModule } from "../fabric/FabricModule";

import { TopBarComponent } from "./TopBarComponent";
import { LayoutComponent } from "./LayoutComponent";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatIconModule,
        MatButtonModule,
        FabricModule
    ],
    exports: [
        LayoutComponent
    ],
    declarations: [
        LayoutComponent,
        TopBarComponent
    ]
})
export class LayoutModule {
}
