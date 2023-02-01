import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CleanCategoryPipe} from "./pipes/clean-category.pipe";
import {GetThumbnailImageUrlPipe} from "./pipes/get-thumbnail-image-url.pipe";
import {IsNsfwPipe} from "./pipes/is-nsfw.pipe";
import {RedditApiService} from "./services/reddit-api.service";
import {IsRedditDomainPipe} from "./pipes/is-reddit-domain.pipe";
import {GetVideoFallbackUrlPipe} from "./pipes/get-video-fallback-url.pipe";
import {GetImageUrlPipe} from "./pipes/get-image-url.pipe";
import {IsRedditGalleryPipe} from "./pipes/is-reddit-gallery.pipe";
import {CleanUrlPipe} from "./pipes/clean-url.pipe";
import {GetGalleryDataPipe} from "./pipes/get-gallery-data.pipe";
import {GetGalleryMediaMetadataPipe} from "./pipes/get-gallery-media-metadata.pipe";

const pipes = [
  CleanCategoryPipe,
  CleanUrlPipe,
  GetGalleryDataPipe,
  GetGalleryMediaMetadataPipe,
  GetImageUrlPipe,
  GetThumbnailImageUrlPipe,
  GetVideoFallbackUrlPipe,
  IsNsfwPipe,
  IsRedditDomainPipe,
  IsRedditGalleryPipe,
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
