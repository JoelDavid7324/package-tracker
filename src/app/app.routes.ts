import { Routes } from '@angular/router';
import { TrackHistory } from './views/track-history/track-history';

export const routes: Routes = [
    { path: 'history', component: TrackHistory },
    { path: '**', redirectTo: 'history' }
];
