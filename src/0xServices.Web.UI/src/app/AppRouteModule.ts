import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/HomeComponent";
import { JobPostComponent } from "./job/JobPostComponent";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", component: HomeComponent },
            { path: "search", component: CounterComponent },
            { path: "post", component: JobPostComponent },
            { path: "**", redirectTo: "home" }
        ])
    ]
})
export class AppRouteModule {
}
