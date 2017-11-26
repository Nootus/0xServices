import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { RenderBodyComponent } from "./RenderBodyComponent";
import { RenderSectionComponent } from "./RenderSectionComponent";
import { RenderService } from "./RenderService";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        RenderBodyComponent,
        RenderSectionComponent
    ],
    providers: [
        RenderService
    ],
    exports: [
        RenderBodyComponent,
        RenderSectionComponent
    ]
})
export class LayoutRenderModule {
}
