import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DasboardModule } from './dasboard/dasboard.module';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
  path: '',
  loadChildren: './dasboard/dasboard.module#DasboardModule'
 }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DasboardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
