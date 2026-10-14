# Risco

## 8.1 Matriz probabilidade × impacto

**Pontuação = Probabilidade (1–5) × Impacto (1–5) → de 1 a 25**

**Probabilidade:** 1 Rara (<5%) · 2 Improvável (5–20%) · 3 Possível (21–50%) · 4 Provável (51–80%) ·
5 Quase certa (>80%)
**Impacto:** 1 Insignificante · 2 Menor · 3 Moderado · 4 Maior · 5 Catastrófico

| Faixa | Pontuação | Ação |
|---|---|---|
| 🟩 **Baixo** | 1–4 | monitorar dentro do aceitável; sem ação dedicada |
| 🟨 **Médio** | 5–9 | planejar e monitorar conforme tolerância |
| 🟧 **Alto** | 10–19 | atribuir responsável e planejar resposta prioritária |
| 🟥 **Extremo** | 20–25 | exigir ação imediata, inclusive reavaliar o escopo |

**Como usar:** identificar (impacto e probabilidade) → plotar no mapa de calor → priorizar
(considerando risco, urgência e limites de governança) → agir e revisar.
**Escopos diferentes:** a matriz avalia **riscos**; **oportunidades** exigem critérios próprios de
impacto-benefício, avaliados separadamente.
**Base da avaliação:** **inerente** (sem controle aplicado) × **residual** (após mitigação).

## 8.2 As 5 estratégias — ameaça

| Estratégia | Quando | Exemplo |
|---|---|---|
| **Aceitar** | baixa probabilidade e baixo impacto | registre e **monitore** — aceitar não é ignorar |
| **Evitar** | alta probabilidade e alto impacto | aumentar prazo quando o fornecedor sempre atrasa; reduzir escopo irreal |
| **Transferir** | impacto alto, probabilidade baixa | seguro; terceiro que assume o teste |
| **Mitigar** | probabilidade **ou** impacto alto | reduzir a probabilidade (processo, teste) ou o impacto (plano B, reserva) |
| **Escalar** | fora da sua autoridade | leva à liderança, que passa a ser responsável |

## 8.3 As 5 estratégias — oportunidade

| Estratégia | Quando |
|---|---|
| **Aceitar** (observar) | baixa probabilidade e baixo impacto — não vale consumir recurso |
| **Explorar** | alta probabilidade e alto impacto — tornar certo (ex.: desconto por compra em volume) |
| **Compartilhar** | impacto alto, probabilidade baixa — com terceiro que ajuda a viabilizar |
| **Aumentar** | adicionar recursos para elevar probabilidade ou impacto |
| **Escalar** | fora do seu papel |

**Ponto de atenção:** risco **positivo** é oportunidade e merece tratamento ativo. A maioria dos
times só olha ameaça e perde o ganho disponível.

## 8.4 Reservas — a distinção que evita discussão

| Tipo | Cobre | Quem controla |
|---|---|---|
| **Contingência** | riscos **conhecidos-desconhecidos**: previstos, com resposta planejada | o gerente do projeto |
| **Gerência** | **desconhecidos-desconhecidos**: fora do escopo previsto | liderança |

**Exemplos:** contingência → 15 dias adicionais de cronograma caso o teste de viabilidade não passe ·
gerência → mudança política ou social que afeta o envio de mercadoria.

**Análise de reservas:** verifique se a reserva restante ainda é suficiente para o risco restante.
Se você está com 25% do projeto feito e 80% da reserva consumida, **isso é um problema** — e pode
exigir nova linha de base com aprovação da liderança.

## 8.5 Como fazer a gestão funcionar

- **Ritmo de revisão:** inclua risco na **pauta semanal**. Isso torna o time proativo em vez de
  reativo; risco em gaveta só aparece quando vira problema.
- **Registro com dono:** todo risco tem responsável nomeado, resposta planejada e data de revisão
  (`templates/risk-register.md`).
- **Documente a resposta:** risco sem resposta escrita é risco aceito por omissão.
- **Pergunte pela oportunidade:** "o que pode dar **melhor** que o previsto, e como aumentar a chance?"

## 8.6 Pitfalls de medição (contaminam a análise de risco e de desempenho)

| Pitfall | O que é | Como se manifesta |
|---|---|---|
| **Viés de confirmação** | procurar só dados que confirmam sua visão | relatório que ignora a variação ruim |
| **Correlação ≠ causação** | duas variáveis se movem juntas, mas uma não causa a outra | "estouro de orçamento sempre causa atraso" — não é regra |
| **Metas irreais** | meta impossível desmotiva em vez de motivar | equipe desengajada, dados maquiados |
| **Efeito Hawthorne** | medir muda o comportamento | time otimiza a métrica, não o resultado |
| **Métrica errada** | medir o que não importa | muito esforço, nenhuma decisão melhor |
| **Métrica de vaidade** | bonita no relatório, inútil na decisão | números que impressionam a liderança e não mudam nada |

**Contramedida prática:** antes de escolher uma métrica, pergunte *"que decisão essa métrica muda?"*.
Se não muda nenhuma, não colete.

## 8.7 Checklist de revisão de risco

- [ ] Os riscos estão registrados com causa, efeito e dono?
- [ ] Probabilidade e impacto usam a **mesma escala** para todos?
- [ ] Existem riscos **residuais** avaliados após as respostas?
- [ ] Há pelo menos uma **oportunidade** sendo tratada ativamente?
- [ ] A reserva de contingência ainda cobre o risco restante?
- [ ] As respostas são realistas, custo-efetivas e acordadas com as partes?
- [ ] Risco entrou na pauta semanal e na revisão mensal?
- [ ] Riscos fora da minha autoridade foram escalados por escrito?
