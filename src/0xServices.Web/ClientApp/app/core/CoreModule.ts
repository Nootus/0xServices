import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MessageModule } from "./messages/MessageModule";
import { ControlModule } from "./controls/ControlModule";

@NgModule({
    imports: [
        CommonModule,
        MessageModule,
        ControlModule
    ],
    declarations: [
    ],
    providers: [
    ],
    exports: [
        MessageModule,
        ControlModule
    ]
})
export class CoreModule {
}
