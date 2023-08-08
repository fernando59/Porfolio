import { Popover, Transition } from '@headlessui/react'
import { Fragment, useContext } from 'react'
import ThemeContext from '../../context/themeProvider'
import { MobileNavIcon } from './MobileNavIcon'

export function MobileNavigation() {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <Popover>
      <Popover.Button
        className='relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none'
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
          <Popover.Overlay className='fixed inset-0 dark:bg-slate-700/50 bg-slate-300/50' />
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
            className='absolute inset-x-0 flex flex-col p-4 mt-4 text-lg tracking-tight origin-top dark:bg-gray-800 bg-white shadow-xl top-full rounded-2xl dark:text-white text-slate-900 ring-1 ring-slate-900/5'
          >
            <MobileNavLink href='#sueldos'>Inicio</MobileNavLink>
            <MobileNavLink href='#api'>Experiencia</MobileNavLink>
            <MobileNavLink href='#faq'>Sobre Mi </MobileNavLink>
            <MobileNavLink href='#faq'>Contactame </MobileNavLink>
            <MobileNavLink href='#faq'>Dark Mode</MobileNavLink>
            <MobileNavLink href='#faq'>Language</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}
interface MobileNavLinkProps {
  href: any
  children: any

}
function MobileNavLink({ href, children }: MobileNavLinkProps) {
  return (
    <Popover.Button as={'a'} href={href} className='block w-full p-2'>
      {children}
    </Popover.Button>
  )
}

