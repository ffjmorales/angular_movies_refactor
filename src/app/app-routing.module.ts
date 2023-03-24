import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  {
    path: 'iniciar-sesion',
    component: LoginComponent
  },
  {
    path: 'populares',
    loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'iniciar-sesion'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
