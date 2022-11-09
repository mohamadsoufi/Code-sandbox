import { ProjectDataTypes } from "../../context/ProjectContextTypes";

export type AreThereProjectsLogic = {
    inputValue: string;
    dataFromBackend: ProjectDataTypes[];
    setProjectsData: React.Dispatch<
        React.SetStateAction<ProjectDataTypes[] | null>
    >;
};

export const areThereProjectsLogic = ({
    inputValue,
    dataFromBackend,
    setProjectsData,
}: AreThereProjectsLogic) => {
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
