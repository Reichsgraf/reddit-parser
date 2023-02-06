import {Pipe, PipeTransform} from "@angular/core";
import {IsCrossPostPipe} from "./is-cross-post.pipe";

@Pipe({
  name: 'isVideo'
})
export class IsVideoPipe implements PipeTransform {

  constructor(private isCrossPost: IsCrossPostPipe) {
  }

  transform(linkData: any): boolean {
    if (this.isCrossPost.transform(linkData)) {
      return linkData?.data?.crosspost_parent_list[0]?.is_video;
    }
    return linkData?.data?.is_video;
  }

}
