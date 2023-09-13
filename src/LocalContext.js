import { createContext } from "react";

const defaultValue = {
    local: "en",
    setLocale: () =>{}
} 

export default createContext(defaultValue);