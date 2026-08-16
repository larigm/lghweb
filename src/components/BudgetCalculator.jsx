import React, { useState } from 'react';
import { Calculator, Check, MessageCircle, Sparkles, Send, Info } from 'lucide-react';

export default function BudgetCalculator() {
  const [selectedProjectType, setSelectedProjectType] = useState('landing-page');
  const [businessName, setBusinessName] = useState('');
  const [selectedExtras, setSelectedExtras] = useState([
    'whatsapp-chat',
    'seo-basic',
    'ssl-cert'
  ]);

  const projectTypes = [
    {
      id: 'landing-page',
      name: 'Landing Page de Vendas',
      basePrice: 590,
      description: 'Página única focada em conversão direta de leads ou tráfego pago.'
    },
    {
      id: 'vitrine-virtual',
      name: 'Vitrine Virtual',
      basePrice: 890,
      description: 'Catálogo de produtos online com carrinho e pedido no WhatsApp.'
    },
    {
      id: 'site-institucional',
      name: 'Site Institucional Profissional',
      basePrice: 1190,
      description: 'Site corporativo multi-páginas para autoridade de marca.'
    }
  ];

  const extraOptions = [
    {
      id: 'whatsapp-chat',
      name: 'Botão Flutuante & Chat WhatsApp Direto',
      price: 0,
      included: true,
      description: 'Atendimento com 1 clique direto no celular do cliente.'
    },
    {
      id: 'ssl-cert',
      name: 'Certificado de Segurança SSL (HTTPS)',
      price: 0,
      included: true,
      description: 'Garante o cadeado verde e proteção de dados.'
    },
    {
      id: 'seo-basic',
      name: 'Otimização de Velocidade (PageSpeed 90+)',
      price: 0,
      included: true,
      description: 'Carregamento instantâneo para não perder vendas.'
    },
    {
      id: 'seo-advanced',
      name: 'SEO Avançado (Indexação Prioritária no Google)',
      price: 180,
      description: 'Meta tags estratégicas, sitemap XML e palavras-chave.'
    },
    {
      id: 'custom-domain',
      name: 'Registro de Domínio .com.br (1º Ano Grátis)',
      price: 90,
      description: 'Seu endereço oficial na internet (ex: suamarca.com.br).'
    },
    {
      id: 'custom-animations',
      name: 'Efeitos Visuais Interativos & Animações 3D',
      price: 150,
      description: 'Experiência visual moderna e imersiva para encantar visitantes.'
    },
    {
      id: 'blog-module',
      name: 'Módulo de Blog / Notícias',
      price: 220,
      description: 'Área para publicar artigos e captar tráfego orgânico.'
    }
  ];

  const toggleExtra = (id) => {
    // If option is included by default, don't allow unchecking
    const extraObj = extraOptions.find(opt => opt.id === id);
    if (extraObj && extraObj.included) return;

    if (selectedExtras.includes(id)) {
      setSelectedExtras(selectedExtras.filter(item => item !== id));
    } else {
      setSelectedExtras([...selectedExtras, id]);
    }
  };

  const currentProject = projectTypes.find(p => p.id === selectedProjectType);
  
  const calculateTotal = () => {
    let total = currentProject ? currentProject.basePrice : 0;
    selectedExtras.forEach(extraId => {
      const extra = extraOptions.find(opt => opt.id === extraId);
      if (extra) {
        total += extra.price;
      }
    });
    return total;
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const total = calculateTotal();
    const selectedExtraNames = selectedExtras
      .map(id => extraOptions.find(o => o.id === id)?.name)
      .filter(Boolean)
      .join('\n- ');

    const text = `Olá LGHWeb! Gostaria de solicitar o orçamento para o meu projeto:%0A%0A` +
      `📌 *Tipo de Projeto:* ${currentProject.name}%0A` +
      `🏢 *Nome da Empresa/Negócio:* ${businessName ? businessName : 'Não informado'}%0A` +
      `✨ *Recursos Adicionais Incluídos:*%0A- ${selectedExtraNames}%0A%0A` +
      `💰 *Valor Estimado:* R$ ${total},00%0A%0A` +
      `Podemos conversar para alinhar os detalhes do meu site?`;

    const whatsappNumber = '5511999999999'; // Can be customized
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`, '_blank');
  };

  return (
    <section id="calculadora" className="section-padding calculator-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <Calculator size={14} />
            <span>Simulador em Tempo Real</span>
          </div>
          <h2>Monte o Orçamento do <span className="text-gradient">Seu Projeto</span></h2>
          <p>Selecione as opções desejadas abaixo e veja na hora o valor estimado do seu projeto sem compromisso.</p>
        </div>

        <div className="calculator-wrapper card-glass">
          <div className="calculator-grid">
            {/* Step 1: Select Project Type */}
            <div className="calc-column">
              <h3 className="calc-step-title">
                <span className="step-num">1</span>
                Escolha o Tipo de Site
              </h3>

              <div className="project-types-list">
                {projectTypes.map((pt) => (
                  <div 
                    key={pt.id}
                    className={`project-type-card ${selectedProjectType === pt.id ? 'active' : ''}`}
                    onClick={() => setSelectedProjectType(pt.id)}
                  >
                    <div className="pt-header">
                      <span className="pt-name">{pt.name}</span>
                      <span className="pt-price">R$ {pt.basePrice}</span>
                    </div>
                    <p className="pt-desc">{pt.description}</p>
                    {selectedProjectType === pt.id && (
                      <div className="selected-check">
                        <Check size={14} color="#ffffff" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Step 2: Extras */}
              <h3 className="calc-step-title" style={{ marginTop: '30px' }}>
                <span className="step-num">2</span>
                Recursos & Adicionais
              </h3>

              <div className="extras-list">
                {extraOptions.map((opt) => {
                  const isChecked = selectedExtras.includes(opt.id);
                  return (
                    <div 
                      key={opt.id}
                      className={`extra-item ${isChecked ? 'active' : ''} ${opt.included ? 'disabled' : ''}`}
                      onClick={() => toggleExtra(opt.id)}
                    >
                      <div className="checkbox-custom">
                        {isChecked && <Check size={14} color="#ffffff" />}
                      </div>
                      <div className="extra-info">
                        <div className="extra-title-row">
                          <span className="extra-name">{opt.name}</span>
                          <span className="extra-price">
                            {opt.included ? 'GRÁTIS' : `+ R$ ${opt.price}`}
                          </span>
                        </div>
                        <span className="extra-desc">{opt.description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Live Summary */}
            <div className="calc-summary-column">
              <div className="summary-box">
                <h3 className="summary-title">Resumo do Orçamento</h3>
                
                <div className="summary-detail-item">
                  <span>Projeto Base:</span>
                  <strong>{currentProject.name}</strong>
                </div>

                <div className="summary-detail-item">
                  <span>Preço Base:</span>
                  <span>R$ {currentProject.basePrice},00</span>
                </div>

                <div className="summary-extras-count">
                  <span>Adicionais ({selectedExtras.length}):</span>
                  <span>+ R$ {calculateTotal() - currentProject.basePrice},00</span>
                </div>

                <div className="summary-divider"></div>

                <div className="form-group">
                  <label htmlFor="businessName">Nome do Seu Negócio ou Projeto (Opcional):</label>
                  <input 
                    type="text" 
                    id="businessName" 
                    placeholder="Ex: Consultoria Silva, Loja Bella..." 
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="calc-input"
                  />
                </div>

                <div className="total-price-box">
                  <span className="total-label">Investimento Total Estimado</span>
                  <div className="total-amount">
                    R$ {calculateTotal()}
                    <span className="total-cents">,00</span>
                  </div>
                  <span className="total-note">Pagamento facilitado em até 12x no cartão</span>
                </div>

                <button 
                  className="btn btn-primary w-full btn-lg"
                  onClick={handleSendWhatsApp}
                >
                  <MessageCircle size={20} />
                  <span>Enviar Orçamento no WhatsApp</span>
                </button>

                <div className="guarantee-note">
                  <Info size={16} color="#5084e6" />
                  <span>Sem compromisso. Ao clicar, abriremos a conversa direta para tirar dúvidas e fechar a proposta.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .calculator-section {
          position: relative;
        }

        .calculator-wrapper {
          padding: 40px;
        }

        .calculator-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
        }

        .calc-step-title {
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .step-num {
          width: 32px;
          height: 32px;
          background: var(--color-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .project-types-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .project-type-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 16px 20px;
          cursor: pointer;
          transition: var(--transition);
          position: relative;
        }

        .project-type-card:hover {
          border-color: var(--color-border-glow);
          background: rgba(80, 132, 230, 0.05);
        }

        .project-type-card.active {
          border-color: var(--color-primary);
          background: rgba(80, 132, 230, 0.12);
        }

        .pt-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .pt-name {
          font-weight: 700;
          color: var(--color-text);
        }

        .pt-price {
          font-weight: 800;
          color: var(--color-primary);
        }

        .pt-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        .selected-check {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 20px;
          height: 20px;
          background: var(--color-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Extras List */
        .extras-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .extra-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--color-border);
          border-radius: 10px;
          cursor: pointer;
          transition: var(--transition);
        }

        .extra-item:hover {
          border-color: var(--color-border-glow);
        }

        .extra-item.active {
          background: rgba(80, 132, 230, 0.08);
          border-color: rgba(80, 132, 230, 0.4);
        }

        .checkbox-custom {
          width: 20px;
          height: 20px;
          border: 2px solid var(--color-text-dim);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
          transition: var(--transition);
          flex-shrink: 0;
        }

        .extra-item.active .checkbox-custom {
          background: var(--color-primary);
          border-color: var(--color-primary);
        }

        .extra-info {
          flex-grow: 1;
        }

        .extra-title-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2px;
        }

        .extra-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text);
        }

        .extra-price {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-primary);
        }

        .extra-desc {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          display: block;
        }

        /* Summary Column */
        .summary-box {
          background: #131835;
          border: 1px solid var(--color-border-glow);
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          position: sticky;
          top: 100px;
        }

        .summary-title {
          font-size: 1.3rem;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--color-border);
        }

        .summary-detail-item, .summary-extras-count {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: 12px;
        }

        .summary-detail-item strong {
          color: var(--color-text);
        }

        .summary-divider {
          height: 1px;
          background: var(--color-border);
          margin: 20px 0;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-muted);
          margin-bottom: 8px;
        }

        .calc-input {
          width: 100%;
          padding: 12px 16px;
          background: #1a2044;
          border: 1px solid var(--color-border);
          border-radius: 10px;
          color: white;
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition);
        }

        .calc-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 10px rgba(80, 132, 230, 0.3);
        }

        .total-price-box {
          background: rgba(80, 132, 230, 0.12);
          border: 1px solid rgba(80, 132, 230, 0.3);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          margin-bottom: 24px;
        }

        .total-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--color-text-muted);
          letter-spacing: 0.5px;
        }

        .total-amount {
          font-size: 2.75rem;
          font-weight: 800;
          color: var(--color-primary);
          font-family: var(--font-heading);
          line-height: 1.1;
          margin: 6px 0;
        }

        .total-cents {
          font-size: 1.25rem;
        }

        .total-note {
          font-size: 0.78rem;
          color: var(--color-text-muted);
        }

        .btn-lg {
          padding: 16px 24px;
          font-size: 1.05rem;
        }

        .guarantee-note {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--color-text-muted);
          margin-top: 16px;
          line-height: 1.4;
        }

        @media (max-width: 992px) {
          .calculator-grid {
            grid-template-columns: 1fr;
          }
          .calculator-wrapper {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
