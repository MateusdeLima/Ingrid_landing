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
      
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="w-9 h-9 sm:w-10 sm:h-10 border-2 border-primary rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md shadow-md">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;