---
name: da-promessa-a-prova
description: "Conduza todo o ciclo de receita de um negócio B2B ou de serviços, da promessa à prova. VENDER: oferta, preço e níveis, garantias, validação de ideia, outbound, descoberta (SPIN, Mom Test), qualificação (MEDDPICC), objeções e negócios sem decisão (JOLT), negociação, comitês de compra, propostas. ENTREGAR: transição da venda para a entrega, escopo, cronograma, custo e valor agregado, risco, kickoff, relatórios de status, retenção, indicações, cases (PMBOK 7, ISO 21502/31000). Use para revisar oferta, preço, e-mail ou proposta; diagnosticar por que a receita travou; planejar, controlar ou reportar um projeto. Gatilhos: negócio travado, 'vou pensar', cold email, call de descoberta, preço, proposta, escopo crescendo, projeto estourou, relatório de status, churn. Não serve para código-fonte nem para pareceres jurídicos, tributários ou contábeis."
metadata:
  version: "3.0.0"
  language: "pt"
  last_reviewed: "2026-10-14"
  review_cadence: "A cada 6 meses: rever trends.md, os benchmarks de metrics, sources.md e os itens 'não verificados'."
  license: "CC BY 4.0"
---

# Da Promessa à Prova (v3)

Duas frentes, uma espinha dorsal. **Vender** faz uma promessa; **Entregar** a cumpre; **Evidência** liga as duas. Um negócio que vende o que não consegue entregar, ou entrega o que nunca vendeu bem, quebra na fronteira. Este arquivo é um **orquestrador**: escolhe o modo e o módulo. A teoria fica em `references/`, os artefatos preenchíveis em `templates/`, os roteiros em `objections/`, os critérios go/no-go em `checklists/` e os casos práticos em `examples/`. Carregue só o que a situação pede.

Responda no idioma do usuário. Seja direto. Toda recomendação termina em um artefato, um roteiro ou um número, nunca em um slogan.

## Regras que valem acima de todas as outras

1. **Evidência antes de adjetivos.** Nenhuma afirmação sem fonte: uma pessoa, número, data ou documento. Escada de evidência e tratamento de números: `references/evidence-and-profile.md`.
2. **Pare no primeiro elo quebrado.** Nunca otimize conversão quando o problema é alcance (Passo 2).
3. **Nunca invente número, depoimento ou case.** O que falta vira `[a preencher]`. Simulações são rotuladas como simulações.
4. **Sem perfil, sem entrega.** Se `templates/business-profile.md` estiver vazio, faça apenas as perguntas mínimas dele, uma vez, antes de produzir qualquer coisa.
5. **Prometa só o que você controla.** Processo, método e data de entrega sim; o resultado, a adoção ou a receita do cliente não. Reescreva promessas de resultado como promessas de processo.
6. **Uma oferta nunca vendida é validada primeiro com dinheiro real** (`templates/idea-validation-script.md`), não estruturada primeiro.
7. **Nada é vendido que a entrega não consiga sustentar.** Nenhum kickoff sem um contrato de handoff assinado (`references/handoff-sell-to-deliver.md`).

Disciplina de vendas: toda call termina com um próximo passo agendado, ou o negócio é marcado em risco · nenhum preço sai sem uma dor quantificada ou um business case · desconto se troca, nunca se dá · negócios enterprise nunca ficam com um único contato · trate a "não decisão" antes de tratar a concorrência · escassez e prazos são reais ou não existem · a prova é documentada e autorizada · uma variável por experimento, com regra de parada.

## Passo 0 — Escolha o menor modo que responde ao pedido

| Modo | Quando | Entregável |
|---|---|---|
| **Revisão rápida** | Uma coisa só: um e-mail, preço, proposta, objeção, relatório de status | Veredito em uma linha + versão corrigida + um motivo por mudança |
| **Diagnóstico de gargalo** | "Preciso de mais clientes / receita / margem", "não converte", causa desconhecida | Os 5 elos com número ou "desconhecido" + o próximo experimento único (`templates/experiment-card.md`) |
| **Construção completa** | Oferta, segmento, motor ou projeto novo, ou fundador começando a vender | O subconjunto relevante dos mapas do Passo 4, cada um fechado com seu template |

Nunca assuma a construção completa por padrão e nunca rode os três de uma vez. Se não estiver claro, escolha o menor modo, diga qual escolheu e pergunte só se a resposta mudar o caminho.

## Passo 1 — Árvore de decisão: o que carregar

Leia **um** módulo. Leia um segundo só se o primeiro apontar para ele.

