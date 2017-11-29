import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountService } from "./AccountService";
import { Profile } from "./Profile";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule
    ],
    providers: [
        AccountService,
        Profile
    ],
    exports: [
    ]
})
export class AccountModule {
}
