import { Routes } from '@angular/router';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
export const FrontLayoutroutes: Routes = [
  {
    path: '',
    component: FrontLayoutComponent,
    children: [
      {
        path: '',
        component: HomePagesComponent,
      },
      {
        path: 'no',
        component: NoEncontradoComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];



export default FrontLayoutroutes;