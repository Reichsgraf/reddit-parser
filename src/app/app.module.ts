import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {apiPrefixInterceptorProvider} from "./shared/app-common/interceptors/api-prefix.interceptor";
import {RouterModule, RouterOutlet} from "@angular/router";
import {routes} from "./app.routing";
import {AuthGuard} from "./shared/guards/auth.guard";
import {AuthService} from "./shared/app-common/services/auth.service";
import {TokenService} from "./shared/app-common/services/token.service";
import {tokenInterceptorProvider} from "./shared/app-common/interceptors/token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterOutlet,
  ],
  providers: [
    apiPrefixInterceptorProvider,
    tokenInterceptorProvider,
    AuthGuard,
    AuthService,
    TokenService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
