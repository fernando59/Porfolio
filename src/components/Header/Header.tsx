import { useContext } from "react";
import { useTranslation } from "react-i18next";
import AppContext from "../../context/appProvider";
import { MoonIcon } from "../../icons/MoonIcon";
import { SunIcon } from "../../icons/SunIcon";
import { ToggleTheme } from "./ToggleTheme";
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";
import { ToggleLanguage } from "./ToggleLanguage";
import { IconPage } from "./IconPage";

export const Header = () => {
  const { t } = useTranslation('', { keyPrefix: 'home' })
  const { isDarkTheme } = useContext(AppContext)


  return (
    <header
      className={`dark:bg-gray-800 dark:text-white  relative `}
    >
      <div className="flex justify-between w-full p-4 items-center mx-auto md:container">
        <IconPage />

        <nav className="hidden dark:text-white font-medium  gap-20 lg:flex">
          <a className="hover:text-blue-600" href="#home">{t('home')}</a>
          <a className="hover:text-blue-600" href="#experience">{t('experience')}</a>
          <a className="hover:text-blue-600" href="#services">{t('services')}</a>
          <a className="hover:text-blue-600" href="#technologies">{t('technology')}</a>
        </nav>

        <div className="gap-2 items-center justify-center hidden lg:flex">
          <ToggleLanguage />
          <SunIcon color={isDarkTheme ? '#4B5563' : '#000'} />
          <ToggleTheme />
          <MoonIcon color={isDarkTheme ? '#fff' : '#9CA3AF'} />
        </div>

        {/* MOBILE NAVIGATION */}
        <div className='-mr-1 lg:hidden'>
          <MobileNavigation />
        </div>
      </div>

    </header>
  )
}
