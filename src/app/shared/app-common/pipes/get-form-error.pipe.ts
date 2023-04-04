import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getFormError'
})
export class GetFormErrorPipe implements PipeTransform {

  transform(errors: any[] | null): {errorMessage: string, value: any} | null {
    if (errors?.length) {
      return {
        errorMessage: `error-${errors[0].key}`,
        value: errors[0].value
      };
    }
    return null;
  }
}
