import EncoraLogo from '../../assets/imgs/encora_logo.jpg'
import WorkanaLogo from '../../assets/imgs/logo_workana.png'
import MsLogo from '../../assets/imgs/logo-ms.png'

import { CardCompany } from './CardCompany'
export const Experience = () => {
  return (
    <section id="experience" className='h-max mx-auto container'>

      <h2 className="text-center text-6xl font-bold dark:text-white pb-10 border-b-orange-50 "><span className='border-solid 
        border-b-4 border-blue-600'>Experience</span></h2>


      <div className="flex flex-col lg:flex-row justify-between gap-20 mt-10">
        <CardCompany
          title='Full Stack Developer'
          company='Encora'
          description='Collaboration in the development of a workspace and parking reservation system. Additionally, I also developed an
          attendance marking system for employees and implement clean architecture for the project. Technologies used are React,
          Net Core, Docker and Flutter.
          '
        />
        <div className="w-full flex justify-center items-center">
          <img className="w-4/6 rounded-md" src={EncoraLogo} alt="Encora Logo" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  justify-between gap-20 mt-10">
        <CardCompany
          title='Freelance'
          company='Workana'
          description='Specialized freelance in the development of web applications using .NET Core and React JS. Extensive experience in creating
          efficient and scalable solutions, combining the power of backend with .NET Core and the interactivity of frontend with
          React JS. Capable of working independently, adapting to client requirements, and delivering high-quality projects on time.'
        />
        <div className="w-full flex justify-center items-center">
          <img className="w-4/6 rounded-md" src={WorkanaLogo} alt="Workana Logo" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  justify-between items-center gap-20 mt-10">
        <CardCompany
          title='Junior Developer'
          company='Mil Soluciones'
          description='I collaborated in the development of request modules using Angular on the frontend and Asp Core on the backend,
          ensuring efficient and scalable solutions. I contributed to the backend development using Laravel and handled email
          sending configuration. Additionally, I participated in the frontend development using Vue.js with Inertia JS, delivering an
          interactive and appealing user experience
          '

        />
        <div className="w-full flex justify-center items-center">
          <img className="w-2/6 rounded-md" src={MsLogo} alt="Encora Logo" />
        </div>
      </div>
    </section>
  )
}
