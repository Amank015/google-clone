
import './App.css'
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import Routes from './components/Routes'
import { useState } from 'react'
function App() {
  const [darktheme,setDarktheme] = useState(false);


  return (
   <div className={darktheme ? 'dark' : ''}>
    <div className='dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen'>
   <Navbar setDarkTheme={setDarktheme} darkTheme={darktheme}/>
    <Routes/>
    <Footer/>
    </div>
   </div>
  )
}

export default App
