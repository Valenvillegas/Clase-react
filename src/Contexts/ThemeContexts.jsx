import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({children}){
    const [isDarkmode, setIsDarkmode] = useState(true)
    return(
        <ThemeContext.Provider value={
            {
                isDarkmode: isDarkmode
            }
        }>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider