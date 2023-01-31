import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'cleanUrl'
})
export class CleanUrlPipe implements PipeTransform {

  transform(url: string): string {
    return url?.replaceAll('&amp;', '&');
  }

}
