import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
    const navigate = useNavigate()

    return (
        <Box sx={ { flexGrow: 1 } }>
            <AppBar sx={ { backgroundColor: "#DC493A" } } position="static">
                <Toolbar>
                    <IconButton
                        onClick={ () => navigate("/") }
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={ { mr: 2 } }
                    >
                        Search Projects
                    </IconButton>
                    <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
                        goodcarbon
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}