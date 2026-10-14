# Outbound y prospección

Carga para construir pipeline. Se cierra con `templates/5-touch-sequence.md`, `templates/cold-call-scripts.md`, `examples/cold-email-good-vs-bad.md`.

## La regla del pipeline

La prospección hecha hoy aparece como pipeline en unos 60–90 días (la "regla de los 30 días" de Blount: lo que haces o dejas de hacer en cualquier ventana de 30 días decide el próximo trimestre). El pipeline es un hábito diario con un número, no una campaña.

## Las listas basadas en señales vencen a las listas estáticas

Construye la lista a partir de **señales de que un problema está activo**, no solo de firmografía:

| Señal | Dónde verla | Por qué importa |
|---|---|---|
| Contratación para el cargo dueño de tu problema | Portales de empleo, LinkedIn | Hay presupuesto, el dolor está reconocido |
| Nuevo ejecutivo en la función | LinkedIn, prensa | Los líderes nuevos cambian de proveedor en sus primeros 90 días |
| Ronda de financiación, adquisición, expansión | Prensa, registros | Dinero y cambio al mismo tiempo |
| Lanzamiento de producto, nuevo mercado | Noticias de la empresa | Los procesos nuevos se rompen |
| Plazo regulatorio en su sector | Webs de reguladores | Una fecha que no pueden mover |
| Visitas a páginas de precios/comparativas | Tu analítica / herramientas de intención | Evaluación activa |
| Queja o reseña pública | Redes sociales, webs de reseñas | Dolor dicho con sus palabras |
| Señales de uso (PLG) | Tu producto | `references/plg-pql.md` |

Prioriza: señal + encaje + contacto alcanzable. Una cuenta de encaje perfecto sin señal va a la lista de nurturing, no a la secuencia.

## Investigación antes del primer toque (2 minutos, no 20)

Encuentra una cosa verdadera, específica y reciente: un post que escribieron, una contratación, una meta dicha en una entrevista, un cambio de producto. Úsala en la primera línea. Si no encuentras nada en dos minutos, envía un mensaje corto, honesto y no personalizado, o salta la cuenta; la falsa personalización ("¡me encantó tu último post!") hoy parece plantilla.

## La entregabilidad es un requisito previo, no un detalle

Antes de enviar volumen desde cualquier dominio:
- **SPF, DKIM, DMARC** configurados y pasando. Google y Yahoo exigen desde febrero de 2024 autenticación, baja con un clic y una tasa de quejas de spam inferior al 0,3% a los remitentes masivos; el correo no autenticado se filtra.
- **Calienta (warm up)** dominios/buzones nuevos durante 2–4 semanas antes del volumen en frío.
- **Tope de volumen** por buzón: decenas de emails en frío al día, no cientos. Usa un dominio de envío distinto del principal.
- **Higiene de lista:** verifica las direcciones; rebotes por encima de ~2% dañan la reputación.
- **Texto plano, pocos enlaces, sin imágenes, sin píxeles de seguimiento** en el correo en frío.
- Monitoriza: la tasa de apertura no es fiable (proxies de privacidad); sigue la **tasa de respuesta** y la **tasa de respuesta positiva**.

Cualquier consejo de volumen sin esta sección es un consejo para quemar un dominio.

## Secuencia multicanal de 5 toques (10 días)

| Día | Toque | Objetivo |
|---|---|---|
| 1 | Llamada | Apertura pidiendo permiso; agendar 15 minutos o entender por qué no |
| 2 | Email | 3–5 frases: señal, hipótesis de problema, una pregunta |
| 4 | LinkedIn | Conectar con un motivo de una línea; o comentar su post |
| 7 | Llamada + email | Referenciar el día 2; añadir un insight o prueba nueva |
| 10 | Email de despedida | "¿Cierro el tema?" Sin culpa, salida fácil |

Texto completo: `templates/5-touch-sequence.md`.

## Llamadas en frío

Funcionan de nuevo precisamente porque las bandejas de entrada están llenas. Reglas:
- **Apertura con permiso:** "Sé que esto llega de la nada. ¿Puedo usar 30 segundos para decirte por qué llamé, y tú decides si seguimos?"
- **Romper el patrón:** no suenes a guion; suena a una persona que ha investigado.
- **Una hipótesis, una pregunta:** "Equipos de vuestro tamaño suelen enfrentarse a [problema] cuando [señal]. ¿Está en tu radar o me equivoco?"
- **Igualar el tono:** acompaña su ritmo y su energía.
- **Pide la reunión y luego deja de hablar.**
Guiones: `templates/cold-call-scripts.md`.

## Métricas de outbound

| Métrica | Rango sano (heurística, reverificar) |
|---|---|
| Tasa de respuesta positiva por email | 2–5% en listas bien segmentadas y basadas en señales |
| Tasa de conexión en llamadas | 5–15% según el sector |
| Conexión → reunión | 15–30% con una buena apertura |
| Reunión → calificado | Por encima del 50%; por debajo hay un problema de lista o de pitch |

Sigue por secuencia y por tipo de señal; elimina lo que no rinde tras una muestra estadísticamente significativa (cientos, no decenas).

## Qué recortar

- "Espero que estés bien" / "me gustaría presentar nuestra empresa".
- Muros de texto; más de un call to action.
- Adjuntos y decks en el primer toque.
- Seguimientos que dicen "solo pasaba a recordarte".
- Cualquier secuencia más larga de lo necesario para obtener un sí o un no claro.

## Lista de verificación antes de enviar cualquier outbound

- [ ] ¿La observación del toque 1 es **verificable** por cualquier persona?
- [ ] ¿El correo tiene 3 frases y **una** petición?
- [ ] ¿La redacción es honesta (sin urgencia inventada, sin escasez falsa)?
- [ ] ¿Sé qué dolor estoy asumiendo — y está en el perfil?
- [ ] ¿Tengo una prueba autorizada lista por si responde?
- [ ] ¿El toque 5 cierra el expediente con educación (sin chantaje emocional)?
