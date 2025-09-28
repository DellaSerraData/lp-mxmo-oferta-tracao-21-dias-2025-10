
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wider">
          MXMO<span className="text-brand-primary">.</span>
        </div>
        <a 
          href="#pricing"
          className="bg-brand-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
        >
          Começar Agora
        </a>
      </div>
      <div className="w-full h-px bg-white/10"></div>
    </header>
  );
};

export default Header;
