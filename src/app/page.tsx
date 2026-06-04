"use client";

import { useMemo, useState } from "react";

const WHATSAPP_NUMBER = "5585999441907";
const BASE_WHATSAPP_MESSAGE =
  "Olá, CIDI Tecnologia. Gostaria de conversar sobre a adequação da minha serventia ao Provimento CNJ nº 213/2026.";

const navItems = [
  ["Diagnóstico", "#diagnostico"],
  ["Riscos", "#riscos"],
  ["Provimento", "#provimento"],
  ["Método", "#metodo"],
  ["Planos", "#planos"],
  ["FAQ", "#faq"],
];

const heroSeals = [
  "Infraestrutura para cartórios",
  "Segurança da informação",
  "Backup e continuidade",
  "Documentação e evidências",
];

const heroMetrics = [
  ["5", "pilares críticos"],
  ["10", "perguntas iniciais"],
  ["213", "referência CNJ"],
];

const invisibleRisks = [
  ["Backup sem teste", "Ter cópia de segurança não garante recuperação."],
  ["Acessos compartilhados", "Sem controle individual, a rastreabilidade fica comprometida."],
  [
    "Infraestrutura sem documentação",
    "Sem inventário, histórico e evidências, a defesa técnica fica frágil.",
  ],
  ["Ausência de PCN e PRD", "Sem plano de continuidade, cada falha vira urgência."],
  ["Falta de evidências", "Sem registros organizados, fica difícil responder a auditorias."],
];

const provisionBlocks = [
  ["Disponibilidade", "Ambientes tecnológicos preparados para reduzir interrupções."],
  ["Segurança da informação", "Controles de acesso, proteção de dados e políticas formais."],
  ["Continuidade operacional", "Plano para responder a falhas, incidentes e indisponibilidades."],
  ["Rastreabilidade e documentação", "Logs, evidências, inventário e registros técnicos auditáveis."],
  ["Integridade dos dados", "Informações protegidas contra perdas, alterações indevidas e falhas."],
];

const impactCards = [
  ["Operacional", "Paralisação do atendimento e indisponibilidade dos sistemas."],
  ["Auditoria", "Ausência de evidências e defesa documental frágil."],
  ["Titularidade", "Exposição direta do titular pela gestão inadequada da infraestrutura."],
  ["Jurídica", "Risco de responsabilização em caso de incidentes."],
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
  ["Diagnóstico", "Mapeamos infraestrutura, sistemas, acessos, backup e processos."],
  ["Checklist de aderência", "Avaliamos os principais pontos relacionados ao Provimento 213."],
  ["Plano de ação", "Organizamos riscos, prioridades e próximos passos."],
  ["Implantação assistida", "Apoiamos a execução técnica, documental e operacional."],
  ["Sustentação", "Monitoramos, revisamos e mantemos a conformidade ativa."],
];

const monitoringCards = [
  ["Status operacional", "Acompanhe a saúde dos sistemas e serviços essenciais."],
  [
    "Sistemas críticos",
    "Monitore plataformas, bancos de dados e aplicações utilizadas na rotina.",
  ],
  [
    "Servidores e infraestrutura",
    "Tenha visão sobre equipamentos, rede, firewall, backup e disponibilidade.",
  ],
  [
    "Alertas e conformidade",
    "Organize evidências, registros e pontos de atenção para tomada de decisão.",
  ],
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
    subtitle: "Solução completa ponta a ponta",
    text: "Para centralizar diagnóstico, documentação, infraestrutura, equipamentos, adequações físicas e sustentação.",
    cta: "Avaliar Prime",
    featured: true,
    items: [
      "Tudo do Starter e Plus",
      "Equipamentos e licenças",
      "Firewall, backup e proteção",
      "Rede, nobreak e infraestrutura",
      "Adequações físicas",
      "Sustentação contínua",
    ],
  },
];

const differentials = [
  ["Especialização técnica", "Ambientes mais seguros, organizados e preparados."],
  ["Documentação auditável", "Evidências, políticas, relatórios e registros técnicos."],
  ["Apoio jurídico especializado", "Mais clareza sobre LGPD, responsabilidade e conformidade."],
  ["Suporte e continuidade", "Acompanhamento para manter a operação protegida."],
  ["Solução sob medida", "A proposta respeita a realidade de cada serventia."],
];

