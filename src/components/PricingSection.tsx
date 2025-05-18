import React, { useState } from 'react';
import { Dumbbell, Check, X, MessageCircle } from 'lucide-react';

interface PricingSectionProps {
  scrollY: number;
}

const PricingSection: React.FC<PricingSectionProps> = ({ scrollY }) => {
  const isVisible = scrollY > 500;
  
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Estados para mostrar valores ao clicar nos botões
  const [showOnline, setShowOnline] = useState<string | null>(null);
  const [showFuncional, setShowFuncional] = useState<string | null>(null);
  const [cupomOnline, setCupomOnline] = useState('');
  const [cupomPersonal, setCupomPersonal] = useState('');
  const [cupomOnlineValido, setCupomOnlineValido] = useState(false);
  const [cupomPersonalValido, setCupomPersonalValido] = useState(false);
  
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

  // Valores originais da consultoria online
  const valoresOnline = {
    mensal: 150,
    bimestral: 270,
    trimestral: 350
  };

  // Função para calcular desconto
  const aplicarDesconto = (valor: number, cupomValido: boolean) => {
    if (cupomValido) {
      return (valor * 0.95).toFixed(2).replace('.', ',');
    }
    return valor.toFixed(2).replace('.', ',');
  };

  // Mensagem WhatsApp para Consultoria Online
  const getMensagemOnline = () => {
    if (!showOnline) return '';
    const valor = valoresOnline[showOnline as keyof typeof valoresOnline];
    const valorFinal = aplicarDesconto(valor, cupomOnlineValido);
    let msg = `Olá, gostaria de contratar a Consultoria Online (${showOnline}) por R$ ${valorFinal}`;
    if (cupomOnlineValido) {
      msg += ' usando o cupom de desconto oshirogym';
    }
    return encodeURIComponent(msg);
  };

  // Mensagem WhatsApp para Personal Trainer
  const getMensagemPersonal = () => {
    let msg = 'Olá, gostaria de saber mais sobre o plano Personal Trainer';
    if (cupomPersonalValido) {
      msg += ' e quero utilizar o cupom de desconto oshirogym';
    }
    return encodeURIComponent(msg);
  };

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
          {/* Consultoria Online */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-primary-light to-primary p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2 text-white">Consultoria Online</h3>
            <p className="text-white mb-4 text-center">Acompanhamento à distância, com treinos personalizados e suporte online.</p>
            <div className="flex flex-col gap-2 w-full mb-6">
              <button onClick={() => setShowOnline('mensal')} className={`w-full py-2 rounded font-bold transition-all ${showOnline === 'mensal' ? 'bg-white text-primary' : 'bg-primary-dark text-white'} hover:bg-white hover:text-primary`}>Mensal</button>
              <button onClick={() => setShowOnline('bimestral')} className={`w-full py-2 rounded font-bold transition-all ${showOnline === 'bimestral' ? 'bg-white text-primary' : 'bg-primary-dark text-white'} hover:bg-white hover:text-primary`}>Bimestral</button>
              <button onClick={() => setShowOnline('trimestral')} className={`w-full py-2 rounded font-bold transition-all ${showOnline === 'trimestral' ? 'bg-white text-primary' : 'bg-primary-dark text-white'} hover:bg-white hover:text-primary`}>Trimestral</button>
            </div>
            {/* Campo de cupom */}
            <input
              type="text"
              placeholder="Cupom de desconto"
              className="w-full mb-2 px-3 py-2 rounded text-primary font-bold text-center"
              value={cupomOnline}
              onChange={e => {
                setCupomOnline(e.target.value);
                setCupomOnlineValido(e.target.value.trim().toLowerCase() === 'oshirogym');
              }}
            />
            {cupomOnline && (
              <div className={`mb-2 text-sm font-bold ${cupomOnlineValido ? 'text-green-200' : 'text-red-200'}`}>{cupomOnlineValido ? 'Cupom aplicado!' : 'Cupom inválido'}</div>
            )}
            {/* Valores com desconto */}
            {showOnline && (
              <div className="text-white text-lg font-bold mb-2">
                {showOnline.charAt(0).toUpperCase() + showOnline.slice(1)}: R$ {aplicarDesconto(valoresOnline[showOnline as keyof typeof valoresOnline], cupomOnlineValido)}
              </div>
            )}
            {/* Botão WhatsApp */}
            {showOnline && (
              <a
                href={`https://wa.me/5511933329215?text=${getMensagemOnline()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-all mt-2"
              >
                <MessageCircle size={20} /> Finalizar no WhatsApp
              </a>
            )}
                    </div>

          {/* Personal Trainer */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-dark-light to-dark p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2 text-white">Personal Trainer</h3>
            <p className="text-white mb-4 text-center">Atendimento presencial e acompanhamento individualizado.</p>
            <div className="text-white text-lg font-bold mb-6">Valores a consultar</div>
            {/* Campo de cupom */}
            <input
              type="text"
              placeholder="Cupom de desconto"
              className="w-full mb-2 px-3 py-2 rounded text-primary font-bold text-center"
              value={cupomPersonal}
              onChange={e => {
                setCupomPersonal(e.target.value);
                setCupomPersonalValido(e.target.value.trim().toLowerCase() === 'oshirogym');
              }}
            />
            {cupomPersonal && (
              <div className={`mb-2 text-sm font-bold ${cupomPersonalValido ? 'text-green-200' : 'text-red-200'}`}>{cupomPersonalValido ? 'Cupom será informado no WhatsApp!' : 'Cupom inválido'}</div>
            )}
                  <a 
              href={`https://wa.me/5511933329215?text=${getMensagemPersonal()}`}
                    target="_blank"
                    rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-all mt-2"
            >
              <MessageCircle size={20} /> Fale no WhatsApp
                  </a>
                </div>

          {/* Treinamento Funcional */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-primary-dark to-primary p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2 text-white">Treinamento Funcional</h3>
            <p className="text-white mb-2 text-center">Datas e Horários:</p>
            <ul className="text-white text-center mb-4">
              <li>Segunda, quarta e sexta</li>
              <li>19:30 às 20:30</li>
            </ul>
            <p className="text-white mb-2 text-center">O valor é cobrado mensalmente, via PIX ou crédito</p>
            <div className="flex flex-col gap-2 w-full mb-6">
              <button onClick={() => setShowFuncional('3x')} className={`w-full py-2 rounded font-bold transition-all ${showFuncional === '3x' ? 'bg-white text-primary' : 'bg-primary-dark text-white'} hover:bg-white hover:text-primary`}>3x na semana</button>
              <button onClick={() => setShowFuncional('2x')} className={`w-full py-2 rounded font-bold transition-all ${showFuncional === '2x' ? 'bg-white text-primary' : 'bg-primary-dark text-white'} hover:bg-white hover:text-primary`}>2x na semana</button>
              <button onClick={() => setShowFuncional('1x')} className={`w-full py-2 rounded font-bold transition-all ${showFuncional === '1x' ? 'bg-white text-primary' : 'bg-primary-dark text-white'} hover:bg-white hover:text-primary`}>1x na semana</button>
            </div>
            {showFuncional === '3x' && <div className="text-white text-lg font-bold mb-2">3x na semana: R$ 119,90</div>}
            {showFuncional === '2x' && <div className="text-white text-lg font-bold mb-2">2x na semana: R$ 99,90</div>}
            {showFuncional === '1x' && <div className="text-white text-lg font-bold mb-2">1x na semana: R$ 79,90</div>}
            {showFuncional && (
              <a
                href={`https://wa.me/5511933329215?text=${encodeURIComponent(`Olá, tenho interesse no Treinamento Funcional (${showFuncional} na semana) por R$ ${showFuncional === '3x' ? '119,90' : showFuncional === '2x' ? '99,90' : '79,90'}!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-all mt-2"
              >
                <MessageCircle size={20} /> Fale no WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;