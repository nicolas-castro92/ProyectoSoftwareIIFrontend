import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FamiliarService } from '../familiar.service';
import { CreateFamiliar } from '../interfaces/familiar.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public familiarForm =  new FormGroup({
    name:                new FormControl(''),
    last_name:           new FormControl(''),
    identification_card: new FormControl(''),
    age:                 new FormControl(''),
    phone:               new FormControl(''),
    email:               new FormControl(''),
    address:             new FormControl(''),
    alternate_phone:     new FormControl('')
  })

  constructor(private familiarService: FamiliarService, private sncackbar: MatSnackBar, private activatedRoute: ActivatedRoute, private router: Router) { }

  get currentFamiliar(): CreateFamiliar {
    const familiar = this.familiarForm.value as CreateFamiliar;
    return familiar;
  }

  onSubmit():void {

    if( this.familiarForm.invalid ) {
      return;
    }

    this.familiarService.addFamiliar( this.currentFamiliar )
      .subscribe( familiar => {
        this.router.navigate(['/familiar/list']);
        this.showSnackBar(`${ familiar.name } created!`);
      } )
    /* console.log({
      formIsValid: this.familiarForm.valid,
      values: this.familiarForm.value
    }); */
  }

  showSnackBar( message: string ):void {
    this.sncackbar.open(message, 'Done', { duration: 3000});
  }

}
