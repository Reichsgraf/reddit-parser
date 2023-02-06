import {Pipe, PipeTransform} from "@angular/core";
import {IsCrossPostPipe} from "./is-cross-post.pipe";

@Pipe({
  name: 'getVideoFallbackUrl'
})
export class GetVideoFallbackUrlPipe implements PipeTransform {

  constructor(private isCrossPost: IsCrossPostPipe) {
  }

  transform(linkData: any): string {
    if (linkData?.data?.is_video && linkData?.data?.media?.reddit_video?.fallback_url) {
      return linkData?.data?.media?.reddit_video?.fallback_url;
    }

    if (this.isCrossPost.transform(linkData) && linkData?.data?.crosspost_parent_list[0]?.is_video) {
      return linkData?.data?.crosspost_parent_list[0]?.media?.reddit_video?.fallback_url;
    }

    return '';
  }

}
