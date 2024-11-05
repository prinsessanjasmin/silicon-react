import './App.css'
import '../Silicon project files/Sass/main-sass.css'
import Navigation from './components/Navigation'
import Home from './sections/Url-pages/Home'
import Contact from './sections/Url-pages/Contact'
import Features from './sections/Url-pages/Features'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignInSignUp from './sections/Url-pages/SignInSignUp'
import SiliconProvider from './contexts/SiliconContext'
import ScrollToTop from './components/ScrollToTop'


function App() {
  
  return (
    <SiliconProvider>
      <BrowserRouter>
        <div className="wrapper" id="wrapper" > 
          <Navigation />
          <main>
            <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/features" element={<Features />} />
                <Route path="/register" element={<SignInSignUp />} />
              </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </SiliconProvider>
  )
}

export default App
