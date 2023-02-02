import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'cleanCategory'
})
export class CleanCategoryPipe implements PipeTransform {

  transform(value: string): string {
    return value
      ?.split(' ')
      ?.map((word: string) => word?.length > 1 ? `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}` : word)
      ?.join(' ');
  }

}
