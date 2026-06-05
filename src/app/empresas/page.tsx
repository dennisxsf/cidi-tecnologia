import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";

const SITE_BASE = process.env.NODE_ENV === "production" ? "/cidi-tecnologia" : "";
const asset = (path: string) => `${SITE_BASE}${path}`;
const route = (path: string) => `${SITE_BASE}${path}`;

const WHATSAPP_NUMBER = "5585999441907";
const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const whatsappHref = whatsappLink(
  "Olá, CIDI Tecnologia. Gostaria de conversar sobre suporte, infraestrutura e soluções de TI para minha empresa."
);

export const metadata: Metadata = {
  title: "CIDI Tecnologia | TI, suporte e soluções digitais para empresas",
  description:
    "CIDI Tecnologia: infraestrutura de TI, suporte técnico, servidores, redes, segurança, backup, software e continuidade operacional para empresas.",
};

type IconName =
  | "activity"
  | "arrow"
  | "building"
  | "check"
  | "checklist"
  | "code"
  | "headset"
  | "instagram"
  | "lock"
  | "mail"
  | "monitor"
  | "network"
  | "pulse"
  | "rocket"
  | "search"
  | "server"
  | "shield"
  | "stack"
  | "strategy"
  | "whatsapp";

const services: Array<[IconName, string, string]> = [
  [
    "server",
    "Infraestrutura de TI",
    "Ambientes organizados, documentados e preparados para sustentar a operação da empresa.",
  ],
  [
    "network",
    "Redes e servidores",
    "Projeto, manutenção e evolução de redes, servidores, estações e serviços essenciais.",
  ],
  [
    "headset",
    "Suporte técnico",
    "Atendimento próximo para reduzir paradas, resolver incidentes e orientar usuários.",
  ],
  [
    "shield",
    "Segurança e backup",
    "Controles, cópias, rotinas e boas práticas para proteger dados e preservar continuidade.",
  ],
  [
    "code",
    "Soluções digitais",
    "Sistemas, automações e integrações sob medida para fluxos que precisam ganhar eficiência.",
  ],
  [
    "activity",
    "Monitoramento",
    "Acompanhamento de disponibilidade, ativos e riscos para antecipar problemas.",
  ],
];

const advantages: Array<[IconName, string, string]> = [
  [
    "strategy",
    "Consultoria sob medida",
    "A CIDI Tecnologia entende o cenário da empresa antes de recomendar ferramentas ou mudanças.",
  ],
  [
    "headset",
    "Atendimento próximo",
    "Contato claro, suporte humano e acompanhamento para o dia a dia da operação.",
  ],
  [
    "stack",
    "Solução completa",
    "Infraestrutura, segurança, suporte, documentação e sistemas conectados em uma visão única.",
  ],
  [
    "lock",
    "Confiança operacional",
    "Processos pensados para estabilidade, rastreabilidade, proteção de dados e continuidade.",
  ],
];

const method: Array<[IconName, string, string]> = [
  [
    "search",
    "Diagnóstico",
    "Mapeamos infraestrutura, riscos, gargalos, ativos e prioridades de melhoria.",
  ],
  [
    "checklist",
    "Plano técnico",
    "Transformamos achados em um plano claro, com etapas, prioridades e responsabilidades.",
  ],
  [
    "rocket",
    "Implantação",
    "Executamos melhorias com cuidado para reduzir impacto e manter a operação funcionando.",
  ],
  [
    "pulse",
    "Sustentação",
    "Acompanhamos rotina, suporte, evidências e evolução contínua do ambiente de TI.",
  ],
];

const sectors = [
  "Escritórios",
  "Clínicas",
  "Indústrias",
  "Comércios",
  "Serviços",
  "Operações administrativas",
];

