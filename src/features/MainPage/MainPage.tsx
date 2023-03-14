import { useEffect, useRef } from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";

import EventsList from "./EventsList/EventsList";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import { loadAnalyticEvents } from "../../sagas/analyticSagaActions";
import { useAppDispatch } from "../../store/hooks";

const videoSrc = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export const MainPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        dispatch(loadAnalyticEvents());
    }, [dispatch]);

    return <Container sx={{ pt: "30px", width: "fit-content" }} maxWidth={false}>
        <Card elevation={10}>
            <Typography variant="h5" sx={{ pt: "16px", textAlign: "center", textTransform: "uppercase" }}>Video with analytics events</Typography>
            <CardContent>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                    <VideoPlayer videoSrc={videoSrc} videoRef={videoRef} />
                    <EventsList videoRef={videoRef} />
                </Box>
            </CardContent>
        </Card>
    </Container>;
};
