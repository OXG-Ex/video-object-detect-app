import { useCallback, useMemo } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { Box, Card, CardContent, CardHeader, List, Typography } from "@mui/material";

import EventItem from "./EventItem/EventItem";
import { updateRects } from "../../../sagas/analyticEventsSagaActions";
import { getAnalyticEvents, getIsEventsLoading } from "../../../store/analyticData/analyticDataReducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

export type EventsListProps = {
    videoRef: React.RefObject<HTMLVideoElement>;
};

const EventsList: React.FC<EventsListProps> = ({ videoRef }) => {
    const dispatch = useAppDispatch();
    const events = useAppSelector(getAnalyticEvents);
    const isLoading = useAppSelector(getIsEventsLoading);

    const setCurrentVideoTime = useCallback((time: number) => {
        (videoRef.current as HTMLVideoElement).currentTime = time / 1000;
        dispatch(updateRects(time / 1000));
    }, [dispatch, videoRef]);

    const listItems = useMemo(() => {
        return events.map(x => <EventItem onClick={() => setCurrentVideoTime(x.timestamp)} timestamp={x.timestamp} key={x.id} />);
    }, [events, setCurrentVideoTime]);

    return <Card sx={{ width: "250px", display: "flex", flexDirection: "column" }}>
        <CardHeader
            title="Events"
            sx={{ backgroundColor: "primary.dark", textAlign: "center", textTransform: "uppercase" }}
        />
        <CardContent sx={{
            p: 0,
            height: "100%",
            "&:last-child": {
                pb: 0
            }
        }}>
            <List sx={{ p: 0, height: "100%" }}>
                <Scrollbars renderThumbVertical={() => <Box sx={{ backgroundColor: "primary.main", borderRadius: 5 }} />} style={{ height: '100%' }} autoHide>
                    {!isLoading ? listItems : <Typography variant="h6" sx={{ textAlign: "center", pt: "10px" }}>Loading...</Typography>}
                </Scrollbars>
            </List>
        </CardContent>
    </Card>;
};

export default EventsList;
