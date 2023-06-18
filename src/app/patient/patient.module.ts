import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    EditComponent,
    DeleteComponent,
    RegisterComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    MaterialModule
  ]
})
export class PatientModule { }
