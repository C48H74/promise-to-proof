# Multithreading y el comité de compra

Carga cuando un negocio tiene un solo contacto, cuando el comprador dice "tengo que consultarlo con…" y en cualquier oportunidad enterprise. Se cierra con `templates/buying-committee-map.md`.

## El problema

La investigación de Gartner sobre compradores sitúa una compra B2B típica en 6–10 decisores, cada uno con su propia información y sus propios criterios. Los proveedores de analítica de llamadas de ventas (Gong y otros) reportan de forma consistente que los negocios con un solo contacto cierran a una fracción de la tasa de los negocios con tres o más contactos implicados. Las proporciones exactas varían según el conjunto de datos; la dirección no. Un contacto es un único punto de fallo: un ascenso, unas vacaciones, una reorganización o una simple pérdida de interés matan el negocio.

## Roles a mapear

| Rol | Qué le importa | Cómo implicarlo |
|---|---|---|
| **Comprador económico** | Retorno, riesgo, cómo se ve ante los demás | Business case; reuniones cortas; el champion las agenda |
| **Champion** | Resolver el problema; su propia posición | Dale material para ganar internamente; prueba su influencia |
| **Evaluador técnico** | Encaje, integración, seguridad | Dale acceso a tu experto; responde por escrito |
| **Finanzas / compras** | Términos, precio, compliance | Implícalo tras el acuerdo de negocio; sé predecible |
| **Legal** | Responsabilidad, datos, salida | Anticípate con tus términos estándar pronto |
| **Usuarios finales** | Fricción diaria, curva de aprendizaje | Demo para ellos, no para ejecutivos |
| **Bloqueador** | Pérdida de control, proveedor anterior, proyecto competidor | Descubre qué pierde; atiende eso o neutralízalo vía el comprador económico |
| **Influenciador invisible** | Un consejero, un asesor, un excompañero | Pregunta "¿quién más tiene opinión sobre esto?" en cada llamada |

## Prueba del champion

Un champion vende cuando tú no estás. Pruebas, en orden creciente de exigencia:
1. ¿Comparte el organigrama y el proceso de decisión?
2. ¿Reenvía tu página única internamente y te cuenta la reacción?
3. ¿Agenda una reunión con el comprador económico?
4. ¿Te habla de las opciones competidoras y de los riesgos internos?

Un contacto que falla la prueba 3 tras dos peticiones es un coach, no un champion. Los coaches son útiles; no cierran negocios.

## Tácticas para sumar threads

- **Pide la presentación, con un motivo:** "Las dudas de seguridad que planteaste las responde mejor directamente nuestro CTO. ¿Podrías ponerme en contacto con quien lleva seguridad por vuestra parte?"
- **Reciprocidad de acceso:** ofrece a tu sénior a cambio del suyo. "Nuestro head de entrega puede guiar a tu responsable de operaciones por el despliegue; ¿servirían 20 minutos?"
- **Contenido que el champion reenvía:** una página única escrita para el comprador económico, un resumen de dos diapositivas para el comité. Facilita el reenvío.
- **Threads paralelos vía workshop o piloto:** una sesión acotada que legítimamente necesita a tres o cuatro de los suyos en la sala.
- **Alineación ejecutiva:** tu ejecutivo con su ejecutivo, una vez que el champion esté de acuerdo.

## Mapa de energía

Para cada stakeholder registra: actitud (a favor / neutral / en contra), influencia (alta / media / baja), fecha del último contacto, siguiente acción. Un negocio con un "en contra" de alta influencia y sin plan es una derrota esperando a ser registrada.

## Construye consenso interno

Los comités se atascan cuando los miembros no han acordado el problema, y menos la solución. Antes de proponer: consigue que el comité acuerde la declaración del problema y los criterios de decisión (escríbelos, devuélvelos, pide correcciones). Una propuesta frente a criterios acordados se evalúa; una propuesta frente a criterios vagos se aplaza (`references/jolt.md`).

## Antipatrones

- Esperar que el champion "lo gestione internamente".
- Saltarse al champion para llegar al ejecutivo sin avisarle.
- Tratar a compras como el enemigo.
- Tres threads que son todos usuarios finales y nadie con presupuesto.
