import React, { createContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageCode } from '../types/language';

export interface ThemeContextData {
  isDarkTheme: boolean;
  language: string;
  toggleTheme: (theme?: boolean) => void;
  switchLanguage: (language: LanguageCode) => Promise<void>;
}

export const defaultThemeContextData: ThemeContextData = {
  isDarkTheme: false,
  language: 'es',
  toggleTheme: () => { },
  switchLanguage: async () => { },
};

const ThemeContext = createContext<ThemeContextData>(defaultThemeContextData);

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [state, setState] = useState<ThemeContextData>({ ...defaultThemeContextData });

  const { i18n } = useTranslation();

  const toggleTheme = (theme?: boolean) => {
    theme ? localStorage.setItem('theme', 'dark') : localStorage.removeItem('theme');

    setState((prevState) => ({
      ...prevState,
      isDarkTheme: theme !== undefined ? theme : !prevState.isDarkTheme,
    }));
  };

  const switchLanguage = async (language: LanguageCode) => {
    localStorage.setItem('language', language);
    await i18n.changeLanguage(language);

    setState((prevState) => ({
      ...prevState,
      language,
    }));
  };

  const contextValue: ThemeContextData = {
    ...state,
    toggleTheme,
    switchLanguage: async (language: LanguageCode) => await switchLanguage(language),
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;