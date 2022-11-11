// Types 
import { ProjectDataTypes } from "../../context/project-context/ProjectContextTypes";

export interface Props {
    status: string;
    projectName: string
}
export type ChangeStatusInBackendTypes = {
    projectsData: ProjectDataTypes[] | null
    projectName: string
    value: string
}