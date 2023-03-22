import {Routes} from "@angular/router";
import {AuthGuard} from "./shared/guards/auth.guard";

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/app-auth/app-auth.module').then(m => m.AppAuthModule)
  },
  {
    path: 'dashboard',
    // TODO canActivate: [AuthGuard],
    loadChildren: () => import('./pages/app-dashboard/app-dashboard.module').then(m => m.AppDashboardModule)
  },
  { path: '**', redirectTo: 'dashboard'}
];
