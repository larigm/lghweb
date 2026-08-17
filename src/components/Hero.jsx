import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero({ onOpenWhatsApp }) {
  return (
    <section className="hero-section">
      {/* Blurred image background layer */}
      <div className="hero-image-blurred-bg"></div>

      <div className="container hero-container-centered">
        <div className="hero-content-centered">
          <h1 className="hero-title">
            Um bom negócio merece uma boa primeira impressão.
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
        .hero-section {
          position: relative;
          padding: 220px 0 160px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 85vh;
          overflow: hidden;
        }

        .hero-image-blurred-bg {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background-image: url('/hero_computer_bg.png');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          filter: blur(8px) brightness(0.7);
          transform: scale(1.05);
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
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -1px;
          color: #ffffff;
          font-weight: 800;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: #e2e8f0;
          margin-bottom: 44px;
          max-width: 760px;
          line-height: 1.65;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
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
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        @media (max-width: 992px) {
          .hero-section {
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
