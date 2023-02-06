import {Pipe, PipeTransform} from "@angular/core";
import {IsCrossPostPipe} from "./is-cross-post.pipe";

@Pipe({
  name: 'getGalleryData'
})
export class GetGalleryDataPipe implements PipeTransform {

  constructor(private isCrossPost: IsCrossPostPipe) {
  }

  transform(linkData: any): any {
    if (this.isCrossPost.transform(linkData)) {
      return linkData?.data?.crosspost_parent_list[0]?.gallery_data;
    }

    return linkData?.data?.gallery_data;
  }

}
