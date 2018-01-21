import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
    MatButtonModule, MatDialogModule,
    MatCardModule, MatListModule,
    MatIconModule
} from "@angular/material";

import { FabricModule } from "../fabric/FabricModule";
import { UserModule } from "../user/UserModule";

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
        FabricModule,
        UserModule
    ],
    declarations: [
        LayoutComponent,
        TopBarComponent
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule {
}
