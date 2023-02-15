import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search-form',
  templateUrl: './app-search-form.component.html',
  styleUrls: ['./app-search-form.component.scss']
})
export class AppSearchFormComponent {

  @Input() formGroup: FormGroup;
  @Input() categoryList: string[] = [];
  @Output() updateEvent = new EventEmitter();

  updateRequestResult() {
    this.updateEvent.emit();
  }

}
