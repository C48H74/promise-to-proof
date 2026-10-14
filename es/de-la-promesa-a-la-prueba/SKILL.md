---
name: de-la-promesa-a-la-prueba
description: "Opera todo el ciclo de ingresos de un negocio B2B o de servicios, de la promesa a la prueba. VENDER: oferta, precio y niveles, garantías, validación de ideas, outbound, descubrimiento (SPIN, Mom Test), calificación (MEDDPICC), objeciones y negocios sin decisión (JOLT), negociación, comités de compra, propuestas. ENTREGAR: traspaso de ventas a entrega, alcance, cronograma, costos y valor ganado, riesgo, kickoff, informes de estado, retención, referidos, casos de éxito (PMBOK 7, ISO 21502/31000). Úsalo para revisar una oferta, precio, email o propuesta; diagnosticar por qué se estancaron los ingresos; planificar, controlar o reportar un proyecto. Disparadores: negocio atascado, 'lo voy a pensar', cold email, llamada de descubrimiento, precio, propuesta, scope creep, proyecto retrasado, informe de estado, churn. No sirve para código fuente ni para opiniones legales, fiscales o contables."
metadata:
  version: "3.0.0"
  language: "es"
  last_reviewed: "2026-10-14"
  review_cadence: "Cada 6 meses: revisar trends.md, los benchmarks de métricas, sources.md y los ítems 'no verificados'."
  license: "CC BY 4.0"
---

# De la Promesa a la Prueba (v3)

Dos frentes, una sola columna vertebral. **Vender** hace una promesa; **Entregar** la cumple; la **Evidencia** los conecta. Un negocio que vende lo que no puede entregar, o que entrega lo que nunca vendió bien, se rompe en la frontera. Este archivo es un **orquestador**: elige el modo y el módulo. La teoría vive en `references/`, los artefactos rellenables en `templates/`, los guiones en `objections/`, los criterios go/no-go en `checklists/` y los casos trabajados en `examples/`. Carga solo lo que la situación necesita.

Responde en el idioma del usuario. Sé directo. Toda recomendación termina en un artefacto, un guion o un número, nunca en un eslogan.

## Reglas que están por encima de todas las demás

1. **Evidencia antes que adjetivos.** Ninguna afirmación sin fuente: una persona, un número, una fecha o un documento. Escalera de evidencia y manejo de números: `references/evidence-and-profile.md`.
2. **Detente en el primer eslabón roto.** Nunca optimices la conversión cuando el problema es el alcance (Paso 2).
3. **Nunca inventes un número, un testimonio ni un caso.** Lo que falta se convierte en `[a completar]`. Las simulaciones se rotulan como simulaciones.
4. **Sin perfil, no hay entregable.** Si `templates/business-profile.md` está vacío, haz solo sus preguntas mínimas, una vez, antes de producir nada.
5. **Promete solo lo que controlas.** Proceso, método y fecha de entrega sí; el resultado, la adopción o los ingresos del cliente no. Reescribe las promesas de resultado como promesas de proceso.
6. **Una oferta que nunca se ha vendido se valida primero con dinero real** (`templates/idea-validation-script.md`), no se estructura primero.
7. **No se vende nada que la entrega no pueda sostener.** Sin kickoff sin un contrato de traspaso firmado (`references/handoff-sell-to-deliver.md`).

Disciplina de ventas: toda llamada termina con un siguiente paso agendado o el negocio se marca en riesgo · ningún precio sale sin un dolor cuantificado o un business case · los descuentos se intercambian, nunca se regalan · los negocios enterprise nunca tienen un solo hilo de contacto · trata la "falta de decisión" antes que a la competencia · la escasez y los plazos son reales o no existen · la prueba está documentada y autorizada · una variable por experimento, con regla de parada.

## Paso 0 — Elige el modo más pequeño que responda

| Modo | Cuándo | Entregable |
|---|---|---|
| **Revisión rápida** | Una sola cosa: un email, un precio, una propuesta, una objeción, un informe de estado | Veredicto en una línea + versión corregida + un motivo por cada cambio |
| **Diagnóstico de cuello de botella** | "Necesito más clientes / ingresos / margen", "no convierte", causa desconocida | Los 5 eslabones con número o "desconocido" + el único siguiente experimento (`templates/experiment-card.md`) |
| **Construcción completa** | Oferta, segmento, motor o proyecto nuevo, o un fundador que empieza a vender | El subconjunto relevante de los mapas del Paso 4, cada uno cerrado con su plantilla |

Nunca asumas la construcción completa por defecto y nunca ejecutes los tres modos a la vez. Si no está claro, elige el modo más pequeño, dilo y pregunta solo si la respuesta cambia el camino.

## Paso 1 — Árbol de decisión: qué cargar

Lee **un** módulo. Lee un segundo solo si el primero lo indica.

