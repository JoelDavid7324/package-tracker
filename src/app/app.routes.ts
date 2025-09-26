import { Routes } from '@angular/router';
import { TrackHistory } from './views/track-history/track-history';
import { ProductList } from './views/product-list/product-list';
import { Home } from './views/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'product-list', component: ProductList },
    { path: 'history/:id', component: TrackHistory },
    { path: '**', redirectTo: '' }
];
