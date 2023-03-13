import { Box, Card, CardContent, CardHeader, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import moment from "moment";
import Scrollbars from "react-custom-scrollbars-2";
import { getAnalyticEvents } from "../../../store/analyticData/analyticDataReducer";
import { useAppSelector } from "../../../store/hooks";

export type EventsListProps = {
    videoRef: React.RefObject<HTMLVideoElement>;
};

const EventsList: React.FC<EventsListProps> = ({ videoRef }) => {
    const events = useAppSelector(getAnalyticEvents);

    const setCurrentVideoTime = (time: number) => {
        (videoRef.current as HTMLVideoElement).currentTime = Math.floor(time / 1000);
    };

    const listItems = events.map(x => <ListItem disablePadding key={x.id}>
        <ListItemButton onClick={() => { setCurrentVideoTime(x.timestamp); }}>
            <ListItemText>
                {moment(x.timestamp).format("mm:ss:ms")}
            </ListItemText>
        </ListItemButton>
    </ListItem>);

    return <Card sx={{ width: "250px", flexShrink: 0, maxHeight: "460px" }}>
        <CardHeader
            title="Events"
            sx={{ backgroundColor: "primary.dark" }}
        />
        <CardContent sx={{ p: 0, maxHeight: "400px" }}>
            <Scrollbars renderThumbVertical={() => <Box sx={{ backgroundColor: "primary.main", borderRadius: 5 }} />} autoHeight autoHeightMax={"400px"}>
                <List>
                    {listItems}
                </List>
            </Scrollbars>

        </CardContent>

    </Card>
        ;
};

export default EventsList;
