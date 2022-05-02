import React from "react";
import useStorage from "../../../utils/setStorage";
import Context from "./Context";

const Provider = ({children}) => {
    const [token, setToken] = useStorage('token');
    return(
        <Context.Provider
            value={{
                token,
                setToken,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Provider