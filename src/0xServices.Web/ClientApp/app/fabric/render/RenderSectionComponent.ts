import { Component, ViewChild, TemplateRef, ViewContainerRef, AfterContentInit, OnDestroy } from "@angular/core";
import { Input, ChangeDetectorRef } from "@angular/core";

import { RenderService } from "./RenderService";

@Component({
    selector: "render-section",
    templateUrl: "./RenderSectionComponent.html"
})
export class RenderSectionComponent implements AfterContentInit, OnDestroy  {
    @ViewChild("sectionRef") template: TemplateRef<any>;
    @Input() name: string;
    @Input() target: string;
    @Input() hidden: boolean;

    constructor(public service: RenderService, private changeDetectorRef: ChangeDetectorRef) {
    }

    ngAfterContentInit() {
        this.service.push(this.name, this.target, this.hidden, this.template, this.changeDetectorRef);
        // this.template.elementRef.nativeElement.parentElement.style.display = "none";

    }

    ngOnDestroy() {
        this.service.pop(this.name, this.target);
    }

    getTemplate(): TemplateRef<any> | undefined {
        if (this.name !== undefined) {
            return this.service.getTemplate(this.name);
        }
        else {
            return undefined;
        }
    }
}
