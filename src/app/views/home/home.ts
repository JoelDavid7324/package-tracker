import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { SideMenu } from "../../components/side-menu/side-menu";
import { AmazonSvg } from "./svgs/amazon-svg/amazon-svg";
import { AliexpressSvg } from "./svgs/aliexpress-svg/aliexpress-svg";
import { EbaySvg } from "./svgs/ebay-svg/ebay-svg";
import { AlibabaSvg } from "./svgs/alibaba-svg/alibaba-svg";

@Component({
  selector: 'app-home',
  imports: [Navbar, SideMenu, AmazonSvg, AliexpressSvg, EbaySvg, AlibabaSvg],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
