# Evidência e perfil de negócio

> Esta é a referência que **toda** entrega deve respeitar. Se houver conflito entre este arquivo e
> qualquer outro, **este vence**.

## 1.1 A escada de evidência — não declare "pronto" antes do último degrau

| Degrau | Significa | Exemplo de entrega |
|---|---|---|
| 1. **Existe** | há um artefato | "o e-mail foi escrito" |
| 2. **Substancial** | tem conteúdo real, não marcador | "tem oferta, preço e próximo passo" |
| 3. **Conectado** | está ligado ao que o cliente disse | "usa as palavras e o número que ele deu" |
| 4. **Funcional** | passou por teste ou uso real | "o cliente respondeu / o número foi verificado" |

**Regra prática:** ao entregar, diga o degrau. Nunca apresente degrau 1–3 como se fosse 4.
Um plano bem escrito (3) não é um plano que funciona (4).

## 1.2 Como tratar números

| Origem do número | O que fazer |
|---|---|
| Documento do próprio cliente | citar a fonte e a data |
| Relatório público (ex.: PMI Pulse) | citar relatório, ano e página |
| Estimativa sua | escrever **"Estimativa"** ao lado |
| Não encontrado | escrever **"Não encontrado"** — nunca arredondar para um número plausível |
| Métrica, depoimento ou caso do próprio usuário | deixar `[a preencher]` — **nunca inventar** |

**Regra de contradição:** se um número novo contradiz um número guardado no perfil, **atualize o
perfil** e avise o usuário. Perfil desatualizado contamina todas as entregas seguintes.

**Números que circulam sem fonte** (não repita): "35% dos projetos falham por escopo inadequado",
"planejamento detalhado tem 2,5x mais sucesso", "organizações maduras em custo são 45% mais
eficientes". Se não houver relatório identificável, **não use o número**.

## 1.3 O ciclo de confiança e evidência

```
1. Quantificar a dor  →  2. Prometer só o que se controla
        ↑                              ↓
6. Ganhar o próximo "sim"      3. Mostrar evidência
        ↑                              ↓
5. Medir e revisar     ←   4. Entregar rápido (TTFV, 30/60/90)
```

Confiança compõe: cada passo reduz o risco percebido pelo comprador. É um laço, não uma etapa.

### Saques de confiança — nunca fazer
❌ urgência inventada · ❌ escassez falsa · ❌ caso de estudo sem autorização do cliente ·
❌ simulação apresentada como resultado de cliente

### Depósitos de confiança
✅ próximo passo agendado · ✅ escopo escrito · ✅ seção honesta "não é para você" ·
✅ somente prazos reais · ✅ dizer em voz alta o que você **não** faz

## 1.4 Prometer só o que se controla

| Você controla | Você **não** controla |
|---|---|
| o processo, o método, o prazo de entrega | o resultado do cliente |
| o que você entrega e quando | a adoção pela equipe dele |
| refazer dentro do escopo escrito | aumento de faturamento do cliente |
| devolver a diferença mediante métrica acordada | que o mercado dele melhore |

**Teste antes de prometer:** *"isso depende de algo que eu não controlo?"* Se sim, reescreva a
promessa como processo, não como resultado. Para garantias, use a matemática de exposição
(`references/offer-pricing.md`).

## 1.5 O arquivo de perfil — pré-requisito de tudo

**Onde:** `templates/business-profile.md`, preenchido uma vez.
**Por quê:** sem ele, toda saída degrada para conselho genérico. Esta é a conclusão central das
melhores coleções de skills de negócios que existem: um arquivo de contexto lido por todas as
skills e de propriedade de nenhuma.

**O mínimo aceitável antes de produzir qualquer coisa:**

| Campo | Por que é indispensável |
|---|---|
| o que você vende, em uma frase | define a oferta |
| cliente ideal (segmento, porte, papel) | define alvo e mensagem |
| dor principal, nas palavras do cliente | define narrativa e implicação |
| alternativa atual do cliente (inclusive "não fazer nada") | define ancoragem de preço |
| prova disponível (nº de clientes, casos autorizados) | define o que você pode alegar |
| preços e camadas atuais | define a análise de precificação |
| sua capacidade de entrega | evita vender o que não consegue cumprir |

**Se o perfil não estiver preenchido:** não invente o contexto. Faça ao usuário **apenas** as
perguntas dessa tabela, uma vez, e registre as respostas no perfil antes de seguir.

## 1.6 Como o perfil é usado (e não usado)

- As entregas **leem** o perfil e **nunca** o sobrescrevem por conta própria.
- Trocar de cliente ou de projeto = trocar o arquivo. A metodologia permanece.
- Campo em branco no perfil **não** vira suposição: vira pergunta ou `[a preencher]`.
