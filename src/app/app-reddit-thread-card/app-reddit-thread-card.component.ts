import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {NgxMasonryComponent} from "ngx-masonry";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-reddit-thread-card',
  templateUrl: './app-reddit-thread-card.component.html',
  styleUrls: ['./app-reddit-thread-card.component.scss']
})
export class AppRedditThreadCardComponent implements OnInit {

  @Input() linkData: any;
  @Input() masonry: NgxMasonryComponent | undefined;
  @Output() dataLoaded = new EventEmitter();

  @ViewChild('media') media: ElementRef | undefined;
  showBackGroundNSFW = true;
  apiURL = environment.apiURL;

  ngOnInit(): void {
    this.media?.nativeElement?.load()
  }

  reloadMasonryLayout() {
    /*if (this.masonry !== undefined) {
      this.masonry.reloadItems();
      this.masonry.layout();
    }*/
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
