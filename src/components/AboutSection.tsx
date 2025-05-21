import React from 'react';
import { Award, Clock, Users } from 'lucide-react';
import perfilImage from '../imagens/perfil.jpg';

interface AboutSectionProps {
  scrollY: number;
}

const AboutSection: React.FC<AboutSectionProps> = ({ scrollY }) => {
  const isVisible = scrollY > 100;
  
  return (
    <section id="about" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            <span className="text-primary">SOBRE</span> A PERSONAL
            <div className="absolute w-20 h-1 bg-primary bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          <div className={`w-full lg:w-1/2 flex justify-center transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}> 
            <img 
              src={perfilImage}
              alt="Ingrid Lemos - Personal Trainer" 
              className="rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl border-4 border-primary object-cover"
            />
          </div>
          <div className={`w-full lg:w-1/2 mt-8 lg:mt-0 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}> 
            <h3 className="text-3xl font-bold mb-6 text-primary text-center lg:text-left">Ingrid Lemos</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-center lg:text-left">
              Com mais de 4 anos de experiência, sou formada em Licenciatura e Bacharelado em Educação Física. 
              Ao longo da minha trajetória como Personal Trainer, tenho me dedicado a promover o bem-estar e a saúde das pessoas, 
              ajudando cada aluno a alcançar seus objetivos de forma segura e eficiente.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed text-center lg:text-left">
              Cada aluno é único, devido a isso, monto um plano de treino personalizado de maneira individual, 
              buscando adaptar a sua necessidade, objetivo e limitações. O meu compromisso é com sua evolução constante, 
              seja para a perda de peso, ganho de massa muscular ou melhora da qualidade de vida.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-dark-light rounded-lg shadow-sm">
                <Award className="text-primary mb-2" size={32} />
                <h4 className="font-bold text-white">Certificada</h4>
                <p className="text-gray-300 text-center text-sm">CREF 175457-G/SP</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-dark-light rounded-lg shadow-sm">
                <Clock className="text-primary mb-2" size={32} />
                <h4 className="font-bold text-white">Experiência</h4>
                <p className="text-gray-300 text-center text-sm">+4 anos</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-dark-light rounded-lg shadow-sm">
                <Users className="text-primary mb-2" size={32} />
                <h4 className="font-bold text-white">Alunos</h4>
                <p className="text-gray-300 text-center text-sm">+100 alunos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;