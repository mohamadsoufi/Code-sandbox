// React stuff
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
// Material UI
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";
import { IconButton } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
// Context
import { ErrorsContext } from "../../context/errors-context/ErrorsContext";
import { ProjectContext } from "../../context/project-context/ProjectContext";
// Utils
import { selectAvailableProjects } from "./utils/utils";
// Styles 
import { formContainer, inputContainer } from "./styles";
// Component 
import UnavailableProjectsModal from "./unavailable-projects";

const SearchProjectsForm = () => {
    const mobile = useMediaQuery('(max-width:605px)');
    const useProjectContext = useContext(ProjectContext);
    const {
        projectsData,
        setProjectsData,
        inputValue,
        setInputValue,
        dataFromBackend,
    } = useProjectContext;

    const useErrorContext = useContext(ErrorsContext);
    const {
        setUnavailableProjects
    } = useErrorContext;
    const navigate = useNavigate();

    const [searchIconNotDisabled, setSearchIconDisabled] = useState<boolean>(true);


    const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setInputValue(value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        projectsData?.length !== 0
            ? navigate("/projects")
            : setUnavailableProjects(true)
    };

    useEffect(() => {
        // This function handles wether we have a match from the projects after the user enters 3 letters
        selectAvailableProjects({ inputValue, setProjectsData, dataFromBackend });
    }, [inputValue, setProjectsData, dataFromBackend]);

    useEffect(() => {
        projectsData
            ? setSearchIconDisabled(false)
            : setSearchIconDisabled(true);
    }, [projectsData]);

    return (
        <Box
            sx={ formContainer }
            component="form"
            onSubmit={ handleSubmit }
        >
            <Box sx={ mobile ? { ...inputContainer, width: "100%" } : inputContainer }>
                <TextField
                    sx={ mobile ? { width: "68%" } : { width: "400px" } }
                    label="Enter a Project"
                    value={ inputValue }
                    onChange={ handleInputValue }
                    InputProps={ {
                        endAdornment: (
                            <InputAdornment position="start">
                                <IconButton type="submit" disabled={ searchIconNotDisabled }>
                                    <SearchIcon color={ searchIconNotDisabled ? "disabled" : "primary" } />
                                </IconButton>
                            </InputAdornment>
                        ),
                    } }
                    variant="outlined"
                />
            </Box>
            <UnavailableProjectsModal />
        </Box>
    );
};

export default SearchProjectsForm;
