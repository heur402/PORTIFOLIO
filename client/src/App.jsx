import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function App() {
  const [darkMode, setdarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });

    document.documentElement.classList.add('dark');

    // ✅ SCROLL OBSERVER
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // section must be 60% visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    AOS.refresh()
  }, [darkMode])

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setdarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={
      darkMode
        ? 'bg-linear-to-br from-gray-900 via-[#17243d] to-gray-900 min-h-screen'
        : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
    }>
      <NavBar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
      />

      <Hero darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contacts darkMode={darkMode}/>
    </div>
  )
}

export default App
