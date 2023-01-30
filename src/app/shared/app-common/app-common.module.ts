import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CleanCategoryPipe} from "./pipes/clean-category.pipe";
import {GetThumbnailImagePipe} from "./pipes/get-thumbnail-image.pipe";
import {IsNsfwPipe} from "./pipes/is-nsfw.pipe";
import {RedditApiService} from "./services/reddit-api.service";
import {IsRedditDomainPipe} from "./pipes/is-reddit-domain.pipe";
import {GetVideoFallbackUrlPipe} from "./pipes/get-video-fallback-url.pipe";

const pipes = [
  CleanCategoryPipe,
  GetThumbnailImagePipe,
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
