import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxMasonryComponent, NgxMasonryOptions} from "ngx-masonry";
import {RedditApiService} from "./shared/app-common/services/reddit-api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reddit-parser';
  testData$: Observable<any> | undefined;
  masonryOptions: NgxMasonryOptions = {
    gutter: 15
  };

  @ViewChild('masonry') masonry: NgxMasonryComponent | undefined;

  constructor(private redditApiService: RedditApiService) {
  }

  ngOnInit(): void {
    this.testData$ = this.redditApiService.getRedditTop();
  }

}
