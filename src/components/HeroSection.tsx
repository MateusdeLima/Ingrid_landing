import React from 'react';
import ingridLogo from '../imagens/ingrid logo.jpg'; // Importando a imagem local do logo
import academiaBackground from '../imagens/academia.jpg'; // Importando a imagem local de fundo

const HeroSection = () => {
  return (
    <div id="home" className="relative h-screen bg-gradient-to-r from-dark to-dark-light text-white overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={academiaBackground} // Usando a imagem local de fundo
          alt="Personal Trainer Background" 
          className="object-cover w-full h-full opacity-30"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div className="mb-8">
          <img 
            src={ingridLogo} // Usando a imagem local do logo
            alt="Ingrid Lemos Logo" 
            className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-primary shadow-lg object-cover"
          />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-primary">INGRID LEMOS</span> - PERSONAL TRAINER
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl">
          Transforme seu corpo e sua mente com treinamentos personalizados para alcançar seus objetivos
        </p>
      </div>
    </div>
  );
};

export default HeroSection;