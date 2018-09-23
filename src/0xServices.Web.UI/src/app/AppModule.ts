import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { FabricModule } from "./fabric/FabricModule";
import { AppRoutingModule } from "./AppRoutingModule";
import { HomeModule } from "./home/HomeModule";
import { LayoutModule } from "./layout/LayoutModule";

import { AppComponent } from "./AppComponent";
import { AppStyles } from "./AppStyles";

@NgModule({
    declarations: [
        AppComponent,
        AppStyles
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        FormsModule,
        FabricModule,
        HomeModule,
        LayoutModule,
        AppRoutingModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
