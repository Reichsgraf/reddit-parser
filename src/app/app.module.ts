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

@NgModule({
  declarations: [
    AppComponent,
    AppRedditThreadCardComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        NgOptimizedImage,
        AppCommonModule,
        NgxMasonryModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
