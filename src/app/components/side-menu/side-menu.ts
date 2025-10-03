import { CommonModule } from '@angular/common';
import { Component, Signal, signal } from '@angular/core';
import { SideMenuService } from './side-menu.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [CommonModule],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css'
})
export class SideMenu {
  constructor(private side_menu_service: SideMenuService, private router: Router) { }

  getSideMenuStatus(): boolean {
    return this.side_menu_service.getSideMenuStatus()
  }
  setSideMenuStatus() {
    this.side_menu_service.setSideMenuStatus()
  }
  gotoProducts() {
    this.side_menu_service.setSideMenuStatus()
    this.router.navigate(['product-list'])
  }
  gotoHome() {
    this.side_menu_service.setSideMenuStatus()
    this.router.navigate([''])
  }
  gotoNewOrder() {
    this.side_menu_service.setSideMenuStatus()
    this.router.navigate(['new-product'])
  }
}
