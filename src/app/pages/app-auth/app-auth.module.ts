import {NgModule} from "@angular/core";
import {AppAuthComponent} from "./app-auth.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {routes} from "./app-auth.routes";
import {AppSignUpComponent} from "./app-sign-up/app-sign-up.component";
import {AppSignInComponent} from "./app-sign-in/app-sign-in.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {AppCommonModule} from "../../shared/app-common/app-common.module";

@NgModule({
  declarations: [
    AppAuthComponent,
    AppSignUpComponent,
    AppSignInComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    AppCommonModule,
    // TODO: shared module
  ]
})
export class AppAuthModule {

}
