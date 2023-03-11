import { put, takeLatest } from "redux-saga/effects";

import { setIsLoading } from "../store/analyticData/analyticDataReducer";
import { loadAnalyticEvents } from "./analyticSagaActions";


export const analyticSagas = [
    takeLatest(loadAnalyticEvents, watchLoadingAnalyticEvents),
];

// const eventsApiFetch = (): Promise<AnalyticEventModel[]> => fetch().then(res => res.json());

function* watchLoadingAnalyticEvents(): Generator {
    try {
        yield put(setIsLoading(true));
        //Loading Events here
        yield put(setIsLoading(false));
    }
    catch (error) {
        console.error(error);
    }
}
