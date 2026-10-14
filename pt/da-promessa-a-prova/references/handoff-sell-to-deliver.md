# Handoff: da venda à entrega

Carregue quando um negócio está prestes a fechar ou acabou de fechar, quando a entrega reclama do "que as vendas prometeram", ou quando o escopo cresce logo depois do kickoff. Fecha com `templates/handoff-contract.md`, assinado pelo responsável de vendas e pelo responsável da entrega.

A maior parte da receita se perde nessa costura: a promessa foi feita em conversa, a entrega é julgada pelo documento. Este módulo transforma a promessa em algo que os dois lados conseguem auditar.

## 1. Por que a costura rompe

| Sintoma | Causa habitual | Onde está a correção |
|---|---|---|
| "Não foi isso que me venderam" | A promessa ficou em calls e slides, não no contrato | Seção 3 abaixo, `references/contract.md` |
| O escopo cresce na semana 2 | As exclusões nunca foram escritas; não há regra de controle de mudanças | `references/project-delivery.md` (controle de mudanças) |
| A entrega começa tarde ou com equipe insuficiente | A capacidade não foi checada antes de assinar | Seção 2 abaixo, `references/economics.md` |
| O primeiro resultado do cliente chega depois que a dor foi esquecida | Não houve primeiro resultado útil acordado | `references/delivery-retention.md`, `templates/onboarding-30-60-90.md` |
| Uma garantia é acionada no dia 60 | Gatilho e evidência eram vagos | `references/guarantees-scarcity.md` (conta de exposição) |
| O campeão sai e ninguém sabe por que ganhamos | Critérios de compra não registrados | `templates/mutual-action-plan.md`, `templates/handoff-contract.md` |

## 2. Portão antes da assinatura: a entrega consegue sustentar isto?

Não feche um negócio que falhe em qualquer linha. Corrija ou redimensione o escopo.

1. **Capacidade:** existem horas do gargalo para os primeiros 90 dias (`references/economics.md`, fórmula de capacidade).
2. **Margem:** o tier vendido tem contribuição positiva com a estimativa real de horas (`references/offer-pricing.md`, economia unitária).
3. **Dependências:** o que o cliente precisa fornecer (acessos, dados, pessoas, decisões) está listado com datas.
4. **Aceite:** um primeiro resultado útil observável, com responsável e data.
5. **Exposição da garantia:** se há garantia, o gatilho é mensurável e o custo no pior caso foi aprovado.
6. **Riscos:** os três maiores estão no registro de riscos (`templates/risk-register.md`).

## 3. O que precisa atravessar a costura

Tudo abaixo é escrito, não lembrado. O responsável de vendas preenche; o responsável da entrega questiona antes da assinatura; os dois assinam.

- **A promessa nas palavras do comprador:** a dor, o número associado a ela, os critérios de decisão que ele declarou.
- **O compromisso nas suas palavras:** escopo, exclusões, entregáveis, prazos, preço, condições de pagamento.
- **Pessoas:** comprador econômico, campeão, contato do dia a dia, usuários, bloqueadores. Quem ainda não foi alcançado.
- **O que foi dito mas não escrito:** promessas informais, descontos negociados, concessões, compromissos assumidos em calls. Se não está no contrato, ou é incluído, ou é retirado explicitamente junto ao cliente.
- **Linha de base:** a medida do dia 0 com a qual o resultado será comparado (`references/proof.md`).
- **Permissões de prova:** se e como um case ou uma indicação poderá ser solicitado depois (`templates/case-study.md`).

## 4. Os primeiros 90 dias

A entrega é dona do plano; vendas permanece na conta até que o primeiro resultado útil seja aceito.

| Janela | Objetivo | Evidência |
|---|---|---|
| Dias 0–7 | Kickoff realizado, papéis confirmados, registro de decisões aberto (`templates/kickoff-script.md`) | Termo de abertura assinado (`templates/project-charter.md`) |
| Dias 8–30 | Primeiro resultado útil entregue e aceito | Aceite escrito do campeão |
| Dias 31–60 | Status reportado em ritmo fixo; pedidos de mudança decididos por escrito | `templates/status-report.md` |
| Dias 61–90 | Resultado medido contra a linha de base; conversa de renovação ou expansão aberta | Revisão de resultado de uma página |

## 5. Fechando o ciclo de volta para vendas

No dia 90, o responsável da entrega devolve três fatos ao responsável de vendas: o que foi entregue frente à promessa, o que custou mais do que o estimado, o que o cliente passou a pedir. Esses fatos atualizam a oferta, o preço, os critérios de qualificação e a biblioteca de objeções. Sem esse caminho de volta, vendas continua vendendo a própria ficção.

## 6. Antipadrões

- Kickoff sem um contrato de handoff assinado.
- Vendas sai da conta na assinatura.
- Desconto concedido sem uma troca escrita, e depois esquecido pela entrega.
- Case solicitado antes de o cliente ter aceitado um resultado.
- Tratar uma reclamação sobre escopo como falha de entrega quando é falha de vendas.
