import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CleanCategoryPipe} from "./pipes/clean-category.pipe";
import {GetThumbnailImagePipe} from "./pipes/get-thumbnail-image.pipe";
import {IsNsfwPipe} from "./pipes/is-nsfw.pipe";
import {RedditApiService} from "./services/reddit-api.service";
import {IsRedditDomainPipe} from "./pipes/is-reddit-domain.pipe";

const pipes = [
  CleanCategoryPipe,
  GetThumbnailImagePipe,
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
