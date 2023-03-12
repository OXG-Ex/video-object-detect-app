import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VideoSizeModel } from "../../models/VideoSizeModel";

import { RootStoreType } from "../rootReducer";
import { initialVideoPLayerDataState } from "./videoPlayerDataModel";

const videoPlayerDataSlice = createSlice({
    name: 'videoPlayerData',
    initialState: initialVideoPLayerDataState,
    reducers: {
        setOriginalVideoSize: (state, action: PayloadAction<VideoSizeModel>) => {
            state.originalVideoSize = action.payload;
        },
        setCurrentsVideoSize: (state, action: PayloadAction<VideoSizeModel>) => {
            state.currentVideoSize = action.payload;
        },
    }
});

export const {
    setOriginalVideoSize,
    setCurrentsVideoSize
} = videoPlayerDataSlice.actions;

//selectors
export const getOriginalVideoSize = (store: RootStoreType): VideoSizeModel => store.videoPlayerData.originalVideoSize;
export const getCurrentsVideoSize = (store: RootStoreType): VideoSizeModel => store.videoPlayerData.currentVideoSize;

export default videoPlayerDataSlice.reducer;
