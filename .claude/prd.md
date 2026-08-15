# PRD — Aura Beauty Studio
### Sitio web con agendamiento en línea

| Campo | Valor |
|---|---|
| **Cliente** | María Chamorro — Aura Beauty Studio |
| **Documento** | Product Requirements Document (PRD) v1.0 |
| **Fecha** | 15 de agosto de 2026 |
| **Base** | Brief de levantamiento firmado el 11-08-2026 + logo entregado |
| **Fecha objetivo** | Fin de agosto 2026 (a validar — ver §14) |
| **Estado** | 🟡 Borrador para validación del cliente |

> **Cómo leer este documento.** Las secciones marcadas con ⚠️ contienen decisiones que **aún no están cerradas** y que cambian el costo, el plazo o el resultado. No se debe empezar a construir hasta resolverlas. La §16 concentra todas las preguntas abiertas.

---

## 1. Resumen ejecutivo

Aura Beauty Studio es un estudio de belleza (uñas, pestañas, cejas, maquillaje, depilación y masajes) que hoy capta clientas por Instagram, TikTok y WhatsApp. El sitio web debe convertir ese tráfico social en **citas agendadas**, y darle a María una agenda unificada en Google Calendar para no perder reservas.

La propuesta es un sitio **de una sola página principal** con navegación por anclas, estética editorial minimalista (nude, dorado, negro), animación de scroll con GSAP, y un módulo de reserva que sincroniza en dos vías con Google Calendar.

**Tres decisiones definen el proyecto:**

1. **Cómo se agenda** (§8) — hay tres caminos técnicos con costo y plazo muy distintos. Esta es la decisión de mayor impacto.
2. **Cuánto entra en la primera entrega** (§4) — el brief lista 11 secciones + blog + reseñas. Eso no cabe en dos semanas con calidad "tipo Apple".
3. **Quién produce las fotos y cuándo** (§13) — hoy no existe material visual propio. Es el riesgo #1 del proyecto.

---

## 2. Análisis crítico del brief ⚠️

Antes del alcance, cinco observaciones honestas sobre lo levantado. No son objeciones: son tensiones reales que conviene resolver ahora y no a mitad de desarrollo.

### 2.1 La referencia principal no hace lo que tú necesitas

`glosslab.com` hoy es una **tienda de productos en Shopify**, no un sitio de reservas de salón (cambió de modelo de negocio). Su hero en video, su tipografía grande y su ritmo editorial son excelentes referencias **estéticas**. Pero su objetivo es "añadir al carrito"; el tuyo es "reservar cita". Copiar su estructura completa te daría un sitio bonito que convierte mal.

`paint-box.com` sí es un salón con reserva y es la referencia **funcional** más útil de las tres. Propongo: *estética de Glosslab + arquitectura de conversión de Paint Box*.

### 2.2 "Como Apple" y "sitio que vende" tiran en direcciones distintas

Apple.com es un sitio de **producto**, con animaciones largas de scroll y mucho aire antes del CTA. Un sitio local de servicios convierte mejor cuando el botón de reservar está visible **desde el primer scroll y siempre**. La animación debe ser condimento, no el plato.

**Mi recomendación:** hero cinematográfico con una sola animación memorable → CTA de reserva inmediatamente visible → resto del sitio con microanimaciones sobrias. Si esto no te convence, es un punto legítimo de debate, pero conviene cerrarlo antes de diseñar.

### 2.3 El alcance listado no es de "landing page"

El brief pide: Inicio, Conoce Aura, Equipo, Horario, Servicios, Mapa, Blog de comentarios, Reseñas, Galería, Agenda tu cita, Por qué elegir Aura. Eso son **11 bloques + un blog**, más agendamiento con Google Calendar, más términos, privacidad y cookies. Es un sitio completo, no una landing.

Con fecha límite a fin de mes, propongo dos fases (§4). Entregar 11 secciones a medias en dos semanas produce un sitio que no vende; entregar 7 secciones excelentes sí.

### 2.4 Dos secciones del brief no se pueden construir hoy

- **"Blog de comentarios"** — es ambiguo. Puede ser (a) un blog de artículos escritos por Aura, (b) una sección de comentarios de visitantes, o (c) reseñas de clientas. Son tres cosas distintas con tres costos distintos. Necesito que elijas. *(Nota: un muro de comentarios abierto en un sitio pequeño se llena de spam en semanas y requiere moderación diaria.)*
- **"Reseñas de clientas"** — no hay ninguna todavía. **No vamos a inventar testimonios**: además de ser deshonesto con quien lee, destruye la confianza si alguien lo detecta. Alternativas legítimas en §13.3.

### 2.5 El formulario pide fecha de cumpleaños

Es entendible (marketing de cumpleaños), pero es un dato personal adicional que se pide **antes** de que exista una relación. Dos consecuencias: (a) baja la tasa de conversión del formulario, y (b) bajo la Ley Orgánica de Protección de Datos Personales del Ecuador exige finalidad declarada y consentimiento específico.

