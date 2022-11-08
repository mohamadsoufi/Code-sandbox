export type ProjectDataTypes = {
    projectName: string
    description: string
    status: string
}
export type ProjectsTypes = {
    projectsData: ProjectDataTypes[] | null
    setProjectsData: React.Dispatch<React.SetStateAction<ProjectDataTypes[] | null>>
}
export type ProjectsDataChildren = {
    children: React.ReactNode

}