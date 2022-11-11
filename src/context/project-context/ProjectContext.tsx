// React stuff
import { createContext, useState } from "react";
// Types
import {
    ProjectDataTypes,
    ProjectsTypes,
    ProjectsDataChildren,
} from "./types"
// data
import projectsDataBackend from "../../assets/projectsData.json";

export const ProjectContext = createContext({} as ProjectsTypes);

export const ProjectContextProvider = ({ children }: ProjectsDataChildren) => {
    const [projectsData, setProjectsData] = useState<ProjectDataTypes[] | null>(
        null
    );
    const [dataFromBackend, setDataFromBackend] =
        useState<ProjectDataTypes[]>(projectsDataBackend);
    const [inputValue, setInputValue] = useState<string>("");

    return (
        <ProjectContext.Provider
            value={ {
                projectsData,
                setProjectsData,
                inputValue,
                setInputValue,
                dataFromBackend,
            } }
        >
            { children }
        </ProjectContext.Provider>
    );
};
