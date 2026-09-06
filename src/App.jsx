import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Tech from './components/Tech'
import Services from './components/Services'
import Education from './components/Education'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeSwitcher from './components/ThemeSwitcher'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Tech />
        <Services />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ThemeSwitcher />
      <ScrollToTop />
    </div>
  )
}

export default App
