﻿import { OnDestroy } from '@angular/core';
import { AbstractControl, Validator, ValidationErrors } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export class MatchOtherValidator implements Validator, OnDestroy {

    control: AbstractControl;
    otherControl: AbstractControl;
    private unsubscribe: Subject<void> = new Subject();

    constructor(private otherControlName: string, private message: string) {

    }

    validate = (control: AbstractControl): ValidationErrors | null => {
        if (!control.parent) {
            return null;
        }

        // Initializing the validator.
        if (!this.control) {
            this.control = control;
            this.otherControl = control.parent.get(this.otherControlName) as AbstractControl;
            if (!this.otherControl) {
                throw new Error('matchOtherValidator(): other control is not found in parent group');
            }

            this.otherControl.valueChanges
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(() => {
                    this.control.updateValueAndValidity();
                });
        }

        if (!this.otherControl) {
            return null;
        }

        if (this.isEmptyInputValue(this.control.value) && this.isEmptyInputValue(this.otherControl.value)) {
            return null;  // don't validate empty values to allow optional controls
        }

        if (this.otherControl.value !== this.control.value) {
            return {
                matchOther: { custom: true, control: this.control.value, otherControl: this.otherControl.value, message: this.message }
            };
        }

        return null;
    }
   
    private isEmptyInputValue(value: any): boolean {
        return value == null || value.length === 0;
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
