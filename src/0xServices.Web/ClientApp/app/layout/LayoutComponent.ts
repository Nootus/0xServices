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
        { name: "home", text: "Home", routerUrl: "/home", iconCss: "home-icon", iconCssSelected: "home-selected-icon", tooltip: "Home Page" },
        { name: "search", text: "Search", routerUrl: "/counter", iconCss: "search-job-icon", iconCssSelected: "search-job-selected-icon", tooltip: "Search for a job or service" },
        { name: "post", text: "Post", routerUrl: "/fetch-data", iconCss: "post-job-icon", iconCssSelected: "post-job-selected-icon", tooltip: "Post a job or service" }
    ];

    menuClick(menuName: string): void {
        this.selectedMenu = menuName;
    }

    isSelectedMenu(menuName: string): boolean {
        return menuName === this.selectedMenu;
    }
}
