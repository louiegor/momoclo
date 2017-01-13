import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MomocloComponent } from './momoclo/momoclo.component';



const appRoutes: Routes = [
    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 

    },

    {
        path: 'momoclo',
        component: MomocloComponent,
    }
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);