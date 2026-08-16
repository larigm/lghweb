import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero({ onOpenWhatsApp }) {
  return (
    <section className="hero-section hero-centered-bg">
      <div className="hero-bg-overlay"></div>
      
      <div className="container hero-container-centered">
        {/* Centered Content */}
        <div className="hero-content-centered">
          <h1 className="hero-title">
            Um bom negócio merece <span className="text-gradient">uma boa primeira impressão</span>.
          </h1>

          <p className="hero-subtitle">
            Criamos sites que fazem seu cliente entender, confiar e querer conhecer mais.
          </p>

          <div className="hero-actions-centered">
            <a href="#servicos" className="btn btn-primary btn-hero">
              <span>Conhecer Nossos Serviços</span>
              <ArrowRight size={18} />
            </a>
            <button className="btn btn-secondary btn-hero" onClick={onOpenWhatsApp}>
              <MessageCircle size={18} color="#5084e6" />
              <span>Orçamento no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .hero-centered-bg {
          position: relative;
          padding: 220px 0 160px 0;
          background-image: url('/hero_computer_bg.png');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 85vh;
          overflow: hidden;
        }

        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            180deg, 
            rgba(18, 23, 49, 0.88) 0%, 
            rgba(18, 23, 49, 0.94) 50%, 
            rgba(18, 23, 49, 1) 100%
          );
          z-index: 1;
        }

        .hero-container-centered {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          text-align: center;
          width: 100%;
        }

        .hero-content-centered {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-title {
          font-size: 3.25rem;
          line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -1px;
          color: #ffffff;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #cbd5e1;
          margin-bottom: 40px;
          max-width: 760px;
          line-height: 1.6;
        }

        .hero-actions-centered {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn-hero {
          padding: 16px 32px;
          font-size: 1.05rem;
        }

        @media (max-width: 992px) {
          .hero-centered-bg {
            padding: 160px 0 90px 0;
            min-height: auto;
          }
          .hero-title {
            font-size: 2.25rem;
          }
          .hero-subtitle {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </section>
  );
}
