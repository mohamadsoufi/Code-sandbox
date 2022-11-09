// This component still requires styling
// React stuff
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
// Material UI
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";
import { IconButton } from "@mui/material";
// Context
import { ProjectContext } from "../../context/ProjectContext";
// Utils
import { areThereProjectsLogic } from "./searchProjectsUtils";

const SearchProjectsForm = () => {
    const projectContext = useContext(ProjectContext);
    const {
        projectsData,
        setProjectsData,
        inputValue,
        setInputValue,
        dataFromBackend,
    } = projectContext;

    const navigate = useNavigate();

    const [searchIconNotEnabled, setSearchIconNotEnabled] =
        useState<boolean>(true);

    const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        projectsData?.length !== 0
            ? navigate("/projects")
            : alert("Sorry there is no match");
    };

    useEffect(() => {
        // This function handles wether we have a match from the projects after the user enters 3 letters
        areThereProjectsLogic({ inputValue, setProjectsData, dataFromBackend });
    }, [inputValue, setProjectsData, dataFromBackend]);

    useEffect(() => {
        projectsData
            ? setSearchIconNotEnabled(false)
            : setSearchIconNotEnabled(true);
    }, [projectsData]);

    return (
        <Box
            sx={ {
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            } }
            component="form"
            onSubmit={ handleSubmit }
        >
            <Box sx={ {
                width: "600px", height: "200px", backgroundColor: "#E7F0FF", display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px"
            } }>
                <TextField
                    sx={ { width: "400px", lineHeight: "25px" } }
                    id="input-with-icon-textfield"
                    label="Enter a Project"
                    value={ inputValue }
                    onChange={ handleInputValue }
                    InputProps={ {
                        endAdornment: (
                            <InputAdornment position="start">
                                <IconButton type="submit" disabled={ searchIconNotEnabled }>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    } }
                    variant="outlined"
                />
            </Box>

        </Box>
    );
};

export default SearchProjectsForm;
