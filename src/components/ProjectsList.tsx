// Context
import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
// Mateial UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// React dom
import { useNavigate } from "react-router-dom";

const ProjectsList = () => {
    const projectContext = useContext(ProjectContext);
    const { projectsData, setProjectsData } = projectContext;

    const navigate = useNavigate();

    return (
        <Box
            sx={ {
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            } }
        >
            <Box
                sx={ {
                    height: "700px",
                    display: "flex",
                    flexDirection: "column",
                    width: "400px",
                    justifyContent: "center",
                    alignItems: "center",
                } }
            >
                <Button
                    onClick={ () => navigate("/") }
                    sx={ { alignSelf: "start" } }
                    size="small"
                    variant="contained"
                >
                    Go back
                </Button>
                { projectsData?.length !== 0 ? (
                    <Box
                        sx={ {
                            height: "500px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                        } }
                    >
                        { projectsData?.map((project) => {
                            const { id, projectName, description, status } = project;
                            return (
                                <Card
                                    key={ id }
                                    variant="outlined"
                                    sx={ { width: 400, textAlign: "left", marginBottom: "10px" } }
                                >
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
                                        <Button size="small">{ status }</Button>
                                    </CardActions>
                                </Card>
                            );
                        }) }
                    </Box>
                ) : null }
            </Box>
        </Box>
    );
};

export default ProjectsList;
