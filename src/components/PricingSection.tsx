import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface PricingSectionProps {
  scrollY: number;
}

const CONSULTORIA_PRICES = {
  mensal: 150,
  bimestral: 270,
  trimestral: 350,
};

const FUNCIONAL_PRICES = {
  '3x': 119,
  '2x': 99.9,
  '1x': 79.9,
};

const WHATSAPP = '5511933329215';
const CUPOM_VALIDO = 'oshirogym';
const DESCONTO = 0.05;

const PricingSection: React.FC<PricingSectionProps> = ({ scrollY }) => {
  const isVisible = scrollY > 500;

  // Consultoria Online
  const [consultoriaPlano, setConsultoriaPlano] = useState<'mensal'|'bimestral'|'trimestral'>('trimestral');
  const [consultoriaCupom, setConsultoriaCupom] = useState('');
  const consultoriaValor = CONSULTORIA_PRICES[consultoriaPlano];
  const consultoriaCupomValido = consultoriaCupom.trim().toLowerCase() === CUPOM_VALIDO;
  const consultoriaValorFinal = consultoriaCupomValido ? (consultoriaValor * (1 - DESCONTO)) : consultoriaValor;

  // Treinamento Funcional
  const [funcionalPlano, setFuncionalPlano] = useState<'3x'|'2x'|'1x'>('1x');
  const [funcionalCupom, setFuncionalCupom] = useState('');
  const funcionalValor = FUNCIONAL_PRICES[funcionalPlano];
  const funcionalCupomValido = funcionalCupom.trim().toLowerCase() === CUPOM_VALIDO;
  const funcionalValorFinal = funcionalCupomValido ? (funcionalValor * (1 - DESCONTO)) : funcionalValor;

  // Personal Trainer
  const [personalCupom, setPersonalCupom] = useState('');
  const personalCupomValido = personalCupom.trim().toLowerCase() === CUPOM_VALIDO;
  const personalDesconto = personalCupomValido ? '5%' : undefined;

  // Mensagens WhatsApp
  const formatBRL = (valor: number) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const getConsultoriaMsg = () => {
    let msg = `Olá, gostaria de contratar a Consultoria Online (${consultoriaPlano}) por ${formatBRL(consultoriaValorFinal)}`;
    if (consultoriaCupomValido) {
      msg += ` com desconto de 5% usando o cupom '${CUPOM_VALIDO}'.`;
    }
    return encodeURIComponent(msg);
  };

  const getFuncionalMsg = () => {
    let msg = `Olá, tenho interesse no Treinamento Funcional (${funcionalPlano} na semana) por ${formatBRL(funcionalValorFinal)}!`;
    if (funcionalCupomValido) {
      msg += ` Valor já com 5% de desconto usando o cupom '${CUPOM_VALIDO}'.`;
    }
    return encodeURIComponent(msg);
  };

  const getPersonalMsg = () => {
    let msg = `Olá, gostaria de saber os valores do plano Personal Trainer.`;
    if (personalCupomValido) {
      msg += ` Apliquei o cupom '${CUPOM_VALIDO}' para obter 5% de desconto, favor considerar.`;
    }
    return encodeURIComponent(msg);
  };

  // Função utilitária para abrir WhatsApp
  const openWhatsApp = (phone: string, msg: string) => {
    const urlApp = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(msg)}`;
    const urlWeb = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.location.href = urlApp;
    setTimeout(() => {
      window.open(urlWeb, '_blank');
    }, 1000);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-primary">PLANOS</span> DE TREINAMENTO
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Escolha o plano que melhor se adapta às suas necessidades e objetivos. Todos incluem acompanhamento personalizado para garantir seus resultados.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Consultoria Online */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-dark to-dark-light p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2 text-white">Consultoria Online</h3>
            <p className="text-white mb-4 text-center">Acompanhamento à distância, com treinos personalizados e suporte online.</p>
            <div className="flex flex-col gap-2 w-full mb-6">
              <button onClick={() => setConsultoriaPlano('mensal')} className={`w-full py-2 rounded font-bold transition-all ${consultoriaPlano==='mensal' ? 'bg-white text-primary' : 'bg-primary-dark text-white hover:bg-white hover:text-primary'}`}>Mensal</button>
              <button onClick={() => setConsultoriaPlano('bimestral')} className={`w-full py-2 rounded font-bold transition-all ${consultoriaPlano==='bimestral' ? 'bg-white text-primary' : 'bg-primary-dark text-white hover:bg-white hover:text-primary'}`}>Bimestral</button>
              <button onClick={() => setConsultoriaPlano('trimestral')} className={`w-full py-2 rounded font-bold transition-all ${consultoriaPlano==='trimestral' ? 'bg-white text-primary' : 'bg-primary-dark text-white hover:bg-white hover:text-primary'}`}>Trimestral</button>
            </div>
            <input type="text" placeholder="Cupom de desconto" className="w-full mb-2 px-3 py-2 rounded text-primary font-bold text-center" value={consultoriaCupom} onChange={e => setConsultoriaCupom(e.target.value)} />
            <div className="text-white text-lg font-bold mb-2">
              {consultoriaPlano.charAt(0).toUpperCase() + consultoriaPlano.slice(1)}: {formatBRL(consultoriaValorFinal)}
              {consultoriaCupomValido && <span className="ml-2 text-green-300">(5% OFF)</span>}
            </div>
            <button
              type="button"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-all mt-2"
              onClick={() => openWhatsApp(WHATSAPP, decodeURIComponent(getConsultoriaMsg()))}
            >
              <MessageCircle size={20} /> Finalizar no WhatsApp
            </button>
          </div>
          {/* Personal Trainer */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-primary-light to-primary p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2 text-white">Personal Trainer</h3>
            <p className="text-white mb-4 text-center">Atendimento presencial e acompanhamento individualizado.</p>
            <div className="text-white text-lg font-bold mb-6">Valores a consultar</div>
            <input type="text" placeholder="Cupom de desconto" className="w-full mb-2 px-3 py-2 rounded text-primary font-bold text-center" value={personalCupom} onChange={e => setPersonalCupom(e.target.value)} />
            {personalCupomValido && <div className="text-green-300 text-sm mb-2">Cupom aplicado: 5% OFF</div>}
            <button
              type="button"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-all mt-2"
              onClick={() => openWhatsApp(WHATSAPP, decodeURIComponent(getPersonalMsg()))}
            >
              <MessageCircle size={20} /> Fale no WhatsApp
            </button>
          </div>
          {/* Treinamento Funcional */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-dark to-dark-light p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2 text-white">Treinamento Funcional</h3>
            <p className="text-white mb-2 text-center">Datas e Horários:</p>
            <ul className="text-white text-center mb-4">
              <li>Segunda, quarta e sexta</li>
              <li>19:30 às 20:30</li>
            </ul>
            <p className="text-white mb-2 text-center">O valor é cobrado mensalmente, via PIX ou crédito</p>
            <div className="flex flex-col gap-2 w-full mb-6">
              <button onClick={() => setFuncionalPlano('3x')} className={`w-full py-2 rounded font-bold transition-all ${funcionalPlano==='3x' ? 'bg-white text-primary' : 'bg-primary-dark text-white hover:bg-white hover:text-primary'}`}>3x na semana</button>
              <button onClick={() => setFuncionalPlano('2x')} className={`w-full py-2 rounded font-bold transition-all ${funcionalPlano==='2x' ? 'bg-white text-primary' : 'bg-primary-dark text-white hover:bg-white hover:text-primary'}`}>2x na semana</button>
              <button onClick={() => setFuncionalPlano('1x')} className={`w-full py-2 rounded font-bold transition-all ${funcionalPlano==='1x' ? 'bg-white text-primary' : 'bg-primary-dark text-white hover:bg-white hover:text-primary'}`}>1x na semana</button>
            </div>
            <div className="text-white text-lg font-bold mb-2">
              {funcionalPlano} na semana: {formatBRL(funcionalValor)}
            </div>
            <button
              type="button"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-all mt-2"
              onClick={() => openWhatsApp(WHATSAPP, decodeURIComponent(getFuncionalMsg()))}
            >
              <MessageCircle size={20} /> Finalizar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;