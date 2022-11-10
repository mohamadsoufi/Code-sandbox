// Context
import { useContext, useEffect } from "react";
import { ProjectContext } from "../../context/project-context/ProjectContext";
// Mateial UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// React dom
import { useNavigate } from "react-router-dom";
import ProjectStatus from "./projectsStatus";
// Styles 
import {
    goBackButton,
    listContainer,
    projectCard,
    projectsContainer,

} from "./ProjectsListStyles";

const ProjectsList = () => {
    const phones = useMediaQuery('(max-width:426px)');

    const projectContext = useContext(ProjectContext);
    const { projectsData } = projectContext;

    const navigate = useNavigate();

    useEffect(() => {
        if (projectsData === null || projectsData.length === 0) navigate("/")
    }, [projectsData, navigate])

    return (

        <Box sx={ projectsContainer }>
            { projectsData?.length !== 0 ? (
                <Box sx={ phones ? { ...listContainer, padding: "10px 5px" } : listContainer }>
                    <Button
                        onClick={ () => navigate("/") }
                        sx={ goBackButton }
                        size={ phones ? "small" : "medium" }
                        variant="contained"
                    >
                        <ArrowBackIcon />
                    </Button>
                    { projectsData?.map((project) => {
                        const { id, projectName, description, status } = project;
                        return (
                            <Card key={ id } variant="outlined" sx={ projectCard }>
                                <CardContent>
                                    <Typography
                                        sx={ { fontSize: 20 } }
                                        variant="h5"
                                        component="div"
                                        gutterBottom
                                    >
                                        { projectName }
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        sx={ { fontSize: "20px" } }
                                        color="text.secondary"
                                    >
                                        { description }
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <ProjectStatus status={ status } projectName={ projectName } />
                                </CardActions>
                            </Card>
                        );
                    }) }
                </Box>
            ) : null }
        </Box>
    );
};

export default ProjectsList;
