import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { HTTP_INTERCEPTORS } from "@angular/common/http"

import { FabricCoreModule } from "./FabricCoreModule";

import { ButtonModule } from "./button/ButtonModule";
import { AccountModule } from "./account/AccountModule";

import { FabHttpInterceptor } from "./FabHttpInterceptor";
import { Message } from "./Message";

@NgModule({
    declarations: [
    ],
    imports: [
        FabricCoreModule,
        HttpClientModule,

        ButtonModule,
        AccountModule,
    ],
    exports: [
        FabricCoreModule,
        HttpClientModule,

        ButtonModule,
        AccountModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: FabHttpInterceptor,
            multi: true
        },
        { provide: "BASE_URL", useFactory: getBaseUrl },
        Message
    ]
})
export class FabricModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName("base")[0].href;
}
