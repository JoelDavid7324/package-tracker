import { Routes } from '@angular/router';
import { TrackHistory } from './views/track-history/track-history';
import { ProductList } from './views/product-list/product-list';

export const routes: Routes = [
    { path: 'product-list', component: ProductList },
    { path: 'history/:id', component: TrackHistory },
    { path: '**', redirectTo: 'product-list' }
];
