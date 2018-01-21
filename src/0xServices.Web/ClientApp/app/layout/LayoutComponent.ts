import { Component } from "@angular/core";

import { MenuModel } from "./models/MenuModel";

@Component({
    selector: "layout",
    templateUrl: "./LayoutComponent.html",
    styleUrls: ["./LayoutComponent.css"]
})
export class LayoutComponent {
    selectedMenu: string = "home";
    menu: MenuModel[] = [
        { name: "home", text: "Home", routerUrl: "/home", iconCss: "home" },
        { name: "search", text: "Search", routerUrl: "/counter", iconCss: "search" },
        { name: "data", text: "Data", routerUrl: "/fetch-data", iconCss: "home" }
    ];

    menuClick(menuName: string): void {
        this.selectedMenu = menuName;
    }

    isSelectedMenu(menuName: string): boolean {
        return menuName === this.selectedMenu;
    }
}
