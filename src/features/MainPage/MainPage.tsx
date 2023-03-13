import { Card, CardContent, CardHeader, Container, Stack } from "@mui/material";
import { useEffect, useRef } from "react";
import { loadAnalyticEvents } from "../../sagas/analyticSagaActions";
import { useAppDispatch } from "../../store/hooks";
import EventsList from "./EventsList/EventsList";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

export const MainPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        dispatch(loadAnalyticEvents());
    }, [dispatch]);

    return <Container sx={{ pt: "30px", width: "fit-content" }} maxWidth={false}>
        <Card sx={{}} elevation={10}>
            <CardHeader
                title="Video with analytics data"
            />
            <CardContent>
                <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
                    <VideoPlayer videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" videoRef={videoRef} />
                    <EventsList videoRef={videoRef} />
                </Stack>
            </CardContent>
        </Card>

    </Container>;
};
