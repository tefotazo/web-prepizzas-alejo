---
name: Prepizzas de la casa
description: Tablero de letras ranurado que la familia actualiza a mano; el pedido se arma en el tablero y sale por WhatsApp.
colors:
  fieltro: "#17231e"
  ranura: "#0b130f"
  letra: "#f3efe4"
  letra-2: "#b9bfb3"
  letra-3: "#8e978c"
  amarillo: "#f2c230"
  rojo: "#e5482f"
  alu-1: "#e1e4e0"
  alu-2: "#a4aaa5"
  alu-3: "#6d746f"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4rem, min(20vw, 21vh), 11.5rem)"
    fontWeight: 600
    lineHeight: 0.86
    letterSpacing: "0.03em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 7vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "0.06em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.45rem, 3.6vw, 2.35rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.06em"
  cifra:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.06em"
    fontFeature: "tnum"
  boton:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.16em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  body-small:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.35
rounded:
  plaqueta: "3px"
spacing:
  marco: "10px"
  marco-desktop: "14px"
  paso: "10px"
  paso-desktop: "12px"
  gutter: "clamp(1.25rem, 5vw, 4rem)"
  ancho: "76rem"
components:
  button-primary:
    backgroundColor: "{colors.letra}"
    textColor: "{colors.fieltro}"
    typography: "{typography.boton}"
    rounded: "{rounded.plaqueta}"
    padding: "0.95rem 1.5rem 0.85rem"
    height: "3.5rem"
  button-primary-hover:
    backgroundColor: "{colors.amarillo}"
    textColor: "{colors.fieltro}"
  button-barra:
    backgroundColor: "{colors.fieltro}"
    textColor: "{colors.letra}"
    rounded: "{rounded.plaqueta}"
    padding: "0.75rem 1.25rem 0.65rem"
    height: "3rem"
  button-barra-hover:
    backgroundColor: "{colors.ranura}"
    textColor: "{colors.amarillo}"
  stepper-button:
    textColor: "{colors.letra}"
    rounded: "{rounded.plaqueta}"
    size: "3rem"
  stepper-button-hover:
    textColor: "{colors.amarillo}"
  stepper-button-disabled:
    textColor: "{colors.letra-3}"
  option:
    textColor: "{colors.letra-3}"
    rounded: "{rounded.plaqueta}"
    padding: "0.4rem 1rem"
    height: "3rem"
  option-selected:
    textColor: "{colors.amarillo}"
  option-comercio-selected:
    textColor: "{colors.rojo}"
  input:
    backgroundColor: "{colors.ranura}"
    textColor: "{colors.letra}"
    rounded: "{rounded.plaqueta}"
    padding: "0.75rem 1rem"
    height: "3.25rem"
  placa:
    rounded: "{rounded.plaqueta}"
    padding: "clamp(1.75rem, 5vw, 3.5rem)"
  barra:
    backgroundColor: "{colors.alu-2}"
    textColor: "{colors.fieltro}"
    padding: "0.6rem"
---

# Design System: Prepizzas de la casa

## Overview

**Creative North Star: "El tablero de letras de la familia"**

El sitio entero es un tablero de fieltro ranurado, el que se cuelga en el mostrador y se actualiza a mano. La pantalla es el tablero: un marco de aluminio cepillado fijo recorre los cuatro bordes del viewport y el fieltro verde negro con ranuras horizontales es el suelo de toda la página. Encima sólo hay letras plásticas condensadas, en mayúscula, apenas torcidas como cuando se encastran a mano, más un único cartelito claro que es la acción.

La densidad es la de un menú de pared: renglones separados por ranuras, precio a la derecha, controles de cantidad que son más letras sobre el mismo renglón. No hay tarjetas flotantes ni fotos; las secciones secundarias son tableros más chicos (placas) con su propio marco de aluminio. El movimiento es material: cuando un número cambia, sólo las letras que cambiaron caen y se encastran una por una.

Rechazo confirmado en el contrato de dirección: el hero con foto, la grilla de tarjetas y el botón rojo de cadena.

**Key Characteristics:**
- Fieltro oscuro con ranuras repetidas cada `--paso` como fondo de toda la página.
- Marco de aluminio fijo en los bordes del viewport; placas con marco propio para las secciones.
- Letras condensadas en mayúscula, colocadas letra por letra con desalineado determinista.
- Amarillo y rojo existen como letras de color, no como superficies.
- Una sola superficie clara sobre el fieltro: la plaqueta de WhatsApp.
- Encastre letra por letra como única animación de contenido.

