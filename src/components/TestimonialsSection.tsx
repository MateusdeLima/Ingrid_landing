import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsSectionProps {
  scrollY: number;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ scrollY }) => {
  const isVisible = scrollY > 1500;
  
  const testimonials = [
    {
      name: "Carlos Oliveira",
      role: "Empresário",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      text: "Comecei a treinar com a Ingrid há 6 meses e já perdi 15kg. Sua metodologia é incrível e ela realmente se importa com meus objetivos. Recomendo a todos!",
      stars: 5
    },
    {
      name: "Ana Paula",
      role: "Professora",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      text: "Depois de várias tentativas frustradas em academias, encontrei no treinamento personalizado a solução. A Ingrid é atenciosa e profissional, me ajudando a superar minhas limitações.",
      stars: 5
    },
    {
      name: "Roberto Mendes",
      role: "Médico",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      text: "Como médico, posso atestar a qualidade técnica do trabalho da Ingrid. Ela combina conhecimento científico com prática, criando treinos eficientes e seguros.",
      stars: 5
    },
    {
      name: "Mariana Costa",
      role: "Advogada",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      text: "Minha rotina é muito corrida, mas a Ingrid conseguiu adaptar os treinos à minha agenda. Resultados incríveis em pouco tempo!",
      stars: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    let interval: number | null = null;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-primary">AVALIAÇÕES</span> NO GOOGLE
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Confira as avaliações reais dos nossos clientes no Google Business Profile
          </p>
        </div>

        <div
          className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          // onTouchStart={e => setTouchStartX(e.touches[0].clientX)}
          // onTouchMove={e => setTouchEndX(e.touches[0].clientX)}
          // onTouchEnd={handleTouchEnd}
        >
          <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-xl shadow-lg p-6 md:p-10 border-l-4 border-primary">
            <div className="flex-shrink-0 mr-8">
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google Logo" className="w-24" />
            </div>
            <div className="flex-grow">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-primary fill-current"
                  />
                ))}
              </div>
              <h3 className="text-xl font-bold text-dark">Avaliações Reais</h3>
              <p className="text-gray-600 mb-4">Google Business Profile</p>
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "Veja as avaliações reais dos nossos clientes no Google Business Profile. Nossos alunos
                compartilham suas experiências e resultados obtidos através do treinamento personalizado"
              </p>
              <a
                href="https://g.co/kgs/z6wJJyx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all"
              >
                Ver Avaliações no Google <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;