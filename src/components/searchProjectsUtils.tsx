import { ProjectDataTypes } from "../context/ProjectContextTypes"

export type AreThereProjectsLogic = {
    inputValue: string
    projectsDataBackend: ProjectDataTypes[]
    setProjectsData: React.Dispatch<React.SetStateAction<ProjectDataTypes[] | null>>
}

export const areThereProjectsLogic = ({ inputValue, projectsDataBackend, setProjectsData }: AreThereProjectsLogic) => {
    console.log(projectsDataBackend);

    if (inputValue.length >= 3) {
        const data: ProjectDataTypes[] | null = projectsDataBackend?.filter(project => {
            const { projectName } = project
            if (projectName?.toLowerCase().startsWith(inputValue.toLowerCase())) {
                return project
            }
            return null
        })
        return setProjectsData(data)
    }
    return setProjectsData(null)
    // }
}
// export const kalb = "ameer"