## Colors

Un tablero casi negro verdoso, letras crema y dos letras de color de alta saturación, enmarcado en tres grises de aluminio.

### Primary
- **Amarillo letra** (`amarillo`): el color de lo que importa ahora. Precios, la palabra "HAY", el total, el producto elegido, la opción de entrega seleccionada y su subrayado, el hover de enlaces y de la plaqueta, el anillo de foco y la selección de texto.

### Secondary
- **Rojo letra** (`rojo`): el camino del comercio. Título de la sección mayorista, la opción "Comercio" seleccionada y la salsa de las prepizzas dibujadas.

### Neutral
- **Fieltro** (`fieltro`): suelo de toda la página, texto de la plaqueta clara y fondo del botón dentro de la barra de aluminio.
- **Ranura** (`ranura`): el surco. Línea oscura del fondo ranurado, separadores de 2px entre renglones y listas, fondo del campo de texto, hover del botón de la barra.
- **Letra** (`letra`): letras blancas plásticas, texto principal y superficie de la plaqueta.
- **Letra gastada** (`letra-2`): bajadas, detalles de producto, notas, rótulos secundarios ("ENTREGA", "TOTAL"), pie.
- **Letra apagada** (`letra-3`): estados en reposo (cantidad 0, opciones no elegidas, placeholder, legal).
- **Aluminio claro / medio / oscuro** (`alu-1`, `alu-2`, `alu-3`): `alu-2` es el marco del viewport y de cada placa; `alu-1` a `alu-2` forman el degradé cepillado de la barra fija; `alu-3` es el borde del campo de texto y el pulgar de la barra de scroll.

### Named Rules
**La Regla de la Letra de Color.** Amarillo y rojo se aplican a letras, trazos y subrayados, nunca a fondos de sección o tarjeta. La única superficie amarilla es el hover de la plaqueta.

**La Regla del Rojo Mayorista.** El rojo señala el canal de comercios (y la salsa). No se usa para la acción de pedido ni para alertas genéricas.

## Typography

**Display Font:** Barlow Condensed 500/600 (con Arial Narrow, sans-serif)
**Body Font:** Barlow 400/500 (con system-ui, sans-serif)

**Character:** La condensada es la letra plástica del tablero: siempre mayúscula, espaciada, con números tabulares. Barlow, de la misma familia, es la tiza del texto corrido y se queda en caja baja.

### Hierarchy
- **Display** (600, `clamp(4rem, min(20vw, 21vh), 11.5rem)`, 0.86; en ≥1100px `clamp(8rem, min(13vw, 26vh), 13.5rem)`, 0.82, una palabra por línea): sólo "HOY HAY" en el primer tablero.
- **Headline** (600, `clamp(2.4rem, 7vw, 4.75rem)`, 0.98, máx. 18ch, `text-wrap: balance`): títulos de cada placa.
- **Title** (600, `clamp(1.45rem, 3.6vw, 2.35rem)`, 1): nombre de producto en el renglón; mismas proporciones para claves de lista, condiciones y opciones de entrega (1.3 a 2.25rem).
- **Cifra** (600, `clamp(2.4rem, 6vw, 3.6rem)`, tabular): total del pedido y "= $ x cada una". Los precios del renglón usan 1.35 a 2.1rem.
- **Botón** (600, 1.4rem, 0.08em): texto de la plaqueta.
- **Label** (600, `clamp(0.95rem, 1.6vw, 1.15rem)`, 0.16em, mayúscula): rótulos chicos del tablero (marca, horario); "ENTREGA" y "TOTAL" a 1.15rem / 0.14em.
- **Body** (400, 1.0625rem, 1.55): bajada, historia (1.15rem, máx. 36rem), texto de listas (máx. 42rem).
- **Body small** (400, 0.95rem, 1.35): detalle de producto, notas de entrega, pie.

### Named Rules
**La Regla de la Letra Puesta a Mano.** Todo texto en la condensada se compone letra por letra (componente de letras): cada letra lleva un desplazamiento vertical de ±0.025em y una rotación de ±1.2°, derivados de un ruido determinista por posición y carácter, y una sombra corta hacia abajo. Nunca aleatorio en cada carga; nunca recto.

