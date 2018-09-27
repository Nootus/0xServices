import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountService } from "./AccountService";
import { AuthService } from "./AuthService";
import { AuthGuard } from "./AuthGuard";
import { Profile } from "./Profile";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule
    ],
    providers: [
        AuthGuard,
        AuthService,
        AccountService,
        Profile
    ],
    exports: [
    ]
})
export class AccountModule {
}
