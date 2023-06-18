import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { PatientModule } from './patient/patient.module';

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
    path:'patient',
    loadChildren: () => import('./patient/patient.module').then( m=>m.PatientModule )
  },
  {
    path:'medical-staff',
    loadChildren: () => import('./medical-staff/medical-staff.module').then( m=>m.MedicalStaffModule )
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
