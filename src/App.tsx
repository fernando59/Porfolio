import './App.css'
import { useContext } from 'react'
import AppContext from './context/appProvider'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'

function App() {
  const { isDarkTheme } = useContext(AppContext)
  return (
    <>
      <div className={`${isDarkTheme ? 'dark' : ''}`}>
        <div className='dark:bg-gray-800'>
          <Header />
          <About />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
