import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
    MatButtonModule, MatCardModule
} from "@angular/material";

import { FabricModule } from "../fabric/FabricModule";
import { HomeComponent } from "./HomeComponent";
import { FeatureSectionComponent } from "./FeatureSectionComponent";
import { HowItWorksComponent } from "./HowItWorksComponent";
import { SectionItemComponent } from "./SectionItemComponent";
import { FooterComponent } from "./FooterComponent";


@NgModule({
    imports: [
        CommonModule,
        FabricModule,
        FlexLayoutModule,
        MatButtonModule, MatCardModule
    ],
    declarations: [
        HomeComponent,
        FeatureSectionComponent,
        HowItWorksComponent,
        SectionItemComponent,
        FooterComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {
}
