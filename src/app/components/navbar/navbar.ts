import { Component } from '@angular/core';
import { BurgerMenuSvg } from "./svg/burger-menu-svg/burger-menu-svg";
import { LoginSvg } from "./svg/login-svg/login-svg";
import { SearchSvg } from "./svg/search-svg/search-svg";
import { SideMenuService } from '../side-menu/side-menu.service';

@Component({
  selector: 'app-navbar',
  imports: [BurgerMenuSvg, LoginSvg, SearchSvg],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  constructor(private side_menu_service: SideMenuService) { }
  setSideMenuStatus() {
    this.side_menu_service.setSideMenuStatus()
  }

}
