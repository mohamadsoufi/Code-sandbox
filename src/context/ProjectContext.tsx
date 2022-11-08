import { createContext, useState } from "react";
import { ProjectDataTypes, ProjectsTypes, ProjectsDataChildren } from "./ProjectContextTypes";
import { projectsDataBackend } from "../assets/projectsData"

export const ProjectContext = createContext({} as ProjectsTypes);

export const ProjectContextProvider = ({ children }: ProjectsDataChildren) => {

    const [projectsData, setProjectsData] = useState<ProjectDataTypes[]>(projectsDataBackend)

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