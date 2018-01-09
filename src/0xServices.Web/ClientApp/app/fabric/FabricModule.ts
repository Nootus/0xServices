import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";
import { HTTP_INTERCEPTORS } from "@angular/common/http"

import { LayoutModule } from "./layout/LayoutModule";
import { ButtonModule } from "./button/ButtonModule";
import { AccountModule } from "./account/AccountModule";
import { NotificationModule } from "./notification/NotificationModule";

import { FabHttpInterceptor } from "./FabHttpInterceptor";
import { Message } from "./Message";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule,
        HttpClientModule,

        LayoutModule,
        ButtonModule,
        AccountModule,
        NotificationModule
    ],
    exports: [
        RouterModule,
        HttpClientModule,
        FlexLayoutModule,

        LayoutModule,
        ButtonModule,
        AccountModule,
        NotificationModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: FabHttpInterceptor,
            multi: true
        },
        Message
    ]
})
export class FabricModule {
}
