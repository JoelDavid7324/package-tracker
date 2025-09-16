import { Injectable, Signal, signal } from "@angular/core";
import { Product } from "../../views/track-history/product.adapter";
@Injectable({ providedIn: 'root' })
export class TargetProduct {
    private product_target = signal<Product | any>(null)

    setProductOnTarget(product: Product) {
        this.product_target.set(product)
        console.log("me llamaron con este id ", product.id)
    }
    getProductOnTarget(): Product {
        return this.product_target()
    }
}