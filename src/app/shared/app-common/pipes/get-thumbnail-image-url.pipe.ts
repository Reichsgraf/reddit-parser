import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getThumbnailImageUrl'
})
export class GetThumbnailImageUrlPipe implements PipeTransform {

  transform(linkData: any): string {
    return linkData?.data?.thumbnail !== 'nsfw'
      ? linkData?.data?.thumbnail
      : linkData?.data?.preview?.images[0]?.variants?.obfuscated?.source?.url?.replaceAll('&amp;', '&');
  }

}
