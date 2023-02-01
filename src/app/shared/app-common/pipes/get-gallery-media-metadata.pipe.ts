import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getGalleryMediaMetadata'
})
export class GetGalleryMediaMetadataPipe implements PipeTransform {

  transform(linkData: any): any {
    if (linkData?.data?.hasOwnProperty('crosspost_parent_list')) {
      return linkData?.data?.crosspost_parent_list[0]?.media_metadata;
    }

    return linkData?.data?.media_metadata;
  }

}
