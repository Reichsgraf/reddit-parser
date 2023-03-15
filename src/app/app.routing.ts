import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./app-dashboard/app-dashboard.module').then(m => m.AppDashboardModule)
  },
  { path: '**', redirectTo: 'dashboard'}
];
