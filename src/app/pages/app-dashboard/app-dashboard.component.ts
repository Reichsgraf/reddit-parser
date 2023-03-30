import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable, tap} from "rxjs";
import {NgxMasonryComponent, NgxMasonryOptions} from "ngx-masonry";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RedditApiService} from "../../shared/app-common/services/reddit-api.service";
import {categoryList} from "../../static/category-list";
import {AuthService} from "../../shared/app-common/services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.scss']
})
export class AppDashboardComponent implements OnInit {

  parsedData$: Observable<any>;
  masonryOptions: NgxMasonryOptions = {
    gutter: 15
  };
  formGroup: FormGroup;
  categoryList = categoryList.sort();

  @ViewChild('masonry') masonry?: NgxMasonryComponent;

  constructor(private redditApiService: RedditApiService,
              private formBuilder: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      subreddit: ['UkraineWarVideoReport'],
      category: [this.categoryList[0]]
    });

    this.getRedditTop();
  }

  getRedditTop() {
    if (!this.formGroup.get('subreddit')?.value) {
      this.formGroup.get('subreddit')?.setValue('UkraineWarVideoReport');
    }
    if (!this.formGroup.get('category')?.value) {
      this.formGroup.get('category')?.setValue(this.categoryList[0]);
    }

    // this.testData$ = of(testData).pipe(map((res) => JSON.parse(JSON.stringify(res)?.replaceAll('&amp;', '&'))));
    this.parsedData$ = this.redditApiService.getRedditTop(
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

  logout() {
    return this.authService.logoutUser();
  }

}
