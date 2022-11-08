// React stuff 
import { useNavigate } from 'react-router-dom';
import { createContext, useState, useContext } from "react";
// Material UI 
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
// Project Data 
import projectsDataBackend from "../assets/projectsData.json"
// Context 


const SearchProjectsForm = () => {

    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState<string>("")
    const [searchIconNotEnabled, setSearchIconNotEnabled] = useState<boolean>(true)


    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()

        if (inputValue.length >= 3) {
            projectsDataBackend?.map(project => {
                const { projectName } = project
                if (projectName?.startsWith(inputValue)) {
                    console.log(project);
                }
            })
        }


    }
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