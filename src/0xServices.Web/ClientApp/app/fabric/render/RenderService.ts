import { Injectable, TemplateRef } from "@angular/core";

import { ChangeDetectorRef } from "@angular/core";

@Injectable()
export class RenderService {
    public currentTemplate : TemplateRef<any>

    private cd: ChangeDetectorRef;

    constructor() {

    }

    public setComponentChangeDetector(cd: ChangeDetectorRef) : void {
        this.cd = cd;
    }

    public detectChanges(): void {
        this.cd.detectChanges();
    }
} 