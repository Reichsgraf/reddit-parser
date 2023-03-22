import {Routes} from "@angular/router";
import {AppAuthComponent} from "./app-auth.component";
import {AppSignInComponent} from "./app-sign-in/app-sign-in.component";
import {AppSignUpComponent} from "./app-sign-up/app-sign-up.component";

export const routes: Routes = [
  {
    path: '',
    component: AppAuthComponent,
    children: [
      {
        path: 'sign-in',
        component: AppSignInComponent
      },
      {
        path: 'sign-up',
        component: AppSignUpComponent
      },
      { path: '**', redirectTo: 'sign-in'}
    ]
  }
];
