import {Pipe, PipeTransform} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";

@Pipe({
  name: 'getFormControl'
})
export class GetFormControlPipe implements PipeTransform {

  transform(group: FormGroup, controlName: string): FormControl {
    return <FormControl> group.get(controlName);
  }

}
