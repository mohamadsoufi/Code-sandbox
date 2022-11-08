import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton, FormControl } from '@mui/material';
const SearchProjectsForm = () => {
    return (
        <Box>
            <FormControl>
                <TextField
                    id="input-with-icon-textfield"
                    label="TextField"
                    InputProps={ {
                        endAdornment: (
                            <InputAdornment position="start">
                                <IconButton disabled={ false }>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    } }
                    variant="standard"
                />
            </FormControl>
        </Box>
    )
}

export default SearchProjectsForm