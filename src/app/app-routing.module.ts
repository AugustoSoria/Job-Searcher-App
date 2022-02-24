import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstAppSectionComponent } from './components/first-app-section/first-app-section.component';
import { OfferSelectedComponent } from './components/offer-selected/offer-selected.component';

const routes: Routes = [
  {path: '', component: FirstAppSectionComponent, pathMatch: 'full'},
  {path: ':id', component: OfferSelectedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
