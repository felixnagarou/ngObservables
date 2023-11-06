import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlphabetComponent } from './components/alphabet/alphabet.component';
import {ModuloService} from "./services/modulo.service";

@NgModule({
  declarations: [
    AppComponent,
    AlphabetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ModuloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
