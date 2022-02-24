import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OfferModel } from 'src/app/models/offer.interface';
import { GetDataService } from 'src/app/services/get-data.service';
import { loadedOffers, loadOffers } from 'src/app/state/actions/offers.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListFilteredOffers, selectListOffers, selectLoading } from 'src/app/state/selector/offers.selectors';
import { JobFilterComponent } from '../job-filter/job-filter.component';

@Component({
  selector: 'app-jobs-found',
  templateUrl: './jobs-found.component.html',
  styleUrls: ['./jobs-found.component.css']
})
export class JobsFoundComponent /* implements OnInit */{
  filteredJobs: Array<OfferModel> = []
  pages: number = 0
  // https://remotive.io/api/remote-jobs

  constructor(
    private store: Store<AppState>,
  ){}

  ngOnInit(): void {
    this.store.select(selectListFilteredOffers).subscribe(res => this.filteredJobs = res)
  }

  formaterDate(date:string) {
    return new Date(date).toLocaleDateString()
  }

  nextPage() {
    this.pages += 5
  }

  prevPage() {
    this.pages -= 5
  }
}