**Recomendación:** que el cumpleaños sea **campo opcional**, con la etiqueta *"¿Quieres tu regalo de cumpleaños? (opcional)"*. Se recoge el dato, se justifica el porqué, y no se penaliza la conversión.

---

## 3. Objetivos y métricas

### 3.1 Objetivo de negocio
Que una persona que llega desde Instagram/TikTok reserve una cita **sin necesidad de escribir por WhatsApp**, y que esa cita aparezca automáticamente en el calendario de María.

### 3.2 Objetivos del producto (priorizados)

| # | Objetivo | Prioridad |
|---|---|---|
| O1 | Reserva de cita en línea, sincronizada con Google Calendar | 🔴 Crítico |
| O2 | Salida a WhatsApp para quien prefiere conversar antes | 🔴 Crítico |
| O3 | Mostrar el trabajo (galería) con calidad que justifique el precio | 🔴 Crítico |
| O4 | Comunicar ubicación, horario y servicios sin fricción | 🟠 Alto |
| O5 | Cumplimiento legal (términos, privacidad, cookies) | 🟠 Alto |
| O6 | Posicionamiento en búsquedas locales ("uñas cerca de mí", "salón de belleza [ciudad]") | 🟡 Medio |
| O7 | Promociones destacables (ej. soft gel en día de baja demanda) | 🟢 Fase 2 |

### 3.3 Métricas de éxito (medibles a 30 días de publicado)

| Métrica | Meta inicial | Cómo se mide |
|---|---|---|
| Tasa de reserva (visita → cita confirmada) | ≥ 4 % | GA4 evento `booking_confirmed` |
| Clics a WhatsApp | ≥ 8 % de visitas | GA4 evento `whatsapp_click` |
| Citas mensuales originadas en la web | ≥ 15 | Etiqueta en Google Calendar |
| No-shows de citas web | ≤ 15 % | Registro manual de María |
| LCP en móvil (velocidad de carga) | ≤ 2.5 s | PageSpeed / Vercel Analytics |

> Estas metas son estimaciones de arranque para un negocio local nuevo en digital, no promesas contractuales. Se recalibran con datos reales al mes 2.

---

## 4. Alcance ⚠️

### Fase 1 — MVP publicable (objetivo: fin de agosto 2026)

**Incluye:**

1. Página única con navegación por anclas: Inicio (hero) · Conoce Aura · Servicios · Galería · Por qué Aura · Horario y ubicación · Reserva
2. Módulo de reserva con sincronización a Google Calendar
3. Botón flotante de WhatsApp (visible en todo el scroll)
4. Formulario de contacto → correo a `crdiris2428@gmail.com`
5. Mapa de Google embebido
6. Páginas legales: Términos y Condiciones · Política de Privacidad · Política de Cookies
7. Banner de consentimiento de cookies
8. Optimización móvil, accesibilidad AA, SEO local básico, GA4
9. Metadatos para compartir en redes (Open Graph)

**Excluye explícitamente de Fase 1:**
- Blog de artículos
- Sistema de comentarios de visitantes
- Testimonios (hasta que existan reales)
- Página de equipo con perfiles individuales *(se resuelve como bloque dentro de "Conoce Aura")*
- Pagos en línea / anticipos
- Multilenguaje

### Fase 2 — Post-lanzamiento (septiembre–octubre 2026)

| Entregable | Requisito previo |
|---|---|
| Testimonios reales con foto | ≥ 6 reseñas recolectadas |
| Blog / artículos | Definir quién escribe y cada cuánto |
| Perfiles del equipo | Fotos y bios de cada especialista |
| Bloque de promociones dinámico | Definir política de descuentos |
| Anticipo en línea para reducir no-shows | Cuenta de pasarela (Kushki / PayPhone / Datafast) |
| Programa de cumpleaños automatizado | Base de datos de clientas con consentimiento |

### Fuera de alcance (todo el proyecto)
Tienda en línea · App móvil · Sistema de inventario · Facturación electrónica · CRM propio · Gestión de nómina o comisiones.

---

## 5. Público objetivo

**Perfil primario:** mujeres de 20 a 45 años, residentes cerca del estudio, que descubren Aura en Instagram o TikTok y entran desde el celular, muchas veces fuera del horario de atención (noche, domingo).

**Implicaciones directas de diseño:**
- **Móvil primero, no "móvil también".** Se diseña a 390 px y luego se expande.
- **La reserva debe funcionar a las 11 de la noche.** Si el único camino es WhatsApp, se pierde la intención.
- **Prueba visual sobre texto.** Esta audiencia decide por fotos del trabajo, no por descripciones.
- **Datos móviles limitados.** Un hero en video de 12 MB expulsa visitantes; ver presupuesto de peso en §11.

---

## 6. Arquitectura de información