**La Regla de las Dos Voces.** Mayúscula condensada para lo que está en el tablero (nombres, precios, cantidades, títulos, acciones); Barlow en caja baja para lo que explica. No se mezclan dentro de un mismo elemento.

## Layout

Una columna centrada de `ancho` (76rem) más dos `gutter`, con padding lateral de `gutter + marco` para que nada toque el marco fijo. El primer tablero ocupa `100svh` y contiene el pedido completo: rótulos arriba, "HOY HAY", renglones, entrega y total con la plaqueta. En ≥1100px se parte en dos columnas (0.8fr / 1.2fr): "HOY HAY" y bajada a la izquierda, pedido a la derecha.

El renglón de producto es una grilla: nombre y detalle a la izquierda; precio y control de cantidad a la derecha, apilados en móvil y en una sola fila en ≥760px. Las secciones siguientes se separan con `clamp(4.5rem, 12vw, 8rem)` y viven dentro de placas. Breakpoints observados: 560, 760, 900, 1100px. En ≥900px `marco` pasa de 10 a 14px y `paso` de 10 a 12px.

### Named Rules
**La Regla de la Ranura.** Toda lista se apoya en ranuras: borde superior e inferior de 2px en `ranura` entre renglones, filas de lista, condiciones y entrega. Nada flota sin una ranura debajo; la barra fija se ancla al marco (`left/right/bottom: marco`).

**Pendiente: letras sobre la ranura.** El fondo ranurado repite cada `paso`, pero las líneas base de las letras todavía no están alineadas a ese paso. Es un objetivo abierto del mundo, no una propiedad del build actual; no asumirlo al construir superficies nuevas ni simularlo con valores sueltos.

## Elevation & Depth

Profundidad física con luz cenital: las cosas elevadas proyectan sombra hacia abajo y lo hundido lleva sombra interior arriba. No hay brillos de color ni sombras desplazadas en diagonal. El fieltro lleva un grano de ruido fijo al 9% y las ranuras con una arista de luz de 1px blanco al 3%.

### Shadow Vocabulary
- **Letra** (`text-shadow: 0 0.04em 0.06em rgb(0 0 0 / 0.6)`): cada letra plástica. Se quita sobre aluminio.
- **Pieza** (`filter: drop-shadow(0 2px 1.5px rgb(0 0 0 / 0.65))` en íconos +/−; `drop-shadow(0 3px 3px rgb(0 0 0 / 0.55))` en prepizzas dibujadas): piezas sueltas encastradas.
- **Plaqueta** (`box-shadow: 0 1px 0 rgb(255 255 255 / 0.6) inset, 0 8px 18px -6px rgb(0 0 0 / 0.65), 0 2px 3px rgb(0 0 0 / 0.4)`; activa `0 1px 0 rgb(255 255 255 / 0.6) inset, 0 3px 6px -2px rgb(0 0 0 / 0.6)`): el cartel claro, que baja 2px al presionarse.
- **Marco** (`inset 0 0 0 1px rgb(0 0 0 / 0.5), inset 0 6px 14px rgb(0 0 0 / 0.55)` en el viewport; la placa suma `0 14px 30px -12px rgb(0 0 0 / 0.7)`): el fieltro hundido dentro del aluminio.
- **Surco** (`inset 0 2px 5px rgb(0 0 0 / 0.6)`): campo de texto.
- **Barra** (`0 -8px 20px -6px rgb(0 0 0 / 0.55)`): barra fija sobre el contenido.

### Named Rules
**La Regla de la Luz Cenital.** Toda sombra es negra y cae hacia abajo (y positivo); lo hundido es interior arriba. La única excepción es la barra fija, que se apoya en el marco inferior y proyecta hacia arriba sobre el contenido que tapa. Una sombra que no se explica por esa luz no pertenece al tablero.

## Shapes

Esquinas casi rectas de 3px en todo lo interactivo y en las placas: plástico moldeado, no píldoras. Los bordes de material son gruesos y planos: marco del viewport de `marco` (10/14px) en `alu-2` con un filo de 1px blanco al 35%; placas con 8px (6px en móvil) del mismo aluminio. La única forma orgánica son las prepizzas dibujadas en SVG (masa, salsa y pinchazos de tenedor), cada una girada en pasos de 47°.

## Components

