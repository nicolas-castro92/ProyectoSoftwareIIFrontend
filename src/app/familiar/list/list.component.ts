import { Component, OnInit, ViewChild } from '@angular/core';
import { ListFamiliar } from '../interfaces/familiar.interface';
import { FamiliarService } from '../familiar.service';
import { MatTable } from '@angular/material/table';


/**
 * @title Adding and removing data when using an array-based datasource.
 */


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
})

export class ListComponent implements OnInit {

  public familiars : ListFamiliar[] = [];

  constructor( private familiarsService: FamiliarService ) {} 
  
  ngOnInit(): void {
    this.familiarsService.getFamiliars()
      .subscribe( data => this.familiars = data );
  }

  displayedColumns: string[] = ['name', 'last_name', 'identification_card', 'email', 'address'];

  addData() {
    
  }

  removeData() {

  }

}


