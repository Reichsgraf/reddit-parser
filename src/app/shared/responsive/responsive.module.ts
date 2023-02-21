import {ModuleWithProviders, NgModule} from "@angular/core";
import {MobileDirective} from "./mobile.directive";
import {DesktopDirective} from "./desktop.directive";
import {CommonModule} from "@angular/common";
import {ResponsiveService} from "./responsive.service";

@NgModule({
  imports: [CommonModule],
  declarations: [DesktopDirective, MobileDirective],
  exports: [DesktopDirective, MobileDirective]
})
export class ResponsiveModule {
  static forRoot(): ModuleWithProviders<ResponsiveModule> {
    return {
      ngModule: ResponsiveModule,
      providers: [ResponsiveService]
    }
  }
}
