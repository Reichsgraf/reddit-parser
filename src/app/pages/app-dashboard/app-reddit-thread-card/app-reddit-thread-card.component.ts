import {
  Component,
  ElementRef,
  EventEmitter, inject,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-reddit-thread-card',
  templateUrl: './app-reddit-thread-card.component.html',
  styleUrls: ['./app-reddit-thread-card.component.scss']
})
export class AppRedditThreadCardComponent {

  private snackBar = inject(MatSnackBar);

  @Input() linkData: any;
  @Output() dataLoaded = new EventEmitter();

  @ViewChild('media') media?: ElementRef;
  showBackGroundNSFW = true;
  apiURL = environment.redditApiUrl;

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

  copyLink() {
    this.snackBar.open('Link is copied', '', { duration: 2000 })
  }

}
