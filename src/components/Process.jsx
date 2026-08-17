import React from 'react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Vamos entender sua necessidade',
      description: 'Conversamos sobre sua marca, seus objetivos, seus serviços e o que você quer que o site faça pelo seu negócio.'
    },
    {
      num: '02',
      title: 'Criamos a experiência',
      description: 'Transformamos essas informações em uma estrutura visual pensada para sua marca, seu público e a forma como seus clientes navegam.'
    },
    {
      num: '03',
      title: 'Colocamos tudo para funcionar',
      description: 'Desenvolvemos o site, adaptamos cada detalhe para celular e computador e conectamos as ferramentas necessárias, como o WhatsApp.'
    },
    {
      num: '04',
      title: 'Seu site fica online',
      description: 'Depois dos ajustes finais, colocamos o projeto no ar e entregamos tudo pronto para você começar a divulgar.'
    }
  ];

  return (
    <section id="processo" className="section-padding process-section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Processo de desenvolvimento</h2>
          <p>Entenda os passos para o seu site ficar online</p>
        </div>

        <div className="process-grid">
          {steps.map((step, idx) => {
            return (
              <div key={idx} className={`card-glass process-card reveal reveal-delay-${idx + 1}`}>
                <div className="process-card-header">
                  <h3 className="process-title">{step.title}</h3>
                  <span className="process-num-badge">{step.num}</span>
                </div>
                <p className="process-desc">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .process-section {
          background: var(--color-bg);
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .process-card {
          display: flex;
          flex-direction: column;
          padding: 28px 24px;
          min-height: 240px;
        }

        .process-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 16px;
        }

        .process-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
          margin: 0;
          flex-grow: 1;
        }

        .process-num-badge {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1;
          flex-shrink: 0;
        }

        .process-desc {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1100px) {
          .process-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
