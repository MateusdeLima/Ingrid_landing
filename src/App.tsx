import React, { useState, useEffect } from 'react';
import { 
  Home,
  Info,
  DollarSign,
  Briefcase,
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import FlipCards from './components/FlipCards';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'pricing', 'services', 'testimonials', 'faq'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'home', icon: <Home size={20} />, label: 'Início' },
    { id: 'about', icon: <Info size={20} />, label: 'Sobre' },
    { id: 'pricing', icon: <DollarSign size={20} />, label: 'Planos' },
    { id: 'services', icon: <Briefcase size={20} />, label: 'Serviços' },
    { id: 'testimonials', icon: <MessageSquare size={20} />, label: 'Depoimentos' },
    { id: 'faq', icon: <HelpCircle size={20} />, label: 'FAQ' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <nav className="top-nav">
        {navItems.map((item) => (
          <a 
            key={item.id}
            href={`#${item.id}`}
            className={`top-nav-item ${activeSection === item.id ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      
      <HeroSection />
      <AboutSection scrollY={scrollY} />
      <PricingSection scrollY={scrollY} />
      <FlipCards scrollY={scrollY} />
      <TestimonialsSection scrollY={scrollY} />
      <FaqSection scrollY={scrollY} />
      <Footer />
    </div>
  );
}

export default App;