import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReimburstmentViewComponent } from './reimburstment-view/reimburstment-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ReimburstmentViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
