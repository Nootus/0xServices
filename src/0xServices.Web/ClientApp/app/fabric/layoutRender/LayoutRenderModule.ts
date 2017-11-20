import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { RenderBodyComponent } from "./RenderBodyComponent";
import { RenderSectionComponent } from "./RenderSectionComponent";
import { RenderService } from "./RenderService";

@NgModule({
    declarations: [
        RenderBodyComponent,
        RenderSectionComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        RenderBodyComponent,
        RenderSectionComponent
    ],
    providers: [
        RenderService
    ]
})
export class LayoutRenderModule {
}