const faqItems = [
  [
    "O Provimento CNJ 213/2026 se aplica à minha serventia?",
    "Sim. O Provimento estabelece padrões mínimos de tecnologia da informação e comunicação para serviços notariais e de registro.",
  ],
  [
    "Meu cartório já tem sistema. Ainda preciso me adequar?",
    "Sim. Sistema é apenas uma parte da operação. A adequação envolve infraestrutura, backup, acessos, segurança, documentação, rastreabilidade e continuidade.",
  ],
  [
    "Ter backup é suficiente?",
    "Não necessariamente. O backup precisa ser monitorado, testado e recuperável. Backup que nunca foi restaurado ainda representa risco.",
  ],
  [
    "Já tenho suporte de TI. Por que falar com a CIDI?",
    "Porque suporte técnico resolve chamados. Adequação exige diagnóstico, documentação, evidências, políticas, PCN, PRD, rastreabilidade e plano de continuidade.",
  ],
  [
    "A CIDI fornece equipamentos?",
    "Sim, quando necessário e conforme o plano indicado. A necessidade de equipamentos, licenças, firewall, nobreak, rede ou adequações físicas é avaliada no diagnóstico.",
  ],
  [
    "Preciso contratar tudo de uma vez?",
    "Não. O primeiro passo é entender a situação atual. Depois disso, a CIDI indica o caminho mais adequado para a realidade da serventia.",
  ],
  [
    "Como começo?",
    "Preencha o diagnóstico inicial ou fale com um especialista da CIDI para agendar uma reunião.",
  ],
];

const diagnosticSteps: DiagnosticStep[] = [
  {
    title: "Identificação",
    fields: [
      { id: "nome", label: "Nome completo", type: "text" },
      { id: "cargo", label: "Cargo/função", type: "text" },
      { id: "serventia", label: "Nome da serventia", type: "text" },
      { id: "cidade", label: "Cidade/UF", type: "text" },
      { id: "whatsapp", label: "WhatsApp", type: "tel" },
      { id: "email", label: "E-mail", type: "email" },
    ],
  },
  {
    title: "Estrutura",
    fields: [
      {
        id: "computadores",
        label: "Quantos computadores são usados na operação?",
        options: ["Até 5", "6 a 10", "11 a 20", "Mais de 20"],
      },
      {
        id: "servidor",
        label: "A serventia possui servidor local?",
        options: ["Sim", "Não", "Não sei"],
      },
      {
        id: "fornecedorTi",
        label: "Existe fornecedor de TI responsável atualmente?",
        options: ["Sim, suporte recorrente", "Sim, apenas quando precisa", "Não", "Não sei"],
      },
      {
        id: "infraestrutura",
        label: "A infraestrutura possui rede organizada, rack, nobreak e documentação?",
        options: ["Sim", "Parcialmente", "Não", "Não sei"],
      },
    ],
  },
  {
    title: "Segurança",
    fields: [
      {
        id: "acessosIndividuais",
        label: "Os usuários possuem acessos individuais aos sistemas?",
        options: ["Sim", "Parcialmente", "Não", "Não sei"],
      },
      {
        id: "mfa",
        label: "A serventia utiliza MFA/autenticação multifator?",
        options: ["Sim", "Parcialmente", "Não", "Não sei"],
      },
      {
        id: "politicaSeguranca",
        label: "Existe política formal de segurança da informação?",
        options: ["Sim", "Em construção", "Não", "Não sei"],
      },
      {
        id: "controlePermissoes",
        label: "Existe controle de permissões e acessos?",
        options: ["Sim", "Parcialmente", "Não", "Não sei"],
      },
    ],
  },
  {
    title: "Backup e continuidade",
    fields: [
      {
        id: "backupRegular",
        label: "A serventia realiza backup regularmente?",
        options: ["Sim", "Não", "Não sei"],
      },
      {
        id: "backupTestado",
        label: "O backup já foi testado com restauração real?",
        options: ["Sim", "Não", "Não sei"],
      },
      {
        id: "pcn",
        label: "Existe PCN — Plano de Continuidade de Negócios?",
        options: ["Sim", "Não", "Não sei"],
      },
      {
        id: "prd",
        label: "Existe PRD — Plano de Recuperação de Desastres?",
        options: ["Sim", "Não", "Não sei"],
      },
      {
        id: "evidencias",
        label: "Existem logs, evidências e documentos técnicos organizados para auditoria?",
        options: ["Sim", "Parcialmente", "Não", "Não sei"],
      },
      {
        id: "preocupacao",
        label: "Qual é sua principal preocupação hoje?",
        options: [
          "Segurança dos dados",
          "Indisponibilidade",
          "Fiscalização ou auditoria",
          "Backup",
          "LGPD",
          "Infraestrutura",
          "Não sei por onde começar",
        ],
        noScore: true,
      },
    ],
  },
];

