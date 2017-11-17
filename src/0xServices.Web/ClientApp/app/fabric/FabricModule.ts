import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";

import { RenderBodyComponent } from "./render/RenderBodyComponent";
import { RenderSectionComponent } from "./render/RenderSectionComponent";
import { RenderService } from "./render/RenderService";

@NgModule({
    declarations: [
        RenderBodyComponent,
        RenderSectionComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule
    ],
    exports: [
        RouterModule,
        RenderBodyComponent,
        RenderSectionComponent
    ],
    providers: [
        RenderService
    ]
})
export class FabricModule {
}
