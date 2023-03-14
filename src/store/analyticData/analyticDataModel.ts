import { AnalyticEventModel } from "../../models/AnalyticEventModel";

export const initialAnalyticState = {
    analyticEvents: [] as AnalyticEventModel[],
    isEventsLoading: false,
    eventRects: [] as AnalyticEventModel[]
};
