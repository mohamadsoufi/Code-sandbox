// React stuff
import { createContext, useState } from "react";
// Types
import { ErrorsContextChildren, ErrorsTypes } from "./ErrorsTypes";

export const ErrorsContext = createContext({} as ErrorsTypes);

export const ErrorContextProvider = ({ children }: ErrorsContextChildren) => {
    const [unavailableProjects, setUnavailableProjects] = useState<boolean>(false);

    const handleClose = () => setUnavailableProjects(false);

    return (
        <ErrorsContext.Provider
            value={ {
                unavailableProjects,
                setUnavailableProjects,
                handleClose
            } }
        >
            { children }
        </ErrorsContext.Provider>
    );
};
