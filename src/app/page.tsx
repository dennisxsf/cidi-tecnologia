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

const plans = [
  {
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
    name: "Plus",
    subtitle: "Conformidade organizada e documentada",
    text: "Para estruturar documentação, políticas, evidências, acessos, backup, PCN e PRD.",
    cta: "Conhecer Plus",
    featured: true,
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
    name: "Prime",
    subtitle: "Solução completa ponta a ponta",
    text: "Para centralizar diagnóstico, documentação, infraestrutura, equipamentos, adequações físicas e sustentação.",
    cta: "Avaliar Prime",
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
    .filter((field) => "options" in field && !("noScore" in field && field.noScore))
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
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "dark" | "light";
}) {
  const className = `inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 text-sm font-bold transition sm:w-auto ${
    variant === "primary"
      ? "bg-[#0A5CFF] text-white shadow-[0_18px_50px_rgba(10,92,255,.32)] hover:bg-[#2A73FF]"
      : variant === "dark"
        ? "border border-white/20 bg-white/10 text-white hover:bg-white/15"
        : "border border-[#E6E9EF] bg-white text-[#07142B] hover:border-[#0A5CFF]"
  }`;

  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className={`rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] ${dark ? "bg-white/10 text-[#7CE7FF]" : "bg-[#0A5CFF]/10 text-[#0A5CFF]"}`}>
        {eyebrow}
      </span>
      <h2 className={`mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-[#07142B]"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-5 text-base leading-7 sm:text-lg ${dark ? "text-white/70" : "text-[#3B4B63]"}`}>{text}</p> : null}
    </div>
  );
}

