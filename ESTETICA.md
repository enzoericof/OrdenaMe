# Guía de Estética de OrdenaMe

## Dirección visual

OrdenaMe debe verse como un sistema de productividad **oscuro, preciso, energético y premium**.

La referencia no es una app genérica de productividad ni una landing SaaS blanca y neutra.
La referencia correcta es:

- dashboard personal
- productividad gamificada
- control visual
- rendimiento
- tecnología sobria

La sensación buscada es:

**Notion + dashboard financiero + interfaz gamer sobria**

No debe verse:

- infantil
- genérico
- pastel
- corporativo frío
- tipo casa de apuestas
- recargado con efectos baratos

## Principios visuales

### 1. Oscuro real, no gris lavado

La base visual debe apoyarse en negros profundos y superficies oscuras con contraste controlado.

No usar fondos claros como base principal.

### 2. Magenta como energía principal

El color dominante de acento debe ser un **magenta intenso**, porque comunica energía, foco, acción y progreso.

Debe aparecer en:

- botones principales
- estados activos
- progreso
- selección
- métricas clave

### 3. Color con intención, no decoración

Cada color debe tener función.

- magenta: acción principal
- verde: progreso positivo
- rojo: alerta o pérdida de control
- naranja: advertencia o categoría secundaria
- violeta/rosa: variedad de visualización, nunca como ruido

### 4. Interfaz sobria y firme

La UI debe sentirse sólida.

Eso implica:

- bloques limpios
- superficies oscuras consistentes
- jerarquía tipográfica clara
- sombras suaves
- pocos efectos especiales

## Paleta oficial

```css
:root {
  --background: #050507;
  --sidebar: #09090D;
  --surface: #0B0B10;
  --card: #111118;
  --card-hover: #171720;
  --input: #15151D;

  --primary: #FF005C;
  --primary-hover: #FF2A75;
  --primary-soft: rgba(255, 0, 92, 0.16);

  --secondary: #EC4899;
  --accent: #A855F7;
  --danger: #E11D48;
  --danger-soft: rgba(225, 29, 72, 0.15);
  --warning: #F97316;
  --warning-soft: rgba(249, 115, 22, 0.15);
  --success: #22C55E;
  --info: #06B6D4;

  --text-main: #F8FAFC;
  --text-muted: #A1A1AA;
  --text-soft: #71717A;

  --border: #27272A;
}
```

## Aplicación por elemento

| Elemento | Color |
| --- | --- |
| fondo general | `#050507` |
| sidebar | `#09090D` |
| superficie secundaria | `#0B0B10` |
| cards | `#111118` |
| hover de cards | `#171720` |
| inputs | `#15151D` |
| botón principal | `#FF005C` |
| hover principal | `#FF2A75` |
| texto principal | `#F8FAFC` |
| texto secundario | `#A1A1AA` |
| texto débil | `#71717A` |
| borde estándar | `#27272A` |
| éxito | `#22C55E` |
| alerta | `#E11D48` |
| advertencia | `#F97316` |
| acento alternativo | `#EC4899` / `#A855F7` |

## Reglas de composición

### Fondos

- El fondo principal debe ser casi negro.
- Se puede usar textura o ruido muy sutil.
- Si hay gradiente, debe ser suave y amplio, aplicado al fondo general, nunca a cada card.

### Cards

- Las cards deben ser oscuras, compactas y limpias.
- El fondo de una card debe ser plano o con variación mínima.
- Deben sentirse como paneles sólidos, no como stickers brillantes.

### Bordes

- El borde estándar debe ser discreto.
- Debe ayudar a separar superficies, no llamar la atención.
- Si una card necesita borde, usar `--border` o una variación apenas visible.

### Sombras

- Usar sombras suaves, profundas y difusas.
- Nunca usar glow exagerado permanente.
- Los glows solo pueden aparecer como acento puntual en estados activos o CTA.

### Botones

- CTA principal: magenta.
- CTA secundario: superficie oscura con borde tenue.
- Hover: cambio sutil de tono, no animaciones agresivas.

### Tipografía

- Tipografía fuerte, moderna y limpia.
- Títulos con peso alto.
- Texto secundario en gris frío.
- Evitar estilos excesivamente redondeados o juguetones.

## Lo que sí debe transmitir

- control
- claridad
- rendimiento
- seguimiento
- disciplina
- progreso
- energía visual

## Lo que no debe transmitir

- improvisación
- decoración innecesaria
- look de template
- look cripto genérico
- look casino
- look gamer adolescente

## Prohibiciones explícitas

### Nunca usar cards degradadas como componente por defecto

No usar cards con:

- degradado interno fuerte
- brillo radial visible dentro de la card
- transiciones verde/menta/cian como bloque principal
- sensación de banner promocional

La imagen de referencia que mostraste **no debe marcar el estilo de card**.
Puede servir solo como referencia de intensidad visual general, no de implementación exacta.

### Nunca usar ese bordecito fino brillante

No usar:

- líneas finas brillantes alrededor de cards grandes
- bordes con glow suave permanente
- contornos que “dibujan” el bloque demasiado

Ese recurso hace que la interfaz se vea:

- vieja
- frágil
- más publicitaria que producto

### Nunca repetir un efecto llamativo en toda la UI

No repetir en todos lados:

- gradientes
- glow
- sombras de color
- acentos neón

Los efectos deben reservarse para:

- botón principal
- elemento seleccionado
- métrica crítica
- progreso activo

## Cómo deben ser las cards correctas

### Card correcta

- fondo oscuro plano
- borde casi invisible o sin borde
- radio amplio pero sobrio
- buen padding
- sombra muy sutil
- jerarquía clara entre título, valor y texto auxiliar

### Card incorrecta

- gradiente vistoso
- borde brillante
- glow permanente
- demasiado aire “promo”
- demasiado parecido a hero card de anuncio

## Estilo de gráficos y métricas

Los gráficos deben verse nítidos y vivos sobre fondo oscuro.

- series principales: magenta
- positivos: verde
- advertencias: naranja
- comparativas secundarias: rosa o violeta
- ejes y grillas: grises muy suaves

No usar:

- demasiados colores al mismo tiempo
- paletas arcoíris
- fondos dentro del gráfico que compitan con la data

## Estilo de producto esperado

OrdenaMe no debe parecer una web de presentación con dashboard pegado.
Debe parecer directamente un **sistema**.

Eso implica:

- densidad visual equilibrada
- navegación firme
- superficies consistentes
- foco en datos, progreso y estado

## Resumen operativo

Si hay una duda estética, decidir con esta regla:

**menos efecto, más estructura**

Y con esta segunda regla:

**oscuro premium con acento magenta, nunca oscuro decorado con degradados llamativos**

## Frases guía para diseñar

- “Convertí tu vida en un dashboard.”
- “Tu sistema personal para organizar hábitos, metas, tiempo y finanzas.”
- “Productividad con sensación de control.”
- “Un panel personal, serio, moderno y con energía.”
