// React stuff 
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from "react";
// Material UI 
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
// Project Data 
import projectsDataBackend from "../assets/projectsData.json"
// Context 
import { ProjectContext } from '../context/ProjectContext';
import { ProjectDataTypes } from '../context/ProjectContextTypes';
import { areThereProjectsLogic } from './searchProjectsUtils';


const SearchProjectsForm = () => {
    const projectContext = useContext(ProjectContext);
    const { projectsData, setProjectsData } = projectContext

    const navigate = useNavigate()

    const [inputValue, setInputValue] = useState<string>("")
    const [searchIconNotEnabled, setSearchIconNotEnabled] = useState<boolean>(true)

    const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        projectsData?.length !== 0 ? navigate("/projects-list") : alert("Sorry there is no match")
    }

    useEffect(() => {
        areThereProjectsLogic({ inputValue, projectsDataBackend, setProjectsData })
    }, [inputValue, setProjectsData])



    useEffect(() => {
        projectsData ? setSearchIconNotEnabled(false) : setSearchIconNotEnabled(true)
    }, [projectsData])

    return (
        <Box>
            <Box
                component='form'
                onSubmit={ handleSubmit }
            >
                <TextField
                    id="input-with-icon-textfield"
                    label="TextField"
                    value={ inputValue }
                    onChange={ handleInputValue }
                    InputProps={ {
                        endAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    type='submit'
                                    disabled={ searchIconNotEnabled }>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    } }
                    variant="standard"
                />
            </Box>
        </Box>
    )
}

export default SearchProjectsForm