import { AnalyticEventModel } from "../../models/AnalyticEventModel";

export const initialAnalyticState = {
    analyticEvents: [] as AnalyticEventModel[],
    isLoading: false,
    eventRects: [] as AnalyticEventModel[]
};
