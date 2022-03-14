import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OfferModel } from 'src/app/models/offer.interface';
import { AppState } from 'src/app/state/app.state';
import { selectListFilteredOffers } from 'src/app/state/selector/offers.selectors';

@Component({
  selector: 'app-jobs-found',
  templateUrl: './jobs-found.component.html',
  styleUrls: ['./jobs-found.component.css']
})
export class JobsFoundComponent implements OnInit {
  filteredJobs: Array<OfferModel> = []
  pages: number = 0
  fetching = false

  constructor(
    private store: Store<AppState>,
  ){}

  ngOnInit(): void {
    this.store.select(selectListFilteredOffers).subscribe(res => {
      this.fetching = true
      this.filteredJobs = res
    })
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
