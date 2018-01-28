import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/HomeComponent";
import { FetchDataComponent } from "./components/fetchdata/fetchdata.component";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", component: HomeComponent },
            { path: "search", component: CounterComponent },
            { path: "post", component: FetchDataComponent },
            { path: "**", redirectTo: "home" }
        ])
    ]
})
export class AppRouteModule {
}
