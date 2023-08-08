import React, { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageCode } from '../types/language';

export interface ThemeContextData {
  isDarkTheme: boolean;
  language: string;
  toggleTheme: (theme?: boolean) => void;
  toggleLanguage: (language: LanguageCode) => Promise<void>;
}

export const defaultThemeContextData: ThemeContextData = {
  isDarkTheme: false,
  language: 'es',
  toggleTheme: () => { },
  toggleLanguage: async () => { },
};

const AppContext = createContext<ThemeContextData>(defaultThemeContextData);

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {

  const [state, setState] = useState<ThemeContextData>(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');
    return {
      ...defaultThemeContextData,
      isDarkTheme: savedTheme === 'dark',
      language: savedLanguage || defaultThemeContextData.language,
    };
  });

  const { i18n } = useTranslation();

  /**
   * Change the theme
   * @param theme
   */
  const toggleTheme = (theme?: boolean) => {
    theme ? localStorage.setItem('theme', 'dark') : localStorage.removeItem('theme');

    setState((prevState) => ({
      ...prevState,
      isDarkTheme: theme !== undefined ? theme : !prevState.isDarkTheme,
    }));
  };

  /**
   * Change the language 
   * @param language 
   */
  const toggleLanguage = async (language: LanguageCode) => {
    localStorage.setItem('language', language);
    await i18n.changeLanguage(language);

    setState((prevState) => ({
      ...prevState,
      language,
    }));
  };
  const changeLanguage = async (language: LanguageCode) => {
    await i18n.changeLanguage(language);
  }

  useEffect(() => {
    localStorage.setItem('theme', state.isDarkTheme ? 'dark' : '');
    changeLanguage(state.language)
  }, [state.isDarkTheme, state.language]);



  const contextValue: ThemeContextData = {
    ...state,
    toggleTheme,
    toggleLanguage: async (language: LanguageCode) => await toggleLanguage(language),
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContext;