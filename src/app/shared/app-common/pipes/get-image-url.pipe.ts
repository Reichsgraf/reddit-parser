import {Pipe, PipeTransform} from "@angular/core";
import {IsRedditGalleryPipe} from "./is-reddit-gallery.pipe";
import {IsNsfwPipe} from "./is-nsfw.pipe";

@Pipe({
  name: 'getImageUrl'
})
export class GetImageUrlPipe implements PipeTransform {

  constructor(private isRedditGalleryPipe: IsRedditGalleryPipe,
              private isNSFWPipe: IsNsfwPipe) {
  }

  transform(linkData: any): string {
    const isNSFW = this.isNSFWPipe.transform(linkData?.data?.thumbnail);

    if (!isNSFW) {
      return linkData?.data?.url;
    }

    if (isNSFW) {
      return this.isRedditGalleryPipe.transform(linkData?.data?.url)
        ? linkData?.data?.media_metadata[linkData?.data?.gallery_data?.items[0]?.media_id]?.s?.u
        : linkData?.data?.preview?.images[0]?.variants?.obfuscated?.source?.url;
    }

    return '';
  }

}
