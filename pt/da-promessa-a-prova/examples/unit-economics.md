# Exemplos numéricos com premissas explícitas

**Todos os dados são sintéticos.** A moeda é ilustrativa; as fórmulas pressupõem custos classificados de forma consistente. Não são aconselhamento de investimento ou contábil nem metas universais.

## 1. Correção do mix premium

Base: 100 clientes × 100 = 10.000 de receita. Novo mix com o mesmo número de clientes: 90 × 100 + 10 × 1.000 = 19.000. Razão de receita = **1,9×**, aumento = 90%. Participação da receita premium = 10.000 / 19.000 = 52,63%; a participação no lucro é desconhecida sem os custos. Número de clientes ou custos diferentes produzem resultados diferentes.

## 2. Contribuição do serviço, markup e capacidade

Preço 2.000; mão de obra variável de entrega 800, fornecedor 200 e provisão de pagamento/retrabalho 100. Custo variável = 1.100. Contribuição antes da aquisição = **900**; margem = 900/2.000 = **45%**; markup sobre essa base de custo = 900/1.100 = **81,82%**.

Custo de aquisição alocado por projeto 150: contribuição após aquisição = **750**. Custos fixos mensais de 3.000 implicam ponto de equilíbrio = 3.000/750 = **4 projetos** se a aquisição escalar a essa taxa. A aquisição não é contada de novo nos custos fixos.

Mão de obra disponível no gargalo: 100 horas/mês; cada projeto leva 20 horas, incluindo o retrabalho esperado. Capacidade = **5 projetos**. Na capacidade, receita 10.000; custo variável 5.500; aquisição 750; contribuição 3.750; menos fixos 3.000 deixa **750 de superávit operacional neste modelo simplificado**, antes de quaisquer custos omitidos e impostos. Não chame a margem de contribuição de 45% de lucro líquido.

## 3. CAC, payback e LTV aproximado de SaaS

Gasto de aquisição correspondente de 20.000 gera 20 contas pagantes: CAC = **1.000**. ARPA mensal de 200 e margem bruta de 80% resultam em 160 de lucro bruto mensal; payback do CAC sobre o lucro bruto = **6,25 meses**, supondo pagamentos estáveis e nenhum churn durante o payback.

Churn mensal de logos de 2% dá um LTV aproximado = 200 × 0,8 / 0,02 = **8.000**; razão = **8**. Este atalho pressupõe coortes estacionárias e homogêneas, sem expansão e sem desconto. Não é o valor de vida observado. Um modelo de sobrevivência limitado a 12 meses, sem desconto, dá 160 × soma(0,98^t, t=0..11) = **1.722,27**, mostrando a sensibilidade ao horizonte. Churn zero não estabelece valor infinito.

## 4. Retenção de receita recorrente

MRR inicial de 10.000 de 100 contas; churn 500, contração 200 e expansão 1.000. NRR = (10.000 − 500 − 200 + 1.000)/10.000 = **103%**. GRR = (10.000 − 500 − 200)/10.000 = **93%**. Cinco contas iniciais perdidas implicam **5% de churn mensal de logos**, independente do NRR.

As novas contas contribuem com 2.000 de MRR. MRR final = **12.300**. O MRR novo fica fora do NRR/GRR, então 123% seria um cálculo incorreto de NRR. Um churn mensal de 2% se compõe em 1 − 0,98^12 = **21,53% de atrito anual** sob o modelo de taxa constante, não 24%.

## 5. Caso do comprador e prazo de caixa

Retrabalho reportado na base: 10 horas/mês × taxa interna de 50 = 500 de valor de capacidade. Se uma intervenção verificada libera 4 horas, o valor de capacidade atribuível é de 200/mês; só vira economia de caixa se os custos realmente desaparecerem. Uma compra de 1.000 mais 300 de implementação tem payback simples de 6,5 meses **somente se** os 200/mês forem benefício realmente capturável, estável e começarem imediatamente. Caso contrário, apresente liberação de capacidade, não ROI de caixa.

Serviço de 2.000 com 1.100 de saída de caixa de entrega antes do pagamento e 150 de aquisição precisa de financiamento apesar da contribuição positiva. Um sinal de 500 deixa até **750** a financiar antes do pagamento final, ignorando custos fixos e detalhes de prazo. Ajuste ao cronograma de caixa real, com datas.

Veja [economia](../references/economics.md) e [métricas](../references/metrics.md).
