import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompareViewComponent }      from './compare-view/compare-view.component';
import { PizzaCreatorComponent }      from './pizza-creator/pizza-creator.component';

const routes: Routes = [
  { path: 'compare-view', component: CompareViewComponent },
  {path: 'pizza-creator', component: PizzaCreatorComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ] 
})

export class AppRoutingModule {}

