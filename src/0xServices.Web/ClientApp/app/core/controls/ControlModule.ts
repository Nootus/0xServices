import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatInputModule, MatButtonModule } from "@angular/material"

import { MessageModule } from "../messages/MessageModule";
import { NtInputComponent } from "./NtInputComponent";

@NgModule({
    declarations: [
        NtInputComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule, MatInputModule, MatButtonModule,
        MessageModule
    ],
    providers: [
    ],
    exports: [
        NtInputComponent
    ]
})
export class ControlModule {
}
