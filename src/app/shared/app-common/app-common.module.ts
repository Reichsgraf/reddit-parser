import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CleanTagsPipe} from "./pipes/clean-tags.pipe";
import {GetThumbnailImageUrlPipe} from "./pipes/get-thumbnail-image-url.pipe";
import {IsNsfwPipe} from "./pipes/is-nsfw.pipe";
import {RedditApiService} from "./services/reddit-api.service";
import {IsRedditDomainPipe} from "./pipes/is-reddit-domain.pipe";
import {GetVideoFallbackUrlPipe} from "./pipes/get-video-fallback-url.pipe";
import {GetImageUrlPipe} from "./pipes/get-image-url.pipe";
import {IsRedditGalleryPipe} from "./pipes/is-reddit-gallery.pipe";
import {GetGalleryDataPipe} from "./pipes/get-gallery-data.pipe";
import {GetGalleryMediaMetadataPipe} from "./pipes/get-gallery-media-metadata.pipe";
import {IsVideoPipe} from "./pipes/is-video.pipe";
import {IsCrossPostPipe} from "./pipes/is-cross-post.pipe";
import {GetFormControlPipe} from "./pipes/get-form-control.pipe";
import {MatInputModule} from "@angular/material/input";
import {GetFormErrorPipe} from "./pipes/get-form-error.pipe";
import {CommonInputFieldComponent} from "./components/common-input-field/common-input-field.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {ResponsiveModule} from "../responsive/responsive.module";

const components = [
  CommonInputFieldComponent
]

const pipes = [
  CleanTagsPipe,
  GetFormControlPipe,
  GetGalleryDataPipe,
  GetGalleryMediaMetadataPipe,
  GetImageUrlPipe,
  GetThumbnailImageUrlPipe,
  GetVideoFallbackUrlPipe,
  IsCrossPostPipe,
  IsNsfwPipe,
  IsRedditDomainPipe,
  IsRedditGalleryPipe,
  IsVideoPipe,
  GetFormErrorPipe,
]

const services = [
  RedditApiService
]

@NgModule({
  declarations: [
    components,
    pipes,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    components,
    pipes,
    ResponsiveModule,
  ]
})
export class AppCommonModule {
  static forRoot(): ModuleWithProviders<AppCommonModule> {
    return {
      ngModule: AppCommonModule,
      providers: [services, pipes]
    }
  }
}