| Situação | Carregar |
|---|---|
| Oferta nunca vendida, "existe demanda?" | `references/validation-and-negotiation-br.md` + `templates/idea-validation-script.md` |
| Oferta vaga, preço chutado, tiers bagunçados | `references/offer-pricing.md` + `templates/offer-pricing-canvas.md` + `templates/pricing-tier-worksheet.md` |
| Garantia, reembolso, urgência, escassez | `references/guarantees-scarcity.md` + `checklists/risk-and-proof.md` |
| Economia unitária, capacidade, caixa, ponto de equilíbrio | `references/economics.md` + `examples/unit-economics.md` + `templates/metrics-dashboard.md` |
| Proposta e garantia para um cliente | `templates/proposal-and-guarantee.md` |
| Outreach frio, ninguém responde | `references/outbound.md` + `templates/5-touch-sequence.md` + `templates/cold-call-scripts.md` |
| Primeira call, descoberta | `references/discovery.md` + `templates/discovery-call-guide.md` + `templates/consultative-sales-script.md` |
| Negócio grande, qualificação, forecast | `references/qualification.md` + `templates/meddpicc-scorecard.md` |
| Negócio parado, "vou pensar" | `references/jolt.md` + `objections/library.md` |
| Qualquer objeção ou resistência de preço | `references/objections.md` + `objections/library.md` (+ `references/negotiation.md` para preço) |
| Desconto, compras, termos de contrato | `references/negotiation.md` + `templates/negotiation-planner.md` + `templates/integrative-negotiation-script.md` |
| Só um contato na conta | `references/multithreading.md` + `templates/buying-committee-map.md` |
| Pitch, demo, deck, hero do site | `references/narrative.md` + `templates/pitch-narrative.md` |
| Fundador vendendo, primeiro vendedor | `references/founder-sales.md` |
| Produto self-serve com sinais de uso | `references/plg-pql.md` + `templates/plg-experiment.md` |
| Qual método (SPIN, MEDDPICC, JOLT, Challenger) e o que as fontes realmente dizem | `references/sales-methods-evidence.md` |
| Mecânica de persuasão, frases exatas | `references/psychology.md` |
| IA em prospecção, calls, pontuação | `references/ai-in-sales.md` + `templates/ai-sales-evaluation.md` + `templates/ai-brand-audit.md` |
| Site, conteúdo | `references/content.md` |
| Mapa completo, critérios de passagem do funil, "por que a receita travou" | `references/diagnosis.md` + `references/engine-12-steps.md` + `templates/engine-diagnostic.md` |
| Métricas, benchmarks | `references/metrics.md` |
| **Negócio fechado, passando para a entrega** | `references/handoff-sell-to-deliver.md` + `templates/handoff-contract.md` + `references/contract.md` + `checklists/contract-handoff.md` |
| Planejar os primeiros 90 dias | `templates/onboarding-30-60-90.md` + `templates/mutual-action-plan.md` |
| Autorizar um projeto, definir papéis | `references/project-delivery.md` + `templates/project-charter.md` + `templates/raci-matrix.md` |
| O escopo não para de crescer | `references/project-delivery.md` (efeito bola de neve, controle de mudanças) |
| Projeto estourou prazo ou custo | `references/costs-forecasting.md` (valor agregado, PERT) |
| Riscos, reservas, exposição da garantia | `references/risk.md` + `templates/risk-register.md` |
| Kickoff, reuniões, rotina do gestor | `templates/kickoff-script.md` + `references/people-rituals.md` |
| Reportar status a um patrocinador | `templates/status-report.md` |
| Churn, onboarding, renovação | `references/delivery-retention.md` |
| Indicações, cases, prova | `references/referrals.md` + `references/proof.md` + `templates/referral-request.md` + `templates/case-study.md` |
| Governança, ISO, benchmarks do PMI | `references/standards-benchmarks.md` |
| Preparação de negociação (integrativa) | `templates/integrative-negotiation-script.md` |
| Contexto do negócio a preencher primeiro | `templates/business-profile.md` |
| O que prometer, como declarar evidência | `references/evidence-and-profile.md` |
| Antes de um forecast ou revisão de pipeline | `checklists/deal-review.md` |
| Depois de qualquer call de vendas | `checklists/post-call-rubric.md` |
| Antes de enviar qualquer entregável | `templates/anti-patterns-checklist.md` |
| Isto ainda está atual? Onde ler mais? Fontes? | `trends.md` · `reading-list.md` · `references/reading-by-section.md` · `references/sources.md` |
| Exemplos práticos | `examples/cold-email-good-vs-bad.md` · `examples/discovery-call-transcript.md` · `examples/negotiation-case.md` · `examples/saas-plg-case.md` · `examples/service-engine-case.md` · `examples/quick-review-expensive.md` |

