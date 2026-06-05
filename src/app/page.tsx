"use client";

import { useMemo, useState, type CSSProperties, type ReactNode } from "react";

const SITE_BASE = process.env.NODE_ENV === "production" ? "/cidi-tecnologia" : "";
const asset = (path: string) => `${SITE_BASE}${path}`;

const WHATSAPP_NUMBER = "5585999441907";
const BASE_WHATSAPP_MESSAGE =
  "Olá, CIDI Tecnologia. Gostaria de conversar sobre a adequação da minha serventia ao Provimento CNJ nº 213/2026.";

const navItems = [
  ["Soluções", "#solucoes"],
  ["Como funciona", "#metodo"],
  ["Diagnóstico", "#diagnostico"],
  ["Planos", "#planos"],
  ["FAQ", "#faq"],
];

const heroPillars = [
  ["shield", "Segurança", "Proteção de dados e acessos sensíveis."],
  ["clock", "Disponibilidade", "Sistemas operacionais com alta disponibilidade."],
  ["file", "Documentação", "Evidências, logs e inventário técnico auditável."],
  ["refresh", "Continuidade", "Planos e processos para responder a falhas."],
];

const invisibleRisks = [
  ["shield-alert", "Backup sem teste", "Ter cópia de segurança não garante recuperação."],
  ["users", "Acessos compartilhados", "Sem controle individual, a rastreabilidade fica comprometida."],
  [
    "archive",
    "Infraestrutura sem documentação",
    "Sem inventário, histórico e evidências, a defesa técnica fica frágil.",
  ],
  ["route", "Ausência de PCN e PRD", "Sem plano de continuidade, cada falha vira urgência."],
  ["checklist", "Falta de evidências", "Sem registros organizados, fica difícil responder a auditorias."],
];

const provisionBlocks = [
  ["Disponibilidade", "Ambientes tecnológicos preparados para reduzir interrupções."],
  ["Segurança da informação", "Controles de acesso, proteção de dados e políticas formais."],
  ["Continuidade operacional", "Plano para responder a falhas, incidentes e indisponibilidades."],
  ["Rastreabilidade e documentação", "Logs, evidências, inventário e registros técnicos auditáveis."],
  ["Integridade dos dados", "Informações protegidas contra perdas, alterações indevidas e falhas."],
];

const impactCards = [
  ["bolt", "Operacional", "Paralisação do atendimento e indisponibilidade dos sistemas."],
  ["search", "Auditoria", "Ausência de evidências e defesa documental frágil."],
  ["user-check", "Titularidade", "Exposição direta do titular pela gestão inadequada da infraestrutura."],
  ["scale", "Jurídica", "Risco de responsabilização em caso de incidentes."],
];

const authorityPillars = [
  ["Time técnico", "Infraestrutura, suporte, rede, firewall e proteção."],
  ["Apoio jurídico", "Clareza para LGPD, responsabilidade e conformidade."],
  ["Documentação", "Políticas, dossiês, registros e evidências auditáveis."],
  ["Sustentação", "Rotina de acompanhamento para manter a operação protegida."],
];

const deliveries = [
  "Diagnóstico técnico e operacional",
  "Checklist de aderência ao Provimento 213",
  "Mapa de não conformidades",
  "Plano inicial de ação",
  "Dossiê técnico de TI",
  "Política de segurança da informação",
  "PCN e PRD",
  "Organização de evidências, logs, acessos e backup",
  "Infraestrutura, firewall, nobreak, rede e proteção",
  "Sustentação da conformidade pós-implantação",
];

const methodSteps = [
  ["01", "Diagnóstico", "Mapeamos infraestrutura, sistemas, acessos, backup e processos."],
  ["02", "Checklist de aderência", "Avaliamos os principais pontos relacionados ao Provimento 213."],
  ["03", "Plano de ação", "Organizamos riscos, prioridades e próximos passos."],
  ["04", "Implantação assistida", "Apoiamos a execução técnica, documental e operacional."],
  ["05", "Sustentação", "Monitoramos, revisamos e mantemos a conformidade ativa."],
];

const monitoringCards = [
  ["Status operacional", "Acompanhe a saúde dos sistemas e serviços essenciais."],
  ["Sistemas críticos", "Monitore plataformas, bancos de dados e aplicações utilizadas na rotina."],
  ["Servidores e infraestrutura", "Tenha visão sobre equipamentos, rede, firewall, backup e disponibilidade."],
  ["Alertas e conformidade", "Organize evidências, registros e pontos de atenção para tomada de decisão."],
];

const diagnosticBenefits = [
  "Seguro e confidencial",
  "Resultado rápido",
  "Sem compromisso",
  "Orientação com especialista",
];

