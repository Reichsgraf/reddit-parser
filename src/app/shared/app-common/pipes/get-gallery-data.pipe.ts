import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getGalleryData'
})
export class GetGalleryDataPipe implements PipeTransform {

  transform(linkData: any): any {
    if (linkData?.data?.hasOwnProperty('crosspost_parent_list')) {
      return linkData?.data?.crosspost_parent_list[0]?.gallery_data;
    }

    return linkData?.data?.gallery_data;
  }

}
