import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'isCrossPost'
})
export class IsCrossPostPipe implements PipeTransform {

  transform(linkData: any): boolean {
    return linkData?.data?.hasOwnProperty('crosspost_parent_list');
  }

}
