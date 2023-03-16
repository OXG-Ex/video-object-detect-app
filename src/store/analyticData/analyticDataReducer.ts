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
        setIsEventsLoading: (state, action: PayloadAction<boolean>) => {
            state.isEventsLoading = action.payload;
        },
        setEventRects: (state, action: PayloadAction<AnalyticEventModel[]>) => {
            state.eventRects = action.payload;
        }
    }
});

export const {
    setAnalyticEvents,
    setIsEventsLoading,
    setEventRects
} = analyticDataSlice.actions;

//selectors
export const getAnalyticEvents = (store: RootStoreType): AnalyticEventModel[] => store.analyticData.analyticEvents;
export const getIsEventsLoading = (store: RootStoreType): boolean => store.analyticData.isEventsLoading;
export const getEventRects = (store: RootStoreType): AnalyticEventModel[] => store.analyticData.eventRects;

export default analyticDataSlice.reducer;
