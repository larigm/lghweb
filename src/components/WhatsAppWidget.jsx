import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export default function WhatsAppWidget({ onOpenWhatsApp }) {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="whatsapp-widget-fixed">
      {showTooltip && (
        <div className="whatsapp-tooltip card-glass">
          <button className="tooltip-close" onClick={() => setShowTooltip(false)}>
            <X size={14} />
          </button>
          <div className="tooltip-header">
            <span className="online-indicator"></span>
            <strong>Atendimento LGHWeb</strong>
          </div>
          <p className="tooltip-body">
            Olá! 👋 Precisa de um site profissional ou vitrine virtual para o seu negócio?
          </p>
          <button className="btn btn-primary btn-sm tooltip-btn" onClick={onOpenWhatsApp}>
            <Send size={14} /> Solicitar um orçamento
          </button>
        </div>
      )}

      <button className="whatsapp-float-btn" onClick={onOpenWhatsApp} aria-label="Abrir WhatsApp">
        <MessageCircle size={30} color="#ffffff" />
        <span className="badge-pulse">1</span>
      </button>

      <style>{`
        .whatsapp-widget-fixed {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }

        .whatsapp-tooltip {
          width: 280px;
          padding: 16px;
          position: relative;
          background: #171d3e;
          border-color: rgba(80, 132, 230, 0.4);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          animation: popIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes popIn {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .tooltip-close {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          color: var(--color-text-muted);
          cursor: pointer;
        }

        .tooltip-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          margin-bottom: 8px;
        }

        .online-indicator {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 8px #10b981;
        }

        .tooltip-body {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .tooltip-btn {
          width: 100%;
          font-size: 0.82rem;
          padding: 8px 14px;
        }

        .whatsapp-float-btn {
          width: 60px;
          height: 60px;
          background: #25d366;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .whatsapp-float-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 35px rgba(37, 211, 102, 0.6);
        }

        .badge-pulse {
          position: absolute;
          top: -2px;
          right: -2px;
          background: #ef4444;
          color: white;
          font-size: 0.72rem;
          font-weight: 800;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #121731;
        }

        @media (max-width: 576px) {
          .whatsapp-widget-fixed {
            bottom: 20px;
            right: 20px;
          }
          .whatsapp-tooltip {
            width: 240px;
          }
        }
      `}</style>
    </div>
  );
}
