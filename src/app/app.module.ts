import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiPrefixInterceptor} from "./shared/app-common/interceptors/api-prefix.interceptor";
import {RouterModule, RouterOutlet} from "@angular/router";
import {routes} from "./app.routing";
import {AuthGuard} from "./shared/guards/auth.guard";
import {AuthService} from "./shared/app-common/services/auth.service";
import {TokenService} from "./shared/app-common/services/token.service";
import {TokenInterceptor} from "./shared/app-common/interceptors/token.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterOutlet,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuard,
    AuthService,
    TokenService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
