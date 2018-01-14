import { Component, Input } from "@angular/core";
import { FormGroup, AbstractControl, Validators } from "@angular/forms";

import { ValidationMessage } from "../messages/ValidationMessage";

@Component({
    selector: "nt-input",
    templateUrl: "./NtInputComponent.html",
    styleUrls: ["./NtInputComponent.css"]
})
export class NtInputComponent {
    @Input() formGroup: FormGroup;
    @Input() controlName: string;
    @Input() type: string = "text";
    @Input() placeholder: string;
    @Input() hintLabel: string;
    
    constructor(private messages: ValidationMessage) {
    }

    getErrorMessage(): string {
        let control: AbstractControl = this.formGroup.controls[this.controlName];
        return control.hasError("required") ? this.messages.required :
            control.hasError("email") ? this.messages.email :
                "";
    }
}
