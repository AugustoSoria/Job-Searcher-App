import { createSelector } from "@ngrx/store";
import { OfferState } from "src/app/models/Offer.state";
import { AppState } from "../app.state";

export const selectOfferFeature = (state: AppState) => state.offers;

export const selectListOffers = createSelector(
    selectOfferFeature,
    (state: OfferState) => state.offers
)

export const selectLoading = createSelector(
    selectOfferFeature,
    (state: OfferState) => state.loading
)

export const selectListFilteredOffers = createSelector(
    selectOfferFeature,
    (state: OfferState) => state.filteredOffers
)