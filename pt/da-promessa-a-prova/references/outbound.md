# Outbound e prospecção

Carregue para construir pipeline. Fecha com `templates/5-touch-sequence.md`, `templates/cold-call-scripts.md`, `examples/cold-email-good-vs-bad.md`.

## A regra do pipeline

A prospecção feita hoje aparece como pipeline em cerca de 60–90 dias (a "regra dos 30 dias" de Blount: o que você faz ou deixa de fazer em qualquer janela de 30 dias decide o próximo trimestre). Pipeline é um hábito diário com um número, não uma campanha.

## Listas baseadas em sinais vencem listas estáticas

Monte a lista a partir de **sinais de que um problema está ativo**, não só de firmografia:

| Sinal | Onde ver | Por que importa |
|---|---|---|
| Contratação para o cargo dono do seu problema | Sites de vagas, LinkedIn | Existe orçamento, a dor é reconhecida |
| Novo executivo na função | LinkedIn, imprensa | Líderes novos trocam de fornecedor nos primeiros 90 dias |
| Rodada de investimento, aquisição, expansão | Imprensa, registros | Dinheiro e mudança ao mesmo tempo |
| Lançamento de produto, novo mercado | Notícias da empresa | Processos novos quebram |
| Prazo regulatório no setor | Sites de reguladores | Uma data que eles não podem mover |
| Visitas a páginas de preço/comparação | Seu analytics / ferramentas de intenção | Avaliação ativa |
| Reclamação ou avaliação pública | Redes sociais, sites de avaliação | Dor dita nas palavras deles |
| Sinais de uso (PLG) | Seu produto | `references/plg-pql.md` |

Priorize: sinal + encaixe + contato alcançável. Uma conta de encaixe perfeito sem sinal vai para a lista de nutrição, não para a sequência.

## Pesquisa antes do primeiro toque (2 minutos, não 20)

Encontre uma coisa verdadeira, específica e recente: um post que escreveram, uma contratação, uma meta dita numa entrevista, uma mudança de produto. Use-a na primeira linha. Se não achar nada em dois minutos, mande uma mensagem curta, honesta e não personalizada, ou pule a conta; falsa personalização ("adorei seu post recente!") hoje parece template.

## Entregabilidade é pré-requisito, não detalhe

Antes de enviar volume de qualquer domínio:
- **SPF, DKIM, DMARC** configurados e passando. Google e Yahoo exigem desde fevereiro de 2024 autenticação, cancelamento de inscrição com um clique e taxa de reclamação de spam abaixo de 0,3% para remetentes em massa; e-mail não autenticado é filtrado.
- **Aqueça (warm up)** domínios/caixas novos por 2–4 semanas antes do volume frio.
- **Limite de volume** por caixa: dezenas de e-mails frios por dia, não centenas. Use um domínio de envio separado do principal.
- **Higiene de lista:** verifique os endereços; bounces acima de ~2% prejudicam a reputação.
- **Texto simples, poucos links, sem imagens, sem pixels de rastreamento** em e-mail frio.
- Monitore: a taxa de abertura não é confiável (proxies de privacidade); acompanhe a **taxa de resposta** e a **taxa de resposta positiva**.

Qualquer conselho de volume sem esta seção é um conselho para queimar um domínio.

## Sequência multicanal de 5 toques (10 dias)

| Dia | Toque | Objetivo |
|---|---|---|
| 1 | Ligação | Abertura com pedido de permissão; marcar 15 minutos ou entender por que não |
| 2 | E-mail | 3–5 frases: sinal, hipótese de problema, uma pergunta |
| 4 | LinkedIn | Conectar com um motivo de uma linha; ou comentar o post da pessoa |
| 7 | Ligação + e-mail | Referenciar o dia 2; acrescentar um insight ou prova nova |
| 10 | E-mail de despedida | "Devo encerrar o assunto?" Sem culpa, saída fácil |

Texto completo: `templates/5-touch-sequence.md`.

## Cold calls

Funcionam de novo justamente porque as caixas de entrada estão cheias. Regras:
- **Abertura com permissão:** "Sei que isso vem do nada. Posso usar 30 segundos para dizer por que liguei, e você decide se continuamos?"
- **Quebra de padrão:** não soe como um roteiro; soe como uma pessoa que fez a lição de casa.
- **Uma hipótese, uma pergunta:** "Equipes do seu tamanho costumam enfrentar [problema] quando [sinal]. Isso está no seu radar, ou estou errado?"
- **Espelhar o tom:** acompanhe o ritmo e a energia da pessoa.
- **Peça a reunião e depois pare de falar.**
Roteiros: `templates/cold-call-scripts.md`.

## Métricas de outbound

| Métrica | Faixa saudável (heurística, reverificar) |
|---|---|
| Taxa de resposta positiva por e-mail | 2–5% em listas bem segmentadas e baseadas em sinais |
| Taxa de conexão em ligações | 5–15% conforme o setor |
| Conexão → reunião | 15–30% com uma boa abertura |
| Reunião → qualificado | Acima de 50%; abaixo disso há problema de lista ou de pitch |

Acompanhe por sequência e por tipo de sinal; elimine o que não rende após uma amostra estatisticamente relevante (centenas, não dezenas).

## O que cortar

- "Espero que esteja bem" / "gostaria de apresentar nossa empresa".
- Paredes de texto; mais de um call to action.
- Anexos e decks no primeiro toque.
- Follow-ups que dizem "só passando para lembrar".
- Qualquer sequência mais longa do que o necessário para obter um sim ou um não claro.

## Checklist antes de enviar qualquer outbound

- [ ] A observação do toque 1 é **verificável** por qualquer pessoa?
- [ ] O e-mail tem 3 frases e **um** pedido?
- [ ] O fraseado é honesto (sem urgência inventada, sem escassez falsa)?
- [ ] Eu sei qual dor estou assumindo — e ela está no perfil?
- [ ] Tenho prova autorizada para usar se ele responder?
- [ ] O toque 5 fecha o arquivo educadamente (sem chantagem emocional)?
