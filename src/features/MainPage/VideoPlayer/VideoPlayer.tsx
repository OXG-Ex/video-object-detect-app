import { useCallback, useEffect, useMemo, useRef } from "react";
import { VideoSizeModel } from "../../../models/VideoSizeModel";
import { updateRects } from "../../../sagas/analyticSagaActions";
import { getEventRects } from "../../../store/analyticData/analyticDataReducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getCurrentVideoSize, getOriginalVideoSize, setCurrentsVideoSize, setOriginalVideoSize } from "../../../store/videoData/videoPlayerDataReducer";
import './Player.scss';

export type VideoPlayerProps = {
    videoSrc: string;
    videoRef: React.RefObject<HTMLVideoElement>;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, videoRef }) => {
    const dispatch = useAppDispatch();
    // const [resizeMode, setResizeMode] = useState(true);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rects = useAppSelector(getEventRects);
    const currentVideoSize = useAppSelector(getCurrentVideoSize);
    const originalVideoSize = useAppSelector(getOriginalVideoSize);

    useEffect(() => {
        // const draw = SVG("#svg-events");
        // draw?.clear();

        rects.forEach(rect => {
            // if (resizeMode) {
            //     // ------------Exp calculation of zones------------//
            //     const newZone = calculateCoordinates(currentVideoSize.width, currentVideoSize.height, originalVideoSize.width, originalVideoSize.height, rect.left, rect.top, rect.width, rect.height);
            //     draw?.rect(newZone.width, newZone.height).stroke("#00FF00").fill({ opacity: 0 }).move(newZone.x, newZone.y);
            //     return;
            // }
            // draw?.rect(rect.width, rect.height).stroke("#00FF00").fill({ opacity: 0 }).move(rect.left, rect.top);
            const canvas = canvasRef.current as HTMLCanvasElement;
            const context = canvas.getContext('2d') as CanvasRenderingContext2D;


            context.fillStyle = '#000000';
            context.beginPath();
            context.rect(0, 0, rect.width, rect.height);
            context.fill();
            // canvas.width=
            // context.save();
        });


    }, [currentVideoSize.height, currentVideoSize.width, originalVideoSize.height, originalVideoSize.width, rects]);

    const onLoadedMetaData = useCallback((e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
        dispatch(setOriginalVideoSize({
            height: (e.target as HTMLVideoElement).videoHeight,
            width: (e.target as HTMLVideoElement).videoWidth
        }));
    }, [dispatch]);

    const onWindowResize = useCallback(() => {
        const videoPlayerSize = document.querySelector("#video-player")?.getBoundingClientRect();
        console.log(videoPlayerSize);
        dispatch(setCurrentsVideoSize(videoPlayerSize as VideoSizeModel));
    }, [dispatch]);

    useEffect(() => {
        onWindowResize();
        window.addEventListener("resize", onWindowResize);
        return window.removeEventListener("resize", onWindowResize);
    }, [onWindowResize]);

    return <div id="video-container">
        <video
            ref={videoRef}
            src={videoSrc}
            id={"video-player"}
            controls={true}
            onTimeUpdate={(e) => { dispatch(updateRects(videoRef.current?.currentTime as number)); }}
            // height={resizeMode ? "100%" : undefined}
            // width={resizeMode ? "100%" : undefined}
            preload="auto"
            onLoadedMetadata={onLoadedMetaData}
            style={{ zIndex: 2 }}
            onResize={onWindowResize}
        />
        <canvas id="canvas-events" ref={canvasRef} />
        {/* <Checkbox title="Enable resize mode" checked={resizeMode} onChange={(e, checked) => { setResizeMode(checked); }} /> */}

    </div>;
};

export default VideoPlayer;
