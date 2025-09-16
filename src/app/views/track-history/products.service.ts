import { Injectable, signal } from "@angular/core";
import { Product } from "./product.adapter";

@Injectable({ providedIn: 'root' })
export class ProductService {
    product = signal<Product[]>([]);

    constructor() {
        this.loadProduct();
    }

    private async loadProduct() {
        // const res = await fetch('/public/products.json');
        // const data = await res.json();
        // this.product.set(data);
        this.product.set([
            {
                "id": "prod-001",
                "year": 2022,
                "origin_country": "Germany"
            },
            {
                "id": "prod-002",
                "year": 2023,
                "origin_country": "Japan"
            },
            {
                "id": "prod-003",
                "year": 2021,
                "origin_country": "Brazil"
            },
            {
                "id": "prod-004",
                "year": 2024,
                "origin_country": "Canada"
            }
        ])
    }

    getProducts(): Product[] | any {
        return this.product()
    }
}