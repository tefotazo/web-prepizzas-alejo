---
name: Pre-Pizzas Caseras
description: El flyer de la marca hecho página que funciona; pizarrón negro, pincel blanco y carteles rojos, con el pedido armable adentro.
colors:
  carbon: "#070707"
  carbon-2: "#121211"
  linea: "#2c2b2a"
  tiza: "#f7f4ef"
  tiza-2: "#c9c4bd"
  tiza-3: "#918b85"
  rojo: "#f10516"
  rojo-claro: "#ff4a3d"
  rojo-hondo: "#a8000c"
typography:
  display:
    fontFamily: "Protest Revolution, Arial Narrow, sans-serif"
    fontSize: "clamp(3.3rem, 15.4vw, 8.6rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "normal"
  guion:
    fontFamily: "Kaushan Script, cursive"
    fontSize: "clamp(1.35rem, 4.6vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.05
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.55rem, 3.4vw, 2.4rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0.005em"
  cifra:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.3rem, 6.4vw, 3.2rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0.005em"
    fontFeature: "tnum"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0.005em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  nota:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.35
rounded:
  control: "10px"
  panel: "14px"
  circulo: "50%"
spacing:
  gutter: "clamp(1rem, 4.5vw, 3.5rem)"
  ancho: "78rem"
  seccion: "clamp(3rem, 8vw, 5rem)"
  panel: "clamp(1rem, 3vw, 1.75rem)"
  pila: "1.1rem"
  control: "0.5rem"
components:
  boton:
    backgroundColor: "{colors.rojo}"
    textColor: "{colors.tiza}"
    typography: "{typography.headline}"
    padding: "0.7rem 1.6rem 0.65rem"
    height: "3.6rem"
  banda:
    backgroundColor: "{colors.rojo}"
    textColor: "{colors.tiza}"
    typography: "{typography.headline}"
    padding: "0.42em 1.1em 0.42em 0.9em"
  sello:
    backgroundColor: "{colors.rojo}"
    textColor: "{colors.tiza}"
    typography: "{typography.cifra}"
    padding: "0.55em 0.9em 0.5em"
  panel:
    textColor: "{colors.tiza}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel}"
  escalon:
    backgroundColor: "{colors.carbon-2}"
    textColor: "{colors.tiza-2}"
    rounded: "{rounded.control}"
    padding: "0.6rem 0.4rem 0.55rem"
  escalon-activo:
    backgroundColor: "{colors.rojo}"
    textColor: "{colors.tiza}"
    rounded: "{rounded.control}"
  opcion:
    textColor: "{colors.tiza-2}"
    rounded: "{rounded.control}"
    height: "3rem"
  campo:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.tiza}"
    rounded: "{rounded.control}"
    padding: "0.65rem 0.9rem"
    height: "3.1rem"
  stepper-boton:
    textColor: "{colors.tiza}"
    rounded: "{rounded.circulo}"
    size: "3.25rem"
  stepper-boton-hover:
    backgroundColor: "{colors.rojo}"
---

# Design System: Pre-Pizzas Caseras

## Overview

**Creative North Star: "El flyer pegado en el pizarrón"**

El sistema sale del flyer de la marca (design-marca.heic). La página es un pizarrón negro con grano. Encima van letras de pincel blanco y carteles rojos de borde rasgado, con la misma energía de volante de barrio que el original. Lo que en el flyer es impreso, acá funciona: el sello de precio se re-estampa cuando cambia el pedido, la escalera de promos se enciende con la cantidad y el botón de WhatsApp es un cartel rojo más.

Hay dos capas. La capa **pegada** (titular, sellos, bandas, guiones, bolsas de producto) va levemente girada, con sombra blanda y bordes irregulares. La capa **estructural** (paneles, controles del formulario, pie) es ortogonal, plana, de filete rojo o gris carbón, y no se inclina nunca. Las dos conviven en la misma pantalla: el afiche llama la atención y la estructura ordena el pedido.

La densidad es de afiche: titulares enormes, precios muy grandes y poco texto corrido. El mundo rechaza la plantilla de delivery, es decir hero partido, grilla de tarjetas blancas y botón píldora.

**Key Characteristics:**
- Fondo negro neutro con grano SVG y un halo radial apenas más claro arriba.
- El rojo es pincelada: bandas, sellos, trazos de subrayado y rayas de velocidad hechos con SVG con desplazamiento de ruido.
- Tres voces tipográficas de marca (pincel, guion y cartel) y una de lectura (Barlow).
- Lo pegado va girado entre -3° y -10°. La estructura va recta.
- Íconos de línea (Lucide, en currentColor) más la marca WhatsApp rellena.
- Fotos recortadas del flyer, sin fondo, apoyadas sobre el negro con sombra blanda.

