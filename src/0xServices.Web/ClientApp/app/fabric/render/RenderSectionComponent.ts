import { Component, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit, AfterContentInit } from "@angular/core";
import { Input, ChangeDetectorRef } from "@angular/core";

import { RenderService } from "./RenderService";

@Component({
    selector: "render-section",
    templateUrl: "./RenderSectionComponent.html"
})
export class RenderSectionComponent implements AfterContentInit {
    @ViewChild("sectionRef") template: TemplateRef<any>;
    @Input() name: string;
    @Input() target: string;

    constructor(public service: RenderService, private cd: ChangeDetectorRef) {
    }

    ngAfterContentInit() {
        if (this.name !== undefined) {
            this.service.setComponentChangeDetector(this.cd);
        }

        this.service.currentTemplate = this.template
        this.service.detectChanges();
    }

    getTemplate(): TemplateRef<any> | undefined {
        if (this.name !== undefined) {
            return this.service.currentTemplate;
        }
        else {
            return undefined;
        }
    }
}
