import { Box, Card, CardContent, CardHeader, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import moment from "moment";
import Scrollbars from "react-custom-scrollbars-2";
import { updateRects } from "../../../sagas/analyticSagaActions";
import { getAnalyticEvents } from "../../../store/analyticData/analyticDataReducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

export type EventsListProps = {
    videoRef: React.RefObject<HTMLVideoElement>;
};

const EventsList: React.FC<EventsListProps> = ({ videoRef }) => {
    const dispatch = useAppDispatch();
    const events = useAppSelector(getAnalyticEvents);

    const setCurrentVideoTime = (time: number) => {
        (videoRef.current as HTMLVideoElement).currentTime = time / 1000;
        dispatch(updateRects(time / 1000));
    };

    const listItems = events.map(x => <ListItem disablePadding key={x.id}>
        <ListItemButton onClick={() => { setCurrentVideoTime(x.timestamp); }}>
            <ListItemText sx={{ textAlign: "center" }}>
                {moment(x.timestamp).format("mm:ss:ms")}
            </ListItemText>
        </ListItemButton>
    </ListItem>);

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
                <Scrollbars renderThumbVertical={() => <Box sx={{ backgroundColor: "primary.main", borderRadius: 5 }} />} style={{ height: '100%' }}>
                    {listItems}
                </Scrollbars>
            </List>
        </CardContent>
    </Card>;
};

export default EventsList;
