import { useTranslation } from "react-i18next"
import { CardService } from "./CardService"

export const Services = () => {
  const { t } = useTranslation('', { keyPrefix: 'services' })
  return (
    <section id="services" className="max-h-max mt-20 mb-80">
      <h2 className="text-center text-6xl font-bold dark:text-white pb-10 border-b-orange-50 "><span className='border-solid 
    border-b-4 border-blue-600'>{t('title')}</span></h2>




      <div className="flex flex-wrap gap-10 justify-center items-center text-gray-600 dark:text-white  p-5">
        <CardService
          title={t('web_development_title')}
          description={t('web_development_description')}
        />
        <CardService
          title={t('landing_development_title')}
          description={t('landing_development_description')}
        />
        <CardService
          title={t('mobile_development_title')}
          description={t('mobile_development_description')}
        />
      </div>
    </section>
  )
}