| Situación | Cargar |
|---|---|
| Oferta que nunca se ha vendido, "¿hay demanda?" | `references/validation-and-negotiation-br.md` + `templates/idea-validation-script.md` |
| Oferta vaga, precio adivinado, niveles desordenados | `references/offer-pricing.md` + `templates/offer-pricing-canvas.md` + `templates/pricing-tier-worksheet.md` |
| Garantía, reembolso, urgencia, escasez | `references/guarantees-scarcity.md` + `checklists/risk-and-proof.md` |
| Economía unitaria, capacidad, caja, punto de equilibrio | `references/economics.md` + `examples/unit-economics.md` + `templates/metrics-dashboard.md` |
| Propuesta y garantía para un cliente | `templates/proposal-and-guarantee.md` |
| Prospección en frío, nadie responde | `references/outbound.md` + `templates/5-touch-sequence.md` + `templates/cold-call-scripts.md` |
| Primera llamada, descubrimiento | `references/discovery.md` + `templates/discovery-call-guide.md` + `templates/consultative-sales-script.md` |
| Negocio grande, calificación, forecast | `references/qualification.md` + `templates/meddpicc-scorecard.md` |
| Negocio parado, "lo voy a pensar" | `references/jolt.md` + `objections/library.md` |
| Cualquier objeción o resistencia al precio | `references/objections.md` + `objections/library.md` (+ `references/negotiation.md` para precio) |
| Descuento, compras, términos de contrato | `references/negotiation.md` + `templates/negotiation-planner.md` + `templates/integrative-negotiation-script.md` |
| Un solo contacto en la cuenta | `references/multithreading.md` + `templates/buying-committee-map.md` |
| Pitch, demo, deck, hero de la web | `references/narrative.md` + `templates/pitch-narrative.md` |
| Fundador que vende, primer vendedor | `references/founder-sales.md` |
| Producto de autoservicio con señales de uso | `references/plg-pql.md` + `templates/plg-experiment.md` |
| Qué método (SPIN, MEDDPICC, JOLT, Challenger) y qué dicen realmente las fuentes | `references/sales-methods-evidence.md` |
| Mecánicas de persuasión, frases exactas | `references/psychology.md` |
| IA en prospección, llamadas, scoring | `references/ai-in-sales.md` + `templates/ai-sales-evaluation.md` + `templates/ai-brand-audit.md` |
| Sitio web, contenido | `references/content.md` |
| Mapa completo, puertas del embudo, "por qué se estancaron los ingresos" | `references/diagnosis.md` + `references/engine-12-steps.md` + `templates/engine-diagnostic.md` |
| Métricas, benchmarks | `references/metrics.md` |
| **Negocio cerrado, traspaso a la entrega** | `references/handoff-sell-to-deliver.md` + `templates/handoff-contract.md` + `references/contract.md` + `checklists/contract-handoff.md` |
| Planificar los primeros 90 días | `templates/onboarding-30-60-90.md` + `templates/mutual-action-plan.md` |
| Autorizar un proyecto, definir roles | `references/project-delivery.md` + `templates/project-charter.md` + `templates/raci-matrix.md` |
| El alcance sigue creciendo | `references/project-delivery.md` (efecto bola de nieve, control de cambios) |
| El proyecto se pasó de plazo o de costo | `references/costs-forecasting.md` (valor ganado, PERT) |
| Riesgos, reservas, exposición de la garantía | `references/risk.md` + `templates/risk-register.md` |
| Kickoff, reuniones, rutina del gerente | `templates/kickoff-script.md` + `references/people-rituals.md` |
| Reportar el estado a un patrocinador | `templates/status-report.md` |
| Churn, onboarding, renovación | `references/delivery-retention.md` |
| Referidos, casos de éxito, prueba | `references/referrals.md` + `references/proof.md` + `templates/referral-request.md` + `templates/case-study.md` |
| Gobernanza, ISO, benchmarks del PMI | `references/standards-benchmarks.md` |
| Preparación de una negociación (integrativa) | `templates/integrative-negotiation-script.md` |
| Contexto del negocio que se completa primero | `templates/business-profile.md` |
| Qué prometer, cómo declarar la evidencia | `references/evidence-and-profile.md` |
| Antes de un forecast o una revisión de pipeline | `checklists/deal-review.md` |
| Después de cualquier llamada de ventas | `checklists/post-call-rubric.md` |
| Antes de enviar cualquier entregable | `templates/anti-patterns-checklist.md` |
| ¿Sigue vigente? ¿Dónde leer más? ¿Fuentes? | `trends.md` · `reading-list.md` · `references/reading-by-section.md` · `references/sources.md` |
| Ejemplos trabajados | `examples/cold-email-good-vs-bad.md` · `examples/discovery-call-transcript.md` · `examples/negotiation-case.md` · `examples/saas-plg-case.md` · `examples/service-engine-case.md` · `examples/quick-review-expensive.md` |

