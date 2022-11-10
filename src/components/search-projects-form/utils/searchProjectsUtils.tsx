import { ProjectDataTypes } from "../../../context/project-context/ProjectContextTypes";

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
                if (projectName?.toLowerCase().startsWith(inputValue.toLowerCase())) {
                    return project;
                }
                return null;
            }
        );
        return setProjectsData(data);
    }
    return setProjectsData(null);
};
