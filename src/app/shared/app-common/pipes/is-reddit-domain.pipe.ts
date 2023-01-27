import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'isRedditDomain'
})
export class IsRedditDomainPipe implements PipeTransform {

  transform(domain: string): boolean {
    return domain.includes('.redd.it');
  }

}
