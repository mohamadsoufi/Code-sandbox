// Material UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// Context
import { useContext } from "react";
import { ErrorsContext } from "../../../context/errors-context/ErrorsContext";
// Styles 
import { closeModalButton, modalContainer } from "./styles";


const UnavailableProjectsModal = () => {
    const errorContext = useContext(ErrorsContext);
    const { availableProjects, handleClose } = errorContext;

    return (
        <div>
            <Modal open={ availableProjects } onClose={ handleClose }>
                <Box sx={ modalContainer }>
                    <Typography variant="h6" component="h2">
                        Sorry There are no matches for the projects you entered.
                    </Typography>
                    <Button sx={ closeModalButton } variant="outlined" onClick={ handleClose }>
                        Close
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};
export default UnavailableProjectsModal;
