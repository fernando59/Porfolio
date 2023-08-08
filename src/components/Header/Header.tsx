import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../../context/themeProvider";
import { MoonIcon } from "../../icons/MoonIcon";
import { SunIcon } from "../../icons/SunIcon";
import { ToggleTheme } from "./ToggleTheme";
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";

export const Header = () => {
  const { t } = useTranslation('', { keyPrefix: 'home' })
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <header
      className={`dark:bg-gray-800 dark:text-white relative `}
    >
      <div className="flex justify-between w-full p-4 items-center mx-auto md:container">

        <h1 className="text-red text-3xl font-bold underline  ">Fernando Mercado</h1>
        <nav className="hidden dark:text-white  gap-10 lg:flex">
          <a href="#home">{t('home')}</a>
          <a href="#home">{t('experience')}</a>
          <a href="#home">{t('about_me')}</a>
          <a href="#home">{t('contact')}</a>
        </nav>
        <div className='-mr-1 lg:hidden'>
          <MobileNavigation />
        </div>
        <div className="gap-2 items-center justify-center hidden lg:flex">
          <SunIcon color={isDarkTheme ? '#4B5563' : '#000'} />
          <ToggleTheme />
          <MoonIcon color={isDarkTheme ? '#fff' : '#9CA3AF'} />
        </div>
      </div>

    </header>
  )
}
