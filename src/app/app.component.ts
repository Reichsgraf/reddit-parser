import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxMasonryComponent, NgxMasonryOptions} from "ngx-masonry";
import {RedditApiService} from "./shared/app-common/services/reddit-api.service";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {categoryList} from "./static/category-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  testData$?: Observable<any>;
  masonryOptions: NgxMasonryOptions = {
    gutter: 15
  };
  formGroup: FormGroup;
  categoryList = categoryList.sort();

  @ViewChild('masonry') masonry?: NgxMasonryComponent;

  constructor(private redditApiService: RedditApiService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      subreddit: ['UkraineWarVideoReport'],
      category: [this.categoryList[0]]
    });

    this.getRedditTop();
  }

  getRedditTop() {
    // this.testData$ = of(testData).pipe(map((res) => JSON.parse(JSON.stringify(res)?.replaceAll('&amp;', '&'))));
    if (!this.formGroup.get('subreddit')?.value) {
      this.formGroup.get('subreddit')?.setValue('UkraineWarVideoReport');
    }
    if (!this.formGroup.get('category')?.value) {
      this.formGroup.get('category')?.setValue(this.categoryList[0]);
    }
    this.testData$ = this.redditApiService.getRedditTop(
      this.formGroup.get('subreddit')?.value,
      this.formGroup.get('category')?.value
    );
  }

  reloadMasonryLayout() {
    if (this.masonry !== undefined) {
      this.masonry.reloadItems();
      this.masonry.layout();
    }
  }

}
