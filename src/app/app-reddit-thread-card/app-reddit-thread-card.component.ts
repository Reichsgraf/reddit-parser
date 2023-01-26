import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgxMasonryComponent} from "ngx-masonry";

@Component({
  selector: 'app-reddit-thread-card',
  templateUrl: './app-reddit-thread-card.component.html',
  styleUrls: ['./app-reddit-thread-card.component.scss']
})
export class AppRedditThreadCardComponent implements OnInit {

  @Input() linkData: any;
  @Input() masonry: NgxMasonryComponent | undefined;

  @ViewChild('media') media: ElementRef | undefined;
  showBackGroundNSFW = true;

  ngOnInit(): void {
    this.media?.nativeElement?.load()
  }

  reloadMasonryLayout() {
    if (this.masonry !== undefined) {
      this.masonry.reloadItems();
      this.masonry.layout();
    }
  }

  toggleBackGroundNSFW(flag: boolean) {
    this.showBackGroundNSFW = flag;
  }

}
