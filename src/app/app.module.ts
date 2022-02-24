import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { JobFilterComponent } from './components/job-filter/job-filter.component';
import { JobsFoundComponent } from './components/jobs-found/jobs-found.component';
import { OfferSelectedComponent } from './components/offer-selected/offer-selected.component';
import { FirstAppSectionComponent } from './components/first-app-section/first-app-section.component';

import { StoreModule } from '@ngrx/store';

import { ROOT_REDUCERS } from './state/app.state';

import { PaginationPipe } from './pipes/pagination.pipe';


@NgModule({
  declarations: [
    AppComponent,
    JobFilterComponent,
    JobsFoundComponent,
    OfferSelectedComponent,
    PaginationPipe,
    FirstAppSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