const plans = [
  {
    label: "Diagnóstico",
    name: "Starter",
    subtitle: "Diagnóstico e direcionamento",
    text: "Para entender onde sua serventia está e quais são os próximos passos.",
    cta: "Conhecer Starter",
    items: [
      "Levantamento técnico e operacional",
      "Checklist de aderência",
      "Mapa de não conformidades",
      "Relatório técnico",
      "Plano inicial de ação",
    ],
  },
  {
    label: "Conformidade",
    name: "Plus",
    subtitle: "Conformidade organizada e documentada",
    text: "Para estruturar documentação, políticas, evidências, acessos, backup, PCN e PRD.",
    cta: "Conhecer Plus",
    items: [
      "Tudo do Starter",
      "Dossiê técnico de TI",
      "Política de segurança",
      "PCN e PRD",
      "Organização de evidências",
      "Implantação assistida",
    ],
  },
  {
    label: "Solução completa",
    name: "Prime",
    subtitle: "Adequação completa com sustentação",
    text: "Para cartórios que querem adequação técnica, documental, operacional e acompanhamento contínuo.",
    cta: "Conhecer Prime",
    featured: true,
    items: [
      "Tudo do Plus",
      "Implantação técnica assistida",
      "Organização de infraestrutura",
      "Acompanhamento contínuo",
      "Evidências recorrentes",
      "Revisões periódicas",
    ],
  },
];

const differentials = [
  ["Experiência em cartórios", "Atuação voltada para a rotina, os riscos e as responsabilidades de serventias."],
  ["Integração técnica e jurídica", "Tecnologia, LGPD, documentação e continuidade trabalhadas de forma coordenada."],
  ["Foco em evidências", "A CIDI Tecnologia organiza registros que ajudam a demonstrar preparação e responsabilidade."],
  ["Atendimento próximo", "Acompanhamento humano para titulares, substitutos e gestores administrativos."],
];

const faqItems = [
  [
    "O Provimento CNJ nº 213/2026 obriga todos os cartórios a se adequarem?",
    "O Provimento estabelece diretrizes de tecnologia, segurança, continuidade e governança que impactam a rotina das serventias. A avaliação técnica ajuda a entender o que precisa ser ajustado em cada realidade.",
  ],
  [
    "O diagnóstico inicial é uma auditoria oficial?",
    "Não. O diagnóstico inicial é uma avaliação preliminar para identificar riscos, lacunas e próximos passos. Ele ajuda a preparar a serventia para uma adequação mais estruturada.",
  ],
  [
    "Minha serventia já tem suporte de TI. Ainda preciso avaliar?",
    "Sim. Suporte técnico resolve demandas do dia a dia, mas conformidade exige documentação, evidências, políticas, continuidade, rastreabilidade e controles formais.",
  ],
  [
    "A CIDI Tecnologia trabalha só com documentação?",
    "Não. A atuação envolve infraestrutura, suporte, segurança da informação, backup, continuidade operacional, hardware, LGPD, documentação técnica e sustentação.",
  ],
  [
    "O diagnóstico pode ser feito antes de contratar um plano?",
    "Sim. O diagnóstico inicial existe justamente para entender o cenário atual e indicar o caminho mais adequado.",
  ],
];

type IconName =
  | "archive"
  | "bolt"
  | "check"
  | "checklist"
  | "clock"
  | "file"
  | "refresh"
  | "route"
  | "scale"
  | "search"
  | "shield"
  | "shield-alert"
  | "spark"
  | "user-check"
  | "users"
  | "whatsapp";

type ButtonVariant = "primary" | "secondary" | "dark" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  icon?: IconName | "arrow" | false;
};

type OptionField = {
  id: string;
  label: string;
  type: "options";
  options: { label: string; value: number | string }[];
  noScore?: boolean;
  required?: boolean;
};

type TextField = {
  id: string;
  label: string;
  type: "text" | "email" | "tel";
  placeholder: string;
  required?: boolean;
};

type DiagnosticField = OptionField | TextField;

type DiagnosticStep = {
  title: string;
  description: string;
  fields: DiagnosticField[];
};

