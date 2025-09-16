import { Component, computed, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Product } from "../../views/track-history/product.adapter";
import { ProductService } from '../track-history/products.service';
import { TargetProduct } from './target-product.service';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  imports: [Navbar, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  productsArray: Signal<Product[]>

  constructor(private productService: ProductService, private targetProduct: TargetProduct, private router: Router) {
    this.productsArray = computed(() => this.productService.getProducts())
    console.log(this.productsArray)
  }

  captureProduct(p: Product) {
    this.targetProduct.setProductOnTarget(p);
    if (p.id) {
      this.router.navigate(['/history', p.id])
    }
  }
}
