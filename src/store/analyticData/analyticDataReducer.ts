import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AnalyticEventModel } from "../../models/AnalyticEventModel";
import { AnalyticEventZoneModel } from "../../models/AnalyticEventZoneModel";
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
        pushEventRect: (state, action: PayloadAction<{ id: number, rect: AnalyticEventZoneModel; }>) => {
            state.eventRects.set(action.payload.id, action.payload.rect);
        },
        removeEventRect: (state, action: PayloadAction<number>) => {
            state.eventRects.delete(action.payload);
        },
    }
});

export const {
    setAnalyticEvents,
    setIsLoading,
    pushEventRect,
    removeEventRect
} = analyticDataSlice.actions;

//selectors
export const getAnalyticEvents = (store: RootStoreType): AnalyticEventModel[] => store.analyticData.analyticEvents;
export const getIsLoading = (store: RootStoreType): boolean => store.analyticData.isLoading;
export const getEventRects = (store: RootStoreType): Map<number, AnalyticEventZoneModel> => store.analyticData.eventRects;

export default analyticDataSlice.reducer;
