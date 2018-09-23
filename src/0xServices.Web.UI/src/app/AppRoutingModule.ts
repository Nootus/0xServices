import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/HomeComponent";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "post", loadChildren: "./job/JobModule#JobModule" },
    { path: "**", redirectTo: "home" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppRoutingModule {
}
