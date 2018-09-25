import { Component, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ViewChildren, QueryList, OnDestroy } from "@angular/core";
import { FormGroup, NgForm, FormGroupDirective } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

import { Observable, Subject, empty } from "rxjs";
import { catchError, takeUntil } from "rxjs/operators";

import { NTException } from "../fabric/exception/NtException";
import { NTError } from "../fabric/exception/NtError";
import { NTErrorStateMatcher } from "../fabric/exception/NTErrorStateMatcher";

@Component({
    selector: "user-dialog",
    templateUrl: "./UserDialogComponent.html",
    styleUrls: ["./UserDialogComponent.css"],
    encapsulation: ViewEncapsulation.None
})
export class UserDialogComponent<TDialogComponent> implements OnDestroy {
    @Input() userForm: FormGroup;
    @Output() ntSubmit: EventEmitter<any> = new EventEmitter();
    showError: boolean = false;
    errorMessage: string;
    errors: NTError[];

    @ViewChild(FormGroupDirective) frm: FormGroupDirective;
    @ViewChildren(FormGroupDirective) frmGrp: QueryList<FormGroupDirective>
    matcher: NTErrorStateMatcher = new NTErrorStateMatcher();
    private unsubscribe: Subject<void> = new Subject();

    constructor(private dialogRef: MatDialogRef<TDialogComponent>) {
    }

    close() {
        this.dialogRef.close();
    }

    submitForm() {
        this.showError = false;
        if (this.userForm.valid) {
            this.ntSubmit.emit(this.userForm.value);
        }
    }

    submit(submitted :Observable<any>) {
        submitted
            .pipe(
            catchError((exp: NTException) => {
                this.errorMessage = exp.message;
                this.errors = exp.errors;
                this.showError = true;
                return empty();
            }),
            takeUntil(this.unsubscribe)
            )
            .subscribe(() => {
                this.close();
            });
    }

    getErrorMessage(): string {
        return "Error";
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
