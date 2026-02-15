import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import github from '../assets/github.png'
import youtube from '../assets/youtube.png'
const Hero = () => {
    const socialIcons = [
        { icon: instagram, alt: 'instagram' },
        { icon: tiktok, alt: 'titok' },
        { icon: github, alt: 'github' },
        { icon: youtube, alt: 'youtube' },
    ];

    const darkTheme = {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        buttonSecondary: 'text-white border-2 border-orage-500 hover:bg-orange-600 ',
        decorativeCircle: 'bg-orange-500 opacity-10'
    };

    const lightTheme = {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-700",
        buttonSecondary: 'text-gray-800 border-2 border-orage-500 hover:bg-orange-600  hover:text-white',
        decorativeCircle: 'bg-orange-400 opacity-20'
    };

    const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
          <section
              id='home'
              data-aos='fade-up'
              data-aos-delat='250'
          >
            
        </section>
    </div>
  )
}

export default Hero