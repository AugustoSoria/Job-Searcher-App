import { OfferModel } from "./offer.interface";

export interface OfferState {
    loading: boolean,
    offers: ReadonlyArray<OfferModel>,
    filteredOffers: Array<OfferModel>,
};