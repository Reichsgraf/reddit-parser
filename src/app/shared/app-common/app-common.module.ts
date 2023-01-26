import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CleanCategoryPipe} from "./pipes/clean-category.pipe";
import {GetThumbnailImagePipe} from "./pipes/get-thumbnail-image.pipe";

const pipes = [
  CleanCategoryPipe,
  GetThumbnailImagePipe
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
  ]
})
export class AppCommonModule { }
