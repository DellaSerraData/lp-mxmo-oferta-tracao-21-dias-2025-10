
import React from 'react';

const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
    </svg>
);

const Guarantee: React.FC = () => {
    return (
        <section className="py-20 bg-brand-light-dark">
            <div className="container mx-auto px-6">
                <div className="bg-brand-dark max-w-4xl mx-auto rounded-2xl border-2 border-brand-primary/50 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-brand-primary/10">
                    <div className="flex-shrink-0">
                        <ShieldIcon className="w-24 h-24 text-brand-primary" />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                           Nossa Garantia: <span className="text-brand-primary">Tração ou Continuidade</span>.
                        </h2>
                        <p className="mt-4 text-lg text-brand-gray">
                            Nosso compromisso é com o aprendizado que gera resultados. Se ao final dos 21 dias não identificarmos um caminho claro ou um aprendizado vencedor, estendemos o projeto por mais 2 semanas, por nossa conta.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guarantee;
