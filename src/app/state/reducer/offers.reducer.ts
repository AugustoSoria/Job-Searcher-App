import { filterOffers, loadedOffers, loadOffers } from "../actions/offers.actions";
import { createReducer, on } from "@ngrx/store";
import { OfferState } from "src/app/models/Offer.state";

export const initialState: OfferState = { loading: false, offers: [], filteredOffers: []};

export const offersReducer = createReducer(
    initialState,
    on(loadOffers, (state) => { 
        return { ...state, loading: true}
    }),
    on(loadedOffers, (state, props) => {
        return { ...state, loading: false, offers: props.offers}
    }),
    on(filterOffers, (state, {filteredOffers}) => { 
        return { ...state, loading: false, filteredOffers}
    })
)