type TextField = {
  id: string;
  label: string;
  type: "text" | "tel" | "email";
};

type OptionField = {
  id: string;
  label: string;
  options: string[];
  noScore?: boolean;
};

type Field = TextField | OptionField;
type DiagnosticStep = {
  title: string;
  fields: Field[];
};
type FormValues = Record<string, string>;

const scoreMap: Record<string, number> = {
  Sim: 0,
  Parcialmente: 1,
  "Em construção": 1,
  "Sim, suporte recorrente": 0,
  "Sim, apenas quando precisa": 1,
  Não: 2,
  "Não sei": 2,
  "Até 5": 0,
  "6 a 10": 1,
  "11 a 20": 1,
  "Mais de 20": 2,
};

const results = [
  {
    min: 0,
    max: 8,
    title: "Baixo risco aparente",
    cta: "Validar minha conformidade com a CIDI",
    text: "Sua serventia aparenta ter uma base tecnológica mais organizada, mas ainda é importante validar documentação, evidências, backup testado e aderência ao Provimento CNJ nº 213/2026.",
  },
  {
    min: 9,
    max: 18,
    title: "Risco moderado",
    cta: "Agendar diagnóstico com a CIDI",
    text: "Suas respostas indicam possíveis lacunas em segurança, infraestrutura, backup, acessos ou documentação. O próximo passo ideal é um diagnóstico estruturado.",
  },
  {
    min: 19,
    max: 28,
    title: "Alto risco",
    cta: "Falar com especialista agora",
    text: "A ausência de controles, backup testado, documentação, PCN, PRD ou evidências pode aumentar o risco em caso de fiscalização, falha técnica ou incidente.",
  },
  {
    min: 29,
    max: Infinity,
    title: "Risco crítico",
    cta: "Solicitar análise prioritária",
    text: "As respostas indicam baixa maturidade tecnológica ou falta de clareza sobre pontos essenciais de segurança, continuidade, backup, acessos e documentação. A CIDI pode ajudar a mapear os riscos e construir um plano de adequação.",
  },
];

const initialValues = diagnosticSteps
  .flatMap((step) => step.fields)
  .reduce<FormValues>((acc, field) => ({ ...acc, [field.id]: "" }), {});

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function scoreDiagnostic(values: FormValues) {
  return diagnosticSteps
    .flatMap((step) => step.fields)
    .filter((field) => "options" in field && !field.noScore)
    .reduce((total, field) => total + (scoreMap[values[field.id]] ?? 0), 0);
}

function resultFor(score: number) {
  return results.find((result) => score >= result.min && score <= result.max) ?? results[results.length - 1];
}

