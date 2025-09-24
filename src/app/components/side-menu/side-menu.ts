import { CommonModule } from '@angular/common';
import { Component, Signal, signal } from '@angular/core';
import { SideMenuService } from './side-menu.service';

@Component({
  selector: 'app-side-menu',
  imports: [CommonModule],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css'
})
export class SideMenu {
  constructor(private side_menu_service: SideMenuService) { }

  getSideMenuStatus(): boolean {
    return this.side_menu_service.getSideMenuStatus()
  }
  setSideMenuStatus() {
    this.side_menu_service.setSideMenuStatus()
  }
}
