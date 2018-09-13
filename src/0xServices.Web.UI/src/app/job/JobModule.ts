import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
    MatButtonModule, MatCardModule
} from "@angular/material";

import { FabricModule } from "../fabric/FabricModule";
import { ControlModule } from "../core/controls/ControlModule";

import { JobService } from "./JobService";
import { JobPostComponent } from "./JobPostComponent";

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule, MatCardModule,
        FabricModule,
        ControlModule
    ],
    providers: [
        JobService
    ],
    declarations: [
        JobPostComponent
    ]
})
export class JobModule {
}
