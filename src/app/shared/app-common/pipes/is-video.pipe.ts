import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'isVideo'
})
export class IsVideoPipe implements PipeTransform {

  transform(linkData: any): boolean {
    if (linkData?.data?.hasOwnProperty('crosspost_parent_list')) {
      return linkData?.data?.crosspost_parent_list[0]?.is_video;
    }
    return linkData?.data?.is_video;
  }

}
