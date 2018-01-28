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
        { name: "home", text: "Home", routerUrl: "/home", iconCss: "home-icon", tooltip: "Home Page", tooltipPosition: "right" },
        { name: "search", text: "Search", routerUrl: "/search", iconCss: "search-job-icon", tooltip: "Search for a job or service", tooltipPosition: "right" },
        { name: "post", text: "Post", routerUrl: "/post", iconCss: "post-job-icon", tooltip: "Post a job or service", tooltipPosition: "right" }
    ];

    menuClick(menuName: string): void {
        this.selectedMenu = menuName;
    }
}