## Colors

Un negro casi puro, una tiza cálida para la letra y un único rojo de marca saturado, con dos variantes funcionales.

### Primary
- **Rojo Afiche** (`rojo`): el rojo del flyer. Va en los SVG de pincel (banda, sello, trazo, rayas), en el filete de 2px de paneles y promos, en la palabra "Caseras", en el estado activo del escalón, en el hover del stepper y en el disco de WhatsApp del cierre.
- **Rojo Brasa** (`rojo-claro`): rojo aclarado para piezas chicas sobre negro, donde el rojo de marca pierde lectura. Lo usan íconos de tildes, notas, cabecera y pie, el ahorro en guion, "eventos"/"negocios" y el hover de enlaces.
- **Rojo Hondo** (`rojo-hondo`): solo para el pulgar de la barra de desplazamiento. Es una reserva oscura, no una superficie.

### Neutral
- **Carbón** (`carbon`): fondo de la página y de los campos de texto.
- **Carbón Alzado** (`carbon-2`): fondo de los escalones de promo sin seleccionar.
- **Línea** (`linea`): bordes de controles en reposo, separador punteado del total y stepper deshabilitado.
- **Tiza** (`tiza`): letra principal, texto sobre rojo y anillo de foco.
- **Tiza Gastada** (`tiza-2`): rótulos, notas, navegación en reposo y texto del pie.
- **Tiza Borrada** (`tiza-3`): placeholders, legal e íconos deshabilitados.

Los paneles no tienen color propio: son negro translúcido (`rgb(0 0 0 / 0.42)`) sobre el grano, y el pie usa `rgb(0 0 0 / 0.35)`.

### Named Rules
**The Tinta Roja Rule.** El rojo entra como pincelada (los SVG de borde rasgado) o como línea de 2px. El relleno rojo plano y geométrico se reserva para estados (escalón elegido, hover del stepper) y para el disco de WhatsApp.

**The Rojo Brasa Rule.** El rojo de marca va grande: pinceladas, titular y filetes. Todo rojo chico sobre negro (íconos de 1-1.6rem, texto de acento, hover) usa `rojo-claro`.

## Typography

**Display Font:** Protest Revolution (con Arial Narrow)
**Guion Font:** Kaushan Script (con cursive)
**Cartel Font:** Barlow Condensed 700/800 itálica (con Arial Narrow)
**Body Font:** Barlow 400/500/600 (con system-ui)

**Character:** el pincel seco grita el titular como en el afiche, el guion pone la voz de la familia en exclamaciones y acotaciones, y la condensada itálica en mayúsculas hace de cartel de precio. Barlow redonda se ocupa de que el pedido se lea bien.

### Hierarchy
- **Display** (Protest Revolution 400, `clamp(3.3rem, 15.4vw, 8.6rem)` en móvil y `clamp(5rem, 8.2vw, 8.2rem)` desde 1000px, interlineado 0.9, mayúsculas): solo el titular "VENTA DE / PRE-PIZZAS". Se engrosa con `-webkit-text-stroke: 0.05em currentColor` y `paint-order: stroke fill`, se inclina con `skewX(-9deg)` y el bloque gira -3°.
- **Guion** (Kaushan Script 400, interlineado 1.05): "Caseras" a escala display en rojo, el lema, "La mejor calidad, siempre", "¡Más cantidad, mejor precio!", "¡Te esperamos!" y el ahorro del total. Siempre girado.
- **Headline** (Barlow Condensed 800 itálica, `clamp(1.55rem, 3.4vw, 2.4rem)`, mayúsculas): títulos de sección sobre banda roja.
- **Cifra** (Barlow Condensed 800 itálica, cifras tabulares): precios en sellos, total (`clamp(2.3rem, 7vw, 3rem)`), número del stepper (3.4rem), cantidad de promo (hasta 4.2rem) y teléfono del cierre (hasta 5.5rem).
- **Label** (Barlow Condensed 800 itálica, 1.3rem, mayúsculas, `tiza-2`): rótulos del pedido ("¿Cuántos paquetes?", "Entrega", "Total").
- **Body** (Barlow 400, 1.0625rem, 1.5): párrafos y listas. Las listas con tilde van en 500, a 1.1rem.
- **Nota** (Barlow 400, 0.95rem, 1.35, `tiza-2`): ayudas del formulario, con ícono `rojo-claro` de 1.05rem.

### Named Rules
**The Tres Voces Rule.** El pincel es solo para el titular de portada. El guion es para exclamaciones y acotaciones de la familia, nunca para datos. Todo lo que es cartel, precio o rótulo va en condensada 800 itálica en mayúsculas. Las oraciones van en Barlow.

