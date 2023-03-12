import { SVG } from "@svgdotjs/svg.js";
import { useCallback, useEffect, useRef } from "react";
import { VideoSizeModel } from "../../../models/VideoSizeModel";
import { useAppDispatch } from "../../../store/hooks";
import { setCurrentsVideoSize, setOriginalVideoSize } from "../../../store/videoData/videoPlayerDataReducer";

interface VideoPlayerProps {
    videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
    const dispatch = useAppDispatch();
    const videoRef = useRef<HTMLVideoElement>(null);

    const onLoadedMetaData = useCallback((e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
        dispatch(setOriginalVideoSize({
            height: (e.target as HTMLVideoElement).videoHeight,
            width: (e.target as HTMLVideoElement).videoWidth
        }));
    }, [dispatch]);

    const onWindowResize = useCallback(() => {
        const videoPlayerSize = document.querySelector("#video-player")?.getBoundingClientRect();
        dispatch(setCurrentsVideoSize(videoPlayerSize as VideoSizeModel));
    }, [dispatch]);

    useEffect(() => {

        onWindowResize();
        const draw = SVG().addTo('#video-container');
        draw.rect(100, 100).move(50, 50);
        window.addEventListener("resize", onWindowResize);
        return window.removeEventListener("resize", onWindowResize);
    }, [onWindowResize]);

    return <div id="video-container">
        <video
            ref={videoRef}
            src={videoSrc}
            id={"video-player"}
            controls={true}
            onTimeUpdate={(e) => { console.log(videoRef.current?.currentTime); }}
            height="100%"
            width="100%"
            preload="auto"
            onLoadedMetadata={onLoadedMetaData}
        />
    </div>;
};

export default VideoPlayer;
