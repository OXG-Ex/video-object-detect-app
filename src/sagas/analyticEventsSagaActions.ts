import { createAction } from "@reduxjs/toolkit";

export const loadAnalyticEvents = createAction("LOAD_ANALYTIC_EVENTS");
export const updateRects = createAction<number>("UPDATE_VIDEO_RECTS");

