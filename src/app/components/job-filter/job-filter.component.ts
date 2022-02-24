import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectListOffers } from 'src/app/state/selector/offers.selectors';
import { filterOffers } from 'src/app/state/actions/offers.actions';
import { OfferModel } from 'src/app/models/offer.interface';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.css']
})
export class JobFilterComponent implements OnInit {
  jobs$: Observable<ReadonlyArray<OfferModel>> = new Observable()

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.jobs$ = this.store.select(selectListOffers)
    this.jobs$.pipe(
      map(j => j.filter((j:any) => j.candidate_required_location.includes('Anywhere')))
    ).subscribe(response => {
      this.store.dispatch(filterOffers(
        { filteredOffers: response }
      ))
    })
  }

  filter(evt: any) {
    if(evt.target.checked) {
      if(evt.target.name === 'job_type') {
        this.jobs$.pipe(
          map(j => j.filter((j:any) => j.job_type === 'full_time'))
        ).subscribe(response => {
          this.store.dispatch(filterOffers(
            { filteredOffers: response }
          ))
        })
      }

      if(evt.target.name === 'location'){
        let regExp = new RegExp(evt.target.value, 'ig')
        this.jobs$.pipe(
          map(j => j.filter((j:any) => j.candidate_required_location.match(regExp)))
        ).subscribe(response => {
          this.store.dispatch(filterOffers(
            { filteredOffers: response }
          ))
        })
      }
    }

    if(evt.target.name === 'text-location'){
      if(evt.target.value.length > 2) {
        let regExp = new RegExp(evt.target.value, 'ig')
        this.jobs$.pipe(
          map(j => j.filter((j:any) => j.candidate_required_location.match(regExp)))
        ).subscribe(response => {
          this.store.dispatch(filterOffers(
            { filteredOffers: response }
          ))
        })
      }
    }
  }
}