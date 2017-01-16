import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Libraries
import { DataTableModule, SharedModule, AutoCompleteModule, ToggleButtonModule, InputTextareaModule, DialogModule, FileUploadModule, TabViewModule, PanelModule } from 'primeng/primeng';

import { AppComponent }  from './app.component';
import { SideNavComponent } from './sidenav.component';
import { MomocloComponent } from './momoclo/momoclo.component';
import { MomocloListComponent } from './momoclo/momoclolist.Component';
import { routing } from './app.routing';


@NgModule({
  imports:      [ BrowserModule, routing,  
    DataTableModule, SharedModule, AutoCompleteModule, ToggleButtonModule, InputTextareaModule, DialogModule, FileUploadModule, TabViewModule, PanelModule  
  
  ],
  declarations: [ AppComponent, SideNavComponent, MomocloComponent, MomocloListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
