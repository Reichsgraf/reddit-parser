import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'common-input-field',
  templateUrl: './common-input-field.component.html',
  styleUrls: ['./common-input-field.component.scss']
})
export class CommonInputFieldComponent {

  @Input() inputLabel: string;
  @Input() inputType: string;
  @Input() formGroup: FormGroup;
  @Input() name: string;

}
