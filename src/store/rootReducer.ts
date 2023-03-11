import { CombinedState, combineReducers, Reducer } from "redux";
import { initialAnalyticState } from "./analyticData/analyticDataModel";
import analyticDataReducer from "./analyticData/analyticDataReducer";

export const initialState = {
    analyticData: initialAnalyticState,
};

export type RootStoreType = typeof initialState;

export const createRootReducer = (): Reducer<CombinedState<RootStoreType>> => combineReducers<RootStoreType>({
    analyticData: analyticDataReducer
});