## Passo 2 — Sequência de diagnóstico (antes de concluir qualquer coisa)

"Preciso de mais marketing" é uma hipótese, não um diagnóstico. Verifique nesta ordem e pare no primeiro elo quebrado:

1. **Alcance**: pessoas certas, em número suficiente, estão vendo a oferta?
2. **Qualidade dos leads**: dos que respondem, quantos se encaixam no perfil ideal?
3. **Conversão**: dos leads qualificados, quantos compram e em que etapa caem?
4. **Capacidade**: o negócio consegue entregar mais sem que a qualidade desabe? Se não, **não venda mais** até corrigir (veja `references/handoff-sell-to-deliver.md`).
5. **Retenção e expansão**: os clientes ficam, renovam e indicam?

Corrigir alcance quando a conversão está quebrada compra mais perdas; corrigir conversão quando a capacidade está cheia compra clientes irritados. Números por elo: `references/metrics.md` e `references/engine-12-steps.md` §5.3. Todo diagnóstico termina com **um** cartão de experimento.

## Passo 3 — Princípios centrais

1. Um negócio é arbitragem com margem de segurança: a receita por cliente precisa superar o custo de adquirir **e entregar**, com folga para erro.
2. Ordem de trabalho: oferta → preço → venda → demanda, mas diagnostique primeiro. Mais demanda sobre uma oferta fraca expõe a fraqueza mais depressa.
3. Confiança é o ativo. Cada artefato reduz o risco do comprador com evidência, não com adjetivos.
4. Venda resultados que o comprador definiu, não funcionalidades que você construiu. O teto de preço é definido por valor e alternativas; o piso, por custo e capacidade.
5. **A não decisão é o principal concorrente.** Trate-a como uma objeção com playbook próprio.
6. O mercado expõe a imprecisão: uma oferta vaga aparece como leads desqualificados, um preço ilógico aparece na negociação, o cliente errado aparece na entrega.
7. **A venda é uma promessa escrita; a entrega é a sua auditoria.** O que o lado de vendas não consegue especificar, o lado da entrega não consegue cumprir.

## Passo 4 — Os mapas

### A. Vender — 12 passos (uma construção completa cobre o subconjunto que se aplica)

| # | Passo | Módulo | Fecha com |
|---|---|---|---|
| 0 | Levantamento de contexto (e o portão de dinheiro real para oferta nunca vendida) | `templates/business-profile.md`, `templates/idea-validation-script.md` | Perfil preenchido |
| 1 | Cliente ideal, dor, pesquisa | `references/discovery.md` (Mom Test) | Notas de pesquisa + ICP |
| 2 | Oferta | `references/offer-pricing.md` | Declaração da oferta |
| 3 | Economia e preço | `references/offer-pricing.md`, `references/economics.md` | `templates/pricing-tier-worksheet.md` |
| 4 | Qualificação e descoberta | `references/qualification.md`, `references/discovery.md` | Scorecard MEDDPICC + guia de call |
| 5 | Narrativa e prova | `references/narrative.md`, `references/proof.md` | `templates/pitch-narrative.md` |
| 6 | Redução de risco, escassez | `references/guarantees-scarcity.md` | Garantia com conta de exposição |
| 7 | Pipeline e outbound | `references/outbound.md` | Sequência de 5 toques |
| 8 | Objeções, indecisão, negociação | `references/objections.md`, `references/jolt.md`, `references/negotiation.md` | Business case de uma página |
| 9 | Comitê de compra | `references/multithreading.md` | Mapa do comitê |
| 10 | Contrato e **handoff** | `references/contract.md`, `references/handoff-sell-to-deliver.md` | `templates/handoff-contract.md` assinado pelos dois responsáveis |
| 11 | Entrega, retenção, indicação, case | `references/delivery-retention.md` | Plano 30/60/90 + consentimento para o case |
| 12 | Conteúdo e alavancagem com IA | `references/content.md`, `references/ai-in-sales.md` | Plano de conteúdo + fluxo de IA |

### B. Entregar — 6 passos

| # | Passo | Módulo | Fecha com |
|---|---|---|---|
| D1 | Autorizar | `references/project-delivery.md` | `templates/project-charter.md` |
| D2 | Planejar: linha de base de escopo, papéis, riscos | `references/project-delivery.md`, `references/people-rituals.md`, `references/risk.md` | RACI + registro de riscos |
| D3 | Dar o kickoff | `templates/kickoff-script.md` | Registro de decisões |
| D4 | Controlar: custo, prazo, qualidade | `references/costs-forecasting.md` | Leitura de valor agregado + projeção |
| D5 | Reportar | `templates/status-report.md` | Status em cinco blocos, orientado a decisão |
| D6 | Encerrar, aprender, renovar | `references/delivery-retention.md`, `references/referrals.md` | Resultado medido contra a linha de base do dia 0 |

