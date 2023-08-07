import { useTranslation } from 'react-i18next'
import './App.css'

function App() {
  const {t} = useTranslation('',{ keyPrefix: 'home' })
  return (
    <>
    <h1>{t('title')}</h1>
    </>
  )
}

export default App