const diagnosticSteps: DiagnosticStep[] = [
  {
    title: "Operação e dependência tecnológica",
    description: "Vamos entender o impacto de uma parada na rotina da serventia.",
    fields: [
      {
        id: "systemsStop",
        label: "Se seus sistemas parassem agora, a serventia continuaria atendendo?",
        type: "options",
        options: [
          { label: "Sim, com plano documentado", value: 0 },
          { label: "Parcialmente", value: 1 },
          { label: "Não temos alternativa clara", value: 3 },
        ],
      },
      {
        id: "backupTested",
        label: "O backup é testado periodicamente?",
        type: "options",
        options: [
          { label: "Sim, com registro dos testes", value: 0 },
          { label: "Às vezes", value: 1 },
          { label: "Não ou não sei informar", value: 3 },
        ],
      },
    ],
  },
  {
    title: "Acessos, rastreabilidade e infraestrutura",
    description: "Pontos essenciais para comprovar responsabilidade técnica.",
    fields: [
      {
        id: "individualUsers",
        label: "Os usuários são individuais e com permissões definidas?",
        type: "options",
        options: [
          { label: "Sim", value: 0 },
          { label: "Parcialmente", value: 1 },
          { label: "Há acessos compartilhados", value: 3 },
        ],
      },
      {
        id: "inventory",
        label: "Existe inventário atualizado de equipamentos, rede e sistemas?",
        type: "options",
        options: [
          { label: "Sim, atualizado", value: 0 },
          { label: "Existe, mas está incompleto", value: 1 },
          { label: "Não existe", value: 3 },
        ],
      },
      {
        id: "pcnPrd",
        label: "A serventia possui PCN e PRD documentados?",
        type: "options",
        options: [
          { label: "Sim, documentados e revisados", value: 0 },
          { label: "Em elaboração", value: 1 },
          { label: "Não possui", value: 3 },
        ],
      },
    ],
  },
  {
    title: "Segurança, evidências e governança",
    description: "Aqui avaliamos controles que ajudam em fiscalizações e incidentes.",
    fields: [
      {
        id: "firewall",
        label: "Firewall, nobreak, rede e proteção estão documentados?",
        type: "options",
        options: [
          { label: "Sim, com evidências", value: 0 },
          { label: "Parcialmente", value: 1 },
          { label: "Não", value: 3 },
        ],
      },
      {
        id: "auditLogs",
        label: "Logs, evidências e históricos técnicos ficam organizados?",
        type: "options",
        options: [
          { label: "Sim", value: 0 },
          { label: "Em parte", value: 1 },
          { label: "Não ficam organizados", value: 3 },
        ],
      },
      {
        id: "lgpdPolicy",
        label: "Há política de segurança da informação e orientação sobre LGPD?",
        type: "options",
        options: [
          { label: "Sim", value: 0 },
          { label: "Existe algo informal", value: 1 },
          { label: "Não", value: 3 },
        ],
      },
    ],
  },
  {
    title: "Monitoramento e preparo da equipe",
    description: "Conformidade precisa continuar depois da implantação.",
    fields: [
      {
        id: "monitoring",
        label: "Existe rotina de monitoramento dos serviços críticos?",
        type: "options",
        options: [
          { label: "Sim, com alertas", value: 0 },
          { label: "Manual ou irregular", value: 1 },
          { label: "Não existe", value: 3 },
        ],
      },
      {
        id: "teamOriented",
        label: "A equipe sabe como agir em incidentes ou parada de sistema?",
        type: "options",
        options: [
          { label: "Sim, com orientação formal", value: 0 },
          { label: "Algumas pessoas sabem", value: 1 },
          { label: "Não há orientação", value: 3 },
        ],
      },
    ],
  },
  {
    title: "Dados para contato",
    description: "Informe seus dados para levar o resultado para uma conversa com especialista.",
    fields: [
      { id: "name", label: "Seu nome", type: "text", placeholder: "Nome completo", required: true },
      { id: "registry", label: "Cartório ou serventia", type: "text", placeholder: "Nome da serventia", required: true },
      { id: "phone", label: "WhatsApp", type: "tel", placeholder: "(00) 00000-0000", required: true },
      { id: "email", label: "E-mail", type: "email", placeholder: "seu@email.com" },
    ],
  },
];

const diagnosticResults = [
  {
    max: 5,
    level: "Baixo risco aparente",
    tone: "Sua serventia parece ter uma base inicial melhor estruturada, mas ainda vale revisar evidências, documentação e continuidade.",
  },
  {
    max: 13,
    level: "Risco moderado",
    tone: "Existem lacunas relevantes que podem dificultar resposta a auditorias, incidentes ou indisponibilidades.",
  },
  {
    max: 22,
    level: "Alto risco",
    tone: "Há sinais importantes de fragilidade técnica, documental ou operacional. O ideal é priorizar um plano de adequação.",
  },
  {
    max: 999,
    level: "Risco crítico",
    tone: "A serventia pode estar exposta em pontos críticos de segurança, continuidade e comprovação. Recomendamos falar com a CIDI Tecnologia.",
  },
];

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Icon({ name }: { name: IconName | "arrow" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.9,
    viewBox: "0 0 24 24",
  };

  const paths: Record<string, ReactNode> = {
    archive: <path d="M4 7h16M5 7l1 13h12l1-13M9 11h6" />,
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    bolt: <path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    checklist: <path d="M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2" />,
    clock: <path d="M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
    file: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6M8 13h8M8 17h5" />,
    refresh: <path d="M21 12a9 9 0 0 1-15.4 6.4M3 12A9 9 0 0 1 18.4 5.6M18 2v4h-4M6 22v-4h4" />,
    route: <path d="M5 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 13V8a3 3 0 0 1 3-3h8M19 11v5a3 3 0 0 1-3 3H8" />,
    scale: <path d="M12 3v18M5 7h14M6 7l-3 7h6L6 7Zm12 0-3 7h6l-3-7Z" />,
    search: <path d="m21 21-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-10 2 2 4-5" />,
    "shield-alert": <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm0-13v4m0 4h.01" />,
    spark: <path d="M12 2v5m0 10v5M4.2 4.2l3.5 3.5m8.6 8.6 3.5 3.5M2 12h5m10 0h5M4.2 19.8l3.5-3.5m8.6-8.6 3.5-3.5" />,
    "user-check": <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 4 2 2 4-4" />,
    users: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm22 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />,
    whatsapp: <path d="M7.5 19.5 3 21l1.5-4.4A8.5 8.5 0 1 1 7.5 19.5Zm2.1-10.2c.2 2 2.1 4.1 4.1 4.9l1.2-1.1 2.1 1.4c-.3 1.3-1.2 2.1-2.6 2.1-3 0-6.9-3.7-6.9-6.8 0-1.3.8-2.2 2-2.6l1.3 2-1.2 1.1Z" />,
  };

  return (
    <svg aria-hidden="true" height="22" width="22" {...common}>
      {paths[name]}
    </svg>
  );
}

