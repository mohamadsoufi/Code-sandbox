// React stuff 
import { useNavigate } from 'react-router-dom';
import { createContext, useState, useContext, useEffect } from "react";
// Material UI 
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
// Project Data 
import projectsDataBackend from "../assets/projectsData.json"
import { ProjectContext } from '../context/ProjectContext';
// Context 


const SearchProjectsForm = () => {
    const projectContext = useContext(ProjectContext);
    const { projectsData, setProjectsData } = projectContext

    const navigate = useNavigate()

    const [inputValue, setInputValue] = useState<string>("")
    const [searchIconNotEnabled, setSearchIconNotEnabled] = useState<boolean>(true)

    const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
    }

    useEffect(() => {
        if (inputValue.length >= 3) {
            const data: any = projectsDataBackend?.filter(project => {
                const { projectName } = project
                if (projectName?.startsWith(inputValue)) {
                    return project
                }
                return null
            })
            return setProjectsData(data)
        }
        return setProjectsData(null)
    }, [inputValue, setProjectsData])



    useEffect(() => {
        if (projectsData) {
            console.log(projectsData);

            return setSearchIconNotEnabled(false)
        }
        return setSearchIconNotEnabled(true)
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
                                    //  onClick={ () => navigate("/projects-list") }
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