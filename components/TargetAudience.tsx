
import React from 'react';

const StagnantChartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

const FunnelIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);

const CompassIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const TargetAudience: React.FC = () => {
  const points = [
    {
      icon: <StagnantChartIcon className="w-8 h-8 text-brand-primary" />,
      title: "Crescimento Estagnado",
      description: "Sua base de clientes está parada e novas aquisições são raras ou inexistentes."
    },
    {
      icon: <FunnelIcon className="w-8 h-8 text-brand-primary" />,
      title: "Funil de Vendas Ineficaz",
      description: "Você atrai visitantes, mas o funil de vendas não consegue convertê-los em clientes."
    },
    {
      icon: <CompassIcon className="w-8 h-8 text-brand-primary" />,
      title: "Falta de Direção",
      description: "Você não sabe por onde começar a otimizar ou quais alavancas de crescimento testar."
    }
  ];

  return (
    <section className="py-20 bg-brand-light-dark">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Para Quem é <span className="text-brand-primary">Ideal</span>?
          </h2>
          <p className="mt-4 text-lg text-brand-gray">
            Se você se identifica com algum destes desafios, este programa foi desenhado para ser o seu ponto de partida para a tração.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div key={index} className="bg-brand-dark p-8 rounded-xl border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:border-brand-primary/50">
              <div className="flex items-center justify-center bg-brand-light-dark w-16 h-16 rounded-full">
                {point.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{point.title}</h3>
              <p className="mt-2 text-brand-gray">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
