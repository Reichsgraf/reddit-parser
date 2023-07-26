import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {Observable, tap} from "rxjs";
import {NgxMasonryComponent, NgxMasonryOptions} from "ngx-masonry";
import {FormControl, FormGroup} from "@angular/forms";
import {RedditApiService} from "../../shared/app-common/services/reddit-api.service";
import {categoryList} from "../../static/category-list";
import {AuthService} from "../../shared/app-common/services/auth.service";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.scss']
})
export class AppDashboardComponent implements OnInit {

  private redditApiService = inject(RedditApiService);
  private authService = inject(AuthService);

  parsedData$: Observable<any>;
  masonryOptions: NgxMasonryOptions = {
    gutter: 15
  };
  formGroup: FormGroup;
  categoryList = categoryList.sort().reverse();

  @ViewChild('masonry') masonry?: NgxMasonryComponent;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      subreddit: new FormControl('UkraineWarVideoReport'),
      category: new FormControl(this.categoryList[0])
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
