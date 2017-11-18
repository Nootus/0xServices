import { TemplateRef, ChangeDetectorRef } from "@angular/core";

export class SectionModel {
    name: string;
    changeDetectorRef: ChangeDetectorRef;
    currentTemplate: TemplateRef<any>;
    templates: TemplateRef<any>[];
}
