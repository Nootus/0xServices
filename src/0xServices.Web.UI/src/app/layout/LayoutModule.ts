import { NgModule } from "@angular/core";
import {
    MatCardModule, MatListModule, MatTooltipModule
} from "@angular/material";

//import { FabricCoreModule } from "../fabric/FabricCoreModule";
import { FabricModule } from "../fabric/FabricModule";
import { UserModule } from "../user/UserModule";

import { MenuItemComponent } from "./MenuItemComponent";
import { TopBarComponent } from "./TopBarComponent";
import { LayoutComponent } from "./LayoutComponent";

@NgModule({
    imports: [
        MatCardModule, MatListModule, MatTooltipModule,
        FabricModule, UserModule
        // FabricCoreModule
    ],
    declarations: [
        MenuItemComponent,
        LayoutComponent,
        TopBarComponent
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule {
}
