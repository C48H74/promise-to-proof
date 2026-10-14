# Traspaso: de la venta a la entrega

Cárgalo cuando un negocio está por cerrarse o acaba de cerrarse, cuando la entrega se queja de "lo que prometió ventas", o cuando el alcance crece justo después del kickoff. Se cierra con `templates/handoff-contract.md`, firmado por el responsable de ventas y el responsable de entrega.

La mayor parte de los ingresos se pierde en esta costura: la promesa se hizo en una conversación, pero la entrega se juzga contra el documento. Este módulo convierte la promesa en algo que ambos lados pueden auditar.

## 1. Por qué se rompe la costura

| Síntoma | Causa habitual | Dónde está la solución |
|---|---|---|
| "Esto no es lo que me vendieron" | La promesa vivió en llamadas y diapositivas, no en el contrato | Sección 3 de abajo, `references/contract.md` |
| El alcance crece en la semana 2 | Nunca se escribieron las exclusiones; no hay regla de control de cambios | `references/project-delivery.md` (control de cambios) |
| La entrega empieza tarde o con poco personal | No se verificó la capacidad antes de firmar | Sección 2 de abajo, `references/economics.md` |
| El primer resultado del cliente llega cuando ya olvidó el dolor | No se acordó un primer resultado útil | `references/delivery-retention.md`, `templates/onboarding-30-60-90.md` |
| Se reclama una garantía el día 60 | El disparador y la evidencia eran vagos | `references/guarantees-scarcity.md` (cálculo de exposición) |
| El champion se va y nadie sabe por qué ganamos | No se registraron los criterios de compra | `templates/mutual-action-plan.md`, `templates/handoff-contract.md` |

## 2. Puerta antes de la firma: ¿puede la entrega sostener esto?

No cierres un negocio que falle en alguna línea. Corrígelo o redefine su alcance.

1. **Capacidad:** existen las horas del cuello de botella para los primeros 90 días (`references/economics.md`, fórmula de capacidad).
2. **Margen:** el nivel vendido tiene contribución positiva con la estimación real de horas (`references/offer-pricing.md`, economía unitaria).
3. **Dependencias:** lo que el cliente debe aportar (accesos, datos, personas, decisiones) está listado con fechas.
4. **Aceptación:** un primer resultado útil observable, con responsable y fecha.
5. **Exposición de la garantía:** si existe una garantía, su disparador es medible y su costo en el peor caso está aprobado.
6. **Riesgos:** los tres mayores están en el registro de riesgos (`templates/risk-register.md`).

## 3. Qué debe cruzar la costura

Todo lo que sigue se escribe, no se recuerda. El responsable de ventas lo completa; el responsable de entrega lo cuestiona antes de firmar; ambos firman.

- **La promesa en palabras del comprador:** el dolor, el número asociado y los criterios de decisión que declaró.
- **El compromiso en tus palabras:** alcance, exclusiones, entregables, plazos, precio, condiciones de pago.
- **Personas:** comprador económico, champion, contacto del día a día, usuarios, bloqueadores. Quién aún no ha sido contactado.
- **Lo que se dijo pero no se escribió:** promesas informales, descuentos intercambiados, concesiones, compromisos asumidos en llamadas. Si no está en el contrato, o se añade o se retira explícitamente con el cliente.
- **Línea base:** la medición del día 0 contra la que se comparará el resultado (`references/proof.md`).
- **Permisos de prueba:** si se podrá pedir más adelante un caso de éxito o un referido, y cómo (`templates/case-study.md`).

## 4. Los primeros 90 días

La entrega es dueña del plan; ventas permanece en la cuenta hasta que se acepte el primer resultado útil.

| Ventana | Objetivo | Evidencia |
|---|---|---|
| Días 0–7 | Kickoff realizado, roles confirmados, registro de decisiones abierto (`templates/kickoff-script.md`) | Acta de constitución firmada (`templates/project-charter.md`) |
| Días 8–30 | Primer resultado útil entregado y aceptado | Aceptación por escrito del champion |
| Días 31–60 | Estado reportado con un ritmo fijo; solicitudes de cambio decididas por escrito | `templates/status-report.md` |
| Días 61–90 | Resultado medido contra la línea base; abierta la conversación de renovación o expansión | Revisión de resultados de una página |

## 5. Cerrar el ciclo de vuelta hacia ventas

Al día 90 el responsable de entrega devuelve tres datos al responsable de ventas: qué se entregó frente a la promesa, qué costó más de lo estimado y qué pide ahora el cliente. Esto actualiza la oferta, el precio, los criterios de calificación y la biblioteca de objeciones. Sin este camino de retorno, el lado de ventas sigue vendiendo su propia ficción.

## 6. Antipatrones

- Kickoff sin un contrato de traspaso firmado.
- Ventas abandona la cuenta en la firma.
- Descuento concedido sin un intercambio escrito, y luego olvidado por la entrega.
- Caso de éxito solicitado antes de que el cliente haya aceptado un resultado.
- Tratar una queja sobre el alcance como una falla de la entrega cuando es una falla de ventas.
