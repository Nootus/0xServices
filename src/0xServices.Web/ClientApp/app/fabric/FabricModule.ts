import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";

import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { LayoutRenderModule } from "./layoutRender/LayoutRenderModule";
import { ButtonModule } from "./button/ButtonModule";

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
        ButtonModule
    ],
    exports: [
        RouterModule,
        HttpClientModule,
        LayoutRenderModule,
        ButtonModule
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
