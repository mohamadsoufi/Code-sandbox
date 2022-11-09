// Material UI 
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// context 
import { ProjectContext } from '../../context/ProjectContext';
import { useContext } from "react";

interface Props {
    status: string
}

const ColorTabs: React.FC<Props> = ({ status }) => {
    const [value, setValue] = React.useState(status);

    const projectContext = useContext(ProjectContext);
    const { projectsData, setProjectsData } = projectContext;

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        console.log(newValue);

        setValue(newValue);
    };

    return (
        <Box sx={ { width: '100%' } }>
            <Tabs
                value={ value }
                onChange={ handleChange }
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="created" label="Created" />
                <Tab value="approved" label="Approved" />
                <Tab value="published" label="Published" />
            </Tabs>
        </Box>
    );
}
export default ColorTabs