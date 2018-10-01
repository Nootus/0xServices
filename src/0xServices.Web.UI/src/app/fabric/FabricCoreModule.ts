import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";

import { LayoutModule } from "./layout/LayoutModule";
import { AccountModule } from "./account/AccountModule";
import { NotificationModule } from "./notification/NotificationModule";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule,

        LayoutModule,
        AccountModule,
        NotificationModule
    ],
    exports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,

        LayoutModule,
        NotificationModule
    ],
})
export class FabricCoreModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName("base")[0].href;
}
