import { Component } from "@angular/core";

import { MenuModel } from "./models/MenuModel";

@Component({
    selector: "menu-item",
    templateUrl: "./MenuItemComponent.html",
    styleUrls: ["./MenuItemComponent.css"]
})
export class MenuItemComponent {
    item: MenuModel

    isSelectedMenu(menuName: string): boolean {
        return false;
    }
}