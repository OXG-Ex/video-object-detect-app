import { AnalyticEventZoneModel } from "./AnalyticEventZoneModel";

export type AnalyticEventModel = {
    id: number,
    timestamp: number,
    duration: number,
    zone: AnalyticEventZoneModel;
};
