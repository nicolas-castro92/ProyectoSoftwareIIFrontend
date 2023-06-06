import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamiliarRoutingModule } from './familiar-routing.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FamiliarRoutingModule
  ]
})
export class FamiliarModule { }
