import EncoraLogo from '../../assets/imgs/encora_logo.jpg'
import WorkanaLogo from '../../assets/imgs/logo_workana.png'
import MsLogo from '../../assets/imgs/logo-ms.png'

import { CardCompany } from './CardCompany'
import { useTranslation } from 'react-i18next'
export const Experience = () => {
  const { t } = useTranslation('', { keyPrefix: 'experience' })
  return (
    <section id="experience" className='h-max mx-auto container'>

      <h2 className="text-center text-6xl font-bold dark:text-white pb-10 border-b-orange-50 "><span className='border-solid 
        border-b-4 border-blue-600'>{t('title')}</span></h2>


      <div className="flex flex-col lg:flex-row justify-between gap-20 mt-10">
        <CardCompany
          title='Full Stack Developer'
          company='Encora'
          description={t('Encora.description')}
        />
        <div className="w-full flex justify-center items-center">
          <img className="w-4/6 rounded-md" src={EncoraLogo} alt="Encora Logo" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  justify-between gap-20 mt-10">
        <CardCompany
          title='Freelance'
          company='Workana'
          description={t('Workana.description')}
        />
        <div className="w-full flex justify-center items-center">
          <img className="w-4/6 rounded-md" src={WorkanaLogo} alt="Workana Logo" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  justify-between items-center gap-20 mt-10">
        <CardCompany
          title='Junior Developer'
          company='Mil Soluciones'
          description={t('MilSoluciones.description')}

        />
        <div className="w-full flex justify-center items-center">
          <img className="w-2/6 rounded-md" src={MsLogo} alt="Encora Logo" />
        </div>
      </div>
    </section>
  )
}
