import React from 'react';
import { Star, Quote, HeartHandshake } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Dr. Roberto Mendonça',
      role: 'Advogado Trabalhista',
      company: 'Mendonça Advocacia',
      text: 'A Landing Page desenvolvida pela LGHWeb superou todas as minhas expectativas. Nosso volume de contatos no WhatsApp triplicou no primeiro mês rodando anúncios no Google.',
      rating: 5,
      avatar: 'RM'
    },
    {
      name: 'Camila Alencar',
      role: 'Proprietária',
      company: 'BellaModa Feminina',
      text: 'A Vitrine Virtual mudou a forma como vendo roupas. Meus clientes adoram escolher os produtos e mandar o pedido pronto pelo WhatsApp. Não pago nem 1 centavo de comissão!',
      rating: 5,
      avatar: 'CA'
    },
    {
      name: 'Marcelo Castro',
      role: 'Diretor Comercial',
      company: 'Logística & Cargas Castro',
      text: 'Nosso site antigo era lento e ultrapassado. A LGHWeb entregou um site corporativo incrível em menos de 1 semana. O atendimento no WhatsApp foi excepcional do início ao fim.',
      rating: 5,
      avatar: 'MC'
    }
  ];

  return (
    <section id="depoimentos" className="section-padding testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <HeartHandshake size={14} />
            <span>Satisfação Garantida</span>
          </div>
          <h2>O Que Dizem os Nossos <span className="text-gradient">Clientes</span></h2>
          <p>Depoimentos reais de empresários que transformaram sua presença digital conosco.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <div key={idx} className="card-glass testimonial-card">
              <div className="t-card-top">
                <div className="t-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} color="#f59e0b" fill="#f59e0b" />
                  ))}
                </div>
                <Quote size={24} color="rgba(80, 132, 230, 0.4)" />
              </div>

              <p className="t-text">"{item.text}"</p>

              <div className="t-author">
                <div className="t-avatar">{item.avatar}</div>
                <div className="t-author-info">
                  <strong>{item.name}</strong>
                  <span>{item.role} • {item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background: var(--color-bg-alt);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .testimonial-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .t-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .t-stars {
          display: flex;
          gap: 4px;
        }

        .t-text {
          font-size: 0.95rem;
          color: #e2e8f0;
          font-style: italic;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .t-author {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
        }

        .t-avatar {
          width: 44px;
          height: 44px;
          background: var(--color-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-family: var(--font-heading);
          font-size: 0.9rem;
        }

        .t-author-info {
          display: flex;
          flex-direction: column;
        }

        .t-author-info strong {
          font-size: 0.95rem;
          color: white;
        }

        .t-author-info span {
          font-size: 0.78rem;
          color: var(--color-text-muted);
        }

        @media (max-width: 992px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
