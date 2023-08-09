
interface Props {
  title: string
  company: string
  description: string
}
export const CardCompany = ({ title, company, description }: Props) => {
  return (
    <div className="rounded overflow-hidden shadow-lg p-4 w-full">
      <h3 className="text-4xl font-bold dark:text-white ">{title}</h3>
      <h2 className="text-3xl inline-block py-1 px-2 font-bold rounded-md my-4 text-white bg-blue-600">{company}</h2>
      <p className="dark:text-white tracking-widest leading-6 ">{description}</p>
    </div>
  )
}
