import { createContext } from "react";

const Context = createContext({
    token: null,
    setToken: (token) => {},
});

export default Context;