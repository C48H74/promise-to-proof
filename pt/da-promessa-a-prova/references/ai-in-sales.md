# IA no processo de vendas

Carregue quando o usuário quiser aplicar IA em prospecção, calls, forecast, timing ou conteúdo. Princípio: a IA eleva o piso do trabalho medíocre e a barra do que conta como pessoal; não substitui julgamento nem relacionamentos.

## Onde ajuda, com salvaguardas

| Uso | Como | Salvaguarda |
|---|---|---|
| **Pesquisa de contas** | Resumir informação pública, notícias recentes, contratações e mudanças de produto em um briefing de um parágrafo com fontes | Verifique um fato antes de usá-lo numa mensagem; detalhes alucinados encerram conversas |
| **Personalização em escala** | Rascunhar primeiras linhas a partir de sinais reais; você edita | Como todo mundo faz isso, linhas genéricas "personalizadas por IA" parecem template. A barra é uma observação específica, verdadeira e recente |
| **Transcrição e análise de calls** | Pontuar contra `checklists/post-call-rubric.md`: proporção de fala, número e tipos de perguntas, próximo passo registrado, objeções levantadas, lacunas de MEDDPICC | Revise a pontuação numa amostra; os modelos supervalorizam calls educadas |
| **Mineração de objeções** | Agrupar objeções de transcrições e e-mails; atualizar `objections/library.md` | Mantenha as palavras do comprador |
| **Rascunhos de proposta e business case** | Preencher `templates/business-case-onepager.md` com as notas de descoberta | Os números vêm do cliente, nunca são gerados |
| **Higiene do pipeline** | Sinalizar negócios sem próximo passo, etapas paradas, threads únicos | Primeiro por regras; é mais barato e mais confiável |
| **Forecast e timing ("quem vai comprar, quando")** | Scores de intenção/propensão a partir de sinais | Veja a nota de calibração abaixo |
| **Presença da marca nos assistentes** | Pergunte a vários assistentes de IA como descrevem sua empresa, categoria e alternativas; corrija com páginas factuais | Reverifique a cada trimestre; as respostas mudam |
| **Role-play** | Ensaiar descoberta e objeções com um modelo fazendo a persona do comprador | Trate como prática, não como pesquisa |

## Nota de calibração sobre scores preditivos

Modelos que preveem decisões humanas (quem vai comprar, quando um negócio fecha, qual lead vai converter) são muito mais fracos do que os fornecedores afirmam, como argumentam Narayanan e Kapoor em *AI Snake Oil*: os resultados dependem de informação que o modelo nunca vê. Antes de confiar em um score de propensão:
1. Compare-o com uma linha de base simples (recência do sinal + encaixe) nos seus próprios negócios fechados.
2. Verifique a calibração: dos leads com score 80%, cerca de 80% converteram?
3. Use os scores para **priorizar** trabalho, nunca para **pular** a descoberta nem para recusar um lead automaticamente.

## O que não automatizar

- Conversas de descoberta (o comprador percebe).
- Negociação.
- O pedido de indicação.
- Qualquer mensagem que sugira um relacionamento humano que não existe.

## Dados e transparência

- Grave calls apenas com consentimento conforme a lei local; diga isso no início.
- Mantenha dados de clientes fora de ferramentas que treinam com as entradas, a menos que haja cobertura contratual.
- Não deixe um modelo inventar referências, logos ou resultados. Toda afirmação remonta às regras de prova de `references/delivery-retention.md`.

## Uma configuração viável para uma equipe pequena

1. Briefing de pesquisa por conta (rascunho de IA, checagem humana de 2 minutos).
2. Rascunhos de sequência a partir de `templates/5-touch-sequence.md` com primeiras linhas baseadas em sinais (edição humana).
3. Transcrições de calls pontuadas semanalmente contra a rubrica; uma nota de coaching por vendedor.
4. Mineração mensal de objeções para a biblioteca.
5. Checagem trimestral da marca nos assistentes.

## Protocolos de avaliação e regras de parada

Use a [avaliação de IA](../templates/ai-sales-evaluation.md) e a [auditoria de marca](../templates/ai-brand-audit.md). *AI Snake Oil* fundamenta o ceticismo diante de alegações de capacidade [S17](sources.md); os controles abaixo são o desenho operacional desta skill, não uma metodologia de vendas citada.

| Tarefa | Apoio delimitado adequado | Verificação humana |
|---|---|---|
| Pesquisa de contas/personalização | Resumir fatos fornecidos ou públicos verificados; rascunhar uma hipótese de relevância | Fonte, data, exatidão factual, nenhuma inferência sensível |
| Calls | Resumir transcrição autorizada; propor perguntas faltantes | Citação/marca de tempo, falante, correção, próximo passo combinado |
| Timing/scores de leads | Testar sinais candidatos em dados históricos apropriados | Vazamento, calibração, comparação com a base, falsos positivos |
| Descrições da marca | Coletar amostras repetíveis de prompt/saída | Data/modelo/configurações, afirmações observadas exatas e evidência |

Use ferramentas e vias de dados aprovadas. Não envie transcrições confidenciais nem exportações de CRM a serviços não aprovados. Registre fonte de dados, finalidade, acesso e responsável pela revisão; remova identificadores desnecessários. Um fluxo de rascunho não autoriza envio nem atualização automática do CRM.

Avalie o resumo em um conjunto pequeno, representativo e rotulado: fatos falsos, compromissos omitidos, certeza sem suporte e tempo de revisão. Compare rascunhos personalizados com uma base manual em relevância e precisão e, depois, em resultados com clientes, se uma campanha legítima for autorizada. Linguagem mais fluente não é prova de ganho em vendas.

Timing preditivo: defina resultado e horizonte, separe por tempo/conta para reduzir vazamento, compare com uma base simples, reporte precisão/recall e calibração se forem emitidas probabilidades. Use um teste de holdout/intervenção antes de afirmar impacto incremental. Poucos dados podem justificar apenas hipóteses qualitativas. Não infira disposição de compra a partir de um sinal público nem da confiança do assistente.

Auditoria de marca: perguntas fixas sobre categoria, cliente ideal, limites, preço e alternativas, em assistentes/condições observados. Salve as saídas exatas e as citações respaldadas; reporte inconsistências e limites da amostra. Corrija o conteúdo factual próprio; não prometa controle sobre as recomendações dos assistentes nem fabrique respostas amostradas.

Pare diante de invenção factual, uso indevido de privacidade ou degradação relevante. Registre fornecedor/versão/data e refaça as checagens pertinentes após mudanças. Simulações de IA são ensaios úteis, mas não evidência do comportamento real do comprador.