```
/                          Página principal (scroll por anclas)
├── #inicio                Hero + CTA primario
├── #conoce-aura           Historia + filosofía + fundadora
├── #servicios             6 categorías con detalle expandible
├── #galeria               Trabajos reales, filtrable por servicio
├── #por-que-aura          Diferenciadores (3-4 puntos)
├── #horario-ubicacion     Horarios + mapa + cómo llegar
└── #reserva               Módulo de agendamiento

/reservar                  Vista dedicada de reserva (para links directos desde IG bio)
/terminos                  Términos y Condiciones
/privacidad                Política de Privacidad
/cookies                   Política de Cookies
/gracias                   Confirmación post-reserva
/404                       Error, con salida a inicio y WhatsApp
```

**Por qué scroll único y no páginas separadas:** el tráfico llega desde un link en bio de Instagram con una sola intención. Cada clic adicional entre páginas pierde gente. La navegación por anclas mantiene el CTA de reserva permanentemente accesible.

**Excepción:** `/reservar` existe como URL propia para que María la pegue directamente en su bio y en las historias.

---

## 7. Sistema de diseño

### 7.1 Dirección visual

**Concepto:** *joyería, no salón.* El logo es un sello circular grabado en dorado sobre nude — el lenguaje de un objeto de lujo, no de un local de servicios. El sitio extiende ese lenguaje: mucho espacio en blanco, tipografía con serifas romanas, dorado usado con escasez extrema (solo filetes, no rellenos), fotografía como el único elemento de color saturado.

**Riesgo a evitar:** el dorado y el rosa gold, mal usados, se ven baratos. La regla es **el dorado nunca rellena áreas grandes**; solo aparece como línea de 1 px, ícono pequeño, o subrayado de acento.

### 7.2 Paleta (derivada del logo)

| Token | Hex | Uso |
|---|---|---|
| `--nude-000` | `#FDF9F5` | Fondo principal |
| `--nude-100` | `#F5E8DC` | Fondo de secciones alternas (tono del sello del logo) |
| `--nude-200` | `#E8D5C4` | Bordes suaves, estados hover |
| `--rose-400` | `#D9A88F` | Acento cálido, detalles decorativos |
| `--rose-600` | `#B8836A` | Acento rosa gold en texto pequeño |
| `--gold-300` | `#E6C58F` | Gradiente dorado (claro) |
| `--gold-500` | `#C9A24A` | Gradiente dorado (medio) — **solo decorativo** |
| `--gold-700` | `#8A6A28` | Dorado legible sobre fondo claro (texto/íconos) |
| `--ink-900` | `#14100E` | Texto principal, fondos de contraste |
| `--ink-600` | `#4A403A` | Texto secundario |
| `--white` | `#FFFFFF` | Tarjetas, superficies elevadas |

**Regla de contraste obligatoria (WCAG 2.1 AA):**

| Combinación | Ratio aprox. | Veredicto |
|---|---|---|
| `ink-900` sobre `nude-000` | ~17:1 | ✅ Texto de cualquier tamaño |
| `gold-700` sobre `nude-000` | ~4.7:1 | ✅ Texto normal (verificar en build) |
| `gold-500` sobre `nude-000` | ~2.4:1 | ❌ **Prohibido para texto.** Solo filetes e íconos decorativos |
| `white` sobre `ink-900` | ~17:1 | ✅ Secciones invertidas |

> Todo par de colores se verifica con herramienta automática antes de la entrega. Un botón dorado con texto blanco — el error más común en sitios de belleza — no pasa.

### 7.3 Tipografía

| Rol | Familia propuesta | Justificación |
|---|---|---|
| **Display** | Marcellus | Capitales romanas con serifas finas: es la misma familia de formas del "AURA" del logo. Alternativa: Cormorant Garamond |
| **Cuerpo** | Jost | Geométrica humanista; funciona con el tracking amplio de "BEAUTY STUDIO" del logo |
| **Utilidad** | Jost (500, tracking `0.18em`, mayúsculas) | Etiquetas, eyebrows, precios |

*Deliberadamente evitamos Playfair Display + Montserrat: es el par por defecto de toda plantilla de salón de belleza y haría que el sitio se lea como plantilla.*

**Escala tipográfica** (base 16 px, fluida con `clamp()`):

| Nivel | Móvil → Escritorio | Peso | Tracking |
|---|---|---|---|
| Display XL (hero) | 40 → 88 px | 400 | `-0.02em` |
| H1 sección | 32 → 56 px | 400 | `-0.01em` |
| H2 | 24 → 34 px | 400 | `0` |
| Cuerpo | 16 → 18 px | 400 | `0` |
| Etiqueta | 11 → 12 px | 500 | `0.18em`, mayúsculas |

### 7.4 Elemento firma

**El sello.** El círculo del logo se convierte en dispositivo estructural recurrente: los números de sección, el marcador del mapa, el estado activo de la navegación y el ícono de confirmación de reserva viven todos dentro del mismo anillo de 1 px dorado. Un solo gesto, repetido, que ningún competidor tiene porque nace de este logo específico.

