import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nsfw-content',
  templateUrl: './app-nsfw-content.component.html',
  styleUrls: ['./app-nsfw-content.component.scss']
})
export class AppNsfwContentComponent {

  @Input() linkData: any;

}
