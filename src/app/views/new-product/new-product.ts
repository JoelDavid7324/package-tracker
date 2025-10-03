import { Component } from '@angular/core';
import { SideMenu } from "../../components/side-menu/side-menu";
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-new-product',
  imports: [SideMenu, Navbar],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {

}
