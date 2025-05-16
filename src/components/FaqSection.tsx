import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqSectionProps {
  scrollY: number;
}

const FaqSection: React.FC<FaqSectionProps> = ({ scrollY }) => {
  const isVisible = scrollY > 2000;
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "Quantas vezes por semana devo treinar?",
      answer: "A frequência ideal de treino varia de acordo com seus objetivos, condicionamento físico atual e disponibilidade de tempo. Para iniciantes, recomendo 2-3 sessões por semana. Para objetivos mais específicos como hipertrofia ou perda de peso significativa, podemos aumentar para 3-5 sessões semanais. Durante nossa avaliação inicial, definiremos a frequência ideal para você."
    },
    {
      question: "Preciso ter experiência prévia com exercícios?",
      answer: "Não é necessário ter experiência prévia. Meu trabalho é justamente ensinar a técnica correta e adaptar os exercícios ao seu nível atual. Iniciantes são muito bem-vindos e recebem atenção especial para desenvolver a base necessária de forma segura e eficiente."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os primeiros resultados geralmente começam a aparecer entre 4-6 semanas, como melhora na disposição, resistência e pequenas mudanças estéticas. Resultados mais significativos de composição corporal costumam ser notados entre 8-12 semanas, seguindo o programa de treinos e as orientações nutricionais. Lembre-se que cada organismo responde de forma diferente e a consistência é fundamental."
    },
    {
      question: "Você oferece orientação nutricional?",
      answer: "Sim, ofereço orientações nutricionais básicas como parte dos planos intermediário e avançado. São dicas práticas para otimizar seus resultados. Para casos que necessitam de acompanhamento mais específico, trabalho em parceria com nutricionistas especializados e posso fazer a indicação."
    },
    {
      question: "Onde são realizados os treinos?",
      answer: "Os treinos podem ser realizados em academias parceiras, na sua residência (se tiver equipamentos básicos) ou ao ar livre em parques. Durante nossa consulta inicial, discutiremos a melhor opção de acordo com sua preferência, objetivos e localização."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-primary">PERGUNTAS</span> FREQUENTES
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Tire suas dúvidas sobre o treinamento personalizado e como podemos ajudar você a alcançar seus objetivos
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`mb-4 border-b border-dark-light pb-4 transition-all duration-1000 delay-${index * 100} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-semibold text-primary">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-primary" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400" size={24} />
                )}
              </button>
              <div 
                className={`mt-2 text-gray-300 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="py-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;