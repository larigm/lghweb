import React from 'react';
import Logo from './Logo';
import { MessageCircle, Mail, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenWhatsApp }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <Logo size="lg" lightText={false} />
            <p className="footer-tagline">
              Um bom negócio merece uma boa primeira impressão.<br />
              Criamos sites que fazem seu cliente entender, confiar e querer conhecer mais.
            </p>
            <div className="footer-contact-info">
              <div className="contact-item" onClick={() => onOpenWhatsApp("Olá! Gostaria de falar com o atendimento 1.")} style={{ cursor: 'pointer' }}>
                <MessageCircle size={18} color="#5084e6" />
                <span>WhatsApp: (42) 98841-2714</span>
              </div>
              <div className="contact-item" onClick={() => onOpenWhatsApp("Olá! Gostaria de falar com o atendimento 2.")} style={{ cursor: 'pointer' }}>
                <MessageCircle size={18} color="#5084e6" />
                <span>WhatsApp: (42) 98421-2013</span>
              </div>
              <div className="contact-item">
                <Mail size={18} color="#5084e6" />
                <a href="mailto:contato.lghweb@gmail.com">contato.lghweb@gmail.com</a>
              </div>
              <div className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5084e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <a href="https://instagram.com/lghweb" target="_blank" rel="noopener noreferrer">Instagram: @lghweb</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Menu Rápido</h4>
            <ul className="footer-links">
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#portfolio">Portfólio de Projetos</a></li>
              <li><a href="#processo">Nosso Processo</a></li>
              <li><a href="#faq">Perguntas Frequentes (FAQ)</a></li>
            </ul>
          </div>

          {/* Soluções Web */}
          <div className="footer-col">
            <h4 className="footer-title">Soluções Web</h4>
            <ul className="footer-links">
              <li><a href="#servicos">Landing Page de Alta Conversão</a></li>
              <li><a href="#servicos">Vitrine Virtual Sem Taxas</a></li>
              <li><a href="#servicos">Site Profissional</a></li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="footer-col footer-cta-card card-glass">
            <h4>Pronto para ter um site que vende?</h4>
            <p>Fale agora mesmo com nossa equipe e garanta as condições especiais deste mês.</p>
            <button className="btn btn-primary w-full" onClick={() => onOpenWhatsApp()}>
              <MessageCircle size={18} />
              <span>Solicitar Orçamento</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} LGHWeb. Todos os direitos reservados. Desenvolvido com alta performance e precisão.</p>
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Voltar ao Topo">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: #0b0e1f;
          padding: 80px 0 30px 0;
          border-top: 1px solid var(--color-border);
          position: relative;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 0.9fr 1fr 1.2fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-tagline {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          margin: 16px 0 24px 0;
          line-height: 1.6;
          max-width: 380px;
        }

        .footer-contact-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--color-text);
          transition: var(--transition);
        }

        .contact-item a {
          color: inherit;
          text-decoration: none;
        }

        .contact-item:hover {
          color: var(--color-primary);
        }

        .footer-title {
          font-size: 1.05rem;
          margin-bottom: 20px;
          color: white;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: var(--color-primary);
          padding-left: 4px;
        }

        .footer-cta-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #141a38;
        }

        .footer-cta-card h4 {
          font-size: 1.1rem;
          margin-bottom: 8px;
        }

        .footer-cta-card p {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin-bottom: 16px;
        }

        .footer-bottom {
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        .scroll-top-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }

        .scroll-top-btn:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          transform: translateY(-3px);
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
