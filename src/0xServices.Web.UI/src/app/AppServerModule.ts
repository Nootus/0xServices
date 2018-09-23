import { NgModule } from "@angular/core";
import { ServerModule } from "@angular/platform-server";
import { Routes, RouterModule } from "@angular/router";
import { FlexLayoutServerModule } from "@angular/flex-layout/server";

import { AppModule } from "./AppModule";
import { AppComponent } from "./AppComponent";
import { AppShellComponent } from "./app-shell/AppShellComponent";

const routes: Routes = [ { path: "shell", component: AppShellComponent }];

@NgModule({
  imports: [
    FlexLayoutServerModule,    
    AppModule,
    ServerModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
  declarations: [AppShellComponent],
})
export class AppServerModule {}
