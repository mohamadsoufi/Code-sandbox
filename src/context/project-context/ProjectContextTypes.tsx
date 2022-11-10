export type ProjectDataTypes = {
    projectName: string;
    description: string;
    status: string;
    id: string;
};

export type ProjectsTypes = {
    projectsData: ProjectDataTypes[] | null;
    setProjectsData: React.Dispatch<
        React.SetStateAction<ProjectDataTypes[] | null>
    >;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    dataFromBackend: ProjectDataTypes[];
};

export type ProjectsDataChildren = {
    children: React.ReactNode;
};
