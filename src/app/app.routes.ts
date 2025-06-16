import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./front-portafolio/front-layouts.routes').then(m => m.FrontLayoutroutes),
  },


];
