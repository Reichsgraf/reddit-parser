import {NgModule} from "@angular/core";
import {AppRedditThreadCardComponent} from "./app-reddit-thread-card/app-reddit-thread-card.component";
import {AppNsfwContentComponent} from "./app-nsfw-content/app-nsfw-content.component";
import {AppSearchFormComponent} from "./app-search-form/app-search-form.component";
import {AppDashboardComponent} from "./app-dashboard.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app-dashboard.routes";
import {ReactiveFormsModule} from "@angular/forms";
import {AppCommonModule} from "../../shared/app-common/app-common.module";
import {NgxMasonryModule} from "ngx-masonry";
import {VgCoreModule} from "@videogular/ngx-videogular/core";
import {VgControlsModule} from "@videogular/ngx-videogular/controls";
import {VgOverlayPlayModule} from "@videogular/ngx-videogular/overlay-play";
import {VgBufferingModule} from "@videogular/ngx-videogular/buffering";
import {PinchZoomModule} from "ngx-pinch-zoom";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCarouselModule} from "ng-mat-carousel";
import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {ResponsiveModule} from "../../shared/responsive/responsive.module";

@NgModule({
  declarations: [
    AppRedditThreadCardComponent,
    AppNsfwContentComponent,
    AppSearchFormComponent,
    AppDashboardComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    AppCommonModule,
    NgxMasonryModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    PinchZoomModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatCarouselModule,
    MatSnackBarModule,
    ClipboardModule,
    NgOptimizedImage,
    CommonModule,
    AppCommonModule.forRoot(),
    ResponsiveModule.forRoot(),
  ]
})
export class AppDashboardModule {

}
