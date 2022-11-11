import { ProjectDataTypes } from "../../../context/project-context/ProjectContextTypes";
import { words } from "lodash";
export type SelectAvailableProjects = {
    inputValue: string;
    dataFromBackend: ProjectDataTypes[];
    setProjectsData: React.Dispatch<
        React.SetStateAction<ProjectDataTypes[] | null>
    >;
};

export const selectAvailableProjects = ({
    inputValue,
    dataFromBackend,
    setProjectsData,
}: SelectAvailableProjects) => {
    if (inputValue.length >= 3) {
        const data: ProjectDataTypes[] | null = dataFromBackend?.filter(
            (project) => {
                const { projectName } = project;
                const lowerInputVal = inputValue.toLowerCase()
                const lowerProjectName = projectName.toLowerCase()
                const projectMatch = words(lowerInputVal).filter((word) => lowerProjectName.includes(word)).length > 0
                // this will match words in the input with words in the projects names
                if (projectMatch) {
                    return project;
                }
                return null;
            }
        );
        return setProjectsData(data);
    }
    return setProjectsData(null);
};