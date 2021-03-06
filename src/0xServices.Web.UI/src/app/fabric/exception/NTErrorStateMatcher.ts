﻿import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class NTErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm): boolean {
        let isSubmitted: boolean | null = form && form.submitted;

        let rootFormGroupDirective: FormGroupDirective | undefined = undefined;

        if (form.form !== undefined && form.form.root !== undefined) {
            rootFormGroupDirective = (form.form.root as any).RootFormGroupDirective;
        }
            

        if (rootFormGroupDirective !== undefined) {
            isSubmitted = rootFormGroupDirective.submitted;
        }

        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
