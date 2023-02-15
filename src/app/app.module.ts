import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRedditThreadCardComponent } from './app-reddit-thread-card/app-reddit-thread-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {AppCommonModule} from "./shared/app-common/app-common.module";
import {NgxMasonryModule} from "ngx-masonry";
import {VgCoreModule} from "@videogular/ngx-videogular/core";
import {VgControlsModule} from "@videogular/ngx-videogular/controls";
import {VgOverlayPlayModule} from "@videogular/ngx-videogular/overlay-play";
import {VgBufferingModule} from "@videogular/ngx-videogular/buffering";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiPrefixInterceptor} from "./shared/app-common/interceptors/api-prefix.interceptor";
import {MatButtonModule} from "@angular/material/button";
import {AppNsfwContentComponent} from './app-nsfw-content/app-nsfw-content.component';
import {PinchZoomModule} from "ngx-pinch-zoom";
import {MatCarouselModule} from "ng-mat-carousel";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { AppSearchFormComponent } from './app-search-form/app-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRedditThreadCardComponent,
    AppNsfwContentComponent,
    AppSearchFormComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        MatCarouselModule,
        NgOptimizedImage,
        AppCommonModule.forRoot(),
        NgxMasonryModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        PinchZoomModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
