import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getImageUrl'
})
export class GetImageUrlPipe implements PipeTransform {

  transform(linkData: any): string {
    return linkData?.data?.thumbnail !== 'nsfw'
      ? linkData?.data?.url
      : linkData?.data?.preview?.images[0]?.variants?.obfuscated?.source?.url?.replaceAll('&amp;', '&');
  }

}
