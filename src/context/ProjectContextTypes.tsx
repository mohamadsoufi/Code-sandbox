export type ProjectDataTypes = {
    projectName: string
    description: string
    status: string
}
export type ProjectsTypes = {
    projectsData: ProjectDataTypes[]
    setProjectsData: React.Dispatch<React.SetStateAction<ProjectDataTypes[]>>
}
export type ProjectsDataChildren = {
    children: React.ReactNode

}