# Calificación

Carga para negocios enterprise o grandes, revisiones de pipeline y siempre que un negocio "se siente bien" pero no tiene evidencia. Se cierra con `templates/meddpicc-scorecard.md`.

## Por qué se rebajó el BANT

Budget, Authority, Need, Timing (presupuesto, autoridad, necesidad, plazo) se diseñaron para la venta transaccional. En negocios complejos, el presupuesto se crea cuando se cuantifica el dolor, la autoridad se reparte entre un comité y el plazo es función del proceso burocrático. Mantén presupuesto y plazo como *señales* en las notas; nunca condiciones un negocio a ellos.

## MEDDPICC — definiciones operativas

Cada letra necesita **evidencia** (algo que el comprador dijo o envió), no inferencia. Puntuación: verde = evidencia por escrito o de dos personas; amarillo = dicho una vez por una persona; rojo = supuesto o desconocido.

| Letra | Qué significa operativamente | Cómo es la evidencia | Pregunta que la consigue |
|---|---|---|---|
| **M** Metrics (métricas) | El tamaño económico del problema y de la solución | Un número con unidad y periodo ("perdemos ~40 horas/semana", "las renovaciones cayeron un 12%") | "¿Cómo medís esto hoy? ¿Cuál es el número ahora y cómo sería uno bueno?" |
| **E** Economic buyer (comprador económico) | La persona que libera dinero sin pedírselo a nadie | Su nombre y tu contacto directo con ella | "¿Quién aprueba en última instancia un gasto como este? ¿Cuándo podríamos implicarlo?" |
| **D** Decision criteria (criterios de decisión) | La lista escrita con la que puntuarán a los proveedores | Un documento, un RFP o una lista que dictó | "¿En qué vais a comparar las opciones? ¿Quién escribió esos criterios?" |
| **D** Decision process (proceso de decisión) | Pasos, personas y fechas desde el "sí" hasta la firma, incluyendo legal, seguridad, compras | Una secuencia con fechas | "Cuéntame qué pasa después de que decidáis. ¿Quién más tiene que aprobar? ¿Cuánto tardó la última compra parecida?" |
| **P** Pain identified (dolor identificado) | El problema con las palabras del comprador, cuantificado | Una cita más un número | "¿Qué pasa si esto no se arregla este año?" |
| **I** Implicate the pain (implicar el dolor) | El comprador conecta el dolor con las consecuencias para él y para el negocio | Lo dice él, no tú | "¿Quién lo siente más? ¿Qué significa para tus objetivos?" |
| **C** Champion | Alguien con influencia que vende por ti cuando no estás y tiene algo que ganar | Agenda las reuniones que pediste, comparte documentos internos, te avisa de riesgos | Prueba: pídele que haga algo interno por ti. El champion lo hace; un contacto amable explica por qué no puede |
| **C** Competition (competencia) | Toda alternativa, incluido el statu quo y construirlo internamente | Opciones nombradas y sus fortalezas percibidas | "¿Qué más estáis considerando? ¿Qué haríais si no hicierais nada?" |

El **proceso burocrático** (legal, cuestionario de seguridad, portal de compras, alta de proveedor) forma parte del Decision process y suele sumar 2–8 semanas. Mapéalo antes de la propuesta, no después.

## Gap selling

La venta vive en la brecha entre el estado actual y el estado futuro:

1. **Estado actual:** hechos sobre cómo funcionan las cosas hoy, con números, y el impacto en el negocio de esos hechos.
2. **Estado futuro:** lo que quieren que sea verdad, con números.
3. **Brecha:** la diferencia, en dinero, tiempo o riesgo.
4. **Causa raíz:** por qué existe la brecha (solo puedes vender lo que arregla una causa raíz).

Sin una brecha cuantificada, no hay urgencia ni justificación del precio. El descubrimiento (`references/discovery.md`) existe para construir este cuadro.

## Descalifica pronto

