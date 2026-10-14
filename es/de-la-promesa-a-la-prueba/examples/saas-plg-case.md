# Ejemplo SaaS: activación, retención y apoyo de ventas

**Datos sintéticos y experimento propuesto.** No hay resultado observado de ningún cliente ni benchmark universal.

El producto ayuda a los equipos a conciliar informes semanales. Primer resultado útil = un informe aprobado con las excepciones resueltas, no la creación de la cuenta. El freemium permite un flujo de trabajo acotado; los controles de equipo requieren un plan de pago con precio transparente. Los costos de alojamiento y soporte se incluyen en la planificación.

Al inicio del mes hay 100 cuentas de pago y 10,000 de MRR: se van cinco cuentas (500 de MRR), contracción 200, expansión 1,000; ingresos nuevos 2,000. Churn de logos 5%, GRR 93%, NRR 103%, MRR final 12,300. La expansión oculta parte de la pérdida de clientes; ni los registros ni el NRR por sí solos establecen que las cohortes estén sanas.

Una cohorte de cuentas gratuitas tiene 200 cuentas elegibles; 40 completan el primer flujo útil en siete días (**20% de activación**). Diez pasan a pago en treinta días (**5% de conversión de la cohorte gratuita**, o **25% de las cuentas activadas** si las diez pertenecen al subconjunto activado). Especifica qué denominador y qué evidencia aplican; no los mezcles.

Hipótesis: el manejo poco claro de las excepciones impide el valor útil. Experimento: guía dentro del producto para esa tarea, comparando cohortes elegibles comparables o una asignación aleatoria autorizada. Mide activación a siete días, conversión a pago a treinta días, contribución retenida a sesenta días, carga de soporte y quejas. Responsable: el líder de producto; tope de costo 1,000; revisión cuando las ventanas estén completas. Define de antemano la mejora mínima útil y el tratamiento de la incertidumbre a partir de la economía del negocio; no se afirma ningún incremento antes de la prueba.

PQL candidato = flujos aprobados repetidos, colaboración real del equipo y necesidad de acceso controlado. Valida si predice valor de pago retenido y no solo actividad. El apoyo de ventas usa la vía acordada con el contacto y ofrece ayuda con la tarea observada; no da a entender que se conoce el presupuesto.

Antes de adquirir más, investiga las razones de churn y de salida, y la economía de las cohortes recién adquiridas. La expansión se ofrece por valor adicional; la cancelación y la exportación siguen siendo claras. Una heurística de LTV/CAC de 3× no puede compensar un forecast construido con cohortes inmaduras.

Usa la [plantilla PLG](../templates/plg-experiment.md), el [dashboard](../templates/metrics-dashboard.md) y la [evaluación de IA](../templates/ai-sales-evaluation.md) si se propone un score predictivo de PQL.
