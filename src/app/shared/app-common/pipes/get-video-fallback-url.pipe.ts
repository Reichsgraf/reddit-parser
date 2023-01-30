import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getVideoFallbackUrl'
})
export class GetVideoFallbackUrlPipe implements PipeTransform {

  transform(linkData: any): string {
    if (linkData?.data?.is_video && linkData?.data?.media?.reddit_video?.fallback_url) {
      return linkData?.data?.media?.reddit_video?.fallback_url;
    }

    if (linkData?.data?.hasOwnProperty('crosspost_parent_list')
      && linkData?.data?.crosspost_parent_list[0]?.is_video) {
      return linkData?.data?.crosspost_parent_list[0]?.media?.reddit_video?.fallback_url;
    }

    return '';
  }

}
