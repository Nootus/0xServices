import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatInputModule, MatButtonModule } from "@angular/material"

import { InputComponent } from "./InputComponent";
import { FormComponent } from "./FormComponent";
import { ErrorComponent } from "./ErrorComponent";

@NgModule({
    declarations: [
        InputComponent,
        FormComponent,
        ErrorComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule, MatInputModule, MatButtonModule
    ],
    providers: [
    ],
    exports: [
        InputComponent,
        FormComponent,
        ErrorComponent
    ]
})
export class ControlModule {
}
