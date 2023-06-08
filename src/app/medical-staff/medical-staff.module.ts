import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalStaffRoutingModule } from './medical-staff-routing.module';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    EditComponent,
    DeleteComponent,
    ListComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MedicalStaffRoutingModule
  ]
})
export class MedicalStaffModule { }
