import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface TestimonialsSectionProps {
  scrollY: number;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ scrollY }) => {
  const isVisible = scrollY > 1500;
  
  const googleReviewLink = "https://g.co/kgs/z6wJJyx";
  
  const testimonials = [
    {
      name: "Avaliações Reais",
      role: "Google Business Profile",
      image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      text: "Veja as avaliações reais dos nossos clientes no Google Business Profile. Nossos alunos compartilham suas experiências e resultados obtidos através do treinamento personalizado.",
      stars: 5,
      isGoogleReview: true
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

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

        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-100 rounded-xl shadow-lg p-6 md:p-10 border-l-4 border-primary">
                    <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full object-contain bg-white p-2 mb-4 md:mb-0 md:mr-6 border-2 border-primary"
                      />
                      <div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={18} 
                              className={i < testimonial.stars ? "text-primary fill-current" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        <h3 className="text-xl font-bold text-dark">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic text-lg leading-relaxed mb-6">"{testimonial.text}"</p>
                    {testimonial.isGoogleReview && (
                      <div className="text-center">
                        <a 
                          href={googleReviewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300 shadow-lg"
                        >
                          <span className="mr-2">Ver Avaliações no Google</span>
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;