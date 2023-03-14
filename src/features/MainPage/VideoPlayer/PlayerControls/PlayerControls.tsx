import { useCallback, useEffect, useState } from "react";
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { IconButton, LinearProgress, Stack, Typography } from "@mui/material";
import moment from 'moment';

export type PlayerControlsProps = {
    videoRef: React.RefObject<HTMLVideoElement>;
    playPauseCallback: () => void;
    isPlaying: boolean;
};

const PlayerControls: React.FC<PlayerControlsProps> = ({ videoRef, playPauseCallback, isPlaying }) => {
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState("00:00");

    const updateProgress = useCallback(() => {
        const videoTime = videoRef.current?.currentTime;
        const videoLength = videoRef.current?.duration;
        setProgress(videoTime * 100 / videoLength);
        setCurrentTime(moment(videoTime * 1000).format("mm:ss"));
    }, [videoRef]);

    const onProgressClick = useCallback((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        const boundingRect = event.currentTarget.getBoundingClientRect();
        const clickX = event.clientX - boundingRect.left;
        const progressBarWidth = boundingRect.width;
        const percentage = (clickX / progressBarWidth) * 100;
        videoRef.current.currentTime = (percentage / 100) * videoRef.current.duration;
    }, [videoRef]);

    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement?.addEventListener("timeupdate", updateProgress);
        return () => videoElement?.removeEventListener("timeupdate", updateProgress);
    }, [updateProgress, videoRef]);

    return <Stack direction="row" alignItems="center" gap="10px">
        <IconButton onClick={playPauseCallback}>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <LinearProgress variant="determinate" value={progress} onClick={onProgressClick} sx={{ cursor: "pointer", width: "100%" }} />
        <Typography>{currentTime}</Typography>
    </Stack>;
};

export default PlayerControls;