### 7.5 Espaciado y forma
- Escala de espaciado en múltiplos de 8 px.
- Ritmo vertical de secciones: 96 px móvil / 160 px escritorio.
- Radio de borde: `2px` en botones y tarjetas (casi recto — el lujo editorial no usa esquinas redondeadas), `9999px` solo en el sello circular.
- Sombras: prácticamente ninguna. La jerarquía se construye con espacio y línea, no con elevación.

---

## 8. Módulo de agendamiento ⚠️ (decisión crítica)

Esta es la funcionalidad de mayor valor y mayor riesgo. **"Agendar con Google Calendar desde la web" tiene tres implementaciones posibles**, y no son equivalentes.

### 8.1 Comparación de opciones

| | **A. Cal.com embebido** | **B. Citas de Google Calendar** | **C. Sistema propio + API** |
|---|---|---|---|
| **Cómo funciona** | Widget embebido en el sitio, con estilos personalizados | Página de reservas nativa de Google | Backend propio que escribe en Calendar vía API |
| **Sincronía 2 vías** | ✅ Sí | ✅ Nativa | ✅ Sí (a construir) |
| **Marca / diseño** | 🟡 Personalizable en buena medida | ❌ Muy limitada, se ve "Google" | ✅ Control total |
| **Recordatorios** | ✅ Email incluido; WhatsApp en plan pago | 🟡 Email básico | ⚙️ A construir |
| **Servicios con distinta duración** | ✅ Sí | 🟡 Limitado | ✅ Sí |
| **Tiempo de desarrollo** | ~2 días | ~4 horas | ~8–12 días |
| **Costo recurrente** | $0 (plan gratuito alcanza para 1 persona) | Requiere Google Workspace ($) para algunas funciones | Servidor + mantenimiento |
| **Mantenimiento** | Bajo | Nulo | 🔴 Alto (renovación de tokens OAuth, errores de API) |
| **Riesgo para el plazo** | Bajo | Muy bajo | 🔴 Alto |

### 8.2 Recomendación

**Opción A (Cal.com embebido con estilos propios) para Fase 1.**

Razones: entrega la funcionalidad completa dentro del plazo, sincroniza en dos vías con el calendario de María, permite duraciones distintas por servicio, y su widget acepta suficiente personalización visual para no romper la estética. La Opción C es técnicamente superior pero **no cabe en dos semanas junto con el resto del sitio**, y añade una carga de mantenimiento que un negocio de una persona no debería asumir en su primer sitio.

Si en 6 meses el volumen lo justifica, se migra a C sin rehacer el sitio.

> ⚠️ **Requiere tu confirmación.** Si prefieres la Opción C desde el inicio, es una decisión válida, pero implica mover la fecha de entrega a mediados de septiembre y ajustar presupuesto. No se puede tener C y "fin de mes" a la vez.

### 8.3 Requisitos funcionales del módulo (aplican a cualquier opción)

| ID | Requisito |
|---|---|
| RF-01 | Seleccionar servicio de un catálogo con duración y precio (o "desde $X") |
| RF-02 | Mostrar solo horarios realmente disponibles, respetando el horario del estudio |
| RF-03 | Bloquear automáticamente los espacios ya ocupados en Google Calendar |
| RF-04 | Aplicar buffer configurable entre citas (limpieza/preparación) — sugerido 15 min |
| RF-05 | Capturar: nombre, teléfono, correo, servicio, fecha y hora; cumpleaños **opcional** |
| RF-06 | Correo de confirmación automático a la clienta con la cita y la dirección |
| RF-07 | Notificación a `crdiris2428@gmail.com` por cada reserva |
| RF-08 | Recordatorio automático 24 h antes de la cita |
| RF-09 | La clienta puede cancelar o reprogramar desde un link en su correo |
| RF-10 | Casilla de consentimiento de datos, sin marcar por defecto, con link a la política |
| RF-11 | Zona horaria fija: `America/Guayaquil` (UTC−5) |
| RF-12 | Salida alternativa visible: "¿Prefieres coordinar por WhatsApp?" |

### 8.4 Horarios de disponibilidad (del brief)

| Día | Horario |
|---|---|
| Lunes a sábado | 08:00 – 19:00 |
| Domingo | 08:00 – 16:00 |

> **Pregunta abierta:** ¿hay pausa de almuerzo? ¿Feriados? ¿Última cita = 19:00 o *termina* a las 19:00? Un servicio de 90 minutos no puede empezar a las 18:45. Se necesita la duración real de cada servicio (§16).

---

## 9. Especificación de animación (GSAP)

### 9.1 Principio rector
**Una sola animación memorable, todo lo demás discreto.** El error más frecuente en sitios "tipo Apple" es animar todo, lo que produce una página lenta, mareante y — en 2026 — con aspecto de generada automáticamente.

