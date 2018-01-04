import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MessageModule } from "./messages/MessageModule";

@NgModule({
    imports: [
        CommonModule,
        MessageModule
    ],
    declarations: [
    ],
    providers: [
    ],
    exports: [
        MessageModule
    ]
})
export class CoreModule {
}
