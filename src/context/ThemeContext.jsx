import { useState, useEffect, createContext, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [ theme, setTheme ] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return prefersDark ? 'dark' : 'light';
        }
    }); //Default Theme


    useEffect(() => {
        // update the body class to the theme
        document.querySelector('body').classList = theme;
        localStorage.setItem('theme', theme); //save to local storage
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
};