### 9.2 Momento firma: apertura del sello
Al cargar la página, el anillo dorado del logo se dibuja en sentido horario (`drawSVG` sobre el trazo), la letra A aparece con una máscara vertical, y el conjunto se contrae hacia la esquina superior izquierda convirtiéndose en el logo fijo de la barra de navegación, mientras el hero se revela detrás. Duración total ≤ 1.4 s, **ejecutable una sola vez por sesión** (se guarda en `sessionStorage`).

### 9.3 Inventario de animaciones

| Zona | Efecto | Herramienta | Duración |
|---|---|---|---|
| Carga | Apertura del sello (§9.2) | GSAP Timeline + DrawSVG | 1.4 s |
| Títulos de sección | Revelado por líneas con máscara | ScrollTrigger + SplitText | 0.8 s, stagger 0.06 |
| Hero | Parallax sutil de fondo (máx. 15 % de desplazamiento) | ScrollTrigger `scrub` | continuo |
| Tarjetas de servicio | Fade + desplazamiento de 24 px, escalonado | ScrollTrigger + stagger | 0.6 s |
| Galería | Revelado tipo persiana al entrar en viewport | ScrollTrigger + `clipPath` | 0.7 s |
| Números / cifras | Conteo ascendente al ser visibles | GSAP + `snap` | 1.2 s |
| Botones | Barrido dorado en hover, subrayado que se dibuja | CSS + GSAP `quickTo` | 0.3 s |
| Navegación | Contracción a barra compacta al hacer scroll | ScrollTrigger `toggleClass` | 0.4 s |

### 9.4 Reglas no negociables
- **`prefers-reduced-motion: reduce`** desactiva toda animación de movimiento; los elementos aparecen en su estado final. Es requisito de accesibilidad, no opcional.
- Solo se animan `transform` y `opacity`. Nunca `top`, `left`, `width` o `height` (fuerzan recálculo de layout y provocan tirones).
- Ninguna animación bloquea la lectura del contenido: si el JavaScript falla, todo el texto debe seguir visible (estado inicial visible, la animación *quita* en vez de *poner*).
- El CTA de reserva **nunca** aparece con retardo.
- En móvil, el parallax se desactiva (drena batería y aporta poco a 390 px).

### 9.5 Nota de licenciamiento
GSAP y sus plugins (incluidos SplitText, DrawSVG y ScrollTrigger, antes de pago) son de uso gratuito desde 2025 bajo la licencia estándar de GreenSock. **Verificar los términos vigentes al momento del build**, ya que las licencias cambian.

---

## 10. Formulario de contacto

Separado del módulo de reserva. Sirve a quien tiene una pregunta antes de comprometerse.

| Campo | Tipo | Obligatorio | Validación |
|---|---|---|---|
| Nombre | texto | Sí | 2–60 caracteres |
| Teléfono / WhatsApp | tel | Sí | Formato Ecuador, 10 dígitos |
| Correo | email | Sí | Formato válido |
| Servicio de interés | select | Sí | Lista de las 6 categorías |
| Fecha preferida | date | No | No anterior a hoy |
| Hora preferida | select | No | Dentro del horario del día elegido |
| Fecha de cumpleaños | date | **No** | Etiquetada como opcional, con motivo explicado |
| Mensaje | textarea | No | Máx. 500 caracteres |
| Consentimiento de datos | checkbox | Sí | Sin marcar por defecto, con link a la política |

**Comportamiento:**
- Envío a `crdiris2428@gmail.com` (servicio transaccional: Resend o EmailJS).
- Protección anti-spam con honeypot + Cloudflare Turnstile (sin CAPTCHAs que castiguen al usuario).
- Validación en tiempo real, mensajes de error específicos: *"Ingresa un número de 10 dígitos"*, no *"Campo inválido"*.
- Estado de carga en el botón; deshabilitado durante el envío para evitar duplicados.
- Redirección a `/gracias` con el mensaje aprobado por el cliente:

> ✨ ¡Hola! Bienvenida a Aura Beauty Studio 💛
> Gracias por escribirnos. Será un gusto atenderte y ayudarte a elegir el servicio ideal para ti. ✨
> En breve te responderemos para confirmar disponibilidad. 🤍
> **Aura Beauty Studio** — ✨ La belleza de sentirte tú ✨

- La página de gracias incluye botón a WhatsApp y a Instagram (aprovecha el momento de mayor intención).

---

## 11. Stack técnico y rendimiento

### 11.1 Stack

| Capa | Elección | Justificación |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | Debate honesto: pediste React. React puro (Vite) genera una SPA que Google indexa mal — fatal para un negocio local que depende de búsquedas. Next.js **es React**, con renderizado estático que resuelve el SEO. Recomiendo Next.js salvo que tengas una razón para lo contrario |
| Estilos | Tailwind CSS v4 | Según lo solicitado. Tokens de §7.2 como variables CSS |
| Animación | GSAP + ScrollTrigger | Según lo solicitado |
| Reserva | Cal.com embebido (§8) | ⚠️ Sujeto a confirmación |
| Formulario | Resend + API Route | Sin backend propio que mantener |
| Imágenes | `next/image` + AVIF/WebP | Crítico para el peso |
| Hosting | Vercel (plan gratuito alcanza) | Despliegue automático, CDN global, SSL incluido |
| Analítica | GA4 con Consent Mode v2 | Requerido por el banner de cookies |