**The Cifra Tabular Rule.** Todo número que cambia con el pedido (stepper, total, teléfono) lleva `font-variant-numeric: tabular-nums`, para que el re-estampado no haga bailar el ancho.

## Layout

Un contenedor centrado de `ancho` (78rem) más dos `gutter` fluidos. Las secciones se separan con `seccion` (`clamp(3rem, 8vw, 5rem)`). En móvil la portada apila titular, lema, foto y pedido en una sola columna. Desde 1000px pasa a dos columnas `1.2fr / minmax(24rem, 0.8fr)`: titular y foto a la izquierda, lema y panel de pedido a la derecha. La foto se sale de su columna (112% de ancho, -4% de margen) como en el afiche.

Los recuadros de precios ("Venta por menor" y "Promociones") se ponen en dos columnas desde 900px. "Venta al por mayor" ocupa el ancho completo y se divide `0.9fr / 1.1fr` desde 900px. El pie pasa a dos columnas desde 760px. Dentro del pedido, el ritmo vertical es de 1.1rem y los controles hermanos se separan 0.5rem.

Desde 560px el campo del día pone rótulo e input en línea. Por debajo de 559px el botón del total ocupa todo el ancho y el cierre apila disco y número. Una barra fija inferior (filete rojo arriba, respeta `safe-area-inset-bottom`) repite total y "Pedir" cuando el total queda fuera de pantalla.

**The Banda Desbordada Rule.** La banda de título de cada panel se monta sobre el filete superior (`margin: -1.15em 0 0 -1.25rem`) y se sale por la izquierda, como los recuadros del flyer. El panel no tiene título aparte.

## Elevation & Depth

Es un sistema plano con papel pegado encima. Los paneles no tienen sombra: se separan del fondo por el filete rojo y un negro translúcido sobre el grano. La profundidad es solo de lo pegado: sellos, botones y bolsas de producto proyectan una sombra blanda hacia abajo con `filter: drop-shadow`, que sigue el borde rasgado del SVG y no forma una caja. La letra de pincel lleva una sombra corta para despegarse del grano.

### Shadow Vocabulary
- **Papel pegado** (`filter: drop-shadow(0 6px 10px rgb(0 0 0 / 0.5))`): sello de precio. El botón usa 0.45 en reposo.
- **Papel levantado** (`filter: drop-shadow(0 10px 14px rgb(0 0 0 / 0.55))`): botón en hover y bolsas de la pila mayorista.
- **Papel apretado** (`filter: drop-shadow(0 3px 5px rgb(0 0 0 / 0.5))`): botón presionado.
- **Tinta sobre grano** (`text-shadow: 0 0.04em 0.12em rgb(0 0 0 / 0.55)`): letra de pincel. "Caseras" usa `0 4px 12px rgb(0 0 0 / 0.5)`.
- **Barra flotante** (`box-shadow: 0 -10px 24px -8px rgb(0 0 0 / 0.7)`): solo la barra fija inferior.

### Named Rules
**The Papel Pegado Rule.** Solo proyecta sombra lo que está pegado encima (sello, cartel, bolsa). Los paneles y los controles del formulario quedan planos, y la sombra es siempre blanda, hacia abajo y en negro.

## Shapes

Hay dos geometrías. Lo estructural es redondeado y limpio: paneles con esquina de 14px y filete de 2px en `rojo`; escalones, opciones, campos y tarjetas de promo con esquina de 10px y borde de 2px; stepper y disco de WhatsApp en círculo. Lo pegado es irregular: banda, sello, trazo y rayas son SVG con `feTurbulence` + `feDisplacementMap`, estirados con `preserveAspectRatio="none"`. El sello es un cuadrilátero torcido, las bandas tienen vetas de pincel seco. Las rayas de velocidad (tres trazos rojos) acompañan sellos, titular y lema, espejadas a cada lado. El total se separa del formulario con una línea punteada de 2px en `linea`.

**The Inclinación Rule.** Lo pegado gira entre -3° y -10° (titular -3°, total -3°, promos -4°, sello -5°, "¡Te esperamos!" -6°, disco -8°, lema -9°, nota -10°). Paneles, controles y texto corrido no giran nunca.

## Components

### Buttons
Carteles rojos de borde rasgado, no píldoras.
- **Shape:** fondo `sello.svg` estirado al 100%, sin borde ni radio. Alto mínimo 3.6rem.
- **Primary (boton):** tiza sobre rojo, Barlow Condensed 800 itálica a 1.55rem en mayúsculas, ícono de WhatsApp de 1.15em y separación de 0.55em, padding `0.7rem 1.6rem 0.65rem`.
- **Hover / Active:** en hover gira -1.5°, escala 1.03, la sombra pasa a "papel levantado" y el brillo sube a 1.08, en 200ms con `ease`. Al presionar escala 0.98 con "papel apretado". En la barra fija es más chico (3rem, 1.3rem).
- **Texto (promo__elegir):** Barlow 600 en tiza, subrayado rojo de 2px con offset 0.25em. En hover pasa a `rojo-claro`. Alto mínimo 2.75rem.

