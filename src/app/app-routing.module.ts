import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'user',
    loadChildren: () => import('./user/user.module').then( m=>m.UserModule )
  },
  {
    path:'familiar',
    loadChildren: () => import('./familiar/familiar.module').then( m=>m.FamiliarModule )
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
