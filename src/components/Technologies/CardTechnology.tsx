


interface Props{
  children:any
  title:string
}
export const CardTechnology = ({children,title}:Props) => {
  return (
    <div className="flex flex-col justify-center items-center text-gray-600 dark:text-white shadow-lg rounded p-5 ">
      {children}
      <span className="text-2xl font-bold text-blue-600 dark:text-white pt-4 ">{title}</span>
    </div>
  )
}
