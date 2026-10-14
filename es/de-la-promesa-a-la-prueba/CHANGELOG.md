# Changelog

## 3.0.0 — 2026-10-14

Unificación de dos skills en una sola: `business-sales-engine` (lado de ventas) y `commercial-engine-and-delivery` (lado de entrega), ahora en tres idiomas en un mismo repositorio. Nuevo nombre: **de-la-promesa-a-la-prueba**. Licencia cambiada a **CC BY 4.0**.

**Estructura**
- Un único `SKILL.md` orquestador con el mapa de ventas (12 pasos), el mapa de entrega (6 pasos) y el puente entre ambos.
- Nuevo módulo `references/handoff-sell-to-deliver.md` y plantilla `templates/handoff-contract.md`: sin kickoff sin un contrato firmado por ambos responsables.
- Módulos de entrega de la segunda skill renombrados sin números: `project-delivery`, `costs-forecasting`, `risk`, `people-rituals`, `standards-benchmarks`, `evidence-and-profile`, `engine-12-steps`, `sales-methods-evidence`, `validation-and-negotiation-br`.
- 11 plantillas de entrega y negociación añadidas; los duplicados (tarjeta de experimento, plan 30/60/90) se resolvieron a favor de las versiones más completas.
- Un validador sin dependencias: `scripts/validate_skill.mjs` (frontmatter, enlaces, rutas referenciadas, huérfanos).

**Fusionado y eliminado**
- `offer` y `pricing` integrados en `offer-pricing`; `ai-sales` en `ai-in-sales`; `sales-process` en `qualification`. Se añadieron a sus módulos el cálculo de exposición de la garantía, los mecanismos de encuadre, el checklist de revisión de precios, la anatomía de las objeciones y el checklist de outbound.
- La biblioteca de objeciones se mantiene en 15 guiones.

**Correcciones**
- JOLT: "87 % de las llamadas" corregido a clientes; se eliminó el "~60 % de las pérdidas por falta de decisión es indecisión" sin respaldo; las demás cifras se rotularon como reportadas por los autores.
- Las fuentes de entrega ahora incluyen URL oficiales para ISO 21502, ISO 31000 y PMBOK 7; las cifras de PMI Pulse se limitan a las confirmadas.

## 2.0.0 — 2026-10-13

Reestructurada de un archivo único a un orquestador con módulos.

**Estructura**
- El `SKILL.md` ahora es un orquestador: tres modos de uso (revisión rápida, diagnóstico de cuello de botella, construcción completa), un árbol de decisión, una secuencia de diagnóstico y contratos de salida.
- 17 módulos de referencia, 9 plantillas rellenables, biblioteca de objeciones (15), 2 checklists, 2 ejemplos, archivo de tendencias, lista de lectura.
- Frontmatter: palabras disparadoras, `version`, `last_reviewed`, `review_cadence`, licencia.

**Correcciones**
- Cuenta de los tiers corregida: el 10% de los compradores a 10× el precio añade 1,9× a los ingresos base (0,9 + 1,0), no 2×.
- Retirada la afirmación sin respaldo del "75% de beneficio".
- Retirada la estadística sin respaldo del "97%".
- Los tiers premium son opcionales y solo para tipos distintos de comprador; ordenados por contribución por hora sénior.
- Garantías: sin apilar por defecto; calcula primero el coste esperado de reclamación.
- La presentación en vivo de la propuesta solo se recomienda para ventas complejas o de alto valor.
- Precio anclado en suelo de coste, referencia del comprador y techo de valor, con investigación de disposición a pagar.

**Añadido**
- MEDDPICC, Gap Selling, SPIN, Mom Test, JOLT, negociación al estilo Voss, multithreading, business case, entregabilidad de outbound, venta basada en señales, ventas lideradas por el fundador, PLG/PQL, orientaciones de IA en ventas.
- Criterios de etapa, señales de alerta de revisión de negocio, rúbrica posllamada.

**Eliminado / recortado**
- Tácticas manipuladoras de urgencia y falsa escasez.
- Relleno motivacional genérico y estadísticas no verificables.

## 1.0.0 — anterior

Skill en archivo único (EN, PT, ES) destilada de las transcripciones fuente.
