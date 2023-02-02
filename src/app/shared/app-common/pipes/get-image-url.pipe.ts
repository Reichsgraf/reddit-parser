import {Pipe, PipeTransform} from "@angular/core";
import {IsRedditGalleryPipe} from "./is-reddit-gallery.pipe";

@Pipe({
  name: 'getImageUrl'
})
export class GetImageUrlPipe implements PipeTransform {

  constructor(private isRedditGalleryPipe: IsRedditGalleryPipe) {
  }

  transform(linkData: any): string {
    if (linkData?.data?.thumbnail !== 'nsfw') {
      return linkData?.data?.url;
    }

    if (linkData?.data?.thumbnail === 'nsfw') {
      return this.isRedditGalleryPipe.transform(linkData?.data?.url)
        ? linkData?.data?.media_metadata[linkData?.data?.gallery_data?.items[0]?.media_id]?.s?.u
        : linkData?.data?.preview?.images[0]?.variants?.obfuscated?.source?.url;
    }

    return '';
  }

}
