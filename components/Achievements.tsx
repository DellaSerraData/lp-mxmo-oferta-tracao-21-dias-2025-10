
import React from 'react';

const RocketIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a6 6 0 0 0-7.38-5.84m2.56 5.84L6.13 21.25m6.37-6.37 2.56-5.84m-2.56 5.84 5.84 2.56" />
    </svg>
);

const DataIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V5.25A2.25 2.25 0 0 0 18 3H6A2.25 2.25 0 0 0 3.75 5.25v12.75A2.25 2.25 0 0 0 6 20.25Z" />
    </svg>
);

const Achievements: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        O Que Você <span className="text-brand-primary">Conquista</span>?
                    </h2>
                    <p className="mt-4 text-lg text-brand-gray">
                        Em 3 semanas, transformamos incerteza em um plano de ação claro e validado.
                    </p>
                </div>
                <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-brand-light-dark p-8 rounded-xl border border-white/10 flex flex-col items-start">
                        <RocketIcon className="w-10 h-10 text-brand-primary mb-4" />
                        <h3 className="text-2xl font-bold text-white">Sistema de Conversão Ativo</h3>
                        <p className="mt-2 text-brand-gray flex-grow">
                            Você terá um sistema completo (Landing Page + Jornada de WhatsApp) no ar, pronto para capturar e engajar leads.
                        </p>
                    </div>
                    <div className="bg-brand-light-dark p-8 rounded-xl border border-white/10 flex flex-col items-start">
                        <DataIcon className="w-10 h-10 text-brand-primary mb-4" />
                        <h3 className="text-2xl font-bold text-white">Aprendizado Validado com Dados</h3>
                        <p className="mt-2 text-brand-gray flex-grow">
                            Ao testar de 6 a 9 hipóteses críticas, você terá dados reais mostrando o caminho exato para escalar o que funciona, eliminando achismos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
