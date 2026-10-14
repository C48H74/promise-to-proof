# Ejemplos numéricos con supuestos explícitos

**Todos los datos de entrada son sintéticos.** La moneda es ilustrativa; las fórmulas suponen que los costos están clasificados de forma consistente. No son asesoría de inversión ni contable, ni metas universales.

## 1. Corrección por mezcla premium

Línea base: 100 clientes × 100 = 10,000 de ingresos. Nueva mezcla con el mismo número de clientes: 90 × 100 + 10 × 1,000 = 19,000. Razón de ingresos = **1.9×**, aumento = 90%. Participación premium en los ingresos = 10,000 / 19,000 = 52.63%; la participación en el beneficio es desconocida sin los costos. Otros números de clientes o costos producen resultados distintos.

## 2. Contribución del servicio, markup y capacidad

Precio 2,000; mano de obra variable de entrega 800, proveedor 200 y provisión de pagos/retrabajo 100. Costo variable = 1,100. Contribución antes de adquisición = **900**; margen = 900/2,000 = **45%**; markup sobre esa base de costos = 900/1,100 = **81.82%**.

Costo de adquisición asignado por proyecto 150: contribución tras adquisición = **750**. Costos fijos mensuales de 3,000 implican un punto de equilibrio = 3,000/750 = **4 proyectos** si la adquisición escala a ese ritmo. La adquisición no se cuenta de nuevo en los costos fijos.

Mano de obra disponible en el cuello de botella: 100 horas/mes; cada proyecto toma 20 horas, incluido el retrabajo esperado. Capacidad = **5 proyectos**. A plena capacidad, ingresos 10,000; costo variable 5,500; adquisición 750; contribución 3,750; restando los fijos de 3,000 queda un **excedente operativo de 750 bajo este modelo simplificado**, antes de cualquier costo omitido o impuesto. No llames beneficio neto a un margen de contribución del 45%.

## 3. CAC, payback y LTV aproximado en SaaS

Una inversión de adquisición emparejada de 20,000 genera 20 cuentas de pago: CAC = **1,000**. Un ARPA mensual de 200 y un margen bruto del 80% dan 160 de beneficio bruto mensual; payback del CAC sobre beneficio bruto = **6.25 meses**, suponiendo pagos estables y ningún churn durante el payback.

Un churn mensual de logos del 2% da un LTV aproximado = 200 × 0.8 / 0.02 = **8,000**; razón = **8**. Este atajo supone cohortes estacionarias y homogéneas, sin expansión ni descuento. No es el valor de vida observado. Un modelo de supervivencia acotado a 12 meses, sin descuento, da 160 × suma(0.98^t, t=0..11) = **1,722.27**, lo que muestra la sensibilidad al horizonte. Un churn cero no establece un valor infinito.

## 4. Retención de ingresos recurrentes

MRR inicial 10,000 de 100 cuentas; churn 500, contracción 200 y expansión 1,000. NRR = (10,000 − 500 − 200 + 1,000)/10,000 = **103%**. GRR = (10,000 − 500 − 200)/10,000 = **93%**. Cinco cuentas iniciales perdidas implican un **churn mensual de logos del 5%**, independiente del NRR.

Las cuentas nuevas aportan 2,000 de MRR. MRR final = **12,300**. El MRR nuevo se excluye del NRR y del GRR, así que 123% sería un cálculo de NRR incorrecto. Un churn mensual del 2% se compone en 1 − 0.98^12 = **21.53% de desgaste anual** bajo el modelo de tasa constante, no 24%.

## 5. Caso del comprador y momento de la caja

Retrabajo reportado en la línea base: 10 horas/mes × tarifa interna 50 = 500 de valor de capacidad. Si una intervención verificada libera 4 horas, el valor de capacidad atribuible es de 200/mes; solo se convierte en ahorro de caja si los costos desaparecen de verdad. Una compra de 1,000 más 300 de implementación tiene un payback simple de 6.5 meses **solo si** los 200/mes son un beneficio realmente capturable, estable y que empieza de inmediato. En caso contrario, presenta liberación de capacidad, no ROI en caja.

Un servicio de 2,000 con 1,100 de salida de caja de entrega antes del cobro y 150 de adquisición necesita financiación pese a la contribución positiva. Un anticipo de 500 deja hasta **750** por financiar antes del pago final, sin considerar costos fijos ni el detalle de calendario. Ajústalo al calendario de caja real con fechas.

Consulta [economía](../references/economics.md) y [métricas](../references/metrics.md).
