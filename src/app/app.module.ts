import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRedditThreadCardComponent } from './app-reddit-thread-card/app-reddit-thread-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {AppCommonModule} from "./shared/app-common/app-common.module";
import {NgxMasonryModule} from "ngx-masonry";

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
    NgxMasonryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
