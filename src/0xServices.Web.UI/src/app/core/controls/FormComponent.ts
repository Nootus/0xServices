import { Component, Input, Output, ViewChild, OnInit, EventEmitter } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
    selector: "nt-form",
    templateUrl: "./FormComponent.html"
})
export class FormComponent implements OnInit {
    @Input() formGroup: FormGroup;
    @Input() cssClass: string;
    @Output() ntSubmit: EventEmitter<any> = new EventEmitter();

    @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

    ngOnInit(): void {
        (this.formGroup as any).RootFormGroupDirective = this.formGroupDirective;
    }

    submitForm($event: any) {
        this.ntSubmit.emit($event)
    }
}
