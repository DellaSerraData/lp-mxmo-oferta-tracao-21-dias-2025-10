
import React from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);

const Deliverables: React.FC = () => {
    const deliverables = [
        "Diagnóstico e Definição de ICP",
        "Proposta de Valor Refinada",
        "Landing Page de Alta Conversão",
        "Jornada de Conversão no WhatsApp",
        "Execução do Disparo Piloto",
        "Dashboard de Performance"
    ];

    return (
        <section className="py-20 bg-brand-light-dark">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Como Fazemos <span className="text-brand-primary">Acontecer</span>
                    </h2>
                    <p className="mt-4 text-lg text-brand-gray">
                        Nossas entregas são desenhadas para construir seu motor de crescimento passo a passo.
                    </p>
                </div>
                <div className="mt-16 max-w-2xl mx-auto">
                    <ul className="space-y-4">
                        {deliverables.map((item, index) => (
                            <li key={index} className="flex items-center bg-brand-dark p-4 rounded-lg border border-white/10">
                                <div className="flex-shrink-0 bg-brand-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                                    <CheckIcon className="w-5 h-5 text-brand-primary" />
                                </div>
                                <span className="text-lg text-brand-light-gray">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Deliverables;
