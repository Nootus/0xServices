import { Component, Input } from "@angular/core";

@Component({
    selector: "section-item",
    templateUrl: "./SectionItemComponent.html",
    styleUrls: ["./SectionItemComponent.css"]
})
export class SectionItemComponent {
    @Input() cssClass: string;
    @Input() iconCss: string;
    @Input() title: string;
}
