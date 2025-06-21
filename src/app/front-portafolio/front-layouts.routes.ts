import { Routes } from '@angular/router';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
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
        path:'contact',
        component: ContactPageComponent,
      },
      {
        path: 'noFound',
        component: NotFoundPageComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];



export default FrontLayoutroutes;