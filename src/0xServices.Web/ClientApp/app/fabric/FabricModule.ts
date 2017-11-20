import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";

import { LayoutRenderModule } from "./layoutRender/LayoutRenderModule";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule,
        LayoutRenderModule
    ],
    exports: [
        RouterModule,
        LayoutRenderModule
    ],
    providers: [
    ]
})
export class FabricModule {
}
