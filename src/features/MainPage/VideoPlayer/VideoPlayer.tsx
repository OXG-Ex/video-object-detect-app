import { useCallback, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

import PlayerControls from "./PlayerControls/PlayerControls";
import PlayerSkeleton from "./PlayerSkeleton/PlayerSkeleton";
import { updateRects } from "../../../sagas/analyticSagaActions";
import { getEventRects } from "../../../store/analyticData/analyticDataReducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

export type VideoPlayerProps = {
    videoSrc: string;
    videoRef: React.RefObject<HTMLVideoElement>;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, videoRef }) => {
    const dispatch = useAppDispatch();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMetaDataLoaded, setIsMetaDataLoaded] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rects = useAppSelector(getEventRects);

    const playPauseVideo = useCallback(() => {
        if (!isMetaDataLoaded) {
            return;
        }

        isPlaying ? videoRef.current?.pause() : videoRef.current?.play();
        setIsPlaying(!isPlaying);
    }, [isMetaDataLoaded, isPlaying, videoRef]);

    const onTimeUpdate = useCallback(() => dispatch(updateRects(videoRef.current?.currentTime as number)), [dispatch, videoRef]);

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;

        if (context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.strokeStyle = '#00ff00';

            rects.forEach(rect => {
                const { left, top, width, height } = rect.zone;

                context.beginPath();
                context.rect(left, top, width, height);
                context.stroke();
            });
        }
    }, [rects]);

    const onLoadedMetaData = useCallback((e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
        const video = e.target as HTMLVideoElement;
        const canvas = canvasRef.current as HTMLCanvasElement;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        setIsMetaDataLoaded(true);
    }, []);

    return <Box sx={{ position: "relative" }}>
        {!isMetaDataLoaded && <PlayerSkeleton />}
        <video
            ref={videoRef}
            src={videoSrc}
            id={"video-player"}
            onTimeUpdate={onTimeUpdate}
            preload="metadata"
            onLoadedMetadata={onLoadedMetaData}
            hidden={!isMetaDataLoaded}
            data-testid="video-player"
        />
        <canvas data-testid="canvas-events" ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} onClick={playPauseVideo} />
        <PlayerControls videoRef={videoRef} isPlaying={isPlaying} playPauseCallback={playPauseVideo} />
    </Box>;
};

export default VideoPlayer;
