import { VideoSizeModel } from "../../models/VideoSizeModel";

export type ComponentRef = React.RefObject<HTMLElement>;
export const initialVideoPLayerDataState = {
    originalVideoSize: {} as VideoSizeModel,
    currentVideoSize: {} as VideoSizeModel,
    playerRef: {} as ComponentRef
};
