import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ApiResponse, OfferModel } from 'src/app/models/offer.interface';
import { GetDataService } from 'src/app/services/get-data.service';
import { filterOffers, loadedOffers, loadOffers } from 'src/app/state/actions/offers.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListOffers } from 'src/app/state/selector/offers.selectors';

@Component({
  selector: 'app-first-app-section',
  templateUrl: './first-app-section.component.html',
  styleUrls: ['./first-app-section.component.css']
})
export class FirstAppSectionComponent implements OnInit {
  jobs: ReadonlyArray<OfferModel> = []
  
  constructor(
    private store: Store<AppState>,
    private showOffers: GetDataService
  ){}

  ngOnInit(): void {
    this.store.dispatch(loadOffers())

    this.showOffers.getData()
      .subscribe((response: ApiResponse) => {
        this.store.dispatch(loadedOffers(
          { offers: response.jobs }
        ))
      })

    this.store.select(selectListOffers).subscribe(res => this.jobs = res)
  }

  searchOffers(evt: any) {
    evt.preventDefault()
    let value = evt.target[0].value

    if(value.length > 0) {
      let array: OfferModel[] = []
      let regex = new RegExp(value, 'gim')
      this.jobs.map((o) : any => {
        if(o.title.match(regex)) return array.push(o)
        if(o.company_name.match(regex)) return array.push(o)
        if(o.description.match(regex)) return array.push(o)
      })
      if(array.length > 0) {
        this.store.dispatch(filterOffers(
          { filteredOffers: array }
        ))
      }
    }
  }
}
