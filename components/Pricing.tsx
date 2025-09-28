
import React from 'react';

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Investimento <span className="text-brand-primary">Estratégico</span>
                    </h2>
                    <p className="mt-4 text-lg text-brand-gray">
                        Um valor transparente para um resultado transformador. Vagas limitadas a 5 clientes por mês para garantir imersão total.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-brand-light-dark p-8 rounded-xl border border-white/10 flex flex-col text-center items-center">
                        <h3 className="text-2xl font-semibold text-brand-light-gray">Setup</h3>
                        <p className="mt-4 text-5xl font-extrabold text-white">
                            R$ 22.000
                        </p>
                        <p className="mt-2 text-brand-gray">Pagamento único</p>
                        <ul className="mt-6 text-left space-y-2 text-brand-gray">
                           <li className="flex items-center gap-3"><span className="text-brand-primary">✔</span> Diagnóstico e Estratégia</li>
                           <li className="flex items-center gap-3"><span className="text-brand-primary">✔</span> Construção da Landing Page</li>
                           <li className="flex items-center gap-3"><span className="text-brand-primary">✔</span> Configuração da Jornada WhatsApp</li>
                        </ul>
                    </div>
                     <div className="bg-brand-light-dark p-8 rounded-xl border border-white/10 flex flex-col text-center items-center">
                        <h3 className="text-2xl font-semibold text-brand-light-gray">Mensalidade</h3>
                        <p className="mt-4 text-5xl font-extrabold text-white">
                            R$ 9.000
                        </p>
                        <p className="mt-2 text-brand-gray">Execução e Otimização</p>
                         <ul className="mt-6 text-left space-y-2 text-brand-gray">
                           <li className="flex items-center gap-3"><span className="text-brand-primary">✔</span> Lançamento de Campanhas</li>
                           <li className="flex items-center gap-3"><span className="text-brand-primary">✔</span> Análise de Dados e Relatórios</li>
                           <li className="flex items-center gap-3"><span className="text-brand-primary">✔</span> Opção de success fee sobre MQL/SQO</li>
                        </ul>
                    </div>
                </div>
                 <div className="mt-12 text-center">
                    <a
                        href="#contact-form-placeholder"
                        className="group bg-brand-primary text-white font-bold py-4 px-10 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block"
                    >
                        Agendar Diagnóstico Gratuito
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
