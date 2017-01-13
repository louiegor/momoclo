import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SideNavComponent } from './sidenav.component';
import { MomocloComponent } from './momoclo/momoclo.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, SideNavComponent, MomocloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }