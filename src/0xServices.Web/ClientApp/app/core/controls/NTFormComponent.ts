import { Component, Input, Output, ViewChild, OnInit, EventEmitter } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
    selector: "nt-form",
    templateUrl: "./NTFormComponent.html"
})
export class NTFormComponent implements OnInit {
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
