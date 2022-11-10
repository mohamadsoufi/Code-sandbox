// Material UI 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// Router 
import { useNavigate } from 'react-router-dom';
// Colors 
import { TEA_GREEN } from '../colors/colors';

export default function ButtonAppBar() {
    const navigate = useNavigate()

    const navigationItems = { display: "flex", justifyContent: "space-between" }

    return (
        <Box sx={ { flexGrow: 1 } }>
            <AppBar sx={ { backgroundColor: TEA_GREEN } } position="static">
                <Toolbar sx={ navigationItems }>
                    <Typography
                        sx={ { color: "black" } }
                        variant="h6">
                        goodcarbon
                    </Typography>
                    <IconButton
                        onClick={ () => navigate("/") }
                        size="small"
                        edge="start"
                        color="inherit"
                        sx={ { color: "black" } }
                    >
                        Search Projects
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}