function Icon({ name }: { name: IconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  const icons: Record<IconName, ReactNode> = {
    activity: (
      <>
        <path d="M3 12h4l3-7 4 14 3-7h4" {...common} />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" {...common} />
        <path d="m13 6 6 6-6 6" {...common} />
      </>
    ),
    building: (
      <>
        <path d="M4 20h16" {...common} />
        <path d="M6 20V7l6-3 6 3v13" {...common} />
        <path d="M9 10h1M14 10h1M9 14h1M14 14h1" {...common} />
      </>
    ),
    check: (
      <>
        <path d="m5 13 4 4L19 7" {...common} />
      </>
    ),
    checklist: (
      <>
        <path d="M8 6h10M8 12h10M8 18h10" {...common} />
        <path d="m4 6 .7.7L6 5.4M4 12l.7.7L6 11.4M4 18l.7.7L6 17.4" {...common} />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" {...common} />
      </>
    ),
    headset: (
      <>
        <path d="M4 13a8 8 0 0 1 16 0" {...common} />
        <path d="M4 13v4a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 2M20 13v4a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 2" {...common} />
      </>
    ),
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" {...common} />
        <circle cx="12" cy="12" r="3.5" {...common} />
        <path d="M17 7h.01" {...common} />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" {...common} />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" {...common} />
      </>
    ),
    mail: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" {...common} />
        <path d="m4 7 8 6 8-6" {...common} />
      </>
    ),
    monitor: (
      <>
        <rect x="3" y="5" width="18" height="12" rx="2" {...common} />
        <path d="M8 21h8M12 17v4" {...common} />
      </>
    ),
    network: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="1.5" {...common} />
        <rect x="14" y="4" width="6" height="6" rx="1.5" {...common} />
        <rect x="9" y="14" width="6" height="6" rx="1.5" {...common} />
        <path d="M10 7h4M7 10v2l4 2M17 10v2l-4 2" {...common} />
      </>
    ),
    pulse: (
      <>
        <path d="M21 12a9 9 0 1 1-3-6.7" {...common} />
        <path d="M21 5v6h-6" {...common} />
        <path d="M7 13h3l2-4 2 7 2-3h2" {...common} />
      </>
    ),
    rocket: (
      <>
        <path d="M12 15 9 12c.7-4.2 3.2-7.2 8-8 1.2 4.8-1.8 7.3-6 8Z" {...common} />
        <path d="M9 12 5 16l3 1 1 3 4-4" {...common} />
        <path d="M15 7h.01" {...common} />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="6.5" {...common} />
        <path d="m16 16 4 4" {...common} />
      </>
    ),
    server: (
      <>
        <rect x="4" y="4" width="16" height="6" rx="2" {...common} />
        <rect x="4" y="14" width="16" height="6" rx="2" {...common} />
        <path d="M8 7h.01M8 17h.01M12 7h5M12 17h5" {...common} />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 6v6c0 5-3.3 8.2-8 9-4.7-.8-8-4-8-9V6Z" {...common} />
        <path d="m8.5 12 2.2 2.2 4.8-5" {...common} />
      </>
    ),
    stack: (
      <>
        <path d="m12 3 8 4-8 4-8-4Z" {...common} />
        <path d="m4 12 8 4 8-4M4 17l8 4 8-4" {...common} />
      </>
    ),
    strategy: (
      <>
        <path d="M4 19V5h16" {...common} />
        <path d="M7 16 11 12l3 3 5-7" {...common} />
        <path d="M16 8h3v3" {...common} />
      </>
    ),
    whatsapp: (
      <>
        <path d="M5.5 19 7 15.6A7.5 7.5 0 1 1 10 18.8Z" {...common} />
        <path d="M9.5 8.5c.2 4 2.7 6 6 6" {...common} />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  );
}

function Button({
  href,
  children,
  variant = "primary",
  icon = "arrow",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: IconName | false;
}) {
  return (
    <a className={`companies-btn companies-btn-${variant}`} href={href}>
      <span>{children}</span>
      {icon && <Icon name={icon} />}
    </a>
  );
}

function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <span className={`companies-label ${dark ? "companies-label-dark" : ""}`}>{children}</span>;
}

