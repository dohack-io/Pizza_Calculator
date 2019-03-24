import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompareViewComponent } from './compare-view/compare-view.component';
import { PizzaCreatorComponent } from './pizza-creator/pizza-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    CompareViewComponent,
    PizzaCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
