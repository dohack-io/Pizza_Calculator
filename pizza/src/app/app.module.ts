import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompareViewComponent } from './compare-view/compare-view.component';
import { NavigationViewComponent } from './navigation-view/navigation-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CompareViewComponent,
    NavigationViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
