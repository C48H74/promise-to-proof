# Changelog

## 3.0.0 — 2026-10-14

Unificação de duas skills em uma: `business-sales-engine` (lado de vendas) e `commercial-engine-and-delivery` (lado da entrega), agora em três idiomas em um único repositório. Novo nome: **da-promessa-a-prova**. Licença alterada para **CC BY 4.0**.

**Estrutura**
- Um único `SKILL.md` orquestrador com o mapa de vendas (12 passos), o mapa de entrega (6 passos) e a ponte entre os dois.
- Novo módulo `references/handoff-sell-to-deliver.md` e template `templates/handoff-contract.md`: nenhum kickoff sem um contrato assinado pelos dois responsáveis.
- Módulos de entrega da segunda skill renomeados sem números: `project-delivery`, `costs-forecasting`, `risk`, `people-rituals`, `standards-benchmarks`, `evidence-and-profile`, `engine-12-steps`, `sales-methods-evidence`, `validation-and-negotiation-br`.
- 11 templates de entrega e negociação adicionados; duplicatas (cartão de experimento, plano 30/60/90) resolvidas em favor das versões mais ricas.
- Um validador sem dependências: `scripts/validate_skill.mjs` (frontmatter, links, caminhos referenciados, órfãos).

**Incorporados e removidos**
- `offer` e `pricing` incorporados a `offer-pricing`; `ai-sales` a `ai-in-sales`; `sales-process` a `qualification`. Conta de exposição da garantia, mecanismos de enquadramento, checklist de revisão de preço, anatomia da objeção e checklist de outbound adicionados aos respectivos módulos.
- A biblioteca de objeções continua com 15 roteiros.

**Correções**
- JOLT: "87% das calls" corrigido para clientes; removida a afirmação sem respaldo de "~60% das perdas por não decisão são indecisão"; os demais números foram rotulados como reportados pelos autores.
- As fontes de entrega agora trazem URLs oficiais para ISO 21502, ISO 31000 e PMBOK 7; os números do PMI Pulse permanecem limitados aos confirmados.

## 2.0.0 — 2026-10-13

Reestruturada de um arquivo único para um orquestrador com módulos.

**Estrutura**
- O `SKILL.md` agora é um orquestrador: três modos de uso (revisão rápida, diagnóstico de gargalo, construção completa), uma árvore de decisão, uma sequência de diagnóstico e contratos de saída.
- 17 módulos de referência, 9 templates preenchíveis, biblioteca de objeções (15), 2 checklists, 2 exemplos, arquivo de tendências, lista de leitura.
- Frontmatter: palavras-gatilho, `version`, `last_reviewed`, `review_cadence`, licença.

**Correções**
- Conta dos tiers corrigida: 10% dos compradores a 10× o preço acrescenta 1,9× a receita-base (0,9 + 1,0), não 2×.
- Removida a afirmação sem respaldo de "75% de lucro".
- Removida a estatística sem respaldo de "97%".
- Tiers premium são opcionais e só para tipos distintos de comprador; ordenados por contribuição por hora sênior.
- Garantias: sem empilhar por padrão; calcule primeiro o custo esperado de acionamento.
- A apresentação ao vivo da proposta só é recomendada para vendas complexas ou de alto valor.
- Preço ancorado em piso de custo, referência do comprador e teto de valor, com pesquisa de disposição a pagar.

**Acrescentado**
- MEDDPICC, Gap Selling, SPIN, Mom Test, JOLT, negociação ao estilo Voss, multithreading, business case, entregabilidade de outbound, venda baseada em sinais, vendas lideradas pelo fundador, PLG/PQL, orientações de IA em vendas.
- Critérios de etapa, sinais de alerta de revisão de negócio, rubrica pós-call.

**Removido / cortado**
- Táticas manipuladoras de urgência e falsa escassez.
- Enchimento motivacional genérico e estatísticas não verificáveis.

## 1.0.0 — anterior

Skill em arquivo único (EN, PT, ES) destilada das transcrições-fonte.
