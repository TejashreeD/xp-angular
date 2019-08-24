import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Comp2Component } from '../comp2/comp2.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp2Component,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
