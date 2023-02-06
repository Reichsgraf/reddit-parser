import {Pipe, PipeTransform} from "@angular/core";
import {IsCrossPostPipe} from "./is-cross-post.pipe";

@Pipe({
  name: 'getGalleryMediaMetadata'
})
export class GetGalleryMediaMetadataPipe implements PipeTransform {

  constructor(private isCrossPost: IsCrossPostPipe) {
  }

  transform(linkData: any): any {
    if (this.isCrossPost.transform(linkData)) {
      return linkData?.data?.crosspost_parent_list[0]?.media_metadata;
    }

    return linkData?.data?.media_metadata;
  }

}
