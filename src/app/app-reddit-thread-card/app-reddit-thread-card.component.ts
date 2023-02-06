import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-reddit-thread-card',
  templateUrl: './app-reddit-thread-card.component.html',
  styleUrls: ['./app-reddit-thread-card.component.scss']
})
export class AppRedditThreadCardComponent {

  @Input() linkData: any;
  @Output() dataLoaded = new EventEmitter();

  @ViewChild('media') media?: ElementRef;
  showBackGroundNSFW = true;
  apiURL = environment.apiURL;

  reloadMasonryLayout() {
    this.dataLoaded.emit();
  }

  toggleBackGroundNSFW(flag: boolean) {
    this.showBackGroundNSFW = flag;
  }

  imageNSFWCountdown() {
    setTimeout(() => this.toggleBackGroundNSFW(true), 10000);
  }

  goToSource() {
    window.open(`${this.apiURL}${this.linkData?.data?.permalink}`, "_blank")
  }

}
