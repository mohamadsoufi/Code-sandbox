// Material UI
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
// context
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../../context/project-context/ProjectContext";
// types
import { Props } from "./projectListTypes";
import { changeProjectStatusInBackend } from "./projectListUtils";

const ProjectStatus: React.FC<Props> = ({ status, projectName }) => {
    const [value, setValue] = useState(status);

    const projectContext = useContext(ProjectContext);
    const { projectsData } = projectContext;

    const handleChange = (event: React.SyntheticEvent, newValue: string) => setValue(newValue);

    useEffect(() => {
        changeProjectStatusInBackend({ projectsData, projectName, value });
        // })
    }, [projectsData, projectName, value]);

    return (
        <Box sx={ { width: "100%" } }>
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
};
export default ProjectStatus;
