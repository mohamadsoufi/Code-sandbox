// React stuff
import { createContext, useState } from "react";
// Types
import { ErrorsContextChildren, ErrorsTypes } from "./ErrorsTypes";

export const ErrorsContext = createContext({} as ErrorsTypes);

export const ErrorContextProvider = ({ children }: ErrorsContextChildren) => {
    const [openNoProjectModal, setOpenNoProjectModal] = useState<boolean>(false);

    const handleOpen = () => setOpenNoProjectModal(true);
    const handleClose = () => setOpenNoProjectModal(false);

    return (
        <ErrorsContext.Provider
            value={ {
                openNoProjectModal,
                setOpenNoProjectModal,
                handleOpen,
                handleClose
            } }
        >
            { children }
        </ErrorsContext.Provider>
    );
};
