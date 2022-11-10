export type ErrorsContextChildren = {
    children: React.ReactNode;
};

export type ErrorsTypes = {
    unavailableProjects: boolean;
    setUnavailableProjects: React.Dispatch<React.SetStateAction<boolean>>;
    handleClose: () => void;
} 