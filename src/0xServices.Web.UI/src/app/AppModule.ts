import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { FabricModule } from "./fabric/FabricModule";
import { AppRoutingModule } from "./AppRoutingModule";
import { HomeModule } from "./home/HomeModule";
import { LayoutModule } from "./layout/LayoutModule";
import { JobModule } from "./job/JobModule";

import { AppComponent } from "./AppComponent";
import { AppStyles } from "./AppStyles";

@NgModule({
    declarations: [
        AppComponent,
        AppStyles
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        FormsModule,

        FabricModule,
        HomeModule,
        LayoutModule,
        JobModule,
        AppRoutingModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