### 11.2 Presupuesto de rendimiento (obligatorio)

| Métrica | Meta | Máximo tolerado |
|---|---|---|
| LCP (móvil, 4G) | ≤ 2.0 s | 2.5 s |
| INP | ≤ 150 ms | 200 ms |
| CLS | ≤ 0.05 | 0.1 |
| Peso total de la primera vista | ≤ 900 KB | 1.4 MB |
| JavaScript inicial | ≤ 180 KB comprimido | 250 KB |

**Consecuencias directas:** las fotos de la galería cargan de forma diferida; si hay video en el hero, dura ≤ 8 s, pesa ≤ 2 MB, va sin audio, en bucle, y **en móvil se reemplaza por una imagen estática**.

### 11.3 Compatibilidad
Chrome, Safari, Firefox y Edge (2 versiones atrás) · iOS Safari 16+ · Android Chrome 110+ · Ancho mínimo probado: 320 px.

---

## 12. SEO y presencia local

### 12.1 En el sitio
- Una etiqueta `<h1>` única con servicio + ciudad.
- Metadatos y Open Graph por página (para que el link se vea bien al compartirlo en WhatsApp e Instagram).
- Datos estructurados `Schema.org/BeautySalon` con dirección, horario, teléfono y geolocalización.
- `sitemap.xml` y `robots.txt`.
- Texto alternativo descriptivo en cada imagen de la galería (sirve al SEO y a lectores de pantalla).
- URLs limpias en español.

### 12.2 Fuera del sitio (más importante que el sitio, honestamente)
Para un salón local, **el Perfil de Empresa de Google pesa más que la web** en las búsquedas de "cerca de mí". Recomendación fuerte, aunque esté fuera del alcance de desarrollo:

1. Crear y verificar el Perfil de Empresa de Google (gratis).
2. Cargar ahí las mismas fotos de la galería.
3. Pedir reseñas en Google a las primeras 10 clientas.
4. Que el nombre, dirección y teléfono sean **idénticos** en Google, Instagram y la web.

Sin esto, el sitio tarda mucho más en generar tráfico orgánico.

---

## 13. Contenido requerido del cliente 🔴 (bloqueante)

Este es el riesgo número uno del proyecto. **Sin contenido no hay sitio**, por bien construido que esté.

### 13.1 Ya entregado ✅
- Logo (PNG). *Nota: se requiere además una versión **sin fondo blanco** y, si existe, el archivo vectorial (SVG/AI). Sin vector, la animación del sello (§9.2) no puede ejecutarse con calidad.*
- Slogan: "La belleza de sentirte tú"
- Paleta, datos de contacto, dirección, horarios, redes sociales
- Texto descriptivo del negocio

### 13.2 Faltante y bloqueante 🔴

| Contenido | Cantidad mínima | Fecha límite |
|---|---|---|
| **Fotos de trabajos terminados** | 12–18 (mín. 2 por servicio) | 20 ago |
| **Fotos del espacio / estudio** | 4–6 | 20 ago |
| **Foto de María trabajando** | 2–3 | 20 ago |
| **Logo en vector o PNG sin fondo** | 1 archivo | 18 ago |
| **Duración y precio de cada servicio** | Los 6 servicios | 18 ago |
| **Texto de "Conoce Aura"** | 120–180 palabras | 20 ago |
| **Texto de "Por qué elegir Aura"** | 3–4 razones concretas | 20 ago |
| **Política de cancelación** | 1 párrafo | 20 ago |

> **Estándar de las fotos:** tomadas con celular está bien, **pero** con luz natural (junto a una ventana, sin flash), fondo limpio, verticales para móvil, y resolución completa sin comprimir por WhatsApp. Enviar por Drive o AirDrop, **no por WhatsApp** (destruye la calidad).
>
> Si el 20 de agosto no hay fotos, la entrega se mueve. Es matemática de proyecto, no rigidez: una galería vacía en un sitio de belleza es peor que no tener sitio.

### 13.3 Testimonios: alternativas honestas
Como no existen reseñas todavía, en lugar de inventarlas:
- **Opción A:** ofrecer un servicio gratuito o con descuento a 5 clientas a cambio de una reseña con foto en los próximos 10 días.
- **Opción B:** lanzar sin la sección y activarla en Fase 2 (el espacio queda diseñado y reservado).
- **Opción C:** reemplazar testimonios por resultados verificables ("+200 servicios realizados", si es cierto).

**Recomendación:** B ahora, A en paralelo, activar en Fase 2.

---

## 14. Legal y privacidad ⚠️

