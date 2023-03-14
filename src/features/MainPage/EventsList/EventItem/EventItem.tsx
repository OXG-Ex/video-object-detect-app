import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import moment from "moment";

type EventItemProps = {
    onClick: () => void;
    timestamp: number;
};

const EventItem: React.FC<EventItemProps> = ({ onClick, timestamp }) => <ListItem disablePadding>
    <ListItemButton onClick={onClick}>
        <ListItemText sx={{ textAlign: "center" }}>
            {moment(timestamp).format("mm:ss:ms")}
        </ListItemText>
    </ListItemButton>
</ListItem>;

export default EventItem;