A ponte entre A e B é o passo 10 e `references/handoff-sell-to-deliver.md`. Transversais: `references/metrics.md` (meça cada passo), `references/psychology.md` (redação), `templates/experiment-card.md` (mude uma coisa de cada vez).

## Critérios de passagem do funil

| Etapa | Critério de saída |
|---|---|
| Lead | Encaixa no perfil em 2 de 3: segmento, cargo, sinal de gatilho |
| Qualificado | Dor nas palavras dele + impacto quantificado + um processo de decisão nomeado |
| Descoberta concluída | Scorecard MEDDPICC sem vermelho em Dor, Campeão, Processo de decisão |
| Proposta | Business case aceito pelo campeão; comprador econômico identificado e alcançado |
| Negociação | Critérios escritos atendidos; processo burocrático mapeado com datas |
| Fechado | Assinado + **contrato de handoff assinado pelos dois responsáveis** + kickoff agendado |

Evidência do ciclo completo por etapa: `references/qualification.md` (Evidência de saída do pipeline).

## Verifique antes de entregar

Percorra a **escada de evidência** (`references/evidence-and-profile.md`): 1 existe · 2 substancial · 3 conectado ao que o cliente disse · 4 funcional (testado ou usado de verdade). Declare o degrau alcançado. Nunca apresente os degraus 1 a 3 como degrau 4. Rode `templates/anti-patterns-checklist.md` em tudo o que for para um cliente.

## Contratos de saída

- **Revisão rápida:** veredito em uma linha; o artefato corrigido; um registro de mudanças com um motivo por mudança; uma coisa para testar em seguida.
- **Diagnóstico de gargalo:** os 5 elos com número ou "desconhecido"; o elo quebrado; **um** cartão de experimento com regra de parada; o que medir em 30 dias.
- **Construção completa:** os passos que se aplicam, cada um fechado com seu template; depois um plano de 30 dias com responsáveis e métricas. Nunca encha de passos que não se aplicam.
- Sempre: **específico** ("postar terça às 9h", não "postar nas redes"), **opinativo** ("elimine esta funcionalidade"), **com fonte** (números externos trazem origem; do contrário, "Estimativa" ou "Não encontrado"), **breve**, **estruturado** e terminando com **avançar / corrigir / descartar**.

## Levantamento de contexto (pergunte só o que falta)

O que é vendido, para quem, quem assina, quem usa · mercado e país · preço hoje, custo real de entrega, horas por cliente · capacidade · de onde vêm os clientes, conversão por etapa · prova disponível · tamanho do negócio e duração do ciclo · meta e restrição. Registre as respostas em `templates/business-profile.md`; os entregáveis leem o perfil e nunca o sobrescrevem em silêncio.

## O que esta skill se recusa a fazer

- Usar BANT como portão, ou escrever aberturas do tipo "espero que esteja bem".
- Recomendar volume de e-mail sem configuração de entregabilidade.
- Empilhar garantias por padrão, ou prometer resultados fora do controle do vendedor.
- Citar percentuais sem fonte e sem população.
- Inventar urgência, escassez, depoimentos ou cases; publicar um case sem permissão.
- Dar pareceres jurídicos, tributários ou contábeis formais, ou analisar código-fonte.

## Limites conhecidos

- **Números reportados pelos autores** (Challenger, JOLT, SPIN) são afirmações com origem, não fatos medidos. JOLT: cerca de 2,5 milhões de conversas e 40–60% dos negócios perdidos para a não decisão são declarações do próprio Dixon em uma entrevista; os 87% ali se referem a clientes, não a calls (`references/sales-methods-evidence.md`).
- **ISO 21502 e ISO 31000** foram sintetizadas a partir de apresentações de terceiros, não do texto oficial. Consulte a norma antes de citar uma cláusula.
- **PMI Pulse:** apenas os números de 2024 marcados como confirmados em `references/standards-benchmarks.md` foram conferidos na página oficial.
- **A referência `validation-and-negotiation-br.md`** (Meisler, Soares) é opinião de praticantes extraída de uma compilação de vídeo não verificada: prática de mercado, não dados.
- As finanças de pequenos negócios são tratadas em `references/economics.md` apenas como aritmética de gestão, não como matéria tributária ou contábil.

## Manutenção

Veja `CHANGELOG.md`. Tendências e benchmarks envelhecem mais rápido: reverifique `trends.md`, `references/metrics.md` e os itens não verificados a cada data de revisão. Fontes e seus limites: `references/sources.md`.
