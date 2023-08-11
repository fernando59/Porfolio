import { useTranslation } from "react-i18next"
import { ReactIcon } from "../../icons/ReactIcon"
import { TypeScriptIcon } from "../../icons/TypeScriptIcon"
import { CardTechnology } from "./CardTechnology"
import { NodeJsIcon } from "../../icons/NodeJsIcon"
import { NetCoreIcon } from "../../icons/NetCoreIcon"
import { FlutterIcon } from "../../icons/FlutterIcon"

export const Technologies = () => {
  const { t } = useTranslation('', { keyPrefix: 'technologies' })
  return (
    <section id="technologies" className="h-[80vh] mt-20">
      <h2 className="text-center text-6xl font-bold dark:text-white pb-10 border-b-orange-50 "><span className='border-solid 
  border-b-4 border-blue-600'>{t('title')}</span></h2>

      <div className="mx-auto container flex justify-center py-20 gap-5 flex-wrap">
        <CardTechnology title="React Js">
          <ReactIcon width={40} height={40} />
        </CardTechnology>

        <CardTechnology title="TypeScript">
          <TypeScriptIcon width={40} height={40} />
        </CardTechnology>
        <CardTechnology title="Node Js">
          <NodeJsIcon width={40} height={40} />
        </CardTechnology>
        <CardTechnology title="Asp Net Core">
          <NetCoreIcon width={40} height={40} />
        </CardTechnology>

        <CardTechnology title="Flutter">
          <FlutterIcon width={40} height={40} />
        </CardTechnology>

      </div>
    </section>
  )
}
