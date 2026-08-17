import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar({ onOpenWhatsApp }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Logo size="md" lightText={false} />

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#portfolio" className="nav-link">Portfólio</a>
          <a href="#processo" className="nav-link">Processo</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        <div className="nav-actions">
          <button className="btn btn-primary btn-sm desktop-only-btn" onClick={onOpenWhatsApp}>
            <MessageCircle size={18} />
            <span>Solicitar um orçamento</span>
          </button>

          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-links-list">
            <a href="#servicos" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfólio</a>
            <a href="#processo" onClick={() => setMobileMenuOpen(false)}>Processo</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          </div>

          <button 
            className="btn btn-primary w-full mobile-drawer-btn" 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenWhatsApp();
            }}
          >
            <MessageCircle size={18} />
            <span>Solicitar um orçamento</span>
          </button>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 20px 0;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar-scrolled {
          padding: 12px 0;
          background: rgba(18, 23, 49, 0.94);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .nav-link {
          font-size: 1rem;
          font-weight: 500;
          color: var(--color-text-muted);
          transition: var(--transition);
        }

        .nav-link:hover {
          color: var(--color-primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn-sm {
          padding: 10px 20px;
          font-size: 0.9rem;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--color-text);
          cursor: pointer;
          padding: 4px;
        }

        .mobile-nav-drawer {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 28px 24px;
          background: #151b3a;
          border-bottom: 1px solid var(--color-border-glow);
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-links-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-links-list a {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--color-text);
          transition: var(--transition);
          padding: 4px 0;
        }

        .mobile-links-list a:hover {
          color: var(--color-primary);
          padding-left: 6px;
        }

        .mobile-drawer-btn {
          margin-top: 8px;
          padding: 14px;
          font-size: 1rem;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 992px) {
          .desktop-nav {
            display: none;
          }
          .desktop-only-btn {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
