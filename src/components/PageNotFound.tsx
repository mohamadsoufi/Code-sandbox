// MATERIAL UI
import { Box, Button, Typography } from "@mui/material";
// Router
import { useNavigate } from "react-router-dom";
import { BLACK, WHITE } from "../colors/colors";
// Colors
const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: WHITE,
};

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <Box sx={ container }>
            <Typography variant="h1" style={ { color: BLACK } }>
                404
            </Typography>
            <Typography variant="h6" style={ { color: BLACK } }>
                The page you’re looking for doesn’t exist.
            </Typography>
            <Button
                onClick={ () => navigate("/") }
                sx={ { marginTop: "10px" } }
                variant="contained"
            >
                Back Home
            </Button>
        </Box>
    );
};
export default PageNotFound;
