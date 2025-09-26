import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { SideMenu } from "../../components/side-menu/side-menu";

@Component({
  selector: 'app-home',
  imports: [Navbar, SideMenu],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
