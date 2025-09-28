
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import Achievements from './components/Achievements';
import Deliverables from './components/Deliverables';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen font-sans text-brand-light-gray antialiased">
      <Header />
      <main>
        <Hero />
        <TargetAudience />
        <Achievements />
        <Deliverables />
        <Pricing />
        <Guarantee />
      </main>
      <Footer />
    </div>
  );
};

export default App;
