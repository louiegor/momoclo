import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MomocloComponent } from './momoclo/momoclo.component';
import { MomocloListComponent } from './momoclo/momoclolist.Component';



const appRoutes: Routes = [
    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 

    },

    {
        path: 'momoclo',
        component: MomocloComponent,
    },

    {
        path: 'momoclolist',
        component: MomocloListComponent
    }
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);