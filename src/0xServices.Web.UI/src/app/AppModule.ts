import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { FabricModule } from "./fabric/FabricModule";
import { AppRouteModule } from "./AppRouteModule";
import { HomeModule } from "./home/HomeModule";
import { LayoutModule } from "./layout/LayoutModule";
import { JobModule } from "./job/JobModule";

import { AppComponent } from "./AppComponent";
import { AppStyles } from "./AppStyles";

import { FetchDataComponent } from "./components/fetchdata/fetchdata.component";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
    declarations: [
        AppComponent,
        AppStyles,
        CounterComponent,
        FetchDataComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,

        FabricModule,
        HomeModule,
        LayoutModule,
        JobModule,
        AppRouteModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
