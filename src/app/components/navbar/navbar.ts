import { Component } from '@angular/core';
import { BurgerMenuSvg } from "./svg/burger-menu-svg/burger-menu-svg";
import { LoginSvg } from "./svg/login-svg/login-svg";
import { SearchSvg } from "./svg/search-svg/search-svg";

@Component({
  selector: 'app-navbar',
  imports: [BurgerMenuSvg, LoginSvg, SearchSvg],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
