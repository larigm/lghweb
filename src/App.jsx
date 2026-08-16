import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Faq from './components/Faq';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const handleOpenWhatsApp = (customMessage) => {
    const defaultText = customMessage || 
      "Olá LGHWeb! Gostaria de mais informações sobre o desenvolvimento de um site profissional para meu negócio.";
    const whatsappNumber = "5542988412714";
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(defaultText)}`, '_blank');
  };

  return (
    <div className="app-main">
      <Navbar onOpenWhatsApp={() => handleOpenWhatsApp()} />
      
      <main>
        <Hero onOpenWhatsApp={() => handleOpenWhatsApp("Olá LGHWeb! Gostaria de um orçamento para criar meu site.")} />
        
        <Services onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)} />

        <Portfolio onOpenWhatsApp={() => handleOpenWhatsApp("Olá LGHWeb! Gostaria de criar um projeto com vocês.")} />

        <Process />

        <Faq onOpenWhatsApp={() => handleOpenWhatsApp("Olá LGHWeb! Tenho algumas dúvidas sobre o desenvolvimento do meu site.")} />
      </main>

      <Footer onOpenWhatsApp={() => handleOpenWhatsApp()} />

      <WhatsAppWidget onOpenWhatsApp={() => handleOpenWhatsApp()} />
    </div>
  );
}
