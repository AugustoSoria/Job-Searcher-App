import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { OfferModel } from 'src/app/models/offer.interface';
import { AppState } from 'src/app/state/app.state';
import { selectListFilteredOffers } from 'src/app/state/selector/offers.selectors';

@Component({
  selector: 'app-offer-selected',
  templateUrl: './offer-selected.component.html',
  styleUrls: ['./offer-selected.component.css']
})
export class OfferSelectedComponent implements OnInit {
  job: any = {}
  id: string = ''
  constructor(activatedRoute: ActivatedRoute, private store: Store<AppState>,) {
    activatedRoute.params.subscribe(params => 
      this.id = params['id']
    )
  }

  ngOnInit(): void {
    this.store.select(selectListFilteredOffers).subscribe(
      res => this.job = res.find(o => o.id.toString() === this.id)
    )
  }

  formaterDate(date:string) {
    return new Date(date).toLocaleDateString()
  }
}
