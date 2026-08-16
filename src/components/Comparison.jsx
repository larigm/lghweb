import React from 'react';
import { Check, X, ShieldCheck, Zap } from 'lucide-react';

export default function Comparison() {
  const comparisons = [
    {
      feature: 'Velocidade & Carregamento',
      amateur: 'Lento (3s a 8s devido a plugins e construtores pesados)',
      lghweb: 'Ultra Rápido (0.8s a 1.2s otimizado no PageSpeed Google)',
    },
    {
      feature: 'Propriedade do Site',
      amateur: 'Preso a mensalidades perpétuas da plataforma',
      lghweb: '100% Seu! Código e arquivos sob seu domínio total',
    },
    {
      feature: 'Design & Personalização',
      amateur: 'Modelos genéricos usados por milhares de concorrentes',
      lghweb: 'Design Exclusivo sob medida para a sua identidade visual',
    },
    {
      feature: 'Otimização SEO (Google)',
      amateur: 'Inexistente ou limitada ao básico',
      lghweb: 'Estrutura 100% Otimizada para ranquear no topo do Google',
    },
    {
      feature: 'Integração com WhatsApp',
      amateur: 'Links simples sem formatação de mensagem',
      lghweb: 'Formulários dinâmicos e carrinho enviado pronto pro WhatsApp',
    },
    {
      feature: 'Suporte & Pós-Entrega',
      amateur: 'Atendimento por chamados genéricos sem prioridade',
      lghweb: 'Suporte Humanizado Direto no WhatsApp com especialista',
    }
  ];

  return (
    <section id="diferenciais" className="section-padding comparison-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <ShieldCheck size={14} />
            <span>Por Que Fazer com a LGHWeb?</span>
          </div>
          <h2>A Diferença Entre um Site Comum e <span className="text-gradient">Uma Máquina de Vendas</span></h2>
          <p>Veja a comparação direta entre plataformas genéricas e o desenvolvimento sob medida da LGHWeb.</p>
        </div>

        <div className="comparison-table-wrapper card-glass">
          <div className="comparison-table">
            <div className="table-header">
              <div className="col-feature">Recurso / Benefício</div>
              <div className="col-amateur">Criadores Genéricos / Plataforma</div>
              <div className="col-lghweb highlight-col">
                <span className="lghweb-header-badge">RECOMENDADO</span>
                <strong>LGHWeb Soluções</strong>
              </div>
            </div>

            <div className="table-body">
              {comparisons.map((item, idx) => (
                <div key={idx} className="table-row">
                  <div className="col-feature">{item.feature}</div>
                  <div className="col-amateur">
                    <X size={16} color="#ef4444" className="icon-status" />
                    <span>{item.amateur}</span>
                  </div>
                  <div className="col-lghweb highlight-col">
                    <Check size={18} color="#10b981" className="icon-status" />
                    <strong>{item.lghweb}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .comparison-section {
          background: var(--color-bg-alt);
        }

        .comparison-table-wrapper {
          padding: 0;
          overflow-x: auto;
        }

        .comparison-table {
          min-width: 700px;
          display: flex;
          flex-direction: column;
        }

        .table-header {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1.2fr;
          padding: 24px 32px;
          background: #10142a;
          border-bottom: 1px solid var(--color-border);
          font-family: var(--font-heading);
          font-weight: 700;
        }

        .highlight-col {
          background: rgba(80, 132, 230, 0.12);
          position: relative;
        }

        .lghweb-header-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: var(--color-primary);
          color: white;
          font-size: 0.65rem;
          padding: 2px 8px;
          border-radius: 10px;
          font-weight: 800;
        }

        .col-lghweb strong {
          color: var(--color-primary);
          font-size: 1.1rem;
        }

        .table-body {
          display: flex;
          flex-direction: column;
        }

        .table-row {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1.2fr;
          padding: 20px 32px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          align-items: center;
        }

        .table-row:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .col-feature {
          font-weight: 600;
          color: var(--color-text);
          font-size: 0.95rem;
        }

        .col-amateur {
          color: var(--color-text-muted);
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .col-lghweb {
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 8px;
        }

        .icon-status {
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}
