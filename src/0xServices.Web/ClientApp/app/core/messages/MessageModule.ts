import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ValidationMessage } from "./ValidationMessage";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ValidationMessage
    ]
})
export class MessageModule {
}
