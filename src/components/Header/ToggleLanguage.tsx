import { Menu, Transition } from '@headlessui/react'
import { Fragment, useContext } from 'react'
import { ArrowBottom } from '../../icons/ArrowBottom'
import AppContext from '../../context/appProvider'

export const ToggleLanguage = () => {
  const { toggleLanguage,language } = useContext(AppContext)
  return (
    <div className="">
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className=" w-full justify-center flex rounded-md gap-2 k bg-opacity-20 px-4 py-2 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {language.toUpperCase()}
            <ArrowBottom />

          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-20 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 dark:bg-slate-700/50 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => toggleLanguage('en')}
                    className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group dark:text-white flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    EN Ingles
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                  onClick={() => toggleLanguage('es')}
                    className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex dark:text-white w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    ES Espanol
                  </button>
                )}
              </Menu.Item>

            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}