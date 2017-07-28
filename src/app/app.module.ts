import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider.component';

//Our Routes
import { Routes } from './app.routes';

//services
import { SliderService } from './services/slider.service';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(Routes)],
  declarations: [AppComponent, SliderComponent],
  providers: [SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
