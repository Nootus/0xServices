import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ControlModule } from "./controls/ControlModule";

@NgModule({
    imports: [
        CommonModule,
        ControlModule
    ],
    declarations: [
    ],
    providers: [
    ],
    exports: [
        ControlModule
    ]
})
export class CoreModule {
}
