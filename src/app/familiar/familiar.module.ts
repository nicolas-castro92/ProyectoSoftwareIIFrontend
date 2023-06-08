import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamiliarRoutingModule } from './familiar-routing.module';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    RegisterComponent,
    ListComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    FamiliarRoutingModule
  ]
})
export class FamiliarModule { }
