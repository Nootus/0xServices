import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
    MatButtonModule, MatCardModule
} from "@angular/material";

import { FabricModule } from "../fabric/FabricModule";
import { JobPostComponent } from "./JobPostComponent";

@NgModule({
    imports: [
        CommonModule,
        FabricModule,
        FlexLayoutModule,
        MatButtonModule, MatCardModule
    ],
    declarations: [
        JobPostComponent
    ]
})
export class JobModule {
}
