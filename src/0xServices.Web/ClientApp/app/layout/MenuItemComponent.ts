import { Component, Input, Output, EventEmitter } from "@angular/core";

import { MenuModel } from "./models/MenuModel";

@Component({
    selector: "menu-item",
    templateUrl: "./MenuItemComponent.html",
    styleUrls: ["./MenuItemComponent.css"]
})
export class MenuItemComponent {
    @Input() item: MenuModel;
    @Input() selectedMenu: string;
    @Input() position: string;
    @Output() ntClick: EventEmitter<any> = new EventEmitter();

    menuClick(event: MouseEvent) {
        event.preventDefault();
        this.ntClick.emit(this.item.name);
    }
}