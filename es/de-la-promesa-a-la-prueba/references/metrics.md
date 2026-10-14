# Métricas del motor comercial

Carga para cualquier diagnóstico, forecast o pregunta del tipo "¿esto está funcionando?". Los benchmarks de abajo son heurísticas, con fuentes en `reading-list.md`; reverifícalos en cada revisión.

## Adquisición

| Métrica | Fórmula | Uso |
|---|---|---|
| **CAC** | (gasto de ventas + marketing en el periodo) ÷ nuevos clientes en el periodo | Totalmente cargado: salarios, herramientas, anuncios, contenido |
| **CAC por canal** | igual, por canal | Decide a dónde va la siguiente unidad de presupuesto |
| **Payback del CAC (meses)** | CAC ÷ (ingreso mensual por cliente × margen bruto) | Riesgo de caja; por debajo de 12 meses es cómodo en pymes, 18–24 se tolera en SaaS enterprise |
| **Tasa de victoria** | ganados ÷ (ganados + perdidos) | Excluye "sin decisión" del denominador y sigue esa cifra aparte |
| **Tasa de no decisión** | sin decisión ÷ oportunidades calificadas | Si supera la tasa de victoria, carga `references/jolt.md` |
| **Ciclo de ventas** | mediana de días de calificado a cerrado | Mira la mediana, no la media |
| **Cobertura de pipeline** | pipeline calificado abierto ÷ cuota del periodo | 3–4× es una heurística común; ajústala a tu tasa de victoria (cobertura necesaria ≈ 1 ÷ tasa de victoria) |

## Retención y valor

| Métrica | Fórmula | Uso |
|---|---|---|
| **Churn de logos** | clientes perdidos ÷ clientes al inicio del periodo | Recuento de relaciones perdidas |
| **Churn de ingresos (GRR)** | (MRR inicial − churn − contracción) ÷ MRR inicial | Suelo del negocio; máximo 100% |
| **NRR** | (MRR inicial − churn − contracción + expansión) ÷ MRR inicial | Por encima de 100% significa que la base crece sin nuevos logos |
| **LTV** | (ingreso medio por cliente × margen bruto) ÷ tasa de churn | Usa el mismo periodo para ingresos y churn; en negocios jóvenes, limita el LTV a 3–5 años de datos |
| **LTV / CAC** | | ≥ 3 es una heurística común de SaaS; no dice nada del timing de caja, así que combínalo con payback |
| **Retención por cohorte** | % de los clientes del mes X aún activos en los meses 1, 3, 6, 12 | La única vista honesta del churn; las medias esconden |

Plantilla de tabla de cohortes:

| Cohorte | M0 | M1 | M3 | M6 | M12 |
|---|---|---|---|---|---|
| 2026-01 | 100% | | | | |
| 2026-02 | 100% | | | | |

Una curva que se aplana indica product-market fit en ese segmento; una curva que sigue cayendo indica que la oferta o el cliente es el equivocado.

## Operación

| Métrica | Fórmula | Uso |
|---|---|---|
| **Margen de contribución** | precio − coste directo de entrega | Por unidad y por tier |
| **Margen bruto** | (ingresos − coste de entrega) ÷ ingresos | Servicios 50–70% es lo típico; software 70–90% |
| **Utilización** | horas facturables ÷ horas disponibles | Por encima de ~80% sostenido, la calidad y el tiempo de ventas se hunden |
| **Tiempo hasta el primer valor** | días desde la firma hasta el primer resultado que el cliente nota | El mejor predictor de churn temprano |
| **Tasa de referidos** | clientes que refirieron ÷ clientes | Proxy de "referibilidad" |

## Embudo

Sigue la conversión entre etapas, no solo los totales: lead → calificado → descubrimiento → propuesta → negociación → ganado. La conversión más débil es el cuello de botella. Criterios de salida por etapa: criterios de etapa del `SKILL.md`.

## Qué métricas primero, por tipo de negocio

| Tipo | Las tres primeras |
|---|---|
| Consultor en solitario / agencia pequeña | Contribución por hora sénior, cobertura de pipeline, tasa de referidos |
| Servicio productizado | Payback del CAC, margen bruto, churn de logos |
| SaaS | NRR, payback del CAC, retención por cohorte |
| Negocio local | CAC por canal, tasa de recompra, utilización de la capacidad |
| PLG | Tasa de activación, conversión PQL → pago, NRR |

## Ejemplo práctico

Servicio productizado: precio 1.200/mes, coste directo 400/mes, CAC 2.400, churn mensual del 3%.

- Margen bruto = (1.200 − 400) ÷ 1.200 = 67%
- Payback del CAC = 2.400 ÷ (1.200 × 0,67) = 3 meses
- LTV = (1.200 × 0,67) ÷ 0,03 = 26.800
- LTV/CAC = 11

Sano sobre el papel. La comprobación: ¿la retención por cohorte muestra realmente un 3% mensual, o es un 8% en los tres primeros meses y un 1% después? El número agregado esconde un problema de onboarding que arregla `references/delivery-retention.md`.

## Reglas

- Todo número lleva su periodo y su población.
- Las medias son sospechosas; muestra la distribución o la cohorte.
- Un benchmark es una invitación a hacer una pregunta, no una meta.
