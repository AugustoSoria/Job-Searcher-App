import { createAction, props } from "@ngrx/store";
import { OfferModel } from "src/app/models/offer.interface";

export const loadOffers = createAction(
    '[Offer List] Load offers'
);

export const loadedOffers = createAction(
    '[Offer List] Loaded success',
    props<{ offers: OfferModel[] }>()
)

export const filterOffers = createAction(
    '[Offer List] filter offers',
    props<{ filteredOffers: OfferModel[] }>()
)