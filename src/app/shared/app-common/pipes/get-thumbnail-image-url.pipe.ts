import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getThumbnailImageUrl'
})
export class GetThumbnailImageUrlPipe implements PipeTransform {

  transform(linkData: any): string {
    if (!linkData?.data?.thumbnail?.includes('.thumbs.redditmedia.com')) {
      return linkData?.data?.thumbnail !== 'nsfw'
        ? linkData?.data?.preview?.images[0]?.source?.url?.replaceAll('&amp;', '&')
        : linkData?.data?.preview?.images[0]?.variants?.obfuscated?.source?.url?.replaceAll('&amp;', '&');
    }

    return linkData?.data?.thumbnail;
  }

}
