import { SOFTENED_GREEN } from "../../colors/colors";

export const projectsContainer = {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

export const listContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: SOFTENED_GREEN,
    padding: "36px 36px",
    maxHeight: "650px",
    overflow: "auto",
    borderRadius: "10px"
};

export const projectCard = {
    width: "340px",
    textAlign: "left",
    marginBottom: "10px",
    minHeight: "150px"
};

export const goBackButton = {
    alignSelf: "start",
    marginBottom: "10px",
};
