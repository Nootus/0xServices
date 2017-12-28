import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "button-icon",
    templateUrl: "./ButtonIconComponent.html",
    styleUrls: ["./ButtonIconComponent.css"]
})
export class ButtonIconComponent {
    @Input() tooltip: string;
    @Input() tabIndex: number = -1;
    @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    onClick(event: MouseEvent): void {
        this.click.emit(event);
    }
}
