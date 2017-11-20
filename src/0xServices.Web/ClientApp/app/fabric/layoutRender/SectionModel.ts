import { TemplateRef, ChangeDetectorRef } from "@angular/core";
import { SectionTargetModel } from "./SectionTargetModel";

export class SectionModel {
    name: string;
    hidden: boolean;
    changeDetectorRef: ChangeDetectorRef;
    template: TemplateRef<any>;
    currentTemplate: TemplateRef<any>;
    targets: SectionTargetModel[];
}
