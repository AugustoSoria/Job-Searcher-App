import { ActionReducerMap } from "@ngrx/store";
import { OfferState } from "../models/Offer.state";
import { offersReducer } from "./reducer/offers.reducer";

export interface AppState {
    offers: OfferState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    offers: offersReducer
}