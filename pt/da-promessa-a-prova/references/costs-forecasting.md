# Custos, previsão e qualidade

## 7.1 Valor agregado — as três grandezas

| Sigla | Nome | O que é, em uma frase |
|---|---|---|
| **VP / PV** | Valor Planejado | quanto de trabalho **estava previsto** até a data |
| **VA / EV** | Valor Agregado | quanto de trabalho foi **efetivamente concluído** |
| **CR / AC** | Custo Real | quanto **custou** o trabalho feito |

**Leitura didática:** VP = quanto de trabalho planejei fazer · VA = quanto trabalho foi feito ·
CR = quanto o trabalho feito custou.

## 7.2 As fórmulas

```
Variação de prazo        VC  = VA − VP        > 0 adiantado   | < 0 atrasado   | = 0 no prazo
Índice de prazo          IDP = VA / VP        > 1 adiantado   | < 1 atrasado   | = 1 no prazo
Variação de custo        VCr = VA − CR        > 0 abaixo do orçamento | < 0 estourado
Índice de custo          IDC = VA / CR        > 1 abaixo do orçamento | < 1 acima
```

**Leitura no gráfico** (custo no eixo Y, tempo no eixo X):
- curva de **VA abaixo** da de **VP** → **atrasado** (ganhou menos trabalho que o planejado)
- curva de **VA abaixo** da de **CR** → **acima do orçamento** (ganhou menos do que gastou)

**Atenção a um erro comum de sinal:** o material de origem de qualidade duvidosa inverte VC e VCr.
A convenção correta é a da tabela acima: **VA − VP** e **VA − CR**.

## 7.3 Previsão — 4 perspectivas e as siglas

| Perspectiva | Responde |
|---|---|
| **Plano** (linha de base) | o que pretendemos entregar? |
| **Realizado** | o que realmente aconteceu? |
| **Previsão** | para onde estamos indo? |
| **EAC** | qual será o resultado total previsto? |

```
ETC  = Estimativa para Concluir   → quanto custa terminar o trabalho que falta
EAC  = Estimativa no Término      → custo total previsto do projeto
VAC  = Variação no Término        → sobra (ou falta) ao final: orçamento − EAC
TCPI = Trabalho restante / Orçamento restante → eficiência necessária para fechar no orçamento
```

**Fluxo de 7 passos:** coletar realizado → comparar com o plano → analisar variações → identificar
problemas, riscos e impactos → atualizar a previsão → calcular EAC → **tomar ação**.
Sem o último passo, o resto é só relatório.

**As 7 medidas de previsão que o relatório deve conter:** posição atual · ETC · EAC · data de
conclusão prevista · riscos remanescentes · mudanças aprovadas · **faixa de confiança**.

## 7.4 O que torna (e o que cega) uma previsão

**5 obstáculos:**
1. dados desatualizados
2. otimismo exagerado
3. premissas não resolvidas
4. falta de dados reais
5. dependências desconhecidas

**O que torna confiável:** dados atuais e completos · trabalho realista refletindo a realidade ·
riscos conhecidos, visíveis e incluídos · mudanças registradas formalmente · premissas documentadas e
testadas · **faixa de confiança transparente, nunca um número único**.

## 7.5 Estimativa — PERT e técnicas

```
PERT:      E  = (O + 4M + P) / 6
Desvio:    σ  = (P − O) / 6
Variância: σ²
```
`O` = otimista · `M` = mais provável · `P` = pessimista.

**Exemplo resolvido:** O = 11, M = 15, P = 19
```
E = (11 + 4×15 + 19) / 6 = (11 + 60 + 19) / 6 = 90 / 6 = 15 dias
σ = (19 − 11) / 6 = 1,33
Variância = σ² = (8/6)² ≈ 1,78   (com σ arredondado para 1,33: 1,77)
→ "15 dias ± 1,33"
```

**Outras técnicas:** análoga (histórico semelhante) · paramétrica (custo/unidade × quantidade) ·
três pontos · relativa (planning poker, Fibonacci, tamanho de camiseta) · fluxo (tempo de ciclo e
throughput).

**Precisão × exatidão:** exatidão é acertar o alvo; precisão é agrupar os tiros. Dá para ser preciso
e errado — quatro dardos juntos fora do alvo. Estimativa "exata" com alta incerteza é só falsa
sensação de controle.

**Regra:** sempre apresente faixa, nunca número único. Um número único é uma promessa que você não
fez.

## 7.6 Ciclo de controle de desempenho (ilustrativo)

Sequência prática de controle usada em muitos projetos. **Não é a estrutura do PMBOK 7**, que organiza o trabalho em domínios de desempenho (§6.2). Na 6ª edição, as etapas de planejamento, execução e monitoramento correspondiam aos grupos de processo. A última coluna mostra em qual domínio cada etapa se encaixa na 7ª edição.

| # | Etapa | O que acontece | Domínio PMBOK 7 |
|---|---|---|---|
| 1 | **Planejamento** | define escopo, cronograma, custos, recursos; estabelece a linha de base | Planejamento |
| 2 | **Execução** | executa o trabalho, gera entregáveis e comunicações | Trabalho do projeto · Entrega |
| 3 | **Monitoramento** | acompanha progresso e desempenho, identifica problemas, atualiza registros | Medição |
| 4 | **Análise de variações** | linha de base × real; causa-raiz; avalia impactos | Medição |
| 5 | **Ações corretivas** | desenvolve opções, implementa, atualiza o plano, comunica | Trabalho do projeto · Incerteza |
| 6 | **Previsão** | estima EAC e ETC, prevê a conclusão, atualiza riscos e recursos | Medição · Incerteza |
| 7 | **Sucesso do projeto** | objetivos alcançados, qualidade, satisfação das partes, lições | Entrega · Medição |

## 7.7 Qualidade — custo da qualidade

| Categoria | Exemplos | Quando ocorre |
|---|---|---|
| **Prevenção** | treinamento, plano de qualidade, especificações robustas | antes |
| **Avaliação** | inspeção, auditoria, teste, verificação dimensional | durante |
| **Falha interna** | refugo, desperdício, retrabalho, análise de falha | antes de chegar ao cliente |
| **Falha externa** | devolução, recall, garantia, dano reputacional | depois de chegar ao cliente |

**Curva do custo da mudança:** defeito encontrado tarde custa muito mais (o trabalho já foi feito em
cima). **Consequência prática:** construa qualidade no processo e **envolva qualidade cedo**, na fase
de projeto — não na inspeção final.

**Como otimizar:** inspecione e revise **enquanto** o trabalho é feito, e teste cedo no ciclo, para
evitar retrabalho, atraso e estouro.

## 7.8 Checklist de saúde de custo e prazo

- [ ] Existe linha de base aprovada (escopo, cronograma, custo)?
- [ ] VP, VA e CR estão atualizados **na mesma data de corte**?
- [ ] IDP e IDC foram calculados e interpretados?
- [ ] ETC, EAC e VAC estão na versão mais recente?
- [ ] A previsão tem **faixa de confiança**, não número único?
- [ ] As reservas (contingência e gerência) ainda são suficientes para o risco restante?
- [ ] As mudanças aprovadas estão refletidas nas linhas de base?
- [ ] Existe ação definida para cada variação fora do limite?
