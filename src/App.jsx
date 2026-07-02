import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Certifications from './sections/Certifications'
import Leadership from './sections/Leadership'
import FutureGoals from './sections/FutureGoals'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Leadership />
        <FutureGoals />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
