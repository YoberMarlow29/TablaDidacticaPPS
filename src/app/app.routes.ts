import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'splash',
    loadComponent: () => import('./components/splash/splash.component').then( m => m.SplashComponent)
  },
  {
    path: 'lenguajes',
    loadComponent: () => import('./pages/lenguajes/lenguajes.page').then( m => m.LenguajesPage)
  },
  {
    path: 'selecciontemas',
    loadComponent: () => import('./pages/seleccion-temas/seleccion-temas.page').then( m => m.SeleccionTemasPage)
  }
];
