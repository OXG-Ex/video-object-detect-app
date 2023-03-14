import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { Fab, Tooltip } from "@mui/material";

import { routes } from "../router/routes";

const HomeButton: React.FC = () => {
    const navigate = useNavigate();
    const onClick = useCallback(() => navigate(routes.root), [navigate]);

    return <Tooltip title="Go to main page">
        <Fab color="primary" aria-label="Update news" onClick={onClick} sx={{ position: "absolute", top: 16, right: 16 }}>
            <HomeIcon />
        </Fab>
    </Tooltip>;
};

export default HomeButton;