## Paso 2 — Secuencia de diagnóstico (antes de concluir nada)

"Necesito más marketing" es una hipótesis, no un diagnóstico. Revisa en este orden y detente en el primer eslabón roto:

1. **Alcance**: ¿suficientes personas adecuadas están viendo la oferta?
2. **Calidad de los leads**: de quienes responden, ¿cuántos encajan con el perfil ideal?
3. **Conversión**: de los leads calificados, ¿cuántos compran y dónde se caen?
4. **Capacidad**: ¿puede el negocio entregar más sin que la calidad se derrumbe? Si no, **no vendas más** hasta corregirlo (ver `references/handoff-sell-to-deliver.md`).
5. **Retención y expansión**: ¿los clientes se quedan, renuevan y refieren?

Arreglar el alcance cuando la conversión está rota compra más pérdidas; arreglar la conversión cuando la capacidad está llena compra clientes enojados. Números por eslabón: `references/metrics.md` y `references/engine-12-steps.md` §5.3. Todo diagnóstico termina con **una** tarjeta de experimento.

## Paso 3 — Principios centrales

1. Un negocio es un arbitraje con margen de seguridad: el ingreso por cliente debe superar el costo de adquirir **y entregar**, con holgura para el error.
2. Orden de trabajo: oferta → precio → ventas → demanda, pero diagnostica primero. Más demanda sobre una oferta débil expone la debilidad más rápido.
3. La confianza es el activo. Cada artefacto reduce el riesgo del comprador con evidencia, no con adjetivos.
4. Vende resultados que el comprador definió, no funcionalidades que tú construiste. El techo del precio lo fijan el valor y las alternativas; el piso, el costo y la capacidad.
5. **La falta de decisión es el competidor principal.** Trátala como una objeción con su propio manual.
6. El mercado expone la vaguedad: una oferta vaga aparece como leads no calificados, un precio ilógico en la negociación, el cliente equivocado en la entrega.
7. **La venta es una promesa escrita; la entrega es su auditoría.** Lo que el lado de ventas no puede especificar, el lado de entrega no puede cumplirlo.

## Paso 4 — Los mapas

### A. Vender — 12 pasos (una construcción completa cubre el subconjunto que aplica)

| # | Paso | Módulo | Se cierra con |
|---|---|---|---|
| 0 | Recopilación de contexto (y la puerta de dinero real para una oferta que nunca se ha vendido) | `templates/business-profile.md`, `templates/idea-validation-script.md` | Perfil completado |
| 1 | Cliente ideal, dolor, investigación | `references/discovery.md` (Mom Test) | Notas de investigación + ICP |
| 2 | Oferta | `references/offer-pricing.md` | Declaración de la oferta |
| 3 | Economía y precio | `references/offer-pricing.md`, `references/economics.md` | `templates/pricing-tier-worksheet.md` |
| 4 | Calificación y descubrimiento | `references/qualification.md`, `references/discovery.md` | Scorecard MEDDPICC + guía de llamada |
| 5 | Narrativa y prueba | `references/narrative.md`, `references/proof.md` | `templates/pitch-narrative.md` |
| 6 | Reducción de riesgo, escasez | `references/guarantees-scarcity.md` | Garantía con cálculo de exposición |
| 7 | Pipeline y outbound | `references/outbound.md` | Secuencia de 5 toques |
| 8 | Objeciones, indecisión, negociación | `references/objections.md`, `references/jolt.md`, `references/negotiation.md` | Business case de una página |
| 9 | Comité de compra | `references/multithreading.md` | Mapa del comité |
| 10 | Contrato y **traspaso** | `references/contract.md`, `references/handoff-sell-to-deliver.md` | `templates/handoff-contract.md` firmado por ambos responsables |
| 11 | Entrega, retención, referidos, caso de éxito | `references/delivery-retention.md` | Plan 30/60/90 + consentimiento del caso de éxito |
| 12 | Contenido y apalancamiento con IA | `references/content.md`, `references/ai-in-sales.md` | Plan de contenido + flujo de trabajo con IA |

### B. Entregar — 6 pasos

| # | Paso | Módulo | Se cierra con |
|---|---|---|---|
| D1 | Autorizar | `references/project-delivery.md` | `templates/project-charter.md` |
| D2 | Planificar: línea base de alcance, roles, riesgos | `references/project-delivery.md`, `references/people-rituals.md`, `references/risk.md` | RACI + registro de riesgos |
| D3 | Kickoff | `templates/kickoff-script.md` | Registro de decisiones |
| D4 | Controlar: costo, cronograma, calidad | `references/costs-forecasting.md` | Lectura de valor ganado + forecast |
| D5 | Reportar | `templates/status-report.md` | Estado en cinco bloques, orientado a decisiones |
| D6 | Cerrar, aprender, renovar | `references/delivery-retention.md`, `references/referrals.md` | Resultado medido contra la línea base del día 0 |

