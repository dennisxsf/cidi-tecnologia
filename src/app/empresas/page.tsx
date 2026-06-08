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

const cartorioDiagnosisHref = whatsappLink(
  "Olá, CIDI Tecnologia. Gostaria de agendar um diagnóstico para adequação tecnológica do meu cartório ao Provimento CNJ nº 213/2026."
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
  | "chart"
  | "check"
  | "checklist"
  | "code"
  | "cloud"
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

const infrastructureHighlights: Array<[IconName, string]> = [
  ["shield", "Alta disponibilidade"],
  ["lock", "Segurança integrada"],
  ["headset", "Suporte especializado"],
];

const infrastructureSolutions: Array<[IconName, string, string]> = [
  [
    "server",
    "Servidores Enterprise",
    "Performance para cargas críticas e ambientes exigentes.",
  ],
  [
    "stack",
    "Storage & SAN",
    "Alta disponibilidade e proteção para dados críticos.",
  ],
  [
    "network",
    "Networking",
    "Conectividade robusta para ambientes corporativos.",
  ],
  [
    "cloud",
    "Cloud Híbrida",
    "Nuvem pública e privada com gestão unificada.",
  ],
  [
    "stack",
    "Virtualização",
    "Isolamento e flexibilidade para evoluir a infraestrutura.",
  ],
  [
    "monitor",
    "Monitoramento",
    "Visibilidade contínua para prevenir falhas.",
  ],
];

const developmentHighlights: Array<[IconName, string]> = [
  ["chart", "Escalabilidade"],
  ["strategy", "Integração"],
  ["pulse", "Automação"],
];

const developmentSolutions: Array<[IconName, string, string]> = [
  [
    "code",
    "Aplicações Web",
    "Sistemas robustos, escaláveis e centrados na experiência.",
  ],
  [
    "monitor",
    "Mobile & PWA",
    "Apps rápidos, responsivos e prontos para qualquer dispositivo.",
  ],
  [
    "chart",
    "Data & Analytics",
    "Transformamos dados em insights para decisões inteligentes.",
  ],
  [
    "rocket",
    "Automação & DevOps",
    "Pipelines, CI/CD e automações que aceleram entregas com qualidade.",
  ],
  [
    "shield",
    "Segurança",
    "Proteção de dados, controle de acessos e conformidade desde o início.",
  ],
  [
    "network",
    "Integrações",
    "Conectamos sistemas, plataformas e APIs para fluxos sem atrito.",
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

const cartorioSpecialties: Array<[IconName, string, string]> = [
  [
    "search",
    "Diagnóstico e adequação técnica",
    "Mapeamento de riscos, infraestrutura e prioridades.",
  ],
  [
    "pulse",
    "Backup, evidências e continuidade",
    "Mais controle para reduzir falhas e responder com segurança.",
  ],
  [
    "headset",
    "Suporte especializado para serventias",
    "Atendimento próximo, orientação técnica e acompanhamento.",
  ],
  [
    "checklist",
    "Documentação e conformidade",
    "Organização de registros, acessos e processos críticos.",
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

const sectors: Array<[IconName, string]> = [
  ["building", "Escritórios"],
  ["activity", "Clínicas"],
  ["stack", "Indústrias"],
  ["checklist", "Comércios"],
  ["strategy", "Serviços"],
  ["network", "Operações administrativas"],
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
    chart: (
      <>
        <path d="M4 20V6" {...common} />
        <path d="M4 20h16" {...common} />
        <path d="M8 17v-5M12 17V8M16 17v-8M20 17v-3" {...common} />
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
    cloud: (
      <>
        <path d="M17.5 18H8a5 5 0 1 1 1.1-9.9A6 6 0 0 1 20 11.5 3.5 3.5 0 0 1 17.5 18Z" {...common} />
        <path d="m10 13 2 2 4-4" {...common} />
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
          <div className="companies-solutions-heading">
            <div>
              <SectionLabel>Soluções CIDI Tecnologia</SectionLabel>
              <h2>Duas frentes estratégicas para sustentar e evoluir sua operação.</h2>
            </div>
            <p>
              Atuamos na base da operação com infraestrutura, hardware e alta disponibilidade, e na evolução do negócio
              com desenvolvimento de software sob medida, integração e automação.
            </p>
          </div>

          <fieldset className="companies-solutions-switcher">
            <legend className="companies-sr-only">Escolha a frente de solução da CIDI Tecnologia</legend>
            <input
              className="companies-solution-radio"
              type="radio"
              id="solution-infrastructure"
              name="companies-solution"
              defaultChecked
            />
            <input
              className="companies-solution-radio"
              type="radio"
              id="solution-development"
              name="companies-solution"
            />

            <div className="companies-solution-toggle" aria-label="Soluções CIDI Tecnologia">
              <label htmlFor="solution-infrastructure">
                <Icon name="server" />
                Infraestrutura & Hardware
              </label>
              <label htmlFor="solution-development">
                <Icon name="code" />
                Desenvolvimento de Software
              </label>
            </div>

            <div className="companies-solution-panels">
              <article className="companies-solution-panel companies-solution-panel-infrastructure">
                <div className="companies-solution-copy">
                  <h3>Infraestrutura confiável para desempenho, segurança e continuidade.</h3>
                  <p>
                    Soluções enterprise de hardware e infraestrutura para ambientes on-premise, data centers e cloud
                    híbrida, com foco em disponibilidade, proteção e suporte especializado.
                  </p>

                  <div className="companies-solution-highlights">
                    {infrastructureHighlights.map(([icon, label]) => (
                      <span key={label}>
                        <Icon name={icon} />
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="companies-solution-cards">
                    {infrastructureSolutions.map(([icon, title, text], index) => (
                      <article className="companies-solution-card" style={{ "--i": index } as CSSProperties} key={title}>
                        <span className="companies-icon">
                          <Icon name={icon} />
                        </span>
                        <div>
                          <h4>{title}</h4>
                          <p>{text}</p>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="companies-solution-actions">
                    <Button href={whatsappHref} icon="whatsapp">
                      Falar com um especialista
                    </Button>
                  </div>
                </div>

                <div className="companies-solution-visual">
                  <img
                    src={asset("/brand/solucoes-infraestrutura-hardware.png")}
                    alt="Data center com racks de servidores para infraestrutura de alta disponibilidade"
                  />
                </div>
              </article>

              <article className="companies-solution-panel companies-solution-panel-development">
                <div className="companies-solution-copy">
                  <h3>Desenvolvimento de software sob medida para operações que exigem escala, integração e resultado.</h3>
                  <p>
                    Desenvolvemos soluções digitais personalizadas para conectar sistemas, automatizar processos e gerar
                    eficiência real para o seu negócio.
                  </p>

                  <div className="companies-solution-highlights">
                    {developmentHighlights.map(([icon, label]) => (
                      <span key={label}>
                        <Icon name={icon} />
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="companies-solution-cards">
                    {developmentSolutions.map(([icon, title, text], index) => (
                      <article className="companies-solution-card" style={{ "--i": index } as CSSProperties} key={title}>
                        <span className="companies-icon">
                          <Icon name={icon} />
                        </span>
                        <div>
                          <h4>{title}</h4>
                          <p>{text}</p>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="companies-solution-actions">
                    <Button href={whatsappHref}>Falar com um especialista</Button>
                    <Button href={whatsappHref} variant="secondary">
                      Conhecer possibilidades
                    </Button>
                  </div>
                </div>

                <div className="companies-solution-visual">
                  <img
                    src={asset("/brand/solucoes-desenvolvimento-software.png")}
                    alt="Notebook com plataforma de software, analytics, integrações e fluxo de desenvolvimento"
                  />
                </div>
              </article>
            </div>
          </fieldset>
        </div>
      </section>

      <section className="companies-section companies-showcase" id="visibilidade">
        <div className="companies-container companies-showcase-grid">
          <div className="companies-showcase-copy">
            <SectionLabel dark>Visibilidade e controle</SectionLabel>
            <h2>
              Quando a <span>TI</span> é
              <br />
              organizada, a gestão
              <br />
              enxerga <span>riscos</span> antes
              <br />
              que virem urgência.
            </h2>
            <ul className="companies-check-list">
              <li>
                <Icon name="check" />
                Ativos, acessos e serviços críticos mapeados.
              </li>
              <li>
                <Icon name="check" />
                Rotinas de backup, disponibilidade e suporte acompanhadas.
              </li>
              <li>
                <Icon name="check" />
                Base técnica clara para operar, evoluir e decidir.
              </li>
            </ul>
            <div className="companies-showcase-action">
              <Button href={whatsappHref} variant="secondary">
                Falar com um especialista
              </Button>
            </div>
          </div>
          <div className="companies-showcase-media">
            <div className="companies-showcase-panel companies-showcase-photo-frame">
              <img
                src={asset("/brand/cidi-visibilidade-controle.png")}
                alt="Equipe CIDI Tecnologia analisando indicadores de operação monitorada"
              />
              <span className="companies-photo-circuit companies-photo-circuit-one" />
              <span className="companies-photo-circuit companies-photo-circuit-two" />
            </div>
            <p className="companies-showcase-caption">
              Empresas perdem produtividade quando dependem de correções apressadas, documentação incompleta e suporte
              sem histórico. A CIDI Tecnologia organiza a operação para dar visibilidade, continuidade e base técnica
              para decidir com mais segurança.
            </p>
          </div>
        </div>
      </section>

      <section className="companies-section companies-light companies-method-section" id="metodo">
        <div className="companies-container">
          <div className="companies-method-hero">
            <div className="companies-section-heading companies-section-heading-left companies-method-heading">
              <SectionLabel>Como funciona</SectionLabel>
              <h2>
                Um método simples para transformar <span>TI</span> em tranquilidade operacional.
              </h2>
              <span className="companies-heading-rule" aria-hidden="true" />
            </div>

            <div className="companies-method-visual" aria-label="Painel visual de indicadores e operação da CIDI Tecnologia">
              <span className="companies-method-float companies-method-float-shield">
                <Icon name="shield" />
              </span>
              <span className="companies-method-float companies-method-float-server">
                <Icon name="server" />
              </span>
              <span className="companies-method-float companies-method-float-cloud">
                <Icon name="cloud" />
              </span>
              <span className="companies-method-float companies-method-float-bars">
                <Icon name="chart" />
              </span>
              <div className="companies-method-dashboard">
                <span className="companies-method-sidebar">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <div className="companies-method-widget companies-method-widget-chart">
                  <svg viewBox="0 0 220 92" aria-hidden="true">
                    <path d="M14 67 C42 52 52 34 81 45 C107 55 122 28 151 34 C176 40 181 14 206 20" />
                    <circle cx="151" cy="34" r="7" />
                  </svg>
                </div>
                <div className="companies-method-widget companies-method-widget-donut">
                  <span />
                  <i />
                  <i />
                </div>
                <div className="companies-method-widget companies-method-widget-list">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="companies-method-widget companies-method-widget-bars">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
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
            <h2>
              Tecnologia com proximidade, método e visão de <span>continuidade.</span>
            </h2>
            <span className="companies-heading-rule" aria-hidden="true" />
            <p>
              A CIDI Tecnologia não entrega apenas manutenção pontual. O trabalho combina orientação técnica, suporte
              recorrente, documentação, segurança e evolução do ambiente.
            </p>
            <div className="companies-sector-strip">
              {sectors.map(([icon, sector]) => (
                <span key={sector}>
                  <Icon name={icon} />
                  {sector}
                </span>
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
          <div className="companies-bridge-copy">
            <SectionLabel dark>Especialidade em cartórios</SectionLabel>
            <h2>Tecnologia preparada para a rotina, a segurança e a conformidade dos cartórios.</h2>
            <p>
              A CIDI Tecnologia apoia serventias extrajudiciais com diagnóstico técnico, infraestrutura, backup,
              segurança da informação, documentação e continuidade operacional — com visão prática para adequação ao
              Provimento CNJ nº 213/2026.
            </p>

            <div className="companies-bridge-features">
              {cartorioSpecialties.map(([icon, title, text], index) => (
                <article className="companies-bridge-feature" style={{ "--i": index } as CSSProperties} key={title}>
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

            <div className="companies-actions companies-bridge-actions">
              <Button href={cartorioDiagnosisHref} icon="whatsapp">
                Falar com um especialista
              </Button>
              <Button href={cartorioDiagnosisHref} variant="secondary">
                Agendar diagnóstico
              </Button>
            </div>
          </div>
          <div className="companies-bridge-card">
            <img
              src={asset("/brand/ambiente_moderno_de_cartorio_e_conformidade.png")}
              alt="Ambiente moderno de cartório com painel de conformidade e continuidade operacional"
            />
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
