interface MobileNavIconProps {
  open: boolean
  isDarkTheme:boolean
}
export const MobileNavIcon =({ open ,isDarkTheme}: MobileNavIconProps) =>{
  return (
    <svg
      aria-hidden='true'
      className={`h-3.5 w-3.5 overflow-visible ${isDarkTheme ?'stroke-slate-100 ':'stroke-slate-700'} stro  `}
      fill='none'
      strokeWidth={2}
      strokeLinecap='round'
    >
      <path
        d='M0 1H14M0 7H14M0 13H14'
        className={` origin-center transition ${open && 'scale-90 opacity-0'} `}
      />
      <path
        d='M2 2L12 12M12 2L2 12'
        className={`origin-center transition ${!open && 'scale-90 opacity-0'}`}
      />
    </svg>
  )
}