> **Aviso.** Lo siguiente es orientación de producto, **no asesoría legal**. Los textos finales deben ser revisados por un abogado ecuatoriano antes de publicar. Un sitio que recoge nombre, teléfono, correo y fecha de nacimiento está tratando datos personales y tiene obligaciones reales.

### 14.1 Marco aplicable
Ecuador cuenta con la **Ley Orgánica de Protección de Datos Personales (LOPDP)**, con régimen sancionatorio vigente. Aplica a este sitio porque recoge y almacena datos de personas identificables.

### 14.2 Política de Privacidad — contenido mínimo
- Identidad y contacto del responsable del tratamiento (Aura Beauty Studio, con datos reales).
- Qué datos se recogen y **para qué** (agendar citas, contacto, saludo de cumpleaños).
- Base legal del tratamiento: consentimiento del titular.
- Con quién se comparten (proveedor de calendario, proveedor de correo, analítica) y que puede haber transferencia internacional.
- Plazo de conservación (sugerido: 24 meses desde la última cita).
- Derechos del titular: acceso, rectificación, eliminación, oposición, portabilidad y a no ser objeto de decisiones automatizadas.
- Canal para ejercer esos derechos (correo, con plazo de respuesta).
- Fecha de última actualización.

### 14.3 Términos y Condiciones — contenido mínimo
- Descripción de los servicios ofrecidos.
- **Política de cancelación y reprogramación** (⚠️ el cliente debe definirla — sugerido: cancelación libre hasta 12 h antes).
- Política de retrasos (sugerido: más de 15 min puede implicar reprogramación).
- Que los precios publicados son referenciales y pueden variar según el caso.
- Que una reserva en línea es una **solicitud** hasta que Aura la confirma (protege ante errores de agenda).
- Limitación de responsabilidad y propiedad intelectual del contenido.

### 14.4 Cookies
- Banner al primer ingreso, con opciones **Aceptar todo / Solo necesarias / Personalizar**.
- Nada de casillas premarcadas, y rechazar debe ser tan fácil como aceptar.
- Analítica y marketing **no se cargan** hasta obtener consentimiento (Google Consent Mode v2).
- Enlace permanente en el pie para cambiar la preferencia.
- Tabla de cookies en `/cookies` con nombre, finalidad y duración de cada una.

### 14.5 En el formulario y la reserva
- Casilla de consentimiento sin marcar, con texto: *"Acepto el tratamiento de mis datos según la Política de Privacidad"*, con enlace real.
- Si se recoge el cumpleaños, declarar la finalidad **junto al campo**, no solo en la política.

---

## 15. Cronograma propuesto ⚠️

Base: hoy es 15 de agosto; "fin de mes" = 31 de agosto → **11 días hábiles**. Es ajustado pero viable **solo si el contenido llega a tiempo y el alcance es el de Fase 1**.

| Días | Hito | Responsable |
|---|---|---|
| 15–16 ago | Validación de este PRD y cierre de decisiones abiertas | 🔴 Cliente |
| 15–18 ago | Diseño de la interfaz (hero + 2 secciones para aprobación) | Equipo |
| 18 ago | **Entrega de logo vectorial + precios y duraciones** | 🔴 Cliente |
| 18–19 ago | Aprobación del diseño | 🔴 Cliente |
| 19–24 ago | Maquetado y desarrollo de secciones | Equipo |
| 20 ago | **Entrega de todo el material fotográfico y textos** | 🔴 Cliente |
| 23–25 ago | Integración del módulo de reserva y pruebas de calendario | Equipo |
| 25–26 ago | Animaciones GSAP y ajuste de rendimiento | Equipo |
| 26–27 ago | Textos legales + revisión de abogado | Cliente + Equipo |
| 27–28 ago | Pruebas en dispositivos reales, accesibilidad, SEO | Equipo |
| 28–29 ago | Revisión del cliente y correcciones | Ambos |
| 29–30 ago | Dominio, DNS, despliegue | Equipo |
| **31 ago** | **Publicación** | Equipo |

**Ruta crítica:** contenido fotográfico (20 ago) → integración de reserva → pruebas. Un retraso de 2 días en las fotos empuja la publicación a la primera semana de septiembre.

---

## 16. Preguntas abiertas 🔴

**Sin estas respuestas no se puede empezar a construir.** Ordenadas por impacto.

### Bloqueantes

1. **Módulo de reserva:** ¿aprobamos la Opción A (Cal.com embebido, cabe en el plazo) o prefieres la Opción C (sistema propio, entrega a mediados de septiembre)?
2. **Alcance:** ¿aceptas el corte Fase 1 / Fase 2 de §4, o hay algo de Fase 2 que sea innegociable para el lanzamiento?
3. **Servicios:** duración y precio de cada uno de los 6. Sin esto el módulo de reserva no se puede configurar.
4. **Fotos:** ¿quién las toma y en qué fecha? ¿Hay presupuesto para un fotógrafo o serán con celular?
5. **Logo:** ¿existe el archivo vectorial (AI/SVG) o solo el PNG? Afecta directamente la animación firma.
6. **Presupuesto:** el brief lo dejó en blanco. Define qué es viable en hosting, dominio, fotografía y herramientas de pago.
7. **Dominio:** el brief no marcó ninguna opción. ¿Ya existe alguno o lo gestionamos? *(Sugerencia: `aurabeautystudio.com` o `.ec` — verificar disponibilidad hoy mismo, es lo primero que se agota.)*

