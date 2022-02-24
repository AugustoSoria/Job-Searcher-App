import { Pipe, PipeTransform } from '@angular/core';
import { OfferModel } from '../models/offer.interface';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
  transform(offers: OfferModel[], pages: number): OfferModel[] {
      return offers.slice(pages, pages + 5)
  }
}
