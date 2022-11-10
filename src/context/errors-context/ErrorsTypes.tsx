export type ErrorsContextChildren = {
    children: React.ReactNode;
};

export type ErrorsTypes = {
    availableProjects: boolean;
    setAvailableProjects: React.Dispatch<React.SetStateAction<boolean>>;
    handleOpen: () => void;
    handleClose: () => void;
} 