### Importantes

8. **"Blog de comentarios":** ¿es un blog de artículos, un muro de comentarios de visitantes, o reseñas de clientas? (§2.4)
9. **Equipo:** ¿es María sola o hay más especialistas? Si hay equipo, ¿todas las citas van al mismo calendario o cada una tiene el suyo? Cambia sustancialmente el módulo de reserva.
10. **Horario:** ¿hay pausa de almuerzo? ¿Feriados nacionales? ¿La última cita *inicia* o *termina* a las 19:00?
11. **Ubicación:** "Armando Hidrovo y Daniel Reyes (casa esquinera)" — falta la ciudad y el sector para el mapa y el SEO local. ¿Cuál es la dirección completa?
12. **Política de cancelación:** ¿cuál es la regla? Necesaria para los Términos y para reducir no-shows.
13. **Responsable del proyecto:** el brief dejó el campo en blanco. ¿Quién aprueba y responde en menos de 24 h?

### Menores

14. **Facebook:** el brief lista Instagram y TikTok. ¿Existe Facebook?
15. **Promoción de soft gel:** ¿qué día es el de menor demanda y cuál sería el descuento? Puede entrar en Fase 1 si se define en los próximos 3 días.
16. **Correo profesional:** hoy el contacto es Gmail personal. ¿Interesa `hola@aurabeautystudio.com`? Da más confianza y cuesta poco.

---

## 17. Criterios de aceptación

El sitio se considera entregado cuando:

- [ ] Una reserva hecha desde el celular aparece en Google Calendar en menos de 60 segundos.
- [ ] La clienta recibe correo de confirmación y recordatorio 24 h antes.
- [ ] María recibe notificación en `crdiris2428@gmail.com` por cada reserva y cada formulario.
- [ ] El botón de WhatsApp abre un chat al **+593 99 536 8242** con mensaje previo cargado.
- [ ] LCP ≤ 2.5 s en móvil con conexión 4G simulada.
- [ ] Puntajes Lighthouse ≥ 90 en Rendimiento, Accesibilidad, Buenas Prácticas y SEO.
- [ ] Todos los pares de color cumplen contraste AA (verificado con herramienta).
- [ ] Todo el sitio es navegable con teclado, con foco visible.
- [ ] Con `prefers-reduced-motion` activo, no hay ninguna animación de movimiento.
- [ ] Términos, Privacidad y Cookies publicados y enlazados desde el pie.
- [ ] El banner de cookies bloquea GA4 hasta el consentimiento.
- [ ] Probado en iPhone y Android reales, no solo en simulador.
- [ ] La galería muestra al menos 12 trabajos reales.
- [ ] Cero testimonios inventados.
- [ ] Datos estructurados de negocio validados sin errores.
- [ ] María sabe cómo bloquear un día en su calendario para que no se agenden citas.

---

## Anexo A — Datos consolidados del cliente

| Campo | Valor |
|---|---|
| Marca | Aura Beauty Studio |
| Slogan | La belleza de sentirte tú |
| Descriptor | Nails · Lashes · Makeup (del logo) |
| WhatsApp | 0995368242 → formato internacional **+593 99 536 8242** |
| Correo | crdiris2428@gmail.com |
| Dirección | Armando Hidrovo y Daniel Reyes (casa esquinera) — ⚠️ falta ciudad |
| Instagram | @beautystudio_aura1 |
| TikTok | @beautystudio_aura1 |
| Horario | Lun–Sáb 08:00–19:00 · Dom 08:00–16:00 |
| Servicios | Uñas · Pestañas · Cejas · Maquillaje · Depilación · Masajes corporales |
| Zona horaria | America/Guayaquil (UTC−5) |

## Anexo B — Referencias analizadas

| Sitio | Qué tomamos | Qué **no** tomamos |
|---|---|---|
| glosslab.com | Ritmo editorial, tipografía grande, video de producto, secciones alternadas claro/oscuro | Su arquitectura de e-commerce: hoy es una tienda Shopify, no un sitio de reservas |
| paint-box.com | Arquitectura de conversión de un salón real: servicios claros, reserva siempre accesible | — |
| paint-box.com/pages/services | Estructura de la página de servicios con precio y duración visibles | — |
| apple.com (mencionada) | Precisión del espaciado, animación de scroll orquestada | Su longitud: es un sitio de producto, no de conversión local |

---

*Documento preparado para validación. Ninguna decisión marcada con ⚠️ está cerrada hasta confirmación escrita del cliente.*