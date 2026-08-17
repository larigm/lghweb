import React from 'react';
import { Layers, MessageCircle } from 'lucide-react';

export default function Portfolio({ onOpenWhatsApp }) {
  return (
    <section id="portfolio" className="section-padding portfolio-section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Portfólio</h2>
          <p>Conheça a qualidade dos projetos desenvolvidos pela LGHWeb.</p>
        </div>

        <div className="portfolio-empty-box card-glass reveal reveal-delay-1">
          <div className="empty-icon-wrapper">
            <Layers size={48} color="#5084e6" />
          </div>
          <h3>Em breve novos cases de sucesso!</h3>
          <p>Seja a próxima empresa a ter uma presença digital de destaque no seu mercado.</p>
          <button className="btn btn-primary" onClick={onOpenWhatsApp}>
            <MessageCircle size={18} />
            <span>Quero Ser o Próximo Projeto</span>
          </button>
        </div>
      </div>

      <style>{`
        .portfolio-section {
          background: var(--color-bg);
        }

        .portfolio-empty-box {
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .empty-icon-wrapper {
          width: 80px;
          height: 80px;
          background: rgba(80, 132, 230, 0.12);
          border: 1px solid rgba(80, 132, 230, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .portfolio-empty-box h3 {
          font-size: 1.5rem;
          color: #ffffff;
        }

        .portfolio-empty-box p {
          color: var(--color-text-muted);
          font-size: 1rem;
          max-width: 480px;
          margin-bottom: 12px;
        }
      `}</style>
    </section>
  );
}
