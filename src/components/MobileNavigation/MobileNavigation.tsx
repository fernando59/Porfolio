import { Popover, Transition } from '@headlessui/react'
import { Fragment, useContext } from 'react'
import AppContext from '../../context/appProvider'
import { MobileNavIcon } from './MobileNavIcon'
import { useTranslation } from 'react-i18next'
import { SunIcon } from '../../icons/SunIcon'
import { ToggleTheme } from '../Header/ToggleTheme'
import { MoonIcon } from '../../icons/MoonIcon'

export function MobileNavigation() {
  const { isDarkTheme, toggleLanguage,  language } = useContext(AppContext)
  const { t } = useTranslation('', { keyPrefix: 'home' })
  return (
    <Popover >
      <Popover.Button
        className='relative z-20 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none'
        aria-label='Toggle Navigation'
      >
        {({ open }) => <MobileNavIcon open={open} isDarkTheme={isDarkTheme} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Popover.Overlay className='fixed z-20 inset-0 dark:bg-slate-700/50 bg-slate-300/50' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            as='div'
            className='absolute z-20 inset-x-0 flex flex-col p-4 mt-4 text-lg tracking-tight origin-top dark:bg-gray-800 bg-white shadow-xl top-full rounded-2xl dark:text-white text-slate-900 ring-1 ring-slate-900/5'
          >
            <MobileNavLink href='#home'>{t('home')}</MobileNavLink>
            <MobileNavLink href='#experience'>{t('experience')}</MobileNavLink>
            <MobileNavLink href='#about_me'>{t('about_me')}</MobileNavLink>
            <MobileNavLink href='#contact'>{t('contact')}</MobileNavLink>
            <Popover.Button onClick={() => toggleLanguage(language === 'es' ? 'en' : 'es')} className='block w-full p-2 text-left'>
              {language.toUpperCase()} {t('language')}
            </Popover.Button>
            <div className="gap-2 items-center justify-center  flex">
              <SunIcon color={isDarkTheme ? '#4B5563' : '#000'} />
              <ToggleTheme />
              <MoonIcon color={isDarkTheme ? '#fff' : '#9CA3AF'} />
            </div>



          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}
interface MobileNavLinkProps {
  href: string
  children: any

}
function MobileNavLink({ href, children }: MobileNavLinkProps) {
  return (
    <Popover.Button as={'a'} href={href} className='block w-full p-2'>
      {children}
    </Popover.Button>
  )
}

