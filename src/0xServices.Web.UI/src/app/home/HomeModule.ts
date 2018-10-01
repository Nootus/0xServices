import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material";

import { FabricCoreModule } from "../fabric/FabricCoreModule";
import { HomeComponent } from "./HomeComponent";
import { FeatureSectionComponent } from "./FeatureSectionComponent";
import { HowItWorksComponent } from "./HowItWorksComponent";
import { SectionItemComponent } from "./SectionItemComponent";
import { FooterComponent } from "./FooterComponent";


@NgModule({
    imports: [
        FabricCoreModule,
        MatCardModule
    ],
    declarations: [
        HomeComponent,
        FeatureSectionComponent,
        HowItWorksComponent,
        SectionItemComponent,
        FooterComponent
    ]
})
export class HomeModule {
}
