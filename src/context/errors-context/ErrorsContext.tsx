// React stuff
import { createContext, useState } from "react";
// Types
import { ErrorsContextChildren, ErrorsTypes } from "./ErrorsTypes";

export const ErrorsContext = createContext({} as ErrorsTypes);

export const ErrorContextProvider = ({ children }: ErrorsContextChildren) => {
    const [availableProjects, setAvailableProjects] = useState<boolean>(false);

    const handleOpen = () => setAvailableProjects(true);
    const handleClose = () => setAvailableProjects(false);

    return (
        <ErrorsContext.Provider
            value={ {
                availableProjects,
                setAvailableProjects,
                handleOpen,
                handleClose
            } }
        >
            { children }
        </ErrorsContext.Provider>
    );
};
