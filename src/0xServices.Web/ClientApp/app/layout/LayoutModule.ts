import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
    MatButtonModule, MatDialogModule,
    MatCardModule, MatListModule,
    MatIconModule, MatTooltipModule
} from "@angular/material";

import { FabricModule } from "../fabric/FabricModule";
import { UserModule } from "../user/UserModule";

import { MenuItemComponent } from "./MenuItemComponent";
import { TopBarComponent } from "./TopBarComponent";
import { LayoutComponent } from "./LayoutComponent";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatTooltipModule,
        FabricModule,
        UserModule
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
