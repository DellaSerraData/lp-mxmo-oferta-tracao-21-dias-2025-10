
import React from 'react';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);


const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
          Saia da Inércia. <br />
          Gere <span className="text-brand-primary">Tração em 21 Dias</span>.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-brand-gray">
          Transformamos incerteza em clareza com um sistema de conversão completo, validando o caminho exato para escalar o que realmente funciona no seu negócio.
        </p>
        <div className="mt-10 flex justify-center items-center gap-4">
          <a
            href="#pricing"
            className="group bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            Quero Gerar Tração
            <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
