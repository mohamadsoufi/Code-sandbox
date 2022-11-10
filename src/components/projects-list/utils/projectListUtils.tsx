// Types 
import { ChangeStatusInBackendTypes } from "../projectListTypes";

export const updateProjectStatus = ({
    projectsData,
    projectName,
    value,
}: ChangeStatusInBackendTypes) => {
    projectsData?.map((project) => {
        let { projectName: nameInLoop } = project;
        if (nameInLoop === projectName) {
            project.status = value;
            return project;
        }
        return project;
    });
};
