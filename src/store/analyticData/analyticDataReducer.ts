import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnalyticEventModel } from "../../models/AnalyticEventModel";

import { RootStoreType } from "../rootReducer";
import { initialAnalyticState } from "./analyticDataModel";

const analyticDataSlice = createSlice({
    name: 'analyticData',
    initialState: initialAnalyticState,
    reducers: {
        setAnalyticEvents: (state, action: PayloadAction<AnalyticEventModel[]>) => {
            state.analyticEvents = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    }
});

export const {
    setAnalyticEvents,
    setIsLoading
} = analyticDataSlice.actions;

//selectors
export const getAnalyticEvents = (store: RootStoreType): AnalyticEventModel[] => store.analyticData.analyticEvents;
export const getIsLoading = (store: RootStoreType): boolean => store.analyticData.isLoading;

export default analyticDataSlice.reducer;
