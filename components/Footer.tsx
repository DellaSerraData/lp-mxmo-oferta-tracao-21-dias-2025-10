
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="container mx-auto px-6 py-8 text-center text-brand-gray">
        <p>&copy; {new Date().getFullYear()} MXMO Growth Foundry. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Construindo o futuro do seu crescimento.</p>
      </div>
    </footer>
  );
};

export default Footer;
