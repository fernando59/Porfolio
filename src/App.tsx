import './App.css'
import { useContext } from 'react'
import AppContext from './context/appProvider'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Footer } from './components/Footer/Footer'
import { Experience } from './components/Experience/Experience'
import { Services } from './components/Services/Services'
import { Technologies } from './components/Technologies/Technologies'

function App() {
  const { isDarkTheme } = useContext(AppContext)
  return (
    <>
      <div className={`${isDarkTheme ? 'dark' : ''}`}>
        <div className='dark:bg-gray-800'>
          <Header />
          <Hero />
          <Experience />
          <Services />
          <Technologies/>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
