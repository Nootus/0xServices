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
    @Output() ntClick: EventEmitter<any> = new EventEmitter();

    isSelectedMenu(menuName: string): boolean {
        return menuName === this.selectedMenu;
    }

    menuClick(menuName: string, event: MouseEvent) {
        event.preventDefault();
        this.ntClick.emit(menuName);
    }
}