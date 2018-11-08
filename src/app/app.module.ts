import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RmCarouselModule } from 'rm-angular-carousel';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RmCarouselModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