function SimpleCard({
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
    <article className={`rounded-3xl border p-5 ${dark ? "border-white/10 bg-white/[0.07] text-white" : "border-[#E6E9EF] bg-white text-[#07142B] shadow-sm"}`}>
      <span className={`grid h-11 w-11 place-items-center rounded-2xl text-sm font-black ${dark ? "bg-[#0A5CFF] text-white" : "bg-[#0A5CFF]/10 text-[#0A5CFF]"}`}>
        {index + 1}
      </span>
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <p className={`mt-3 text-sm leading-6 ${dark ? "text-white/68" : "text-[#3B4B63]"}`}>{text}</p>
    </article>
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#07142B]/85 px-4 py-5 backdrop-blur">
      <div className="max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-2xl">
        <div className="relative bg-[#07142B] px-5 py-5 text-white sm:px-7">
          <button
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10"
            type="button"
            onClick={onClose}
            aria-label="Fechar"
          >
            ×
          </button>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7CE7FF]">Diagnóstico inicial CIDI</p>
          <h2 className="mt-2 max-w-xl text-2xl font-bold">Avalie a maturidade tecnológica da sua serventia</h2>
          <div className="mt-5 h-2 rounded-full bg-white/10">
            <div
              className="h-2 rounded-full bg-[#0A5CFF]"
              style={{ width: `${showResult ? 100 : ((stepIndex + 1) / diagnosticSteps.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="max-h-[68vh] overflow-y-auto p-5 sm:p-7">
          {showResult ? (
            <div>
              <span className="rounded-full bg-[#0A5CFF]/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0A5CFF]">
                Resultado
              </span>
              <h3 className="mt-4 text-3xl font-bold text-[#07142B]">{result.title}</h3>
              <p className="mt-2 text-sm font-bold text-[#0A5CFF]">Pontuação: {score}</p>
              <p className="mt-4 text-base leading-7 text-[#3B4B63]">{result.text}</p>
              <div className="mt-6 rounded-3xl border border-[#E6E9EF] bg-[#F6F8FC] p-5 text-sm text-[#3B4B63]">
                <p className="font-bold text-[#07142B]">Resumo</p>
                <p className="mt-2">Nome: {values.nome || "-"}</p>
                <p>Serventia: {values.serventia || "-"}</p>
                <p>Cidade/UF: {values.cidade || "-"}</p>
                <p>Preocupação: {values.preocupacao || "-"}</p>
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
              <h3 className="mt-1 text-2xl font-bold text-[#07142B]">{step.title}</h3>
              <div className="mt-6 grid gap-4">
                {step.fields.map((field: Field) => (
                  <div className="rounded-2xl border border-[#E6E9EF] p-4" key={field.id}>
                    <label className="text-sm font-bold text-[#07142B]" htmlFor={field.id}>
                      {field.label}
                    </label>
                    {"options" in field ? (
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {field.options.map((option) => (
                          <button
                            className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold ${
                              values[field.id] === option
                                ? "border-[#0A5CFF] bg-[#0A5CFF] text-white"
                                : "border-[#E6E9EF] bg-[#F6F8FC] text-[#07142B]"
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
                        className="mt-3 min-h-12 w-full rounded-2xl border border-[#E6E9EF] bg-[#F6F8FC] px-4 text-sm font-semibold text-[#07142B] outline-none focus:border-[#0A5CFF]"
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
                  className="min-h-12 rounded-full border border-[#E6E9EF] px-5 text-sm font-bold text-[#07142B] disabled:opacity-40"
                  type="button"
                  disabled={stepIndex === 0}
                  onClick={() => setStepIndex((current) => Math.max(0, current - 1))}
                >
                  Voltar
                </button>
                <button
                  className="min-h-12 rounded-full bg-[#0A5CFF] px-5 text-sm font-bold text-white disabled:opacity-50"
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
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#07142B]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-bold" href="#topo">
            CIDI Tecnologia
          </a>
          <nav className="hidden gap-6 text-sm font-bold text-white/70 lg:flex">
            {navItems.map(([label, href]) => (
              <a className="hover:text-white" href={href} key={label}>{label}</a>
            ))}
          </nav>
          <div className="hidden sm:block">
            <Button onClick={() => setDiagnosticOpen(true)}>Solicitar diagnóstico</Button>
          </div>
        </div>
      </header>

      <section id="topo" className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(10,92,255,0.35),transparent_28rem),radial-gradient(circle_at_78%_22%,rgba(80,210,255,0.16),transparent_24rem)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#7CE7FF]">
              Provimento CNJ nº 213/2026
            </span>
            <h1 className="mt-6 text-[2.35rem] font-bold leading-[1.05] sm:text-5xl lg:text-[4.6rem]">
              Seu cartório está em conformidade — ou apenas funcionando?
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              O Provimento CNJ nº 213/2026 elevou a responsabilidade tecnológica das serventias. Agora, não basta ter sistemas ativos: é preciso comprovar segurança, disponibilidade, continuidade, rastreabilidade e documentação.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
              A CIDI Tecnologia ajuda cartórios a diagnosticar riscos, organizar a infraestrutura e construir um plano claro de adequação.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => setDiagnosticOpen(true)}>Solicitar diagnóstico inicial</Button>
              <Button href={whatsappHref} variant="dark">Falar com um especialista</Button>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {heroSeals.map((seal) => (
                <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-sm font-bold text-white/85" key={seal}>
                  {seal}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-3 shadow-[0_0_70px_rgba(10,92,255,.35)]">
            <div className="rounded-[1.5rem] bg-[#061126] p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#27D7FF]">Painel de diagnóstico</p>
              <h2 className="mt-2 text-2xl font-bold">Maturidade TIC</h2>
              <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.06] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">Score de prontidão</p>
                    <p className="text-xs text-white/50">Controles críticos avaliados</p>
                  </div>
                  <p className="text-3xl font-bold text-[#27D7FF]">67%</p>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[67%] rounded-full bg-[#0A5CFF]" />
                </div>
              </div>
              {["Backup testado", "Controle de acessos", "PCN e PRD"].map((item, index) => (
                <div className="mt-3 rounded-2xl border border-white/10 bg-[#0B1B38] p-4" key={item}>
                  <div className="flex justify-between text-sm font-bold">
                    <span>{item}</span>
                    <span className="text-[#27D7FF]">{[52, 61, 34][index]}%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-[#0A5CFF]" style={{ width: `${[52, 61, 34][index]}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="riscos" className="bg-white px-4 py-16 text-[#07142B] sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="O problema invisível"
            title="O maior risco não é a tecnologia falhar. É não conseguir provar que ela estava preparada."
            text="Muitos cartórios funcionam normalmente todos os dias. Mas em uma fiscalização, incidente, perda de dados ou parada de sistema, as fragilidades aparecem."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {invisibleRisks.map(([title, text], index) => <SimpleCard title={title} text={text} index={index} key={title} />)}
          </div>
          <div className="mt-10 flex justify-center"><Button onClick={() => setDiagnosticOpen(true)}>Avaliar riscos da minha serventia</Button></div>
        </div>
      </section>

      <section id="provimento" className="bg-[#07142B] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle dark eyebrow="O que o Provimento exige" title="O Provimento 213 mudou o padrão mínimo de tecnologia para cartórios." text="A tecnologia deixou de ser apenas suporte. Agora, ela faz parte da segurança institucional, da continuidade operacional e da capacidade de comprovar conformidade." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {provisionBlocks.map(([title, text], index) => <SimpleCard dark title={title} text={text} index={index} key={title} />)}
          </div>
          <div className="mt-10 flex justify-center"><Button onClick={() => setDiagnosticOpen(true)}>Entender minha situação atual</Button></div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-[#07142B] sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="O que está em risco" title="Quando a serventia não está adequada, o impacto vai além da TI." text="A não conformidade pode gerar exposição operacional, fragilidade em auditorias, pressão sobre a titularidade e risco jurídico conforme a gravidade da ocorrência." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {impactCards.map(([title, text], index) => <SimpleCard title={title} text={text} index={index} key={title} />)}
          </div>
          <div className="mt-10 flex justify-center"><Button href={whatsappHref} variant="light">Falar com a CIDI agora</Button></div>
        </div>
      </section>

      <section className="bg-[#07142B] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#7CE7FF]">A solução CIDI</span>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">A CIDI transforma exigência em estrutura, segurança e conformidade documentada.</h2>
            <p className="mt-5 text-base leading-7 text-white/70">Com atuação em infraestrutura, suporte, segurança da informação, hardware, LGPD e documentação técnica, a CIDI ajuda sua serventia a entender o cenário atual, corrigir lacunas e avançar com método.</p>
            <p className="mt-4 text-base leading-7 text-white/60">Nosso trabalho une equipe técnica, apoio jurídico especializado e visão consultiva para construir o caminho mais adequado para cada cartório.</p>
            <div className="mt-8"><Button onClick={() => setDiagnosticOpen(true)}>Solicitar diagnóstico</Button></div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {deliveries.map((item) => <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-sm font-bold text-white/85" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-white px-4 py-16 text-[#07142B] sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Método CIDI" title="Um processo claro para sair da incerteza." />
          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {methodSteps.map(([title, text], index) => <SimpleCard title={title} text={text} index={index} key={title} />)}
          </div>
          <div className="mt-10 flex justify-center"><Button onClick={() => setDiagnosticOpen(true)}>Quero começar pelo diagnóstico</Button></div>
        </div>
      </section>

      <section className="bg-[#07142B] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle dark eyebrow="Visibilidade e monitoramento" title="Visibilidade total da operação da serventia." text="Acompanhe o que mais importa: sistemas, servidores, backups, alertas, segurança e conformidade." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {monitoringCards.map(([title, text], index) => <SimpleCard dark title={title} text={text} index={index} key={title} />)}
          </div>
          <div className="mt-10 flex justify-center"><Button onClick={() => setDiagnosticOpen(true)}>Ver como funciona</Button></div>
        </div>
      </section>

      <section id="diagnostico" className="bg-white px-4 py-16 text-[#07142B] sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-[#E6E9EF] bg-[#F6F8FC] p-6 shadow-[0_20px_70px_rgba(7,20,43,.12)] lg:grid-cols-[1fr_.9fr] lg:p-10">
          <div>
            <span className="rounded-full bg-[#0A5CFF]/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0A5CFF]">Diagnóstico inicial</span>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">Faça um diagnóstico inicial da sua serventia.</h2>
            <p className="mt-5 text-base leading-7 text-[#3B4B63]">Responda algumas perguntas rápidas e receba uma análise inicial com recomendações práticas para fortalecer segurança, continuidade e conformidade.</p>
            <div className="mt-8"><Button onClick={() => setDiagnosticOpen(true)}>Iniciar diagnóstico gratuito</Button></div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Seguro e confidencial", "Resultado rápido", "Sem compromisso", "Orientação com especialista"].map((item) => <div className="rounded-2xl border border-[#E6E9EF] bg-white p-5 text-sm font-bold" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section id="planos" className="bg-[#07142B] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle dark eyebrow="Planos" title="Três caminhos para diferentes níveis de necessidade." text="Cada cartório tem uma realidade. Por isso, a CIDI indica o caminho ideal após entender a estrutura, os riscos e o nível de maturidade da serventia." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article className={`rounded-3xl border p-6 ${plan.featured ? "border-[#0A5CFF] bg-[#0A5CFF]" : "border-white/10 bg-white/[0.07]"}`} key={plan.name}>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#7CE7FF]">{plan.name}</p>
                <h3 className="mt-3 text-2xl font-bold">{plan.subtitle}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{plan.text}</p>
                <ul className="mt-6 space-y-3 text-sm font-semibold text-white/85">
                  {plan.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="mt-7"><Button onClick={() => setDiagnosticOpen(true)} variant={plan.featured ? "light" : "dark"}>{plan.cta}</Button></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-[#07142B] sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Por que escolher a CIDI" title="Tecnologia para cartórios exige mais do que suporte técnico." text="A CIDI combina infraestrutura, segurança, documentação, LGPD, suporte e visão consultiva para ajudar sua serventia a operar com mais tranquilidade e previsibilidade." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {differentials.map(([title, text], index) => <SimpleCard title={title} text={text} index={index} key={title} />)}
          </div>
          <div className="mt-10 flex justify-center"><Button href={whatsappHref} variant="light">Falar com um especialista</Button></div>
        </div>
      </section>

      <section id="faq" className="bg-[#F6F8FC] px-4 py-16 text-[#07142B] sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionTitle eyebrow="FAQ" title="Dúvidas frequentes" />
          <div className="mt-10 space-y-3">
            {faqItems.map(([question, answer]) => (
              <details className="rounded-2xl border border-[#E6E9EF] bg-white p-5" key={question}>
                <summary className="cursor-pointer text-base font-bold">{question}</summary>
                <p className="mt-3 text-sm leading-6 text-[#3B4B63]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07142B] px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Sua serventia está pronta para comprovar conformidade?</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">Agende um diagnóstico inicial e descubra, com clareza, o que precisa ser feito para avançar na adequação ao Provimento CNJ nº 213/2026.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button onClick={() => setDiagnosticOpen(true)}>Agendar diagnóstico inicial</Button>
            <Button href={whatsappHref} variant="dark">Falar no WhatsApp</Button>
          </div>
          <div className="mt-10 grid gap-3 text-sm text-white/68 sm:grid-cols-2 lg:grid-cols-4">
            <span>CIDI Tecnologia</span>
            <span>WhatsApp: (85) 99944-1907</span>
            <span>E-mail: contato@ciditecnologia.com.br</span>
            <span>Instagram: @ciditecnologia</span>
          </div>
          <p className="mt-4 text-sm text-white/50">Site: ciditecnologia.com.br</p>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#07142B] px-4 py-8 text-center text-sm font-medium text-white/55">
        CIDI Tecnologia — Tecnologia que dá segurança para você focar no que importa.
      </footer>

      <DiagnosticModal isOpen={diagnosticOpen} onClose={() => setDiagnosticOpen(false)} />
    </main>
  );
}
