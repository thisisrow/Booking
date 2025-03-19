import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import SplashScreen from './components/SplashScreen';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resorts from './pages/Resorts';
import WaterPark from './pages/WaterPark';
import Villas from './pages/Villas';
import About from './pages/About';
import Contact from './pages/Contact';
import BookingDetails from './pages/BookingDetails';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <SplashScreen />
          <ThemeToggle />
          <Navbar />
          <main className="pb-16 md:pb-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resorts" element={<Resorts />} />
              <Route path="/water-park" element={<WaterPark />} />
              <Route path="/villas" element={<Villas />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking/:id" element={<BookingDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App