Descalifica cuando cualquiera de estas sea cierta tras un intento real de resolverla:
- Ningún dolor que el comprador pueda decir con sus propias palabras.
- Ningún acceso a quien libera dinero.
- El proceso de decisión es "ya veremos" tras dos preguntas.
- Tu solución no arregla la causa raíz.
- Capacidad: no podrías entregar bien aunque firmaran.

Un no rápido y educado protege la higiene del pipeline y la relación. Guion: "Por lo que describes, esto no es el encaje adecuado ahora por [motivo]. Si [disparador] cambia, me gustaría saber de ti."

## Criterios de etapa

Ver `SKILL.md`. Los criterios son lo que evita un forecast construido sobre la esperanza. Un negocio no avanza porque el vendedor sea optimista; avanza cuando existe evidencia para el siguiente criterio.

## Regla del tamaño del negocio

- Por debajo de ~1 mes del presupuesto discrecional del comprador: usa solo Dolor, Métricas y Proceso de decisión; el scorecard completo es excesivo.
- Por encima, o en cualquier compra por comité: MEDDPICC completo más `templates/buying-committee-map.md`.

## Traspaso a la entrega

Un negocio no está cerrado hasta que el contrato de traspaso esté firmado por ambos responsables (`references/handoff-sell-to-deliver.md`, `templates/handoff-contract.md`). Un cerrado-ganado sin responsable de entrega es un riesgo abierto, no una victoria.

## Evidencia de salida del pipeline por etapa

Usa la [revisión de negocio](../checklists/deal-review.md) y el [plan de acción conjunto](../templates/mutual-action-plan.md). Adapta el modelo de etapas al tamaño de la transacción y al proceso real de compra; una compra de autoservicio no necesita pasar por una propuesta en vivo.

| Etapa | Evidencia para avanzar | Señal de pausa/parada |
|---|---|---|
| Lead relevante | Hipótesis de encaje, vía de contacto legítima y motivo para interactuar | Rechazo, ningún disparador relevante o contacto equivocado |
| Descubrimiento/calificación | El comprador reconoce un problema; la oferta puede ayudar; vía para la siguiente evaluación | Sin encaje, sin problema significativo o resultado exigido sin respaldo |
| Diagnóstico/evaluación | Criterios acordados, línea base/supuestos, responsables y validación factible | Falta una capacidad obligatoria o hay una dependencia de despliegue sin resolver |
| Propuesta/revisión comercial | Alcance, precio, condiciones, límites y vía de compra comprendidos | La incertidumbre de comparación, de capacidad de pago o del comité requiere resolución |
| Decisión/acuerdo autorizado | Aprobaciones y acuerdo realmente requeridos; dependencias e inicio verificados | Una insinuación verbal o "envía el contrato" no es closed-won |
| Entrega/activación | Primer resultado útil aceptado con evidencia | Fallo de onboarding o de calidad |
| Retención/expansión | Valor duradero, contribución viable y necesidad adicional real | Churn, promesa sobrevendida o soporte sin financiación |

Campos del CRM: fuente/fecha, problema del comprador, evidencia de encaje, criterios/comité, siguiente acción/responsable/fecha, fecha de entrada a la etapa, versión de oferta/condiciones, estado de la evidencia y motivo de pausa o pérdida. Registra por separado la no decisión, el competidor y la falta de encaje, incluidos los resultados desconocidos.

Mide la conversión sobre las entradas elegibles a la etapa y con ventanas de observación completas; muestra los conteos. Las ganadas divididas entre las oportunidades concluidas pueden diferir de las propuestas que se ganan finalmente. Define el denominador en lugar de comparar tasas incompatibles.

Recomienda una conversación de propuesta en vivo donde resuelva ambigüedades; admite la revisión escrita y el proceso de compras. Con precios estándar transparentes, no retengas los precios hasta completar un caso elaborado. Las afirmaciones de valor cuantificado necesitan datos respaldados por el comprador.

En cada etapa pregunta: ¿qué decisión ha tomado realmente el comprador, qué sigue siendo incierto y qué acción lo resuelve? La actividad del vendedor por sí sola (presentación enviada, demo realizada) no es avance de compra. Evita el seguimiento interminable cuando no hay una siguiente acción viable basada en permiso.
