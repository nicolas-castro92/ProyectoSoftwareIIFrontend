import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamiliarRoutingModule } from './familiar-routing.module';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { MaterialModule } from '../material/material.module';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent,
    ListComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    FamiliarRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FamiliarModule { }
