
interface Props {
  title: string
  description: string
}
export const CardService = ({ title, description }: Props) => {
  return (
    <div className="flex h-[400px]  flex-col  max-w-[350px] justify-start items-center text-gray-600 dark:text-white shadow-lg rounded p-5">
      <h3 className="text-2xl pb-10 font-bold ">{title}</h3>
      <p className="dark:text-white tracking-widest leading-6">{description}</p>
    </div>
  )
}
