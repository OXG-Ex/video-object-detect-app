import { PayloadAction } from "@reduxjs/toolkit";
import { all, put, select, takeEvery, takeLatest } from "redux-saga/effects";

import { AnalyticEventModel } from "../models/AnalyticEventModel";
import { getAnalyticEvents, pushEventRect, removeEventRectById, setAnalyticEvents, setIsEventsLoading } from "../store/analyticData/analyticDataReducer";
import { loadAnalyticEvents, updateRects } from "./analyticEventsSagaActions";


export const analyticEventsSagas = [
    takeLatest(loadAnalyticEvents, watchLoadingAnalyticEvents),
    takeEvery(updateRects, watchUpdatingRects)
];

const apiUrl = "http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd";
const eventsApiFetch = (): Promise<AnalyticEventModel[]> => fetch(apiUrl).then(res => res.json());

export function* watchLoadingAnalyticEvents(): Generator {
    try {
        yield put(setIsEventsLoading(true));
        //get events from api
        const events = (yield eventsApiFetch()) as AnalyticEventModel[];
        //Sort events
        events.sort((a, b) => a.timestamp - b.timestamp);

        yield put(setAnalyticEvents(events));
        yield put(setIsEventsLoading(false));
    }
    catch (error) {
        console.error(error);
    }
}

export function* watchUpdatingRects(action: PayloadAction<number>): Generator {
    try {
        //get timestamp in milliseconds
        const currentTimestamp = Math.floor(action.payload * 1000);
        const events = (yield select(getAnalyticEvents)) as AnalyticEventModel[];
        //Updating event rects for current timestamp
        yield all(events.map(x => {
            const endTimestamp = x.timestamp + x.duration;
            if (currentTimestamp >= x.timestamp && currentTimestamp <= endTimestamp) {
                return put(pushEventRect(x));
            }
            else {
                return put(removeEventRectById(x.id));
            }
        }));
    }
    catch (error) {
        console.error(error);
    }
}
