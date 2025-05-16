import React, { useState } from 'react';
import { Dumbbell, Check, X } from 'lucide-react';

interface PricingSectionProps {
  scrollY: number;
}

const PricingSection: React.FC<PricingSectionProps> = ({ scrollY }) => {
  const isVisible = scrollY > 500;
  
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const allFeatures = [
    "Avaliação física",
    "Plano de treino mensal",
    "Suporte por WhatsApp",
    "Acompanhamento de resultados",
    "Plano nutricional"
  ];
  
  const plans = [
    {
      title: "Iniciante",
      price: "R$ 150",
      sessions: "1 sessão por semana",
      features: {
        "Avaliação física": true,
        "Plano de treino mensal": true,
        "Suporte por WhatsApp": true,
        "Acompanhamento de resultados": true,
        "Plano nutricional": false
      },
      color: "from-dark-light to-dark",
      hoverColor: "from-dark to-dark-light"
    },
    {
      title: "Intermediário",
      price: "R$ 250",
      sessions: "2 sessões por semana",
      features: {
        "Avaliação física": true,
        "Plano de treino mensal": true,
        "Suporte por WhatsApp": true,
        "Acompanhamento de resultados": true,
        "Plano nutricional": true
      },
      color: "from-primary-dark to-primary",
      hoverColor: "from-primary to-primary-dark",
      popular: true
    },
    {
      title: "Avançado",
      price: "R$ 350",
      sessions: "3 sessões por semana",
      features: {
        "Avaliação física": true,
        "Plano de treino mensal": true,
        "Suporte por WhatsApp": true,
        "Acompanhamento de resultados": true,
        "Plano nutricional": true
      },
      color: "from-dark-light to-dark",
      hoverColor: "from-dark to-dark-light"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-primary">PLANOS</span> DE TREINAMENTO
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Escolha o plano que melhor se adapta às suas necessidades e objetivos. 
            Todos incluem acompanhamento personalizado para garantir seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 delay-${index * 200} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <div 
                className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform h-full ${hoveredCard === index ? 'scale-105' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`bg-gradient-to-r ${hoveredCard === index ? plan.hoverColor : plan.color} p-8 text-white h-full flex flex-col`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary-dark text-white text-xs font-bold px-3 py-1 transform translate-x-8 translate-y-4 rotate-45">
                      POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="text-4xl font-bold mb-2">{plan.price}<span className="text-sm font-normal">/mês</span></div>
                  <div className="text-lg mb-6">{plan.sessions}</div>
                  
                  <ul className="mb-8 flex-grow">
                    {allFeatures.map((feature, i) => {
                      const isIncluded = plan.features[feature];
                      const isHighlighted = hoveredCard === index && isIncluded;
                      
                      return (
                        <li 
                          key={i} 
                          className={`flex items-center mb-3 transition-all duration-300 ${
                            isHighlighted ? 'transform scale-105 pl-2' : ''
                          }`}
                        >
                          {isIncluded ? (
                            <Check className={`w-5 h-5 mr-2 ${isHighlighted ? 'text-primary-light animate-pulse' : 'text-white'}`} />
                          ) : (
                            <X className="w-5 h-5 mr-2 text-gray-400" />
                          )}
                          <span className={isIncluded ? (isHighlighted ? "text-primary-light font-bold" : "text-white") : "text-gray-400"}>
                            {feature}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  
                  <a 
                    href={`https://wa.me/5511933329215?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20${plan.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`weight-plate-btn block w-full py-3 px-6 text-center rounded-full ${index === 1 ? 'bg-primary text-white' : 'bg-white text-dark'} font-bold transition-all transform hover:scale-105 mt-auto ${
                      hoveredCard === index ? 'animate-pulse' : ''
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      {hoveredCard === index ? (
                        <Dumbbell className="animate-spin" size={20} />
                      ) : (
                        "COMEÇAR AGORA"
                      )}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;