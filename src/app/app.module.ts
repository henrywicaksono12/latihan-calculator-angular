import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ResultComponent } from './result/result.component';

import { Routes, RouterModule } from '@angular/router';

const ROUTES:Routes = [
  { path:'result/:res', component : ResultComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, ResultComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
