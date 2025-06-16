import { Routes } from '@angular/router';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import { TechProfileComponent } from './components/techProfile/techProfile.component';
import { TechnologyComponent } from './components/techProfile/pages/technology/technology.component';
import { SoftComponent } from './components/techProfile/pages/soft/soft.component';

export const FrontLayoutroutes: Routes = [
  {
    path: '',
    component: FrontLayoutComponent,
    children: [
      {
        path: '',
        component: HomePagesComponent,
        children: [
          {
            path: '',
            component: TechProfileComponent,
            children: [
              {
                path: '',
                redirectTo: 'technology',
                pathMatch: 'full'
              },
              {
                path: 'technology',
                component: TechnologyComponent
              },
              {
                path: 'soft',
                component: SoftComponent
              }
            ]
          }
        ]
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