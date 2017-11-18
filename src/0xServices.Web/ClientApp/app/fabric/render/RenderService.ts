import { Injectable, TemplateRef, ChangeDetectorRef, ViewRef } from "@angular/core";

import { SectionModel } from "./SectionModel";

@Injectable()
export class RenderService {
    public sections: { [name: string]: SectionModel } = {};

    public push(name: string, target: string, template: TemplateRef<any>, changeDetectorRef: ChangeDetectorRef): void {
        // checking for error conditions
        if ((name === undefined && target === undefined) || (name !== undefined && target !== undefined)) {
            throw new Error("Only name or target is required");
        }

        if (name !== undefined) {
            if (this.sections[name] == undefined) {
                this.sections[name] = <SectionModel> { name: name, changeDetectorRef: changeDetectorRef, templates: [template], currentTemplate: template };
            }
            else {
                this.pushTemplate(name, template);
            }
        }
        else if(target !== undefined) {
            this.pushTemplate(target, template);
        }
    }

    public pop(name: string, target: string): void {
        if (name === undefined && target !== undefined) {
            this.popTemplate(target);
        }
    }

    public getTemplate(name: string): TemplateRef<any> {
        return this.sections[name].currentTemplate;
    }

    private pushTemplate(name: string, template: TemplateRef<any>): void {
        let section: SectionModel = this.sections[name];
        section.templates.push(template);
        section.currentTemplate = template;
        section.changeDetectorRef.detectChanges();
    }

    private popTemplate(name: string): void {
        let section: SectionModel = this.sections[name];
        section.templates.pop();
        section.currentTemplate = section.templates[section.templates.length - 1];

        // the below checking is needed for hot module replacement
        if (!(section.changeDetectorRef as ViewRef).destroyed) {
            section.changeDetectorRef.detectChanges();
        }
    }

} 