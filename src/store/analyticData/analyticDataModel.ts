import { AnalyticEventModel } from "../../models/AnalyticEventModel";
import { AnalyticEventZoneModel } from "../../models/AnalyticEventZoneModel";

export const initialAnalyticState = {
    analyticEvents: [] as AnalyticEventModel[],
    isLoading: false,
    eventRects: new Map<number, AnalyticEventZoneModel>()
};
