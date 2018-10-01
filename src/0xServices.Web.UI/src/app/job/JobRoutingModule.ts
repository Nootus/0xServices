import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { JobPostComponent } from "./JobPostComponent";
import { JobPostResolver } from "./JobPostResolver";

const routes: Routes = [
    { path: "", component: JobPostComponent, 
        resolve: {
            domainData: JobPostResolver
        }
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class JobRoutingModule {
}
