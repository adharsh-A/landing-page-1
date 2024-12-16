import React, { Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Lazy load pages
const Home = lazy(() => import('./pages/Home.jsx'))
const Navbar = lazy(() => import("./components/Navbar.jsx"))
const Footer = lazy(() => import("./components/Footer.jsx"))
const NotFound = lazy(() => import("./pages/NotFound.jsx"))
const Loader = lazy(() => import("./components/Loader.jsx"))

//error boundary
const ErrorBoundary = lazy(() => import('./pages/ErrorBoundary.jsx'))

function App() {
  const [isMobile, setIsMobile] = useState(false)
  //take width of device
  useEffect(() => {
    const windowSize = window.innerWidth < 768 ? true : false;
    setIsMobile(windowSize);
  }, []);
  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<Loader />}>
            <Navbar />
            <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
              </Suspense>
        </ErrorBoundary>
        <Footer />
      </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App