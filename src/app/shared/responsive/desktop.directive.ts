import {AfterViewInit, Directive, OnDestroy, TemplateRef, ViewContainerRef} from "@angular/core";
import {Subscription} from "rxjs";
import {ResponsiveService} from "./responsive.service";

@Directive({
  selector: '[desktop]'
})
export class DesktopDirective implements AfterViewInit, OnDestroy {

  subscription: Subscription;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private responsiveService: ResponsiveService) {
  }

  ngAfterViewInit(): void {
    this.updateView();
    this.subscription = this.responsiveService.responsiveChangeSubject
      .subscribe(() => this.updateView());
  }

  updateView() {
    // needs to be in a promise
    // see https://github.com/angular/angular/issues/15634
    Promise.resolve().then(() => {
      if (this.responsiveService.responsiveFormat === 'DESKTOP') {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
