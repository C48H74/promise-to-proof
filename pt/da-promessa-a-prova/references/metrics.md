# Métricas do motor comercial

Carregue para qualquer diagnóstico, forecast ou pergunta do tipo "isso está funcionando?". Os benchmarks abaixo são heurísticas, com fontes em `reading-list.md`; reverifique a cada revisão.

## Aquisição

| Métrica | Fórmula | Uso |
|---|---|---|
| **CAC** | (gasto de vendas + marketing no período) ÷ novos clientes no período | Totalmente carregado: salários, ferramentas, anúncios, conteúdo |
| **CAC por canal** | idem, por canal | Decide para onde vai a próxima unidade de orçamento |
| **Payback do CAC (meses)** | CAC ÷ (receita mensal por cliente × margem bruta) | Risco de caixa; abaixo de 12 meses é confortável para SMB, 18–24 é tolerado em SaaS enterprise |
| **Taxa de vitória** | ganhos ÷ (ganhos + perdidos) | Exclua "sem decisão" do denominador e acompanhe separadamente |
| **Taxa de não decisão** | sem decisão ÷ oportunidades qualificadas | Se for maior que a taxa de vitória, carregue `references/jolt.md` |
| **Ciclo de vendas** | mediana de dias de qualificado a fechado | Olhe a mediana, não a média |
| **Cobertura de pipeline** | pipeline qualificado aberto ÷ meta do período | 3–4× é uma heurística comum; ajuste à sua taxa de vitória (cobertura necessária ≈ 1 ÷ taxa de vitória) |

## Retenção e valor

| Métrica | Fórmula | Uso |
|---|---|---|
| **Churn de logos** | clientes perdidos ÷ clientes no início do período | Contagem de relacionamentos perdidos |
| **Churn de receita (GRR)** | (MRR inicial − churn − contração) ÷ MRR inicial | Piso do negócio; máximo 100% |
| **NRR** | (MRR inicial − churn − contração + expansão) ÷ MRR inicial | Acima de 100% significa que a base cresce sem novos logos |
| **LTV** | (receita média por cliente × margem bruta) ÷ taxa de churn | Use o mesmo período para receita e churn; em negócios jovens, limite o LTV a 3–5 anos de dados |
| **LTV / CAC** | | ≥ 3 é uma heurística comum de SaaS; não diz nada sobre o timing do caixa, então combine com payback |
| **Retenção por coorte** | % dos clientes do mês X ainda ativos nos meses 1, 3, 6, 12 | A única visão honesta do churn; médias escondem |

Modelo de tabela de coortes:

| Coorte | M0 | M1 | M3 | M6 | M12 |
|---|---|---|---|---|---|
| 2026-01 | 100% | | | | |
| 2026-02 | 100% | | | | |

Uma curva que achata indica product-market fit naquele segmento; uma curva que segue caindo indica que a oferta ou o cliente está errado.

## Operação

| Métrica | Fórmula | Uso |
|---|---|---|
| **Margem de contribuição** | preço − custo direto de entrega | Por unidade e por tier |
| **Margem bruta** | (receita − custo de entrega) ÷ receita | Serviços 50–70% é típico; software 70–90% |
| **Utilização** | horas faturáveis ÷ horas disponíveis | Acima de ~80% sustentado, qualidade e tempo de vendas desabam |
| **Tempo até o primeiro valor** | dias da assinatura até o primeiro resultado que o cliente percebe | Melhor preditor de churn precoce |
| **Taxa de indicação** | clientes que indicaram ÷ clientes | Proxy de "indicabilidade" |

## Funil

Acompanhe a conversão entre etapas, não só os totais: lead → qualificado → descoberta → proposta → negociação → ganho. A conversão mais fraca é o gargalo. Critérios de saída por etapa: critérios de etapa do `SKILL.md`.

## Quais métricas primeiro, por tipo de negócio

| Tipo | As três primeiras |
|---|---|
| Consultor solo / agência pequena | Contribuição por hora sênior, cobertura de pipeline, taxa de indicação |
| Serviço produtizado | Payback do CAC, margem bruta, churn de logos |
| SaaS | NRR, payback do CAC, retenção por coorte |
| Negócio local | CAC por canal, taxa de recompra, utilização da capacidade |
| PLG | Taxa de ativação, conversão PQL → pago, NRR |

## Exemplo prático

Serviço produtizado: preço 1.200/mês, custo direto 400/mês, CAC 2.400, churn mensal de 3%.

- Margem bruta = (1.200 − 400) ÷ 1.200 = 67%
- Payback do CAC = 2.400 ÷ (1.200 × 0,67) = 3 meses
- LTV = (1.200 × 0,67) ÷ 0,03 = 26.800
- LTV/CAC = 11

Saudável no papel. A checagem: a retenção por coorte realmente mostra 3% ao mês, ou é 8% nos três primeiros meses e 1% depois? O número consolidado esconde um problema de onboarding que `references/delivery-retention.md` resolve.

## Regras

- Todo número carrega seu período e sua população.
- Médias são suspeitas; mostre a distribuição ou a coorte.
- Um benchmark é um convite a uma pergunta, não uma meta.
