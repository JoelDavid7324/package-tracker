import { Component, computed, DOCUMENT, Inject, Signal, signal } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { ProductService } from './products.service';
import { ProductUpdateService } from './products-updates.service';
import { ProductUpdate } from './product-update.adapter';
import { CommonModule } from '@angular/common';
import { TargetProduct } from '../product-list/target-product.service';
import { Step1Svg } from "./svg/step1-svg/step1-svg";
import { Step2Svg } from "./svg/step2-svg/step2-svg";
import { Step4Svg } from "./svg/step4-svg/step4-svg";
import { Step3Svg } from "./svg/step3-svg/step3-svg";

@Component({
  selector: 'app-track-history',
  imports: [Navbar, CommonModule, Step1Svg, Step2Svg, Step4Svg, Step3Svg],
  templateUrl: './track-history.html',
  styleUrl: './track-history.css'
})
export class TrackHistory {
  update: Signal<ProductUpdate[]>
  product = computed(() => this.targetProduct.getProductOnTarget())

  main_states = new Set([
    'Recepción',
    'En camino',
    'Entregando',
    'Entregado'
  ]);

  getLastState = computed(() => {
    const updates = this.productUpdateService.findByProduct(this.product().id);
    const main_ofProducts = updates.filter((u: { state: string; }) => this.main_states.has(u.state));

    if (main_ofProducts.length === 0) return null;

    return main_ofProducts.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )[0];
  });

  indexOfLastState = computed(() => {
    const ls = this.getLastState()?.state;
    if (!ls) return -1;

    const statesArray = Array.from(this.main_states);
    return statesArray.indexOf(ls);
  })
  constructor(private productService: ProductService, private productUpdateService: ProductUpdateService, private targetProduct: TargetProduct) {
    this.update = computed(() => this.productUpdateService.findByProduct(this.product().id))
    console.log('update', this.update())
  }
}