export default function EmpresasPage() {
  return (
    <main className="companies-page">
      <header className="companies-header">
        <a href={route("/empresas/")} className="companies-brand" aria-label="CIDI Tecnologia">
          <img src={asset("/brand/cidi-logo-white.png")} alt="CIDI Tecnologia" />
        </a>
        <nav aria-label="Navegação institucional">
          <a href="#servicos">Serviços</a>
          <a href="#metodo">Como funciona</a>
          <a href="#cartorios">Cartórios</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="companies-header-actions">
          <Button href={route("/")} variant="ghost" icon={false}>
            Soluções para cartórios
          </Button>
          <Button href={whatsappHref} icon="whatsapp">
            Falar no WhatsApp
          </Button>
        </div>
      </header>

      <section className="companies-hero" id="topo">
        <div className="companies-orbit companies-orbit-one" />
        <div className="companies-orbit companies-orbit-two" />
        <div className="companies-container companies-hero-grid">
          <div className="companies-hero-copy">
            <SectionLabel dark>TI estratégica para empresas</SectionLabel>
            <h1>
              Infraestrutura,
              <br />
              suporte e software
              <br />
              para empresas que <span>não podem parar.</span>
            </h1>
            <p>
              A CIDI Tecnologia estrutura ambientes de TI,
              <br className="companies-mobile-only" /> redes, servidores, segurança,
              <br className="companies-mobile-only" /> suporte e soluções digitais para empresas
              <br className="companies-mobile-only" /> que precisam operar com estabilidade,
              <br className="companies-mobile-only" /> velocidade e confiança.
            </p>
            <div className="companies-actions">
              <Button href={whatsappHref}>Falar com especialista</Button>
              <Button href="#servicos" variant="secondary">
                Conhecer serviços
              </Button>
            </div>
            <div className="companies-hero-metrics" aria-label="Pilares de atuação">
              {["Infraestrutura", "Segurança", "Suporte", "Software"].map((item, index) => (
                <span style={{ "--i": index } as CSSProperties} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="companies-hero-visual" aria-label="Painel visual de operação tecnológica">
            <div className="companies-circuit" />
            <div className="companies-command-card companies-float">
              <div className="companies-command-top">
                <img src={asset("/brand/cidi-logo-light.png")} alt="" />
                <span>Operação monitorada</span>
              </div>
              <div className="companies-dashboard-grid">
                <div className="companies-kpi-card">
                  <span>Disponibilidade</span>
                  <strong>99,98%</strong>
                  <small>Serviços críticos</small>
                </div>
                <div className="companies-kpi-card">
                  <span>Ativos</span>
                  <strong>128</strong>
                  <small>Monitorados</small>
                </div>
                <div className="companies-score-card">
                  <span>Saúde do ambiente</span>
                  <div className="companies-score-ring">
                    <strong>92%</strong>
                  </div>
                </div>
              </div>
              <div className="companies-status-list">
                {["Backups verificados", "Rede operacional", "Suporte em acompanhamento"].map((item) => (
                  <span key={item}>
                    <Icon name="check" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="companies-mini-panel companies-mini-panel-left">
              <Icon name="shield" />
              <span>Segurança em camadas</span>
            </div>
            <div className="companies-mini-panel companies-mini-panel-right">
              <Icon name="monitor" />
              <span>Rotina com visibilidade</span>
            </div>
          </div>
        </div>
      </section>

      <section className="companies-section companies-services" id="servicos">
        <div className="companies-container">
          <div className="companies-section-heading">
            <SectionLabel>Serviços CIDI Tecnologia</SectionLabel>
            <h2>Soluções completas para sustentar o crescimento da sua empresa.</h2>
            <p>
              A atuação da CIDI Tecnologia une suporte, infraestrutura, segurança e desenvolvimento para tirar a TI do
              improviso e colocar a operação em um padrão mais previsível.
            </p>
          </div>
          <div className="companies-services-grid">
            {services.map(([icon, title, text], index) => (
              <article className="companies-service-card" style={{ "--i": index } as CSSProperties} key={title}>
                <span className="companies-icon">
                  <Icon name={icon} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="companies-section companies-showcase">
        <div className="companies-container companies-showcase-grid">
          <div>
            <SectionLabel dark>Visibilidade e controle</SectionLabel>
            <h2>Quando a TI é organizada, a gestão enxerga antes do problema virar urgência.</h2>
            <p>
              Empresas perdem produtividade quando dependem de correções apressadas, documentação incompleta e suporte
              sem histórico. A CIDI Tecnologia cria uma base técnica mais clara para operar, evoluir e decidir.
            </p>
            <ul className="companies-check-list">
              <li>
                <Icon name="check" />
                Ativos, acessos e serviços críticos documentados.
              </li>
              <li>
                <Icon name="check" />
                Rotinas de backup, disponibilidade e suporte acompanhadas.
              </li>
              <li>
                <Icon name="check" />
                Plano técnico alinhado à realidade e ao ritmo da empresa.
              </li>
            </ul>
          </div>
          <div className="companies-showcase-panel">
            <img src={asset("/brand/cidi-monitoring-slide.png")} alt="Dashboard de monitoramento CIDI Tecnologia" />
            <div className="companies-showcase-glass">
              <strong>Monitoramento 24/7</strong>
              <span>Indicadores, alertas e evidências em um único fluxo.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="companies-section companies-light" id="metodo">
        <div className="companies-container">
          <div className="companies-section-heading companies-section-heading-left">
            <SectionLabel>Como funciona</SectionLabel>
            <h2>Um método simples para transformar TI em tranquilidade operacional.</h2>
          </div>
          <div className="companies-method-line">
            {method.map(([icon, title, text], index) => (
              <article className="companies-method-step" style={{ "--i": index } as CSSProperties} key={title}>
                <span className="companies-step-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="companies-icon">
                  <Icon name={icon} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="companies-section companies-advantages">
        <div className="companies-container companies-advantages-grid">
          <div className="companies-advantages-copy">
            <SectionLabel>Por que escolher a CIDI Tecnologia</SectionLabel>
            <h2>Tecnologia com proximidade, método e visão de continuidade.</h2>
            <p>
              A CIDI Tecnologia não entrega apenas manutenção pontual. O trabalho combina orientação técnica, suporte
              recorrente, documentação, segurança e evolução do ambiente.
            </p>
            <div className="companies-sector-strip">
              {sectors.map((sector) => (
                <span key={sector}>{sector}</span>
              ))}
            </div>
          </div>
          <div className="companies-advantages-list">
            {advantages.map(([icon, title, text], index) => (
              <article className="companies-advantage-card" style={{ "--i": index } as CSSProperties} key={title}>
                <span className="companies-icon">
                  <Icon name={icon} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="companies-section companies-cartorio-bridge" id="cartorios">
        <div className="companies-container companies-bridge-grid">
          <div>
            <SectionLabel dark>Especialidade em cartórios</SectionLabel>
            <h2>A CIDI Tecnologia também tem uma landing dedicada à adequação de cartórios.</h2>
            <p>
              Para serventias extrajudiciais, criamos uma experiência específica para diagnóstico, evidências,
              continuidade operacional e adequação ao Provimento CNJ nº 213/2026.
            </p>
            <div className="companies-actions">
              <Button href={route("/")}>Ver soluções para cartórios</Button>
              <Button href={whatsappHref} variant="secondary" icon="whatsapp">
                Conversar com especialista
              </Button>
            </div>
          </div>
          <div className="companies-bridge-card">
            <img src={asset("/brand/cartorio-diagnostico.png")} alt="Landing de diagnóstico para cartórios" />
            <div className="companies-bridge-badge">
              <Icon name="building" />
              <span>Cartórios e serventias</span>
            </div>
          </div>
        </div>
      </section>

      <section className="companies-section companies-final" id="contato">
        <div className="companies-container companies-final-grid">
          <div>
            <SectionLabel dark>Próximo passo</SectionLabel>
            <h2>Vamos entender o momento tecnológico da sua empresa?</h2>
            <p>
              Fale com a CIDI Tecnologia e comece por uma conversa objetiva sobre infraestrutura, suporte, segurança,
              software e continuidade.
            </p>
          </div>
          <div className="companies-final-actions">
            <Button href={whatsappHref}>Falar no WhatsApp</Button>
            <Button href="mailto:contato@ciditecnologia.com.br" variant="secondary" icon="mail">
              Enviar e-mail
            </Button>
          </div>
        </div>
      </section>

      <footer className="companies-footer">
        <div className="companies-container companies-footer-grid">
          <div>
            <img src={asset("/brand/cidi-logo-white.png")} alt="CIDI Tecnologia" />
            <p>Tecnologia que garante estabilidade, segurança e continuidade para empresas e cartórios.</p>
          </div>
          <div className="companies-footer-links">
            <a href={whatsappHref}>
              <Icon name="whatsapp" />
              (85) 99944-1907
            </a>
            <a href="mailto:contato@ciditecnologia.com.br">
              <Icon name="mail" />
              contato@ciditecnologia.com.br
            </a>
            <a href="https://www.instagram.com/ciditecnologia/" target="_blank" rel="noreferrer">
              <Icon name="instagram" />
              @ciditecnologia
            </a>
          </div>
          <div className="companies-footer-nav">
            <a href={route("/")}>Landing para cartórios</a>
            <a href="#servicos">Serviços</a>
            <a href="#metodo">Como funciona</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
