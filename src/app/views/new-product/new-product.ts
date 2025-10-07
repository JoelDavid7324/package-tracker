import { Component, signal } from '@angular/core';
import { SideMenu } from "../../components/side-menu/side-menu";
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-new-product',
  imports: [SideMenu, Navbar],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {
  copied_url = signal<string>('')

  async clipboard_plaste() {
    try {
      const texto = await navigator.clipboard.readText();
      this.copied_url.set(texto);
    } catch (error) {
      console.error('Error al leer el portapapeles', error);
    }
  }
}
