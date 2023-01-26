import {Component, ViewChild} from '@angular/core';
import {testData} from "./static/test-data";
import {NgxMasonryComponent, NgxMasonryOptions} from "ngx-masonry";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reddit-parser';
  testData = testData;
  masonryOptions: NgxMasonryOptions = {
    gutter: 15
  };

  @ViewChild('masonry') masonry: NgxMasonryComponent | undefined;

}
