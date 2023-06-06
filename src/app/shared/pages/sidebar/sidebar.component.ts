import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public reactiveMenu: MenuItem[]=[
    {title: 'users', route: './user/register'},
    {title: 'familiar', route: './familiar/register'}
  ]

  isMenuOpen: boolean = false;
  isRegistrarOpen: boolean = false;
  isAsignarOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  toggleRegistrar(){
    this.isRegistrarOpen = !this.isRegistrarOpen;
  }
  toggleAsignar() {
    this.isAsignarOpen = !this.isAsignarOpen;
  }

}
