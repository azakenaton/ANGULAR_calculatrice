import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoutonComponent } from './bouton/bouton.component';
import { EcranComponent } from './ecran/ecran.component';

@NgModule({
  declarations: [
    AppComponent,
    BoutonComponent,
    EcranComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
