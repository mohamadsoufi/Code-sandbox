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
import { ProjectContext } from "../../context/project-context/ProjectContext";
import { ErrorsContext } from "../../context/errors-context/ErrorsContext";
// Utils
import { areThereProjectsLogic } from "./searchProjectsUtils";
// Styles 
import { formContainer, inputContainer } from "./searchProjectsStyles";
import UnavailableProjectsModal from "./unavailable-projects/UnavailableProjectsModal";

const SearchProjectsForm = () => {
    const phones = useMediaQuery('(max-width:605px)');
    const projectContext = useContext(ProjectContext);
    const {
        projectsData,
        setProjectsData,
        inputValue,
        setInputValue,
        dataFromBackend,
    } = projectContext;

    const errorContext = useContext(ErrorsContext);
    const {
        setAvailableProjects
    } = errorContext;
    const navigate = useNavigate();

    const [searchIconNotDisabled, setSearchIconDisabled] = useState<boolean>(true);


    const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        projectsData?.length !== 0
            ? navigate("/projects")
            : setAvailableProjects(true)
    };

    useEffect(() => {
        // This function handles wether we have a match from the projects after the user enters 3 letters
        areThereProjectsLogic({ inputValue, setProjectsData, dataFromBackend });
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
            <Box sx={ phones ? { ...inputContainer, width: "100%" } : inputContainer }>
                <TextField
                    sx={ phones ? { width: "68%" } : { width: "400px" } }
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
