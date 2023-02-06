import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxMasonryComponent, NgxMasonryOptions} from "ngx-masonry";
import {RedditApiService} from "./shared/app-common/services/reddit-api.service";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reddit-parser';
  testData$?: Observable<any>;
  masonryOptions: NgxMasonryOptions = {
    gutter: 15
  };

  control: FormControl<string | null>;
  @ViewChild('masonry') masonry?: NgxMasonryComponent;

  constructor(private redditApiService: RedditApiService) {
    this.control = new FormControl('UkraineWarVideoReport');
  }

  ngOnInit(): void {
    this.getRedditTop();
  }

  getRedditTop() {
    // this.testData$ = of(testData).pipe(map((res) => JSON.parse(JSON.stringify(res)?.replaceAll('&amp;', '&'))));
    if (!this.control.value) {
      this.control.setValue('UkraineWarVideoReport');
    }
    this.testData$ = this.redditApiService.getRedditTop(this.control.value || null);
  }

  reloadMasonryLayout() {
    if (this.masonry !== undefined) {
      this.masonry.reloadItems();
      this.masonry.layout();
    }
  }

}
