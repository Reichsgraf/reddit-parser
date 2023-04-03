import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getFormError'
})
export class GetFormErrorPipe implements PipeTransform {

  transform(errors: any[]): string {
    return errors.reduce((accumulator, currentValue) => `${accumulator} ${currentValue.key}`, 'Error:');
  }
}
