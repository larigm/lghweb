import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function Faq({ onOpenWhatsApp }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Qual o prazo de entrega do meu projeto?',
      answer: 'O prazo depende do tipo e do tamanho do projeto. Depois de entendermos o que você precisa, combinamos um prazo claro para a entrega.'
    },
    {
      question: 'Vou ter que pagar mensalidade para a LGHweb?',
      answer: 'Não cobramos mensalidade pelo desenvolvimento do site. O domínio e outros serviços externos podem ter custos próprios, que são informados antes do projeto.'
    },
    {
      question: 'Como funciona a Vitrine Virtual? Existe comissão sobre as vendas?',
      answer: 'Não. A Vitrine Virtual funciona como um catálogo com carrinho: o cliente escolhe os produtos e envia o pedido pelo WhatsApp. Você continua recebendo o pagamento diretamente, sem comissão para a LGHweb.'
    },
    {
      question: 'Como funciona a manutenção do site?',
      answer: 'Depois que seu site estiver no ar, você pode contar com a LGHweb para atualizações, ajustes, correções e pequenas alterações. A manutenção pode ser contratada conforme a sua necessidade.'
    },
    {
      question: 'O site funciona bem no celular?',
      answer: 'Sim. Todos os projetos são desenvolvidos pensando primeiro na experiência do usuário, com adaptação para celulares, tablets e computadores.'
    },
    {
      question: 'Eu preciso fornecer os textos e as imagens?',
      answer: 'Você pode enviar o material que já possui. Também ajudamos a organizar as informações e orientar sobre quais conteúdos e imagens fazem sentido para cada parte do site.'
    },
    {
      question: 'Quais formas de pagamento vocês aceitam?',
      answer: 'As condições de pagamento são combinadas antes do início do projeto.'
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-padding faq-section">
      <div className="container">
        <div className="section-header">
          <h2>Perguntas Frequentes</h2>
          <p>Respondemos as principais dúvidas para que você tome a decisão com total segurança.</p>
        </div>

        <div className="faq-accordion-wrapper">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item card-glass ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <div className={`faq-chevron ${isOpen ? 'rotate' : ''}`}>
                    <ChevronDown size={20} color="#5084e6" />
                  </div>
                </div>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faq-cta-box">
          <h3>Ainda tem alguma dúvida específica sobre o seu projeto?</h3>
          <p>Fale diretamente com o nosso especialista e tire todas as suas dúvidas em minutos.</p>
          <button className="btn btn-primary" onClick={onOpenWhatsApp}>
            <MessageCircle size={18} />
            <span>Chamar no WhatsApp Agora</span>
          </button>
        </div>
      </div>

      <style>{`
        .faq-section {
          background: var(--color-bg);
        }

        .faq-accordion-wrapper {
          max-width: 800px;
          margin: 0 auto 50px auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          padding: 24px 28px;
          cursor: pointer;
          transition: var(--transition);
        }

        .faq-item.open {
          border-color: var(--color-border-glow);
          background: #192044;
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          color: white;
        }

        .faq-chevron {
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .faq-chevron.rotate {
          transform: rotate(180deg);
        }

        .faq-answer {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--color-border);
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .faq-cta-box {
          background: rgba(80, 132, 230, 0.08);
          border: 1px solid rgba(80, 132, 230, 0.25);
          border-radius: var(--radius-lg);
          padding: 40px;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .faq-cta-box h3 {
          font-size: 1.35rem;
          margin-bottom: 10px;
        }

        .faq-cta-box p {
          color: var(--color-text-muted);
          margin-bottom: 24px;
        }
      `}</style>
    </section>
  );
}
