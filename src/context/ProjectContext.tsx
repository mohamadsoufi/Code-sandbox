// React stuff 
import { createContext, useState } from "react";
// Types 
import { ProjectDataTypes, ProjectsTypes, ProjectsDataChildren } from "./ProjectContextTypes";

export const ProjectContext = createContext({} as ProjectsTypes);

export const ProjectContextProvider = ({ children }: ProjectsDataChildren) => {

    const [projectsData, setProjectsData] = useState<ProjectDataTypes[] | null>(null)

    return (

        <ProjectContext.Provider
            value={ {
                projectsData, setProjectsData
            } }
        >
            { children }
        </ProjectContext.Provider>
    )
}