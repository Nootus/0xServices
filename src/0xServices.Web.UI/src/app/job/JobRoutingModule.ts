import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { JobPostComponent } from "./JobPostComponent";

const routes: Routes = [
    { path: "", component: JobPostComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class JobRoutingModule {
}
