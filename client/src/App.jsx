import { useEffect, useState } from 'react'
import AOS from 'aos'
import  'aos/dist/aos.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {
  const [darkMode, setdarkMode] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setdarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };
  return (
    <div className={darkMode ?
      'bg-linear-to-br from-gray-900 via-[#17243d] to-gray-900 min-h-screen'
      :
      'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
    }>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode}/>
    </div>
  )
}

export default App
