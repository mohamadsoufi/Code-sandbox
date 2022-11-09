import { changeStatusInBackendTypes } from "./projectListTypes";

export const changeProjectStatusInBackend = ({
    projectsData,
    projectName,
    value,
}: changeStatusInBackendTypes) => {
    projectsData?.map((project) => {
        let { projectName: nameInLoop } = project;
        if (nameInLoop === projectName) {
            project.status = value;
            return project;
        }
        return project;
    });
};
