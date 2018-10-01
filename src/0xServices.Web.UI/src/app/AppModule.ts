import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

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
