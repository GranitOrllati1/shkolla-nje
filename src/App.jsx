import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustMetrics from './components/TrustMetrics'
import Curriculum from './components/Curriculum'
import Ecosystem from './components/Ecosystem'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustMetrics />
        <Curriculum />
        <Ecosystem />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