function Button({
  children,
  onClick,
  href,
  variant = "primary",
  wide = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "dark" | "light";
  wide?: boolean;
}) {
  const className = `premium-button inline-flex min-h-13 items-center justify-center rounded-full px-6 text-sm font-bold tracking-[-0.01em] ${
    wide ? "w-full" : "w-full sm:w-auto"
  } ${
    variant === "primary"
      ? "premium-button-primary text-white"
      : variant === "dark"
        ? "premium-button-dark text-white"
        : "premium-button-light text-[#07142B]"
  }`;

  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
        <span className="ml-2" aria-hidden="true">→</span>
      </a>
    );
  }

  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
      <span className="ml-2" aria-hidden="true">→</span>
    </button>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function Badge({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`premium-badge ${dark ? "premium-badge-dark" : "premium-badge-light"}`}>
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
  align?: "center" | "left";
}) {
  return (
    <div className={`reveal ${align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}`}>
      <Badge dark={dark}>{eyebrow}</Badge>
      <h2 className={`mt-6 text-3xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl ${dark ? "text-white" : "text-[#07142B]"}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-6 text-base leading-7 sm:text-lg ${align === "center" ? "mx-auto max-w-3xl" : "max-w-2xl"} ${dark ? "text-white/68" : "text-[#3B4B63]"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

function Card({
  title,
  text,
  dark = false,
  index,
}: {
  title: string;
  text: string;
  dark?: boolean;
  index: number;
}) {
  return (
    <article className={`premium-card reveal rounded-[1.75rem] border p-6 ${dark ? "glass-card text-white" : "light-card text-[#07142B]"}`}>
      <span className={`line-icon ${dark ? "line-icon-dark" : "line-icon-light"}`}>{String(index + 1).padStart(2, "0")}</span>
      <h3 className="mt-6 text-xl font-bold tracking-[-0.03em]">{title}</h3>
      <p className={`mt-3 text-sm leading-6 ${dark ? "text-white/64" : "text-[#3B4B63]"}`}>{text}</p>
    </article>
  );
}

function DashboardMockup() {
  const rows = [
    ["Backup testado", "52%", "w-[52%]"],
    ["Controle de acessos", "61%", "w-[61%]"],
    ["PCN e PRD", "34%", "w-[34%]"],
  ];

  return (
    <div className="dashboard-shell reveal delay-2">
      <div className="dashboard-float dashboard-float-a">
        <span>Alertas</span>
        <strong>07</strong>
      </div>
      <div className="dashboard-float dashboard-float-b">
        <span>Auditoria</span>
        <strong>Pronta</strong>
      </div>
      <div className="rounded-[1.75rem] bg-[#030816]/95 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7CE7FF]">Painel de diagnóstico</p>
            <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-white">Maturidade TIC</h2>
          </div>
          <div className="brand-orbit" aria-label="CIDI Tecnologia">
            <span>C</span>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {["Segurança", "Evidências", "Continuidade"].map((item) => (
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4" key={item}>
              <div className="h-2 w-8 rounded-full bg-[#27D7FF]" />
              <p className="mt-4 text-xs font-bold text-white/86">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.055] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-white">Score de prontidão</p>
              <p className="text-xs text-white/45">Controles críticos avaliados</p>
            </div>
            <p className="text-4xl font-bold tracking-[-0.06em] text-[#27D7FF]">67%</p>
          </div>
          <div className="mt-4 h-2 rounded-full bg-white/10">
            <div className="h-2 w-[67%] rounded-full bg-gradient-to-r from-[#0A5CFF] to-[#27D7FF] shadow-[0_0_24px_rgba(10,92,255,.58)]" />
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {rows.map(([label, value, width]) => (
            <div className="rounded-2xl border border-white/10 bg-[#0A1B38]/86 p-4" key={label}>
              <div className="flex justify-between text-sm font-bold text-white">
                <span>{label}</span>
                <span className="text-[#27D7FF]">{value}</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10">
                <div className={`h-2 rounded-full bg-[#0A5CFF] ${width}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MonitoringMockup() {
  return (
    <div className="mockup-panel reveal delay-2">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7CE7FF]">Operação monitorada</p>
          <h3 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-white">Visão da serventia</h3>
        </div>
        <div className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Estável
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {monitoringCards.map(([title, text], index) => (
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4" key={title}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">{title}</span>
              <span className="text-xs font-bold text-[#27D7FF]">{index === 0 ? "98%" : index === 1 ? "12" : index === 2 ? "24h" : "04"}</span>
            </div>
            <p className="mt-3 text-xs leading-5 text-white/52">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 h-28 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(10,92,255,.18),rgba(39,215,255,.06))] p-4">
        <div className="flex h-full items-end gap-2">
          {[42, 64, 46, 76, 58, 88, 70, 94].map((height, index) => (
            <div className="flex-1 rounded-t-xl bg-[#0A5CFF]/70" style={{ height: `${height}%` }} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DiagnosticModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [showResult, setShowResult] = useState(false);

  const step = diagnosticSteps[stepIndex];
  const score = useMemo(() => scoreDiagnostic(values), [values]);
  const result = useMemo(() => resultFor(score), [score]);
  const resultHref = useMemo(() => {
    const message = `Olá, CIDI Tecnologia. Acabei de preencher o diagnóstico inicial no site.

Nome: ${values.nome || "-"}
Cargo: ${values.cargo || "-"}
Serventia: ${values.serventia || "-"}
Cidade/UF: ${values.cidade || "-"}
Resultado: ${result.title}
Principal preocupação: ${values.preocupacao || "-"}

Gostaria de agendar uma conversa para entender os próximos passos da adequação ao Provimento CNJ nº 213/2026.`;
    return whatsappLink(message);
  }, [result.title, values]);

  if (!isOpen) return null;

  const complete = step.fields.every((field) => values[field.id]?.trim());
  const progress = showResult ? 100 : ((stepIndex + 1) / diagnosticSteps.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#030816]/88 px-4 py-5 backdrop-blur-xl">
      <div className="modal-card reveal max-h-[92vh] w-full max-w-4xl overflow-hidden">
        <div className="premium-surface relative px-5 py-6 text-white sm:px-8">
          <button
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/16 bg-white/10 text-xl leading-none transition hover:bg-white/18"
            type="button"
            onClick={onClose}
            aria-label="Fechar"
          >
            ×
          </button>
          <Badge dark>Diagnóstico inicial CIDI</Badge>
          <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
            Avalie a maturidade tecnológica da sua serventia
          </h2>
          <div className="mt-6 h-2 rounded-full bg-white/10">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-[#0A5CFF] to-[#7CE7FF] shadow-[0_0_28px_rgba(10,92,255,.55)] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="max-h-[68vh] overflow-y-auto bg-white p-5 sm:p-8">
          {showResult ? (
            <div className="reveal">
              <Badge>Resultado</Badge>
              <h3 className="mt-5 text-4xl font-bold tracking-[-0.055em] text-[#07142B]">{result.title}</h3>
              <p className="mt-2 text-sm font-bold text-[#0A5CFF]">Pontuação: {score}</p>
              <p className="mt-5 text-base leading-7 text-[#3B4B63]">{result.text}</p>
              <div className="mt-7 rounded-[1.7rem] border border-[#E6E9EF] bg-gradient-to-br from-[#F6F8FC] to-white p-6 text-sm text-[#3B4B63] shadow-[0_18px_44px_rgba(7,20,43,.08)]">
                <p className="font-bold text-[#07142B]">Resumo enviado para conversa</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <p>Nome: {values.nome || "-"}</p>
                  <p>Serventia: {values.serventia || "-"}</p>
                  <p>Cidade/UF: {values.cidade || "-"}</p>
                  <p>Preocupação: {values.preocupacao || "-"}</p>
                </div>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href={resultHref}>{result.cta}</Button>
                <Button variant="light" onClick={() => { setShowResult(false); setStepIndex(0); }}>
                  Revisar respostas
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-sm font-bold text-[#0A5CFF]">Etapa {stepIndex + 1} de {diagnosticSteps.length}</p>
              <h3 className="mt-1 text-3xl font-bold tracking-[-0.05em] text-[#07142B]">{step.title}</h3>
              <div className="mt-7 grid gap-4">
                {step.fields.map((field) => (
                  <div className="rounded-[1.5rem] border border-[#E6E9EF] bg-white p-4 shadow-[0_10px_30px_rgba(7,20,43,.04)]" key={field.id}>
                    <label className="text-sm font-bold text-[#07142B]" htmlFor={field.id}>
                      {field.label}
                    </label>
                    {"options" in field ? (
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {field.options.map((option) => (
                          <button
                            className={`option-button ${
                              values[field.id] === option ? "option-button-active" : "option-button-idle"
                            }`}
                            type="button"
                            key={option}
                            onClick={() => setValues((current) => ({ ...current, [field.id]: option }))}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <input
                        className="mt-3 min-h-12 w-full rounded-2xl border border-[#E6E9EF] bg-[#F6F8FC] px-4 text-sm font-semibold text-[#07142B] outline-none transition focus:border-[#0A5CFF] focus:bg-white focus:shadow-[0_0_0_4px_rgba(10,92,255,.10)]"
                        id={field.id}
                        type={field.type}
                        value={values[field.id]}
                        onChange={(event) => setValues((current) => ({ ...current, [field.id]: event.target.value }))}
                        placeholder="Digite aqui"
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-col-reverse justify-between gap-3 sm:flex-row">
                <button
                  className="premium-button premium-button-light min-h-13 rounded-full px-6 text-sm font-bold disabled:opacity-40"
                  type="button"
                  disabled={stepIndex === 0}
                  onClick={() => setStepIndex((current) => Math.max(0, current - 1))}
                >
                  Voltar
                </button>
                <button
                  className="premium-button premium-button-primary min-h-13 rounded-full px-7 text-sm font-bold text-white disabled:opacity-50"
                  type="button"
                  disabled={!complete}
                  onClick={() => stepIndex === diagnosticSteps.length - 1 ? setShowResult(true) : setStepIndex((current) => current + 1)}
                >
                  {stepIndex === diagnosticSteps.length - 1 ? "Ver resultado" : "Continuar"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);
  const whatsappHref = whatsappLink(BASE_WHATSAPP_MESSAGE);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07142B] text-white">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#07142B]/72 backdrop-blur-2xl">
        <Container className="flex items-center justify-between py-3">
          <a className="brand-pill" href="#topo">
            CIDI Tecnologia
          </a>
          <nav className="hidden rounded-full border border-white/10 bg-white/[0.055] px-4 py-3 text-sm font-bold text-white/66 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] lg:flex lg:gap-6">
            {navItems.map(([label, href]) => (
              <a className="transition hover:text-white" href={href} key={label}>{label}</a>
            ))}
          </nav>
          <div className="hidden sm:block">
            <Button onClick={() => setDiagnosticOpen(true)}>Solicitar diagnóstico</Button>
          </div>
        </Container>
      </header>

      <section id="topo" className="hero-surface relative overflow-hidden pb-20 pt-28 sm:pb-28 lg:pt-36">
        <div className="tech-grid" />
        <div className="glow-orb right-[-12rem] top-20" />
        <div className="glow-orb bottom-[-16rem] left-[-12rem] opacity-70" />
        <Container className="relative grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="reveal max-w-3xl">
            <Badge dark>Provimento CNJ nº 213/2026</Badge>
            <h1 className="mt-7 text-[2.7rem] font-bold leading-[0.98] tracking-[-0.075em] sm:text-6xl lg:text-[5.45rem]">
              Seu cartório está em conformidade — ou apenas funcionando?
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              O Provimento CNJ nº 213/2026 elevou a responsabilidade tecnológica das serventias. Agora, não basta ter sistemas ativos: é preciso comprovar segurança, disponibilidade, continuidade, rastreabilidade e documentação.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/64">
              A CIDI Tecnologia ajuda cartórios a diagnosticar riscos, organizar a infraestrutura e construir um plano claro de adequação.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => setDiagnosticOpen(true)}>Solicitar diagnóstico inicial</Button>
              <Button href={whatsappHref} variant="dark">Falar com um especialista</Button>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {heroSeals.map((seal) => (
                <div className="trust-chip" key={seal}>{seal}</div>
              ))}
            </div>
            <div className="hero-metric-rail reveal delay-3" aria-label="Indicadores do diagnóstico CIDI Tecnologia">
              {heroMetrics.map(([value, label]) => (
                <div className="hero-metric" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <DashboardMockup />
        </Container>
      </section>

      <section id="riscos" className="bg-white py-20 text-[#07142B] sm:py-32">
        <Container>
          <SectionIntro
            eyebrow="O problema invisível"
            title="O maior risco não é a tecnologia falhar. É não conseguir provar que ela estava preparada."
            text="Muitos cartórios funcionam normalmente todos os dias. Mas em uma fiscalização, incidente, perda de dados ou parada de sistema, as fragilidades aparecem."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {invisibleRisks.map(([title, text], index) => <Card title={title} text={text} index={index} key={title} />)}
          </div>
          <div className="mt-10 flex justify-center"><Button onClick={() => setDiagnosticOpen(true)}>Avaliar riscos da minha serventia</Button></div>
        </Container>
      </section>

      <section id="provimento" className="bg-[#F6F8FC] py-20 text-[#07142B] sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionIntro
            align="left"
            eyebrow="O que o Provimento exige"
            title="O Provimento 213 mudou o padrão mínimo de tecnologia para cartórios."
            text="A tecnologia deixou de ser apenas suporte. Agora, ela faz parte da segurança institucional, da continuidade operacional e da capacidade de comprovar conformidade."
          />
          <div className="provision-map reveal delay-2">
            {provisionBlocks.map(([title, text], index) => (
              <div className="provision-node" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 flex justify-center"><Button onClick={() => setDiagnosticOpen(true)}>Entender minha situação atual</Button></div>
        </Container>
      </section>

      <section className="hero-surface relative overflow-hidden py-20 sm:py-32">
        <div className="tech-grid" />
        <Container>
          <SectionIntro
            dark
            eyebrow="O que está em risco"
            title="Quando a serventia não está adequada, o impacto vai além da TI."
            text="A não conformidade pode gerar exposição operacional, fragilidade em auditorias, pressão sobre a titularidade e risco jurídico conforme a gravidade da ocorrência."
          />
          <div className="relative mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {impactCards.map(([title, text], index) => <Card dark title={title} text={text} index={index} key={title} />)}
          </div>
          <div className="mt-10 flex justify-center"><Button href={whatsappHref} variant="dark">Falar com a CIDI agora</Button></div>
        </Container>
      </section>

      <section className="bg-white py-20 text-[#07142B] sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="reveal lg:sticky lg:top-28">
            <Badge>A solução CIDI</Badge>
            <h2 className="mt-6 text-3xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              A CIDI transforma exigência em estrutura, segurança e conformidade documentada.
            </h2>
            <p className="mt-6 text-base leading-7 text-[#3B4B63]">
              Com atuação em infraestrutura, suporte, segurança da informação, hardware, LGPD e documentação técnica, a CIDI ajuda sua serventia a entender o cenário atual, corrigir lacunas e avançar com método.
            </p>
            <p className="mt-4 text-base leading-7 text-[#3B4B63]">
              Nosso trabalho une equipe técnica, apoio jurídico especializado e visão consultiva para construir o caminho mais adequado para cada cartório.
            </p>
            <div className="mt-8"><Button onClick={() => setDiagnosticOpen(true)}>Solicitar diagnóstico</Button></div>
          </div>
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {authorityPillars.map(([title, text], index) => <Card title={title} text={text} index={index} key={title} />)}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {deliveries.map((item) => <div className="delivery-chip" key={item}>{item}</div>)}
            </div>
          </div>
        </Container>
      </section>

      <section id="metodo" className="bg-[#F6F8FC] py-20 text-[#07142B] sm:py-32">
        <Container>
          <SectionIntro eyebrow="Método CIDI" title="Um processo claro para sair da incerteza." />
          <div className="timeline mt-14">
            {methodSteps.map(([title, text], index) => (
              <article className="timeline-item reveal" key={title}>
                <span>{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center"><Button onClick={() => setDiagnosticOpen(true)}>Quero começar pelo diagnóstico</Button></div>
        </Container>
      </section>

      <section className="hero-surface relative overflow-hidden py-20 sm:py-32">
        <div className="tech-grid" />
        <Container className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <SectionIntro
            align="left"
            dark
            eyebrow="Visibilidade e monitoramento"
            title="Visibilidade total da operação da serventia."
            text="Acompanhe o que mais importa: sistemas, servidores, backups, alertas, segurança e conformidade."
          />
          <MonitoringMockup />
          <div className="lg:col-span-2 flex justify-center"><Button onClick={() => setDiagnosticOpen(true)}>Ver como funciona</Button></div>
        </Container>
      </section>

      <section id="diagnostico" className="bg-white py-20 text-[#07142B] sm:py-32">
        <Container>
          <div className="offer-card reveal">
            <div>
              <Badge>Diagnóstico inicial</Badge>
              <h2 className="mt-6 text-3xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-5xl">
                Faça um diagnóstico inicial da sua serventia.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#3B4B63]">
                Responda algumas perguntas rápidas e receba uma análise inicial com recomendações práticas para fortalecer segurança, continuidade e conformidade.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button onClick={() => setDiagnosticOpen(true)}>Iniciar diagnóstico gratuito</Button>
                <Button href={whatsappHref} variant="light">Falar com especialista</Button>
              </div>
            </div>
            <div className="offer-preview">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-[#07142B]">Prévia do diagnóstico</p>
                <span>Resultado rápido</span>
              </div>
              <div className="mt-5 space-y-3">
                {diagnosticBenefits.map((item) => <div className="delivery-chip bg-white" key={item}>{item}</div>)}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="planos" className="hero-surface relative overflow-hidden py-20 sm:py-32">
        <div className="tech-grid" />
        <Container>
          <SectionIntro
            dark
            eyebrow="Planos"
            title="Três caminhos para diferentes níveis de necessidade."
            text="Cada cartório tem uma realidade. Por isso, a CIDI indica o caminho ideal após entender a estrutura, os riscos e o nível de maturidade da serventia."
          />
          <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article className={`plan-card reveal ${plan.featured ? "plan-card-featured" : ""}`} key={plan.name}>
                <span className="plan-label">{plan.label}</span>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#7CE7FF]">{plan.name}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-white">{plan.subtitle}</h3>
                <p className="mt-4 text-sm leading-6 text-white/66">{plan.text}</p>
                <ul className="mt-7 space-y-3 text-sm font-semibold text-white/84">
                  {plan.items.map((item) => <li className="flex gap-3" key={item}><span className="text-[#7CE7FF]">•</span>{item}</li>)}
                </ul>
                <div className="mt-8"><Button onClick={() => setDiagnosticOpen(true)} variant={plan.featured ? "light" : "dark"} wide>{plan.cta}</Button></div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 text-[#07142B] sm:py-32">
        <Container>
          <SectionIntro
            eyebrow="Por que escolher a CIDI"
            title="Tecnologia para cartórios exige mais do que suporte técnico."
            text="A CIDI combina infraestrutura, segurança, documentação, LGPD, suporte e visão consultiva para ajudar sua serventia a operar com mais tranquilidade e previsibilidade."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {differentials.map(([title, text], index) => <Card title={title} text={text} index={index} key={title} />)}
          </div>
          <div className="mt-10 flex justify-center"><Button href={whatsappHref} variant="light">Falar com um especialista</Button></div>
        </Container>
      </section>

      <section id="faq" className="bg-[#F6F8FC] py-20 text-[#07142B] sm:py-32">
        <Container className="max-w-5xl">
          <SectionIntro eyebrow="FAQ" title="Dúvidas frequentes" />
          <div className="mt-10 space-y-3">
            {faqItems.map(([question, answer]) => (
              <details className="faq-panel reveal" key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="hero-surface relative overflow-hidden py-20 text-center sm:py-32">
        <div className="glow-orb left-1/2 top-0 -translate-x-1/2 opacity-80" />
        <Container className="relative max-w-6xl">
          <h2 className="reveal text-3xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
            Sua serventia está pronta para comprovar conformidade?
          </h2>
          <p className="reveal delay-1 mx-auto mt-6 max-w-3xl text-base leading-7 text-white/68 sm:text-lg">
            Agende um diagnóstico inicial e descubra, com clareza, o que precisa ser feito para avançar na adequação ao Provimento CNJ nº 213/2026.
          </p>
          <div className="reveal delay-2 mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button onClick={() => setDiagnosticOpen(true)}>Agendar diagnóstico inicial</Button>
            <Button href={whatsappHref} variant="dark">Falar no WhatsApp</Button>
          </div>
          <div className="footer-contact reveal delay-3">
            <span>CIDI Tecnologia</span>
            <span>WhatsApp: (85) 99944-1907</span>
            <span>E-mail: contato@ciditecnologia.com.br</span>
            <span>Instagram: @ciditecnologia</span>
          </div>
          <p className="mt-4 text-sm text-white/50">Site: ciditecnologia.com.br</p>
        </Container>
      </section>

      <footer className="border-t border-white/10 bg-[#030816] px-4 py-10 text-center text-sm font-medium text-white/55">
        CIDI Tecnologia — Tecnologia que dá segurança para você focar no que importa.
      </footer>

      <DiagnosticModal isOpen={diagnosticOpen} onClose={() => setDiagnosticOpen(false)} />
    </main>
  );
}
