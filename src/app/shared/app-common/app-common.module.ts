import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CleanCategoryPipe} from "./pipes/clean-category.pipe";
import {GetThumbnailImageUrlPipe} from "./pipes/get-thumbnail-image-url.pipe";
import {IsNsfwPipe} from "./pipes/is-nsfw.pipe";
import {RedditApiService} from "./services/reddit-api.service";
import {IsRedditDomainPipe} from "./pipes/is-reddit-domain.pipe";
import {GetVideoFallbackUrlPipe} from "./pipes/get-video-fallback-url.pipe";
import {GetImageUrlPipe} from "./pipes/get-image-url.pipe";

const pipes = [
  CleanCategoryPipe,
  GetImageUrlPipe,
  GetThumbnailImageUrlPipe,
  GetVideoFallbackUrlPipe,
  IsNsfwPipe,
  IsRedditDomainPipe
]

const services = [
  RedditApiService
]

@NgModule({
  declarations: [
    pipes
  ],
  imports: [
    CommonModule
  ],
  exports: [
    pipes
  ],
  providers: [
    services
  ]
})
export class AppCommonModule { }
