import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Domains from './pages/Domains'
import Services from './pages/Services'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Quote from './pages/Quote'
import LegalNotice from './pages/LegalNotice'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/copy_ingeris" element={<Home />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 