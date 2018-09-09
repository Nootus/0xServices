import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./AppComponent.html",
    styleUrls: ["./AppComponent.css"]
})
export class AppComponent {
    constructor(router: Router) {
        router.navigateByUrl("/post");
    }
}
