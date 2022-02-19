import { createContext, ReactNode, useEffect, useState } from 'react';

interface IThemeContextData {
    currentTheme: string;
    changeCurrentTheme: () => void;
}

interface IThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext({} as IThemeContextData);

export function ThemeProvider({ children }: IThemeProviderProps) {
    const [currentTheme, setCurrentTheme] = useState('light');

    useEffect(() => {
        if (localStorage.getItem('@move.it:theme') === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [currentTheme]);

    function setTheme(value) {
        localStorage.setItem('@move.it:theme', value);

        document.documentElement.className = value;
    }

    function changeCurrentTheme() {
        if (currentTheme === 'light') {
            setCurrentTheme('dark');
        } else {
            setCurrentTheme('light');
        }
    }

    return (
        <ThemeContext.Provider
            value={{
                currentTheme,
                changeCurrentTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
