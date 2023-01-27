import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'isNSFW'
})
export class IsNsfwPipe implements PipeTransform {

  transform(thumbnail: string): boolean {
    return thumbnail === 'nsfw';
  }

}
