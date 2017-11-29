﻿import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";

import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { LayoutRenderModule } from "./layoutRender/LayoutRenderModule";
import { ButtonModule } from "./button/ButtonModule";
import { AccountModule } from "./account/AccountModule";
import { NotificationModule } from "./notification/NotificationModule";

import { FabHttpInterceptor } from "./FabHttpInterceptor";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule,
        HttpClientModule,

        LayoutRenderModule,
        ButtonModule,
        AccountModule,
        NotificationModule
    ],
    exports: [
        RouterModule,
        HttpClientModule,

        LayoutRenderModule,
        ButtonModule,
        AccountModule,
        NotificationModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: FabHttpInterceptor,
            multi: true
        }
    ]
})
export class FabricModule {
}