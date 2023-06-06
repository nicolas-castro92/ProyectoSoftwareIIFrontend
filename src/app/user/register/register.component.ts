import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public myForm: FormGroup = this.fb.group({
    name: [''],
    last_name: [''],
    identification_card:[0],
    age:[0],
    phone:[0],
    email:[''],
    address:['']
  })

  constructor( private fb: FormBuilder ) { }

  onSave(): void {
    console.log(this.myForm.value);
  }

  
}