### Stepper
- Botones circulares de 3.25rem con borde `rojo` de 2px y fondo vacío. En hover se rellenan de rojo y al presionar escalan 0.92. Deshabilitados: borde `linea` e ícono `tiza-3`.
- El número va en cifra de 3.4rem, sin flechas nativas y con caret rojo.

### Escalera de promos
- Tres escalones en grilla de 3 columnas con 0.5rem de separación. Esquina de 10px, borde `linea` de 2px y fondo `carbon-2`. La cantidad va en condensada 700 (1.05rem) y el precio en cifra de 1.6rem.
- El hover cambia el borde a `rojo`. El escalón alcanzado (`aria-pressed="true"`) se rellena de `rojo` con texto tiza.

### Inputs / Fields
- **Opción (retiro/envío):** cartel de 1.4rem en `tiza-2`, borde `linea` de 2px, esquina de 10px y alto mínimo de 3rem. El radio nativo queda invisible y cubre toda la opción. Hover: borde `tiza-3`. Elegida: borde rojo más `inset 0 0 0 1px` rojo y texto tiza.
- **Campo:** fondo `carbon`, borde `linea` de 2px, esquina de 10px, alto mínimo de 3.1rem, caret rojo y `color-scheme: dark`. El rótulo va en Barlow 600 encima.
- **Focus:** anillo global de 3px en `tiza` con 3px de separación y esquina de 4px. En los campos el borde pasa además a `rojo`.

### Cards / Containers
- **Panel:** esquina de 14px, filete `rojo` de 2px, fondo `rgb(0 0 0 / 0.42)` y padding `clamp(1rem, 3vw, 1.75rem)`, sin sombra. Lleva siempre una banda desbordada como título.
- **Promo:** filete `rojo` de 2px y esquina de 10px. Grilla cantidad / qué / precio y debajo la acción "Llevar esta promo". El precio es un sello.

### Navigation
- Cabecera mínima: dos anclas en Barlow 600 `tiza-2` (alto mínimo de 2.75rem). En hover pasan a tiza con subrayado rojo. A la derecha va el teléfono en cartel de 1.35rem con ícono WhatsApp `rojo-claro`. No hay menú móvil: la cabecera es la misma en todos los tamaños.

### Banda (signature)
Título de sección pintado sobre una pincelada roja (`banda.svg` o la variante `banda-2.svg`, que alternan entre paneles). Lleva ícono de línea de 1.15em con trazo de 1.9 y texto tiza en headline. Se monta sobre el filete del panel.

### Sello y re-estampado (signature)
Papel rojo de borde rasgado (`sello.svg`) girado -5°, con sombra "papel pegado". Puede llevar rayas de velocidad a los costados (`sello--rayas`) y apila línea (1.35em), subtítulo en Barlow 600 en mayúsculas (0.8em) y precio (2.9em). Cuando el total cambia, `pedido.ts` le vuelve a aplicar la clase `estampa`: cae desde escala 1.45, girado -7° y con desenfoque de 4px, y asienta en 460ms con `ease` (`cubic-bezier(0.16, 1, 0.3, 1)`). Con `prefers-reduced-motion` todas las animaciones y transiciones duran 1ms.

## Do's and Don'ts

### Do:
- **Do** poner cada título de sección sobre una banda de pincel rojo montada en el filete del panel, alternando `banda.svg` y `banda-2.svg`.
- **Do** mostrar todo precio como sello rojo rasgado y re-estamparlo cuando cambia.
- **Do** girar entre -3° y -10° lo que está pegado (sellos, guiones, titular) y dejar recta la estructura.
- **Do** usar `rojo-claro` para íconos y acentos chicos sobre negro y `rojo` para pinceladas y filetes.
- **Do** usar íconos de línea Lucide en currentColor, y WhatsApp relleno como ícono de marca.
- **Do** apoyar las fotos de producto recortadas directo sobre el negro, con sombra blanda.

### Don't:
- **Don't** usar tarjetas blancas, botones píldora ni un hero partido texto/foto de plantilla de delivery.
- **Don't** usar el pincel (Protest Revolution) fuera del titular de portada, ni el guion para precios o datos.
- **Don't** pintar el rojo como rectángulo plano de esquinas limpias para títulos o carteles: el rojo de marca entra rasgado.
- **Don't** dar sombra a paneles o controles. Solo lo pegado proyecta sombra.
- **Don't** introducir un segundo color de acento, ni grises fríos: los neutros son tiza cálida sobre carbón.