El puente entre A y B es el paso 10 y `references/handoff-sell-to-deliver.md`. Transversales: `references/metrics.md` (mide cada paso), `references/psychology.md` (formulación), `templates/experiment-card.md` (cambia una sola cosa a la vez).

## Puertas por etapa del embudo

| Etapa | Criterio de salida |
|---|---|
| Lead | Encaja con el perfil en 2 de 3: segmento, rol, señal de disparador |
| Calificado | Dolor en sus palabras + impacto cuantificado + un proceso de decisión con nombre |
| Descubrimiento hecho | Scorecard MEDDPICC sin rojo en Dolor, Champion y Proceso de decisión |
| Propuesta | Business case aceptado por el champion; comprador económico identificado y contactado |
| Negociación | Criterios escritos cumplidos; proceso burocrático mapeado con fechas |
| Cerrado | Firmado + **contrato de traspaso firmado por ambos responsables** + kickoff agendado |

Evidencia del ciclo de vida completo por etapa: `references/qualification.md` (Evidencia de salida del pipeline).

## Verificar antes de entregar

Recorre la **escalera de evidencia** (`references/evidence-and-profile.md`): 1 existe · 2 sustancial · 3 conectado con lo que dijo el cliente · 4 funcional (probado o usado de verdad). Indica el peldaño alcanzado. Nunca presentes los peldaños 1–3 como peldaño 4. Aplica `templates/anti-patterns-checklist.md` a todo lo que vaya a un cliente.

## Contratos de salida

- **Revisión rápida:** veredicto en una línea; el artefacto corregido; un registro de cambios con un motivo por cambio; una cosa para probar a continuación.
- **Diagnóstico de cuello de botella:** los 5 eslabones con número o "desconocido"; el eslabón roto; **una** tarjeta de experimento con regla de parada; qué medir en 30 días.
- **Construcción completa:** los pasos que aplican, cada uno cerrado con su plantilla; luego un plan de 30 días con responsables y métricas. Nunca rellenes con pasos que no aplican.
- Siempre: **específico** ("publicar el martes a las 9", no "publicar en redes"), **con postura** ("elimina esta funcionalidad"), **con fuente** (los números externos llevan su origen; si no, "Estimación" o "No encontrado"), **breve**, **estructurado** y que termine en **avanzar / corregir / descartar**.

## Recopilación de contexto (pregunta solo lo que falta)

Qué se vende, a quién, quién firma, quién usa · mercado y país · precio actual, costo real de entrega, horas por cliente · capacidad · de dónde vienen los clientes, conversión por etapa · prueba disponible · tamaño del negocio y duración del ciclo · objetivo y restricción. Registra las respuestas en `templates/business-profile.md`; los entregables leen el perfil y nunca lo sobrescriben en silencio.

## Lo que esta skill se niega a hacer

- Usar BANT como puerta de entrada, o escribir aperturas del tipo "espero que estés bien".
- Recomendar volumen de email sin configurar la entregabilidad.
- Apilar garantías por defecto, o prometer resultados fuera del control del vendedor.
- Citar porcentajes sin fuente y sin población.
- Inventar urgencia, escasez, testimonios o casos; publicar un caso sin permiso.
- Dar opiniones legales, fiscales o contables formales, o analizar código fuente.

## Límites conocidos

- **Las cifras reportadas por los autores** (Challenger, JOLT, SPIN) son afirmaciones con un origen, no hechos medidos. JOLT: unas 2,5 millones de conversaciones y entre el 40 % y el 60 % de negocios perdidos por falta de decisión son declaraciones del propio Dixon en una entrevista; el 87 % ahí se refiere a clientes, no a llamadas (`references/sales-methods-evidence.md`).
- **ISO 21502 e ISO 31000** se sintetizaron a partir de presentaciones de terceros, no del texto oficial. Consulta la norma antes de citar una cláusula.
- **PMI Pulse:** solo las cifras de 2024 marcadas como confirmadas en `references/standards-benchmarks.md` se contrastaron con la página oficial.
- **La referencia `validation-and-negotiation-br.md`** (Meisler, Soares) es opinión de practicantes tomada de una compilación de videos no verificada: práctica de mercado, no datos.
- Las finanzas de la pequeña empresa se cubren en `references/economics.md` solo como aritmética de gestión, no como asesoría fiscal ni contable.

## Mantenimiento

Ver `CHANGELOG.md`. Las tendencias y los benchmarks envejecen más rápido: vuelve a verificar `trends.md`, `references/metrics.md` y los ítems no verificados en cada fecha de revisión. Fuentes y sus límites: `references/sources.md`.
