import { Card, CardContent, CardHeader, Container } from "@mui/material";
import { useEffect } from "react";
import { loadAnalyticEvents } from "../../sagas/analyticSagaActions";
import { useAppDispatch } from "../../store/hooks";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

export const MainPage: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadAnalyticEvents());
    }, [dispatch]);

    return <Container sx={{ pt: "30px" }}>

        <Card sx={{}} elevation={10}>
            <CardHeader
                title="Video with analytics data"
            />
            <CardContent>
                <VideoPlayer videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
            </CardContent>
        </Card>

    </Container>;
};
