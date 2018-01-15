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
    
    constructor() {
    }

    getErrorMessage(): string {
        let control: AbstractControl = this.formGroup.controls[this.controlName];

        return "error";

        ////checking for custom validators
        //if (control.errors !== null) {
        //    for (let key of Object.getOwnPropertyNames(control.errors)) {
        //        if (control.errors[key].custom === true) {
        //            return control.errors[key].message;
        //        }

        //    }
        //}

        //// builtin validations
        //return control.hasError("required") ? ValidationMessage.required :
        //    control.hasError("email") ? ValidationMessage.email :
        //        control.hasError("maxlength") ? ValidationMessage.maxlength(control.errors!.maxlength.requiredLength) :
        //        "";
    }
}
