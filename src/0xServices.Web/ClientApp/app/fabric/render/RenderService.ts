import { Injectable, TemplateRef, ChangeDetectorRef, ViewRef } from "@angular/core";

import { SectionModel } from "./SectionModel";
import { SectionTargetModel } from "./SectionTargetModel";

@Injectable()
export class RenderService {
    public sections: { [name: string]: SectionModel } = {};

    public push(name: string, target: string, hidden:boolean, template: TemplateRef<any>, changeDetectorRef: ChangeDetectorRef): void {
        // checking for error conditions
        if ((name === undefined && target === undefined) || (name !== undefined && target !== undefined)) {
            throw new Error("Only name or target is required in Render section");
        }

        if (name !== undefined) {
            if (this.sections[name] == undefined) {
                this.sections[name] = <SectionModel>{ name: name, hidden: hidden, changeDetectorRef: changeDetectorRef, targets: [<SectionTargetModel>{ target: name, hidden: hidden, template: template } ], template: template, currentTemplate: template };
            }
            else {
                this.pushTemplate(name, hidden, template);
            }
        }
        else if(target !== undefined) {
            this.pushTemplate(target, hidden, template);
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

    private pushTemplate(name: string, hidden: boolean, template: TemplateRef<any>): void {
        let section: SectionModel = this.sections[name];
        if (section === undefined) {
            throw new Error("Render section with name '" + name + "' not founnd");
        }
        section.targets.push(<SectionTargetModel>{ target: name, hidden: hidden, template: template });
        this.sectionUpdate(section);
    }

    private popTemplate(name: string): void {
        let section: SectionModel = this.sections[name];
        if (section === undefined) {
            throw new Error("Render section with name '" + name + "' not founnd");
        }
        section.targets.pop();
        this.sectionUpdate(section);

    }

    private sectionUpdate(section: SectionModel) {

        let targetSection = section.targets[section.targets.length - 1];
        section.currentTemplate = targetSection.template;
        section.currentTemplate.elementRef.nativeElement.parentElement.style.display = "none";
        if (targetSection.hidden) {
            // alert(section.name + " -- " + targetSection.target);
            section.template.elementRef.nativeElement.parentElement.style.display = "none";
        }
        if (!targetSection.hidden) {
            section.currentTemplate.elementRef.nativeElement.parentElement.style.display = "block";
        }

        // the below checking is needed for hot module replacement
        if (!(section.changeDetectorRef as ViewRef).destroyed) {
            section.changeDetectorRef.detectChanges();
        }
    }

} 