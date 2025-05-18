import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';

interface FlipCardsProps {
  scrollY: number;
}

const FlipCards: React.FC<FlipCardsProps> = ({ scrollY }) => {
  const isVisible = scrollY > 1000;
  
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  
  const cards = [
    {
      title: "Perda de Peso",
      description: "Programa especializado para queima de gordura e definição corporal com acompanhamento nutricional.",
      icon: "🔥",
      bgImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Hipertrofia",
      description: "Ganho de massa muscular com técnicas avançadas e periodização de treino para resultados máximos.",
      icon: "💪",
      bgImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Funcional",
      description: "Treinamento para melhorar sua capacidade funcional, equilíbrio, coordenação e resistência no dia a dia.",
      icon: "⚡",
      bgImage: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Terceira Idade",
      description: "Exercícios adaptados para melhorar a qualidade de vida, mobilidade e independência de idosos.",
      icon: "🌟",
      bgImage: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-primary">SERVIÇOS</span> ESPECIALIZADOS
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
            Conheça os programas de treinamento personalizados para diferentes objetivos e necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 delay-${index * 200} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <div className="h-80 perspective-1000">
                <div 
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    flippedCard === index ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front of card */}
                  <div 
                    className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => setFlippedCard(index)}
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${card.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="flex flex-col items-center justify-center h-full text-white p-6 text-center">
                      <div className="text-5xl mb-4">{card.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                      <div className="mt-4 py-2 px-4 bg-primary rounded-full text-white font-bold weight-plate-btn">
                        CLIQUE AQUI
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div 
                    className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-r from-dark to-dark-light rounded-xl overflow-hidden shadow-lg"
                    onClick={() => setFlippedCard(null)}
                  >
                    <div className="flex flex-col items-center justify-between h-full text-white p-6 text-center">
                      <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                      <p className="mb-6">{card.description}</p>
                      <a 
                        href={`https://wa.me/5511933329215?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20${card.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-6 bg-primary text-white rounded-full font-bold transition-all transform hover:scale-105 flex items-center weight-plate-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        SAIBA MAIS
                        <Dumbbell className="ml-2" size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCards;