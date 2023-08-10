import { Player } from "@lottiefiles/react-lottie-player"
import ProgrammingAnimation from '../../assets/json/programming.json';
import { GithubIcon } from "../../icons/GithubIcon";
import { LinkedinIcon } from "../../icons/LinkedinIcon";
import { useTranslation } from "react-i18next";
export const Hero = () => {

  const { t } = useTranslation('', { keyPrefix: 'hero' })
  const downloadResume = () => {
    const fileUrl = './Fernando_Mercado_Curriculum_FullStack.pdf';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CV-FernandoMercado.pdf';
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <main className="h-max lg:h-screen mx-auto container dark:text-white w-full py-20 ">

        <div className="flex flex-col-reverse w-full justify-between  lg:justify-between  lg:flex-row ">

          <div className="w-full py-20">
            <h1 className="text-5xl font-bold">Fernando Mercado</h1>
            <h1 className="text-3xl text-blue-600 font-bold py-4 ">FullStack Developer</h1>
            <p className="w-full  lg:w-3/6 tracking-widest leading-6 py-10">{t('description')}</p>

            <div className="flex gap-4 justify-start items-center">

              <button onClick={downloadResume} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border rounded">{t('button_download')}</button>
              <a className="hover:text-blue-600" target="_blank" href="https://github.com/fernando59"><GithubIcon width={32} height={32} /></a>
              <a  className="hover:text-blue-600" target="_blank" href="https://www.linkedin.com/in/fernando-mercado-saby"><LinkedinIcon width={32} height={32} /></a>
            </div>

          </div>


          <div className="w-full flex-col-reverse lg:flex lg:flex-col lg:w-[60%] items-center justify-center pointer-events-none relative ">
            <div className="z-10">
              <Player autoplay loop src={ProgrammingAnimation} className="w-[100%] max-w-[800px]" />
            </div>
            <div className=" lg:flex lg:flex-col items-end justify-end z-0 absolute ">
              <div className="w-[18rem] h-[10rem] rounded-full opacity-20 bg-blue-600 blur-2xl  " />

              <div className="w-[18rem] h-[20rem] rounded-full opacity-20 bg-blue-600 blur-2xl " />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
