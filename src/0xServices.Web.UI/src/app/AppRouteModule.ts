﻿import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/HomeComponent";
import { JobPostComponent } from "./job/JobPostComponent";
import { CounterComponent } from "./components/counter/counter.component";

const appRoutes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "search", component: CounterComponent },
    { path: "post", component: JobPostComponent },
    { path: "**", redirectTo: "home" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppRouteModule {
}
