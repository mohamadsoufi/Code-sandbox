// Context
import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
// Mateial UI
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
const ProjectsList = () => {
    const projectContext = useContext(ProjectContext);
    const { projectsData, setProjectsData } = projectContext;
    return (
        <>
            { projectsData?.length !== 0 ? (
                <Box>
                    { projectsData?.map((project) => {
                        return (
                            <Box key={ project?.id }>
                                <Typography>{ project?.projectName }</Typography>
                            </Box>
                        )
                    }) }
                </Box>
            ) : null }
        </>
    );
};

export default ProjectsList;
