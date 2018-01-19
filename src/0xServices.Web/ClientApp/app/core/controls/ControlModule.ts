import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatInputModule, MatButtonModule } from "@angular/material"

import { NTInputComponent } from "./NTInputComponent";
import { NTFormComponent } from "./NTFormComponent";

@NgModule({
    declarations: [
        NTInputComponent,
        NTFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule, MatInputModule, MatButtonModule
    ],
    providers: [
    ],
    exports: [
        NTInputComponent,
        NTFormComponent
    ]
})
export class ControlModule {
}
