import { createContext, useState } from "react";

export const contextApi = createContext();

const ApplicationContext = ({children}) => {
    const [login,setLogin] = useState(false);
    return(
        <contextApi.Provider value={[login,setLogin]}>{children}</contextApi.Provider>
    )
}
export default ApplicationContext;