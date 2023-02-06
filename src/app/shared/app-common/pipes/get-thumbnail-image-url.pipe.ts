import {Pipe, PipeTransform} from "@angular/core";
import {IsNsfwPipe} from "./is-nsfw.pipe";

@Pipe({
  name: 'getThumbnailImageUrl'
})
export class GetThumbnailImageUrlPipe implements PipeTransform {

  constructor(private isNSFWPipe: IsNsfwPipe) {
  }

  transform(linkData: any): string {
    if (!linkData?.data?.thumbnail?.includes('.thumbs.redditmedia.com')) {
      return !this.isNSFWPipe.transform(linkData?.data?.thumbnail)
        ? linkData?.data?.preview?.images[0]?.source?.url
        : linkData?.data?.preview?.images[0]?.variants?.obfuscated?.source?.url;
    }

    return linkData?.data?.thumbnail;
  }

}
