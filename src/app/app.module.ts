import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { rootRoutes } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
