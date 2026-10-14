# Motor comercial — 12 passos, portões e diagnóstico

## 5.1 Os 12 passos

Cada passo existe para **fechar com um artefato**. Se o artefato não existe, o passo não terminou.

| # | Passo | Módulo | **Fecha com** |
|---|---|---|---|
| 0 | Contexto e intake | intake | intake preenchido (perfil) |
| 1 | Cliente ideal, dor, pesquisa | descoberta | notas de pesquisa + definição de ICP |
| 2 | Oferta | oferta | declaração de oferta (`templates/proposal-and-guarantee.md`) |
| 3 | Economia e preço | precificação | planilha de camadas + economia unitária |
| 4 | Qualificação e descoberta | MEDDPICC + SPIN | scorecard MEDDPICC + guia de call |
| 5 | Narrativa e prova | narrativa | narrativa escrita + prova autorizada |
| 6 | Redução de risco e escassez | garantias | garantia com matemática de exposição |
| 7 | Pipeline e outbound | outbound | sequência de 5 toques ativa |
| 8 | Objeções, indecisão, negociação | objeções + JOLT | caso de negócio de 1 página |
| 9 | Comitê de compra | multithreading | mapa do comitê com cobertura |
| 10 | Contrato e handoff | entrega | checklist de contrato + doc de handoff |
| 11 | Entrega, retenção, indicação, caso | entrega | plano 30/60/90 + consentimento de caso |
| 12 | Conteúdo e alavancagem por IA | conteúdo | plano de conteúdo + fluxo de IA |

**Ordem importa:** o passo 3 depende do 2; o 4 do 1 e do 2. Pular o intake (0) contamina tudo.

## 5.2 Portões de estágio do funil

Não avance sem cumprir o critério. O portão é o que impede o pipeline de virar ficção.

| Estágio | Critério de saída |
|---|---|
| **Lead** | encaixa em **2 de 3**: segmento, papel, gatilho |
| **Qualificado** | dor **nas palavras dele** + **um número** + **processo nomeado** |
| **Descoberta feita** | sem "não" em **Dor**, **Champion** e **Processo** |
| **Proposta** | caso de negócio **aceito** + comprador econômico **alcançado** |
| **Negociação** | critérios cumpridos + **processo de papel mapeado com datas** |
| **Fechado** | assinado + kickoff + **documento de handoff** |

**Como usar em revisão de pipeline:** para cada negócio, pergunte qual é o estágio declarado e qual
critério **não** está cumprido. A diferença entre os dois é o próximo passo — ou o rebaixamento.

## 5.3 Diagnóstico de gargalo — 5 verificações, em ordem

**Pare no primeiro elo quebrado.** Não passe para o próximo. A ordem existe porque cada elo limita os
seguintes: não adianta converter melhor se pouca gente chega; não adianta vender mais se a entrega
não aguenta.

| # | Verificação | Pergunta de diagnóstico | Se falhar, o problema é | Ação |
|---|---|---|---|---|
| 1 | **Alcance** | pessoas suficientes estão vendo a oferta? | volume e canal — **não é a oferta** | aumentar toques, canais, indicações |
| 2 | **Qualidade do lead** | quem chega tem o perfil e o gatilho certos? | alvo e mensagem de entrada | redefinir ICP, gatilho e gancho |
| 3 | **Conversão** | quem tem perfil está comprando? | oferta, preço, prova, objeção, indecisão | `references/offer-pricing.md` e `references/sales-methods-evidence.md` |
| 4 | **Capacidade** | você entrega se vender 2×? | operação | **não venda mais antes de resolver** |
| 5 | **Retenção** | quem comprou fica e indica? | entrega e valor percebido | consertar antes de escalar aquisição |

**Erros clássicos que este diagnóstico evita:**
- mexer no preço quando o problema é alcance (elo 1)
- trocar a oferta quando o problema é o alvo (elo 2)
- escalar aquisição com entrega saturada (elo 4) — destrói reputação e gera reembolso
- buscar cliente novo quando o problema é que ninguém fica (elo 5)

**Toda saída do modo diagnóstico termina com exatamente UM cartão de experimento**
(`templates/experiment-card.md`), com regra de parada obrigatória.

## 5.4 Métricas por elo

| Elo | Métrica principal | Métrica de qualidade |
|---|---|---|
| Alcance | contatos novos por semana | taxa de resposta |
| Qualidade | % de leads que cumprem 2 de 3 | taxa de qualificação |
| Conversão | % de qualificados que fecham | ciclo médio de venda |
| Capacidade | utilização da equipe | prazo real de entrega vs. prometido |
| Retenção | taxa de renovação | indicações por cliente |

**Regra de honestidade:** meça o elo onde você **pode** agir. Métrica de vaidade (seguidores,
impressões, "leads" não qualificados) não entra em relatório de motor comercial.

## 5.5 Sequência de 30 dias (para construção completa)

| Dia | Ação | Passos usados |
|---|---|---|
| 1 | Qualificar a lista-alvo | 0, 1 |
| 3 | Montar oferta e camadas de preço | 2, 3 |
| 7 | Outbound para os alvos qualificados | 7 |
| 14 | Preparar descoberta e conduzir as primeiras calls | 4 |
| 21 | Mapear comitê e tratar objeções/indecisão | 8, 9 |
| 30 | Proposta, garantia e handoff | 10, 11 |

**Não comece pelos 12 passos de uma vez.** Escolha os três que atacam a maior fricção e rode.

## 5.6 Quando parar de investir num movimento

Sinais de que é hora de recuar e reformular, não insistir:
- o elo 1 não fecha com volume razoável **e** já se passaram 2 ciclos de teste
- o elo 2 não melhora após redefinir alvo e mensagem
- o custo de aquisição está acima da margem da camada recomendada (`references/offer-pricing.md`, economia unitária)
- o elo 5 mostra que o cliente não renova e não indica

Nesses casos, o correto é **declarar o veredito "descartar"** e reformular a oferta — não aumentar
esforço no mesmo desenho.
