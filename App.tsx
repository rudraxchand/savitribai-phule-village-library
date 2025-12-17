import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Impact from './components/Impact';
import Programs from './components/Programs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dalitCream text-dalitBrown font-body selection:bg-dalitRed selection:text-white">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Impact />
        <Programs />
      </main>
      <Footer />
    </div>
  );
};

export default App;