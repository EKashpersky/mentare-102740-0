import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { MentalMapsViewer } from './components';

const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/mental-maps'
  },
  {
    path: 'mental-maps',
    component: MentalMapsViewer
  },
  {
    path: 'egocentric-layout',
    loadChildren: () => import(
      './components.layouts/egocentric-layout/egocentric.module'
    ).then(value =>
      value.EgocentricLayoutModule
    )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}