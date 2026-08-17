import React from 'react';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export default function Services({ onOpenWhatsApp }) {
  const services = [
    {
      id: 'landing-page',
      title: 'Landing Page',
      subtitle: 'Página de Alta Conversão',
      description: 'Criamos landing pages personalizadas, com uma estrutura pensada para conduzir o visitante até a ação que você deseja, seja chamar no WhatsApp, preencher um formulário ou realizar uma compra.',
      idealFor: 'campanhas, serviços, lançamentos, produtos e anúncios.',
      features: [
        'Integração com WhatsApp',
        'Botões e formulários de contato',
        'Estrutura otimizada para dispositivos móveis',
        'Hospedagem gratuita'
      ],
      priceStarting: 'R$ 590'
    },
    {
      id: 'vitrine-virtual',
      title: 'Vitrine Virtual',
      subtitle: 'Exibição de Produtos Sem Taxas',
      description: 'O cliente escolhe o que quer, monta o pedido e envia tudo direto para o seu WhatsApp — sem complicar a compra e sem depender apenas das redes sociais.',
      idealFor: 'lojas, marcas de moda, cosméticos, artesanais, restaurantes e pequenos negócios.',
      features: [
        'Catálogo de produtos com fotos e informações',
        'Categorias e variações de produtos',
        'Carrinho para organizar o pedido',
        'Envio do pedido direto para o WhatsApp',
        'Hospedagem gratuita'
      ],
      priceStarting: 'R$ 890'
    },
    {
      id: 'site-profissional',
      title: 'Site Profissional',
      subtitle: 'Presença Profissional Completa',
      description: 'Pensado para quem quer ter uma presença própria na internet, além das redes sociais.',
      idealFor: 'empresas, escritórios, clínicas, profissionais autônomos, lojas e prestadores de serviços.',
      features: [
        'Páginas personalizadas para o seu negócio',
        'Apresentação de serviços e projetos',
        'Estrutura preparada para mecanismos de busca',
        'Design responsivo para todos os dispositivos',
        'Formulários e integração com WhatsApp',
        'Hospedagem gratuita'
      ],
      priceStarting: 'R$ 490'
    }
  ];

  return (
    <section id="servicos" className="section-padding services-section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Nossos serviços</h2>
          <p>Escolha a Estrutura Perfeita para O Seu Negócio</p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => {
            return (
              <div key={service.id} className={`card-glass service-card reveal reveal-delay-${idx + 1}`}>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-subtitle">{service.subtitle}</p>
                <p className="service-description">{service.description}</p>

                <div className="ideal-for-box">
                  <strong>Ideal para:</strong> {service.idealFor}
                </div>

                <div className="service-divider"></div>

                <ul className="service-features-list">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircle2 size={16} className="check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-footer">
                  <div className="price-info">
                    <span className="price-label">A partir de</span>
                    <div className="price-row">
                      <span className="price-value">{service.priceStarting}</span>
                      <span className="price-subtext">Domínio + Desenvolvimento</span>
                    </div>
                  </div>

                  <div className="service-btn-group">
                    <button 
                      className="btn btn-primary w-full"
                      onClick={() => onOpenWhatsApp && onOpenWhatsApp(`Olá LGHWeb! Gostaria de um orçamento para o serviço: ${service.title}`)}
                    >
                      <MessageCircle size={18} />
                      <span>Solicitar um orçamento</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-section {
          background: var(--color-bg-alt);
          position: relative;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .service-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding-top: 36px;
        }

        .service-title {
          font-size: 1.75rem;
          margin-bottom: 4px;
          color: #ffffff;
        }

        .service-subtitle {
          font-size: 0.95rem;
          color: var(--color-primary);
          font-weight: 600;
          margin-bottom: 14px;
        }

        .service-description {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: 20px;
          line-height: 1.55;
        }

        .ideal-for-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px dashed var(--color-border);
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin-bottom: 20px;
        }

        .ideal-for-box strong {
          color: var(--color-text);
        }

        .service-divider {
          height: 1px;
          background: var(--color-border);
          margin-bottom: 20px;
        }

        .service-features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 30px;
          flex-grow: 1;
        }

        .service-features-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          color: #cbd5e1;
        }

        .check-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .service-footer {
          margin-top: auto;
        }

        .price-info {
          display: flex;
          flex-direction: column;
          margin-bottom: 16px;
          background: rgba(80, 132, 230, 0.08);
          padding: 14px;
          border-radius: 12px;
          border: 1px solid rgba(80, 132, 230, 0.15);
        }

        .price-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .price-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
          flex-wrap: wrap;
        }

        .price-value {
          font-size: 1.75rem;
          font-weight: 800;
          color: #ffffff;
          font-family: var(--font-heading);
        }

        .price-subtext {
          font-size: 0.85rem;
          color: var(--color-primary);
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
