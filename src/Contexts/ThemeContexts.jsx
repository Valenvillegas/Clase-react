import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({children}){
    const [isDarkmode, setIsDarkmode] = useState(false)

    useEffect(() => {
        if (isDarkmode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkmode]);
    
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