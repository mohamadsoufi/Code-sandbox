export type ErrorsContextChildren = {
    children: React.ReactNode;
};

export type ErrorsTypes = {
    openNoProjectModal: boolean;
    setOpenNoProjectModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleOpen: () => void;
    handleClose: () => void;
} 