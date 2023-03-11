import { createTheme, } from '@mui/material/styles';

export const themeOptions = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: 'rgba(183,245,255,0.84)',
        },
        secondary: {
            main: '#8690bf',
        },
        background: {
            default: '#242e42',
            paper: '#1d2435',
        },
    },
    typography: {
        fontFamily: '"Raleway","Roboto", "Helvetica", "Arial", sans-serif',
    },
});
