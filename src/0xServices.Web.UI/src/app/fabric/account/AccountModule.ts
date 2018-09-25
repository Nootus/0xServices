import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountService } from "./AccountService";
import { Profile } from "./Profile";
import { AuthGuard } from "./AuthGuard";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule
    ],
    providers: [
        AuthGuard,
        AccountService,
        Profile
    ],
    exports: [
    ]
})
export class AccountModule {
}
