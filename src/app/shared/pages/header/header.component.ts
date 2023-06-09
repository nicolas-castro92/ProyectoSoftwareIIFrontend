import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  /* public sidebarItems = [
    { label: 'Listado', icon: 'label', url:'./list' },
    { label: 'Registrar', icon: 'add', url:'./register' },
  ] */

  sidebarItems = [
    { label: 'Medico', icon: 'label', url: './medical-staff/list' },
    { label: 'Paciente', icon: 'label', url: './patient/list' },
    { label: 'Familiar', icon: 'label', url: './familiar/register' },
  ];

  selectedOption: string='';



}
