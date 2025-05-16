import React from 'react';
import { Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import ingridLogo from '../imagens/ingrid logo.jpg';

const Footer = () => {
  const whatsappNumber = "5511933329215";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre seus serviços de personal trainer.");

  return (
    <footer className="bg-white text-dark relative">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary-dark to-primary"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center text-center">
            <img 
              src={ingridLogo}
              alt="Ingrid Lemos Logo" 
              className="h-24 w-24 rounded-full border-3 border-primary mb-4 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <h3 className="text-2xl font-bold mb-2 text-dark">INGRID LEMOS</h3>
            <p className="text-base text-gray-600 mb-1">Personal Trainer</p>
            <p className="text-sm text-gray-500">CREF 175457-G/SP</p>
          </div>

          {/* Contact and Social Media */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-xl font-bold mb-4 text-primary">Entre em contato comigo</h4>
            <div className="space-y-3 w-full max-w-xs mb-4">
              <a 
                href="mailto:ingrid.lemos@email.com"
                className="flex items-center justify-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={18} className="text-primary" />
                <span>ingrid.lemos@email.com</span>
              </a>
              <div className="flex items-center justify-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>São Paulo, SP</span>
              </div>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-green-500 p-2.5 rounded-full transition-all duration-300 transform hover:scale-110 group flex items-center gap-2"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} className="text-dark group-hover:text-white" />
                <span className="text-sm font-medium group-hover:text-white">WhatsApp</span>
              </a>
              <a 
                href="https://instagram.com/ingridlemos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gradient-to-r from-purple-500 to-pink-500 p-2.5 rounded-full transition-all duration-300 transform hover:scale-110 group flex items-center gap-2"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-dark group-hover:text-white" />
                <span className="text-sm font-medium group-hover:text-white">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6 max-w-2xl mx-auto"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 max-w-xl mx-auto">
          <p>&copy; {new Date().getFullYear()} Ingrid Lemos - Personal Trainer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;