### Buttons
Tacto de cartel plástico: claro, pesado, presionable.
- **Shape:** esquina casi recta (3px).
- **Primary (plaqueta):** fondo `letra`, texto `fieltro` en la condensada a 1.4rem; alto mínimo 3.5rem; ícono de WhatsApp a 1.1em. Variante grande del tablero a `clamp(1.35rem, 2.4vw, 1.6rem)`; en <560px ocupa el ancho completo.
- **Hover / Focus:** hover pasa el fondo a `amarillo` (180ms, `--ease`); activo baja 2px y acorta la sombra; foco con anillo amarillo de 3px a 5px de distancia.
- **Plaqueta en barra:** sobre aluminio se invierte: fondo `fieltro`, texto `letra`; hover `ranura` con texto amarillo.
- **Control de cantidad:** botones transparentes de 3rem con + y − en trazo cuadrado de 3.2 y sombra de pieza; hover amarillo, activo baja 2px, deshabilitado en `letra-3` al 45%. El número entre ambos es una letra a 1.9rem que va de `letra-3` (0) a `letra` cuando el renglón está elegido.

### Chips (opciones de entrega)
- **Style:** letras en la condensada sobre el fieltro, sin fondo ni borde, alto mínimo 3rem; el radio nativo queda invisible encima.
- **State:** reposo `letra-3`, hover `letra`, seleccionada `amarillo` con una barra de 3px debajo (la ranura pintada); "Comercio" seleccionada pasa a `rojo`. Foco: anillo amarillo de 3px.

### Cards / Containers (placa)
- **Corner Style:** 3px.
- **Background:** el mismo fieltro ranurado; la placa no tiene relleno propio.
- **Shadow Strategy:** Marco (ver Elevation & Depth).
- **Border:** 8px `alu-2` (6px en <560px, con margen negativo para ganar ancho).
- **Internal Padding:** `clamp(1.75rem, 5vw, 3.5rem)`.

### Inputs / Fields
- **Style:** surco hundido: fondo `ranura`, borde de 2px `alu-3`, 3px de radio, alto mínimo 3.25rem, cursor amarillo, placeholder `letra-3`.
- **Focus:** borde `amarillo` más el anillo global amarillo a 2px.

### Navigation (barra fija)
Aparece sólo cuando el total sale de pantalla. Tira de aluminio cepillado (degradé `alu-1` a `alu-2`) anclada al marco abajo, con el resumen en letras `fieltro` sin sombra y la plaqueta invertida. Entra y sale deslizando 320ms con `--ease`.

### Renglón de producto
La unidad del tablero: nombre (title), detalle (body small), precio amarillo y control de cantidad, separados por ranuras de 2px. Con cantidad > 0 el renglón queda "elegido": nombre en amarillo, número en `letra` y subtotal "= $ x" en `letra-2` debajo del precio.

### Encastre
Cuando un valor cambia, sólo las letras distintas (comparadas desde la derecha) caen 0.45em desde arriba con −9° de giro y 3px de desenfoque, en 420ms con `cubic-bezier(0.16, 1, 0.3, 1)` y 40ms de escalonado (70ms en la docena). Con `prefers-reduced-motion` todo se reduce a 1ms.

## Do's and Don'ts

### Do:
- **Do** componer todo texto de tablero con el componente de letras, para heredar desalineado, sombra y encastre.
- **Do** separar cada renglón o fila con ranuras de 2px en `ranura`.
- **Do** reservar la plaqueta para la acción de WhatsApp; ninguna otra acción usa superficie clara sobre el fieltro.
- **Do** usar el amarillo para lo elegido, lo cobrado y el foco; el rojo sólo para el canal de comercios.
- **Do** poner las secciones nuevas dentro de una placa con marco de aluminio de 8px.
- **Do** mantener los controles del pedido en 3rem o más y ningún objetivo táctil por debajo de 2.75rem.

### Don't:
- **Don't** armar hero con foto, grilla de tarjetas o botón rojo de cadena.
- **Don't** pintar fondos de sección o tarjeta en amarillo o rojo.
- **Don't** usar degradés de color decorativos; los únicos degradés son las ranuras del fieltro y el aluminio cepillado.
- **Don't** redondear más de 3px ni usar formas de píldora.
- **Don't** escribir texto corrido en la condensada mayúscula, ni rótulos de tablero en Barlow caja baja.
- **Don't** usar sombras desplazadas en diagonal ni brillos de color; hacia arriba sólo la barra fija.