function Button({ children, href, onClick, variant = "primary", className = "", icon = "arrow" }: ButtonProps) {
  const classes = `btn btn-${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} />}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type="button">
      {content}
    </button>
  );
}

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container ${className}`.trim()}>{children}</div>;
}

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className={`eyebrow ${dark ? "eyebrow-dark" : "eyebrow-light"}`}>
      <Icon name="shield" />
      {children}
    </span>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  dark = false,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-intro ${align === "left" ? "section-intro-left" : ""} ${dark ? "section-intro-dark" : ""}`}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {text && <span>{text}</span>}
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  text,
  dark = false,
  index = 0,
}: {
  icon: IconName;
  title: string;
  text: string;
  dark?: boolean;
  index?: number;
}) {
  return (
    <article className={`feature-card scroll-rise ${dark ? "feature-card-dark" : ""}`} style={{ "--delay": `${index * 70}ms` } as CSSProperties}>
      <div className="icon-bubble">
        <Icon name={icon} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function ComplianceVisual() {
  return (
    <div className="compliance-visual compliance-visual-premium scroll-rise">
      <div className="compliance-glow" />
      <div className="compliance-list">
        <span className="visual-kicker">Requisitos críticos</span>
        {provisionBlocks.map(([title, text], index) => (
          <article className="requirement-row" key={title}>
            <div className="requirement-icon">
              <Icon name={(["clock", "shield", "refresh", "file", "archive"] as IconName[])[index]} />
            </div>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="compliance-audit-board">
        <div className="audit-board-top">
          <img src={asset("/brand/cidi-logo-white.png")} alt="CIDI Tecnologia" />
          <span>Provimento 213/2026</span>
        </div>
        <div className="audit-score-card">
          <div className="audit-ring">
            <strong>5</strong>
            <span>frentes</span>
          </div>
          <div>
            <p>Checklist de aderência</p>
            <h3>Do requisito técnico à evidência auditável.</h3>
          </div>
        </div>
        <div className="evidence-flow">
          {["Inventário", "Acessos", "Backup", "PCN / PRD"].map((item, index) => (
            <span key={item} style={{ "--delay": `${index * 120}ms` } as CSSProperties}>
              <Icon name={(["archive", "users", "refresh", "route"] as IconName[])[index]} />
              {item}
            </span>
          ))}
        </div>
        <div className="audit-trail">
          {["Política publicada", "Teste de recuperação", "Evidência anexada"].map((item) => (
            <span key={item}>
              <Icon name="check" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MonitoringVisual() {
  return (
    <div className="monitor-visual monitor-visual-premium monitor-console scroll-rise">
      <div className="monitor-console-head">
        <div>
          <span>Dashboard CIDI</span>
          <strong>Visão de conformidade e operação</strong>
        </div>
        <i>Atualizado agora</i>
      </div>
      <div className="monitor-console-grid">
        {[
          ["Conformidade", "100%", "shield"],
          ["Disponibilidade", "99,98%", "clock"],
          ["Serviços monitorados", "24", "archive"],
          ["Incidentes abertos", "2", "bolt"],
        ].map(([label, value, icon]) => (
          <article key={label}>
            <Icon name={icon as IconName} />
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </div>
      <div className="monitor-main-row">
        <div className="monitor-bars-panel">
          <span>Requisitos críticos</span>
          {["Segurança da informação", "Continuidade", "Documentação", "Planos e processos"].map((item, index) => (
            <div className="monitor-line" key={item}>
              <p>{item}</p>
              <i style={{ width: `${92 - index * 7}%` }} />
            </div>
          ))}
        </div>
        <div className="monitor-radar-card">
          <div className="monitor-radar-ring">
            <strong>1000</strong>
            <span>score</span>
          </div>
          <p>Nível máximo de aderência operacional.</p>
        </div>
      </div>
      <div className="monitor-feed">
        {["Backup concluído", "Evidência registrada", "Acesso revisado"].map((item, index) => (
          <span key={item} style={{ "--delay": `${index * 140}ms` } as CSSProperties}>
            <Icon name="check" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function DiagnosticModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});

  const currentStep = diagnosticSteps[step];
  const progress = showResult ? 100 : Math.round(((step + 1) / diagnosticSteps.length) * 100);

  const score = useMemo(() => {
    return diagnosticSteps.reduce((total, diagnosticStep) => {
      return (
        total +
        diagnosticStep.fields.reduce((stepTotal, field) => {
          if (field.type !== "options" || field.noScore) return stepTotal;
          return stepTotal + Number(values[field.id] ?? 0);
        }, 0)
      );
    }, 0);
  }, [values]);

  const result = diagnosticResults.find((item) => score <= item.max) ?? diagnosticResults[diagnosticResults.length - 1];

  const requiredAnswered = currentStep.fields
    .filter((field) => field.required)
    .every((field) => values[field.id]?.trim());

  const optionsAnswered = currentStep.fields
    .filter((field): field is OptionField => field.type === "options" && !field.noScore)
    .every((field) => values[field.id]);

  const canContinue = currentStep.fields.some((field) => field.required) ? requiredAnswered : optionsAnswered;

  const resultMessage = [
    "Olá, CIDI Tecnologia. Concluí o diagnóstico inicial no site.",
    `Resultado: ${result.level}`,
    `Pontuação: ${score}`,
    values.name ? `Nome: ${values.name}` : "",
    values.registry ? `Serventia: ${values.registry}` : "",
    values.phone ? `WhatsApp: ${values.phone}` : "",
    "Quero conversar com um especialista sobre adequação ao Provimento CNJ nº 213/2026.",
  ]
    .filter(Boolean)
    .join("\n");

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < diagnosticSteps.length - 1) {
      setStep((current) => current + 1);
      return;
    }

    setShowResult(true);
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
      return;
    }

    setStep((current) => Math.max(0, current - 1));
  };

  return (
    <div className="modal-layer" role="dialog" aria-modal="true" aria-label="Diagnóstico inicial CIDI Tecnologia">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="diagnostic-modal">
        <div className="modal-head">
          <div>
            <span>Diagnóstico inicial</span>
            <strong>{showResult ? "Resultado da avaliação" : currentStep.title}</strong>
          </div>
          <button aria-label="Fechar diagnóstico" onClick={onClose} type="button">
            ×
          </button>
        </div>
        <div className="progress-track">
          <i style={{ width: `${progress}%` }} />
        </div>

        {showResult ? (
          <div className="result-panel">
            <div className="result-orb">
              <span>{score}</span>
              <small>pontos</small>
            </div>
            <p>Resultado</p>
            <h3>{result.level}</h3>
            <span>{result.tone}</span>
            <Button className="modal-full" href={whatsappLink(resultMessage)} icon="whatsapp">
              Enviar resultado pelo WhatsApp
            </Button>
          </div>
        ) : (
          <>
            <p className="modal-description">{currentStep.description}</p>
            <div className="modal-fields">
              {currentStep.fields.map((field) => {
                if (field.type === "options") {
                  return (
                    <fieldset className="option-group" key={field.id}>
                      <legend>{field.label}</legend>
                      <div>
                        {field.options.map((option) => (
                          <button
                            className={values[field.id] === String(option.value) ? "option selected" : "option"}
                            key={option.label}
                            onClick={() => setValues((current) => ({ ...current, [field.id]: String(option.value) }))}
                            type="button"
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  );
                }

                return (
                  <label className="input-field" key={field.id}>
                    <span>{field.label}</span>
                    <input
                      onChange={(event) => setValues((current) => ({ ...current, [field.id]: event.target.value }))}
                      placeholder={field.placeholder}
                      type={field.type}
                      value={values[field.id] ?? ""}
                    />
                  </label>
                );
              })}
            </div>
            <div className="modal-actions">
              <Button onClick={handleBack} variant="secondary" icon={false}>
                Voltar
              </Button>
              <Button className={!canContinue ? "disabled" : ""} onClick={canContinue ? handleNext : undefined}>
                {step === diagnosticSteps.length - 1 ? "Ver resultado" : "Continuar"}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);
  const whatsappHref = whatsappLink(BASE_WHATSAPP_MESSAGE);

  return (
    <main className="site-shell">
      <header className="site-header">
        <Container className="header-inner">
          <a className="brand-logo" href="#topo" aria-label="CIDI Tecnologia">
            <img src={asset("/brand/cidi-logo-white.png")} alt="CIDI Tecnologia" />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map(([label, href]) => (
              <a href={href} key={label}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <Button href={whatsappHref} variant="secondary" icon="whatsapp">
              Falar no WhatsApp
            </Button>
            <Button onClick={() => setDiagnosticOpen(true)}>Agendar diagnóstico</Button>
          </div>
          <a className="mobile-contact" href={whatsappHref} aria-label="Falar no WhatsApp">
            <Icon name="whatsapp" />
          </a>
        </Container>
      </header>

      <section id="topo" className="hero-section hero-premium">
        <div className="hero-noise" />
        <div className="hero-circuit hero-circuit-left" />
        <div className="hero-circuit hero-circuit-right" />
        <div className="dot-cloud dot-cloud-dark" />
        <Container className="hero-grid">
          <div className="hero-copy">
            <Eyebrow dark>Adequação ao Provimento CNJ nº 213/2026</Eyebrow>
            <h1 className="hero-title">
              Seu cartório está
              <br />
              em <span>conformidade</span>
              <br />
              — ou apenas
              <br />
              <span>funcionando?</span>
            </h1>
            <p>
              A CIDI Tecnologia ajuda serventias extrajudiciais a identificar riscos, organizar evidências e iniciar a
              adequação ao Provimento CNJ nº 213/2026 com segurança, continuidade e documentação.
            </p>
            <div className="hero-actions">
              <Button onClick={() => setDiagnosticOpen(true)}>Agendar diagnóstico</Button>
              <Button href={whatsappHref} variant="dark" icon="whatsapp">
                Falar com um especialista
              </Button>
            </div>
            <div className="hero-trust-line">
              <span>Segurança</span>
              <span>Disponibilidade</span>
              <span>Documentação</span>
              <span>Continuidade</span>
            </div>
          </div>
          <div className="hero-visual hero-visual-premium" aria-label="Visual de cartório com painel de conformidade">
            <div className="hero-halo" />
            <div className="hero-photo-frame">
              <img src={asset("/brand/cartorio-diagnostico.png")} alt="Cartório com painel de conformidade tecnológica" />
            </div>
            <div className="hero-dashboard-card">
              <div className="dashboard-head">
                <span>Conformidade e Operação</span>
                <i>Atualizado agora</i>
              </div>
              <div className="dashboard-body">
                <div className="dashboard-ring">
                  <strong>100%</strong>
                  <span>Conformidade</span>
                </div>
                <div className="dashboard-checks">
                  {["Segurança", "Disponibilidade", "Documentação", "Continuidade"].map((item) => (
                    <span key={item}>
                      <Icon name="check" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="dashboard-foot">
                <Icon name="shield" />
                <span>Ambiente em conformidade</span>
              </div>
            </div>
            <div className="hero-mini-monitor">
              <img src={asset("/brand/cidi-monitoring-slide.png")} alt="Painel de monitoramento da CIDI Tecnologia" />
            </div>
          </div>
          <div className="hero-pillar-grid hero-pillar-strip">
            {heroPillars.map(([icon, title, text], index) => (
              <article className="hero-pillar" key={title} style={{ "--delay": `${index * 80}ms` } as CSSProperties}>
                <Icon name={icon as IconName} />
                <strong>{title}</strong>
                <span>{text}</span>
              </article>
            ))}
          </div>
        </Container>
        <Container className="hero-bottom">
          <span>Pronto para transformar</span>
          <strong>Mais do que tecnologia, tranquilidade para o seu cartório.</strong>
        </Container>
      </section>

      <section id="riscos" className="section section-light">
        <Container className="problem-showcase">
          <div className="problem-copy">
            <SectionIntro
              align="left"
              eyebrow="O problema invisível"
              title="O maior risco não é a tecnologia falhar. É não conseguir provar que ela estava preparada."
              text="Muitos cartórios funcionam normalmente todos os dias. Mas em uma fiscalização, incidente, perda de dados ou parada de sistema, as fragilidades aparecem."
            />
            <Button onClick={() => setDiagnosticOpen(true)} variant="ghost">
              Identificar os riscos
            </Button>
          </div>
          <div className="problem-media problem-console scroll-rise">
            <div className="problem-console-head">
              <span>Análise preventiva</span>
              <strong>O risco aparece antes da parada.</strong>
            </div>
            <div className="risk-signal-map">
              {invisibleRisks.map(([icon, title], index) => (
                <article key={title} style={{ "--delay": `${index * 90}ms` } as CSSProperties}>
                  <Icon name={icon as IconName} />
                  <div>
                    <strong>{title}</strong>
                    <span>{["Sem validação", "Sem rastreio", "Sem histórico", "Sem plano", "Sem registro"][index]}</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="problem-media-card">
              <span>Painel de risco</span>
              <strong>5 fragilidades invisíveis</strong>
              <p>Quando não há evidência, a defesa técnica depende de memória, improviso e sorte.</p>
            </div>
          </div>
          <div className="cards-grid problem-grid">
            {invisibleRisks.map(([icon, title, text], index) => (
              <FeatureCard icon={icon as IconName} title={title} text={text} index={index} key={title} />
            ))}
          </div>
          <div className="center-action">
            <Button onClick={() => setDiagnosticOpen(true)}>Avaliar riscos da minha serventia</Button>
          </div>
        </Container>
      </section>

      <section id="solucoes" className="section section-dark section-branded">
        <div className="technical-grid" />
        <Container className="split-grid">
          <div>
            <SectionIntro
              align="left"
              dark
              eyebrow="O que o Provimento exige"
              title="O Provimento 213 mudou o padrão mínimo de tecnologia para cartórios."
              text="A tecnologia deixou de ser apenas suporte. Agora, ela faz parte da segurança institucional, da continuidade operacional e da capacidade de comprovar conformidade."
            />
            <div className="delivery-list">
              {deliveries.slice(0, 5).map((item) => (
                <span key={item}>
                  <Icon name="check" />
                  {item}
                </span>
              ))}
            </div>
            <Button onClick={() => setDiagnosticOpen(true)}>Entender minha situação atual</Button>
          </div>
          <ComplianceVisual />
        </Container>
      </section>

      <section className="section section-ice">
        <Container>
          <SectionIntro
            eyebrow="O que está em risco"
            title="Quando a serventia não está adequada, o impacto vai além da TI."
            text="A não conformidade pode gerar exposição operacional, fragilidade em auditorias, pressão sobre a titularidade e risco jurídico conforme a gravidade da ocorrência."
          />
          <div className="risk-proof-media risk-impact-console scroll-rise">
            <div className="risk-impact-head">
              <span>Matriz de impacto</span>
              <strong>O problema técnico vira risco institucional.</strong>
            </div>
            <div className="risk-impact-grid">
              {impactCards.map(([icon, title, text], index) => (
                <article key={title} style={{ "--delay": `${index * 110}ms` } as CSSProperties}>
                  <Icon name={icon as IconName} />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <span>atenção</span>
                </article>
              ))}
            </div>
          </div>
          <div className="cards-grid four-grid">
            {impactCards.map(([icon, title, text], index) => (
              <FeatureCard icon={icon as IconName} title={title} text={text} index={index} key={title} />
            ))}
          </div>
          <div className="center-action">
            <Button href={whatsappHref}>Falar com a CIDI Tecnologia agora</Button>
          </div>
        </Container>
      </section>

      <section id="metodo" className="section section-light">
        <Container className="method-layout">
          <SectionIntro
            align="left"
            eyebrow="Método CIDI Tecnologia"
            title="Uma jornada clara para sair da improvisação e chegar à comprovação."
            text="A CIDI Tecnologia conduz o processo em etapas para reduzir ruído, organizar prioridades e transformar riscos invisíveis em plano de ação."
          />
          <div className="timeline">
            {methodSteps.map(([number, title, text], index) => (
              <article className="timeline-card scroll-rise" style={{ "--delay": `${index * 70}ms` } as CSSProperties} key={title}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="method-proof-card scroll-rise">
            <div>
              <span>Parceria que gera confiança</span>
              <h3>Você não precisa fazer isso sozinho.</h3>
              <p>
                A CIDI Tecnologia caminha ao seu lado em todas as etapas, com método, tecnologia e especialistas que
                entendem a realidade dos cartórios.
              </p>
            </div>
            <div className="method-ops-board">
              <div className="method-ops-head">
                <span>Plano assistido</span>
                <strong>Da análise à sustentação</strong>
              </div>
              {[
                ["Técnico", "Infraestrutura, backup e segurança"],
                ["Documental", "Dossiê, evidências, PCN e PRD"],
                ["Gestão", "Prioridades, responsáveis e prazos"],
              ].map(([title, text], index) => (
                <article key={title} style={{ "--delay": `${index * 120}ms` } as CSSProperties}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section section-dark">
        <div className="technical-grid" />
        <Container className="split-grid split-grid-reverse">
          <div>
            <SectionIntro
              align="left"
              dark
              eyebrow="Visibilidade e monitoramento"
              title="Conformidade não termina na implantação. Ela precisa ser acompanhada."
              text="A CIDI Tecnologia ajuda a manter uma visão clara sobre sistemas, infraestrutura, evidências e riscos para que a serventia tenha mais controle sobre a operação."
            />
            <div className="monitor-card-grid">
              {monitoringCards.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
          <MonitoringVisual />
        </Container>
      </section>

      <section id="diagnostico" className="section section-ice">
        <Container>
          <div className="diagnostic-band scroll-rise">
            <div>
              <Eyebrow>Diagnóstico inicial</Eyebrow>
              <h2>Faça um diagnóstico inicial da sua serventia.</h2>
              <p>
                Responda algumas perguntas e receba uma leitura inicial sobre riscos de tecnologia, continuidade e
                documentação.
              </p>
              <div className="benefit-row">
                {diagnosticBenefits.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <Button onClick={() => setDiagnosticOpen(true)}>Iniciar diagnóstico agora</Button>
            </div>
            <div className="diagnostic-preview">
              <div className="diagnostic-card-form">
                <div className="diagnostic-card-head">
                  <span>Diagnóstico de Conformidade</span>
                  <strong>1 / 5</strong>
                </div>
                <i />
                <h3>Qual o nível atual de evidências da sua serventia?</h3>
                {["Organizado e testado", "Parcialmente documentado", "Não sei informar"].map((item, index) => (
                  <span className={index === 1 ? "diagnostic-option active" : "diagnostic-option"} key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="diagnostic-card-result">
                <span>Seu diagnóstico</span>
                <div className="result-mini-ring">
                  <strong>Risco moderado</strong>
                </div>
                <p>Oportunidades importantes de adequação ao Provimento 213/2026.</p>
                <Button href={whatsappHref} icon="whatsapp">
                  Falar com especialista
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="planos" className="section section-light">
        <Container>
          <SectionIntro
            eyebrow="Planos"
            title="Três caminhos para diferentes níveis de necessidade."
            text="Sem tabela de preço e sem pacote genérico. A conversa começa pelo diagnóstico e segue para a solução mais adequada."
          />
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <article className={`plan-card scroll-rise ${plan.featured ? "plan-card-featured" : ""}`} style={{ "--delay": `${index * 90}ms` } as CSSProperties} key={plan.name}>
                <span>{plan.label}</span>
                <h3>{plan.name}</h3>
                <strong>{plan.subtitle}</strong>
                <p>{plan.text}</p>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button onClick={() => setDiagnosticOpen(true)} variant={plan.featured ? "primary" : "secondary"}>
                  {plan.cta}
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section-dark section-brand-proof">
        <div className="technical-grid" />
        <Container className="split-grid">
          <div>
            <SectionIntro
              align="left"
              dark
              eyebrow="Por que escolher a CIDI Tecnologia"
              title="Clean. confiável. inteligente."
              text="A marca CIDI Tecnologia foi construída para transmitir presença, confiança e consistência em cada ponto de contato. A landing agora segue a mesma assinatura visual."
            />
            <div className="differentials-grid">
              {differentials.map(([title, text], index) => (
                <article className="differential-card" key={title} style={{ "--delay": `${index * 70}ms` } as CSSProperties}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="brand-proof-image scroll-rise">
            <img src={asset("/brand/aplicacoes-marca.jpg")} alt="Aplicações da marca CIDI Tecnologia em materiais institucionais" />
          </div>
        </Container>
      </section>

      <section id="faq" className="section section-ice">
        <Container>
          <SectionIntro
            eyebrow="FAQ"
            title="Perguntas frequentes"
            text="Respostas diretas para titulares, substitutos e gestores que precisam começar a adequação."
          />
          <div className="faq-list">
            {faqItems.map(([question, answer], index) => (
              <details className="faq-item scroll-rise" style={{ "--delay": `${index * 60}ms` } as CSSProperties} key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="final-cta">
        <Container>
          <Eyebrow dark>Próximo passo</Eyebrow>
          <h2>Sua serventia está pronta para comprovar conformidade?</h2>
          <p>
            Comece com um diagnóstico inicial e transforme riscos invisíveis em prioridades claras para tecnologia,
            documentação e continuidade.
          </p>
          <div className="hero-actions">
            <Button onClick={() => setDiagnosticOpen(true)}>Solicitar diagnóstico inicial</Button>
            <Button href={whatsappHref} variant="dark" icon="whatsapp">
              Falar no WhatsApp
            </Button>
          </div>
          <div className="footer-contact">
            <span>CIDI Tecnologia</span>
            <span>WhatsApp: (85) 99944-1907</span>
            <span>E-mail: contato@ciditecnologia.com.br</span>
            <span>Instagram: @ciditecnologia</span>
          </div>
        </Container>
      </section>

      <footer className="site-footer">
        <Container className="footer-inner">
          <img src={asset("/brand/cidi-logo-white.png")} alt="CIDI Tecnologia" />
          <p>CIDI Tecnologia. Tecnologia que dá segurança para você focar no que importa.</p>
        </Container>
      </footer>

      <DiagnosticModal isOpen={diagnosticOpen} onClose={() => setDiagnosticOpen(false)} />
    </main>
  );
}
