import { Injectable, signal } from "@angular/core";
import { ProductUpdate } from "./product-update.adapter";

@Injectable({ providedIn: 'root' })
export class ProductUpdateService {
    updates = signal<ProductUpdate[]>([]);

    constructor() {
        this.loadUpdates();
    }

    private async loadUpdates() {
        // const res = await fetch('/public/products-updates.json');
        // const data = await res.json();
        // this.updates.set(data);
        this.updates.set([
            {
                "id": "upd-001",
                "date": "2025-09-01T08:00:00Z",
                "state": "Recepción",
                "from": "Factory",
                "to": "Warehouse",
                "product_id": "prod-001"
            },
            {
                "id": "upd-002",
                "date": "2025-09-03T10:30:00Z",
                "state": "En camino",
                "from": "Warehouse",
                "to": "Distribution Center",
                "product_id": "prod-001"
            },
            {
                "id": "upd-003",
                "date": "2025-09-05T14:00:00Z",
                "state": "Entregando",
                "from": "Distribution Center",
                "to": "Customer",
                "product_id": "prod-001"
            },
            {
                "id": "upd-004",
                "date": "2025-09-02T09:00:00Z",
                "state": "Recepción",
                "from": "Factory",
                "to": "Warehouse",
                "product_id": "prod-002"
            },
            {
                "id": "upd-005",
                "date": "2025-09-04T11:00:00Z",
                "state": "En camino",
                "from": "Warehouse",
                "to": "Distribution Center",
                "product_id": "prod-002"
            }
        ])
    }

    findByProduct(id: string): ProductUpdate[] | any {
        return this.updates().filter(u => u.product_id === id);
    }
}