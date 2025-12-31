import './App.css'
import { lazy, Suspense, useLayoutEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Experience = lazy(() => import('./components/Experience'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-hero-gradient text-slate-100">
      <div className="noise" />
      <Navbar />
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <main className="mx-auto flex max-w-7xl flex-col gap-24 px-6 pb-24 pt-28 md:px-8 lg:px-12 lg:pt-32">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
              </main>
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
