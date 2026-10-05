# Especificación completa --- Blog sobre Freddie Mercury

## 1. Objetivo del proyecto

Desarrollar un blog educativo, visual e interactivo sobre Freddie
Mercury para una tarea de Lenguaje.

El sitio debe contar la historia de Freddie Mercury mediante una
narrativa clara:

**Inicio → Biografía → Queen → Música → Presentaciones → Legado →
Fuentes**

No utilizar frameworks. El proyecto debe desarrollarse únicamente con:

-   HTML5
-   CSS3
-   JavaScript vanilla

## 2. Arquitectura de archivos

IMPORTANTE: el proyecto debe utilizar **varios archivos HTML**, no un único `index.html` gigantesco. `index.html` será la portada y punto de entrada. Cada sección principal tendrá su propio archivo HTML dentro de `pages/`.

```text
freddie-mercury-blog/
├── index.html
├── pages/
│   ├── biografia.html
│   ├── queen.html
│   ├── musica.html
│   ├── presentaciones.html
│   ├── legado.html
│   └── fuentes.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── (opcional: solo si posteriormente se decide descargar/localizar recursos)
```

### Responsabilidad de cada HTML

- `index.html`: portada/hero principal.
- `pages/biografia.html`: línea temporal completa.
- `pages/queen.html`: información general de Queen e integrantes.
- `pages/musica.html`: las ocho canciones y sus enlaces.
- `pages/presentaciones.html`: presencia escénica y Live Aid.
- `pages/legado.html`: legado musical, artístico e influencia.
- `pages/fuentes.html`: fuentes consultadas.

No crear más páginas HTML salvo que sea estrictamente necesario.

### CSS y JavaScript compartidos

Todos los HTML deben utilizar el mismo `css/styles.css` y `js/main.js`. Desde `index.html` las rutas serán `css/styles.css` y `js/main.js`; desde páginas internas serán `../css/styles.css` y `../js/main.js`.

### Navegación compartida

Todas las páginas deben tener la misma navegación: `Inicio | Biografía | Queen | Música | Presentaciones | Legado | Fuentes`. Los enlaces deben funcionar correctamente tanto desde la raíz como desde `pages/`.

### Navbar y footer compartidos

Como no se utiliza ningún framework, `main.js` puede generar los elementos compartidos, especialmente navbar y footer, para evitar duplicación innecesaria. El script debe detectar si la página está en la raíz o dentro de `pages/` y generar las rutas correctas. Si Codex considera más sencillo mantener un pequeño marcado compartido en cada HTML, puede hacerlo, pero nunca duplicar grandes bloques innecesariamente.

### Regla fundamental

No convertir nuevamente el proyecto en una sola página de más de mil líneas. Cada HTML debe contener únicamente el contenido correspondiente a su sección.

- HTML: estructura y contenido de cada página.
- `css/styles.css`: diseño visual, responsive, animaciones y componentes.
- `js/main.js`: navegación compartida, menú móvil, timeline, integrantes, animaciones y demás interacciones.

## 3. Navegación principal

Crear un navbar fijo o sticky con:

-   Inicio
-   Biografía
-   Queen
-   Música
-   Presentaciones
-   Legado
-   Fuentes

En escritorio debe mostrarse horizontalmente.

En móvil debe convertirse en un menú hamburguesa.

El desplazamiento entre secciones debe ser suave.

La navegación debe indicar visualmente la sección activa mediante
JavaScript o `IntersectionObserver`.

------------------------------------------------------------------------

# 4. Sistema visual

## Concepto

La estética debe transmitir:

-   elegancia
-   rock clásico
-   teatralidad
-   personalidad
-   nostalgia
-   sofisticación

Pero debe evitar competir con las fotografías.

Las imágenes proporcionadas son muy coloridas, oscuras o en blanco y
negro. Por ello la interfaz debe utilizar una paleta neutra.

## Paleta

Usar principalmente:

-   `#0B0B0B` --- negro
-   `#151515` --- negro secundario
-   `#222222` --- superficies
-   `#F2F2F2` --- texto principal
-   `#B8B8B8` --- texto secundario
-   `#FFFFFF` --- blanco
-   `#C6A15B` --- dorado muy discreto para detalles
-   `rgba(255,255,255,0.08)` --- bordes y superficies transparentes

No utilizar grandes bloques de colores saturados.

El dorado debe utilizarse únicamente para:

-   años
-   líneas
-   bordes destacados
-   botones importantes
-   pequeños acentos

## Tipografía

Para títulos utilizar una tipografía excéntrica, elegante y teatral,
inspirada en la personalidad de Freddie Mercury.

Preferiblemente:

-   `Bebas Neue`
-   `Cinzel`
-   `Playfair Display`
-   o una combinación similar.

Para texto:

-   `Inter`
-   `Montserrat`
-   `Source Sans 3`

La prioridad es la legibilidad.

No utilizar una tipografía extravagante para párrafos.

### Tamaños orientativos

Desktop:

-   H1: 64--88px
-   H2: 48--64px
-   H3: 28--36px
-   texto: 17--19px
-   texto secundario: 15--17px
-   botones: 15--17px

Tablet:

Reducir aproximadamente 15--20%.

Móvil:

-   H1: 42--52px
-   H2: 34--42px
-   H3: 24--28px
-   texto: 16--18px

El texto siempre debe tener contraste suficiente.

------------------------------------------------------------------------

# 5. INICIO

## Fondo

Utilizar como fondo de pantalla completo:

https://w.wallhaven.cc/full/47/wallhaven-47jxp3.jpg

IMPORTANTE:

La imagen debe utilizarse como fondo completo de la sección, no como una
pequeña imagen dentro de una tarjeta.

Aplicar una capa overlay oscura para asegurar la legibilidad.

No deformar la imagen.

Usar:

``` css
background-size: cover;
background-position: center;
```

y adaptar `background-position` para móvil si es necesario.

## Contenido

Hero de pantalla completa.

Mostrar:

### FREDDIE MERCURY

**Una vida detrás de una leyenda**

Texto:

> Freddie Mercury fue una de las figuras más reconocidas de la historia
> del rock. Como vocalista de Queen, destacó por su voz, su creatividad
> y una presencia escénica que transformó cada presentación en un
> espectáculo.

Botón:

**CONOCE SU HISTORIA**

El botón debe desplazarse a `#biografia`.

Añadir un pequeño indicador visual de scroll.

------------------------------------------------------------------------

# 6. BIOGRAFÍA

## Título

**La vida de Freddie Mercury**

Introducción:

> Antes de convertirse en la voz de Queen, Freddie Mercury vivió una
> historia marcada por diferentes culturas, cambios de residencia,
> formación musical y una búsqueda constante de identidad artística. Su
> trayectoria terminó convirtiéndolo en uno de los intérpretes más
> reconocidos de la música popular.

## Timeline

Debe ser una línea vertical.

NO modificar la cantidad de años.

NO agregar otros años.

NO eliminar ningún año.

Los únicos años de la timeline son:

1.  1946
2.  1955
3.  1964
4.  1970
5.  1973
6.  1975
7.  1985
8.  1986
9.  1991

## Diseño

Crear una línea vertical central o desplazada hacia la izquierda en
desktop.

Cada año debe estar dentro de un círculo.

Ejemplo:

``` text
        1946
          ●
          │
          │
      1955 ●
          │
          │
      1964 ●
```

Cada círculo debe ser clickeable.

Al hacer clic:

-   activar el año
-   desplegar su card
-   mostrar título
-   mostrar descripción
-   mostrar imagen
-   animar suavemente la aparición

## Card

La card debe tener:

``` text
┌───────────────────────────────────────────────┐
│ TÍTULO                                        │
│                                               │
│ Descripción histórica                         │
│                                               │
│                              ┌─────────────┐  │
│                              │    IMAGEN   │  │
│                              │ difuminada  │  │
│                              └─────────────┘  │
└───────────────────────────────────────────────┘
```

La imagen debe estar alineada a la derecha.

Debe utilizarse un efecto visual de imagen difuminada/soft fade:

-   `filter`
-   overlay
-   máscara o gradiente
-   transparencia en bordes

La imagen debe seguir siendo reconocible.

En móvil:

-   la línea se desplaza hacia la izquierda
-   la card ocupa prácticamente todo el ancho
-   la imagen pasa debajo del texto o se mantiene a la derecha
    únicamente si hay suficiente espacio

## Contenido exacto de la timeline

### 1946 --- Nace Farrokh Bulsara

Freddie Mercury nació el 5 de septiembre de 1946 con el nombre de
Farrokh Bulsara en Stone Town, Zanzíbar. Su infancia transcurrió entre
diferentes influencias culturales, algo que posteriormente formaría
parte de su identidad.

### 1955 --- Comienza su formación musical

Durante su infancia comenzó a desarrollar sus capacidades musicales y
recibió formación en piano. La música comenzó a ocupar un lugar
importante en su vida y posteriormente se convirtió en una de las bases
de su carrera artística.

### 1964 --- Su familia se establece en Inglaterra

La familia Bulsara se trasladó a Inglaterra. Este cambio sería
fundamental para el futuro de Freddie, ya que allí entraría en contacto
con una escena musical que le permitiría desarrollar progresivamente su
carrera.

### 1970 --- Nace Queen

Freddie Mercury se incorporó al proyecto musical formado alrededor de
Brian May y Roger Taylor. La agrupación adoptó finalmente el nombre
Queen, iniciando una de las historias más importantes del rock.

### 1973 --- Primer álbum

Queen publicó su primer álbum de estudio, titulado `Queen`. El
lanzamiento marcó el comienzo de su carrera discográfica y permitió que
la banda comenzara a construir una identidad musical propia.

### 1975 --- Bohemian Rhapsody

Queen publicó `Bohemian Rhapsody`, una composición de estructura poco
convencional que combinaba diferentes estilos musicales. La canción se
convirtió en uno de los mayores éxitos de la banda y en una de las obras
más reconocidas asociadas con Freddie Mercury.

### 1985 --- Live Aid

Queen participó en Live Aid en el estadio de Wembley. La actuación de
aproximadamente 21 minutos se convirtió en uno de los momentos más
recordados de la historia de la banda y destacó especialmente por la
capacidad de Freddie para conectar con el público.

### 1986 --- Último concierto con Queen

Queen realizó su última gira con Freddie Mercury. La última presentación
de aquella gira tuvo lugar en Knebworth Park. Después de esta etapa,
Freddie no volvería a realizar otra gira de conciertos con Queen.

### 1991 --- Fallece Freddie Mercury

Freddie Mercury falleció el 24 de noviembre de 1991 en Londres. Su
muerte puso fin a su vida, pero no a su influencia. Su música y su
figura continuaron alcanzando nuevas generaciones.

## Imágenes de la timeline

Utilizar exactamente estos recursos en el orden correspondiente:

1946 --- Freddie bebé:
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuv9J-8vwOEw9j9x32answrIdRRxtMVS_OIFFk7UkmCzUYGKcxBehm8kA&s=10

1955 --- Freddie joven:
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9J-8vwOEw9j9x32answrIdRRxtMVS_OIFFk7UkmCzUYGKcxBehm8kA&s=10

1964 --- Freddie y su familia:
https://i.pinimg.com/736x/26/9d/c4/269dc4334ac54cd4ecaa80ecb3d7bc37.jpg

1970 --- Queen se crea:
https://cloudfront-us-east-1.images.arcpublishing.com/infobae/IU46VWJWFNFFJIG2XIALBLRCHU.jpg

1973 --- Primer álbum:
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2sAYdNhcBcxao5I2T9Xn78HWLhpvCE22-1MF_5GREaBDpSTPDvWKkpMo&s=10

1975 --- Bohemian Rhapsody:
https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg

1985 --- Live Aid:
https://guitar.com/wp-content/uploads/2023/01/Queen-Live-Aid-Concert@2000x1500.jpg

1986 --- Último concierto:
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRhQ-lppSRh1DiRWNTt7oB8jzw0AWUL5Ad1u2-IH9EVQwreqCIHTACNQ&s=10

1991 --- Última fotografía:
https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2019%2F09%2F02141523%2FFreddie-Mercury-en-el-jardin-de-su-mansion-en-Londres-1920-1.jpg?auth=6a0482cc2444c675bcfed53c2877113beccd6bb50302d65e747da6fe67dc6026&smart=true&width=1200&height=900&quality=85

------------------------------------------------------------------------

# 7. QUEEN

## Fondo

Utilizar como fondo completo:

https://w.wallhaven.cc/full/p2/wallhaven-p2gylm.jpg

Aplicar overlay oscuro neutro.

## Layout

Desktop:

``` text
┌───────────────────────────────┬─────────────────────────────┐
│                               │                             │
│      INFORMACIÓN DE QUEEN     │       INTEGRANTES           │
│                               │                             │
│      texto general            │     ○       ○              │
│                               │                             │
│      historia                 │     ○       ○              │
│                               │                             │
└───────────────────────────────┴─────────────────────────────┘
```

Izquierda:

Información general de Queen.

Derecha:

Los cuatro integrantes.

## Información general

Título:

**Queen**

Texto:

> Queen fue una banda británica formada alrededor de cuatro músicos con
> personalidades y estilos diferentes: Freddie Mercury, Brian May, Roger
> Taylor y John Deacon. La combinación de sus talentos permitió que la
> banda desarrollara un sonido característico que incorporó rock, pop,
> hard rock, armonías vocales y elementos teatrales.

> Una de las particularidades de Queen fue que sus cuatro integrantes
> participaron como compositores. Esto permitió que el grupo tuviera una
> gran variedad de estilos y canciones.

## Los integrantes

Los integrantes deben aparecer como cuatro círculos.

Cada círculo debe utilizar la fotografía del integrante con un
tratamiento visual inspirado en la estética de la portada de
`Bohemian Rhapsody`.

NO colocar las fotografías simplemente como cuadrados.

Crear:

-   círculo
-   imagen `object-fit: cover`
-   borde sutil
-   sombra
-   overlay
-   nombre debajo o integrado
-   efecto hover

Distribución:

``` text
        FREDDIE          BRIAN

        ○                 ○


        ROGER            JOHN

        ○                 ○
```

Al hacer clic en un círculo, abrir/desplegar una card con:

-   nombre
-   función en Queen
-   descripción
-   imagen del integrante

## Freddie Mercury

Función:

**Vocalista y pianista**

Texto:

> Freddie Mercury fue el vocalista principal de Queen y una de las
> figuras centrales de su identidad artística. Su voz, creatividad y
> presencia escénica fueron elementos fundamentales para el desarrollo
> de la banda.

Imagen:

https://s03.s3c.es/imag/\_v0/640x600/8/c/3/freddie-mercury.jpg

## Brian May

Función:

**Guitarrista y compositor**

Texto:

> Brian May es el guitarrista de Queen y uno de sus principales
> compositores. Su estilo de guitarra y el característico sonido de su
> instrumento se convirtieron en elementos fundamentales de la identidad
> musical de la banda.

Imagen:

https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9oPSdDlP0hpTQQYQ4u6JUGwzLGtiORTEwIhyEi3gNNkpR25JPtftSB-V9WAmkXciFDTFVijASfI7w23TBVnQZrjDtbdfg0GooO_g6LyHEJ2E4QwiJqaSyd5xzQCBNeFxd9DLArFd1hX5C/s1600/Brian_may.jpg

## Roger Taylor

Función:

**Baterista y compositor**

Texto:

> Roger Taylor fue el baterista de Queen y también participó como
> compositor y vocalista. Su personalidad musical aportó otra dimensión
> al sonido de la banda.

Imagen:

https://thisisrock.es/web2020/wp-content/uploads/2021/08/Roger-Taylor-con-KT-TunstallLa-revista-con-la-m%C3%BAsica-que-es-importante-en-tu-vida-Classic-Rock-Hard-Rock-Heavy-Metal-Prog-Rock-Blues.jpeg

## John Deacon

Función:

**Bajista y compositor**

Texto:

> John Deacon fue el bajista de Queen y uno de sus compositores. Aunque
> mantuvo una personalidad más reservada que sus compañeros, participó
> en algunas de las canciones más reconocidas de la banda.

Imagen:

https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Queen_News_Of_The_World\_%281977_Press_Kit_Photo_07%29_John_Deacon.jpg/960px-Queen_News_Of_The_World\_%281977_Press_Kit_Photo_07%29_John_Deacon.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail

## Interacción

Cuando se hace clic en un integrante:

1.  El círculo recibe estado activo.
2.  Se despliega la card.
3.  Se muestra la información.
4.  Se muestra la imagen.
5.  Los demás círculos permanecen visibles.
6.  Al seleccionar otro integrante, se actualiza la card.

En móvil la card debe aparecer debajo de los círculos.

------------------------------------------------------------------------

# 8. MÚSICA

## Fondo

Utilizar como fondo completo:

https://w.wallhaven.cc/full/5d/wallhaven-5d8y69.png

Aplicar overlay oscuro.

## Título

**Las canciones que hicieron historia**

Texto:

> La música de Queen se caracteriza por su diversidad. La banda podía
> pasar de una balada a una composición teatral, de un himno de estadio
> a una canción cargada de energía. Esta selección reúne algunas de las
> canciones más representativas de su trayectoria.

## Canciones

Mostrar exactamente estas ocho:

1.  Bohemian Rhapsody
2.  We Will Rock You
3.  We Are the Champions
4.  Somebody to Love
5.  Don't Stop Me Now
6.  Radio Ga Ga
7.  Another One Bites the Dust
8.  The Show Must Go On

## Diseño

Utilizar tarjetas uniformes.

Cada tarjeta debe contener:

-   número
-   título
-   breve descripción
-   botón `Escuchar`
-   botón o enlace que abra el video de YouTube en una nueva pestaña

No incrustar automáticamente todos los videos para evitar una página
pesada.

## Información

### Bohemian Rhapsody

Una de las composiciones más famosas de Queen. Su estructura combina
diferentes secciones musicales y rompe con el formato tradicional de una
canción de rock.

Video: https://www.youtube.com/watch?v=fJ9rUzIMcZQ

### We Will Rock You

Canción construida alrededor de un ritmo sencillo y contundente que
permite la participación directa del público. Se convirtió en uno de los
grandes himnos de los conciertos de Queen.

Video: https://www.youtube.com/watch?v=-tJYN-eG1zk

### We Are the Champions

Una canción asociada con la victoria y las celebraciones. Su carácter
épico la convirtió en una de las canciones más reconocibles de Queen.

Video: https://www.youtube.com/watch?v=04854XqcfCY

### Somebody to Love

Canción caracterizada por sus complejas armonías vocales y una
interpretación especialmente expresiva de Freddie Mercury.

Video: https://www.youtube.com/watch?v=kijpcUv-b8M

### Don't Stop Me Now

Una canción energética y optimista que se convirtió en una de las
favoritas del público. Su ritmo y mensaje transmiten una sensación de
libertad y entusiasmo.

Video: https://www.youtube.com/watch?v=HgzGwKwLmgM

### Radio Ga Ga

Canción que destacó especialmente por la participación del público
durante los conciertos. Las palmadas colectivas se convirtieron en parte
de su identidad escénica.

Video: https://www.youtube.com/watch?v=azdwsXLmrHE

### Another One Bites the Dust

Una canción con una marcada influencia funk y disco, construida
alrededor de una línea de bajo muy reconocible.

Video: https://www.youtube.com/watch?v=rY0WxgSXdEE

### The Show Must Go On

Una canción de tono dramático y emotivo, especialmente significativa por
estar relacionada con los últimos años de Freddie Mercury.

Video: https://www.youtube.com/watch?v=t99KH0TR-J4

------------------------------------------------------------------------

# 9. PRESENTACIONES

## Fondo

Utilizar como fondo completo:

https://wallpapercave.com/wp/wp6620627.jpg

Aplicar overlay oscuro.

## Título

**Freddie sobre el escenario**

Texto:

> Freddie Mercury no era únicamente un cantante. Sobre el escenario
> combinaba voz, movimiento, teatralidad y una extraordinaria capacidad
> para interactuar con el público. Su presencia convirtió muchos
> conciertos de Queen en auténticos espectáculos.

## Presencia escénica

Crear cuatro bloques:

### Voz

Freddie utilizaba diferentes registros vocales y una gran variedad de
recursos interpretativos.

### Movimiento

Sus movimientos sobre el escenario eran parte de la actuación y ayudaban
a dirigir la atención del público.

### Teatralidad

Vestuario, gestos, poses y puesta en escena reforzaban su personalidad
artística.

### Público

Una de sus mayores habilidades era conseguir que grandes cantidades de
personas participaran activamente en el espectáculo.

## Live Aid

Crear una subsección visual destacada.

Título:

**Live Aid --- 1985**

Texto:

> La actuación de Queen en Live Aid se convirtió en una de las
> presentaciones más recordadas de la historia del rock. Durante
> aproximadamente 21 minutos, Freddie Mercury consiguió conectar con el
> público del estadio de Wembley y con millones de espectadores que
> seguían el evento.

### Canciones interpretadas

-   Bohemian Rhapsody
-   Radio Ga Ga
-   Hammer to Fall
-   Crazy Little Thing Called Love
-   We Will Rock You
-   We Are the Champions

Crear una tarjeta especial para Live Aid.

Añadir botón:

**VER PRESENTACIÓN**

El botón debe abrir el recurso audiovisual correspondiente en una nueva
pestaña.

------------------------------------------------------------------------

# 10. LEGADO

## Fondo

Utilizar como fondo completo:

https://w.wallhaven.cc/full/yj/wallhaven-yjrqwd.png

Overlay oscuro.

## Título

**Después de Freddie**

Texto:

> La muerte de Freddie Mercury no significó el final de su influencia.
> Su música continuó llegando a nuevas generaciones y su forma de
> entender el espectáculo se convirtió en una referencia para numerosos
> artistas.

## Bloques

### Legado musical

Sus canciones continúan siendo escuchadas décadas después de su
lanzamiento y forman parte de la cultura popular.

### Legado artístico

Freddie ayudó a ampliar la idea de lo que podía ser un cantante de rock,
combinando música, teatro, moda y espectáculo.

### Influencia

Su voz, personalidad y manera de actuar sobre el escenario continúan
siendo estudiadas y admiradas por artistas posteriores.

### Queen

La música de Queen continúa formando parte del repertorio popular y
mantiene una audiencia internacional.

### Nuevas generaciones

La historia de Freddie Mercury y Queen continúa siendo presentada a
nuevos públicos mediante películas, documentales, conciertos y nuevas
publicaciones.

## Cierre

Crear una sección final con una frase visual:

> **"La música termina. El legado permanece."**

Debajo:

> Freddie Mercury dejó una obra que continúa conectando a artistas y
> espectadores de diferentes generaciones.

------------------------------------------------------------------------

# 11. FUENTES

## Título

**Fuentes consultadas**

Esta sección debe tener diseño sobrio.

No utilizar una galería.

Crear una lista de fuentes con:

-   nombre
-   descripción
-   botón `Visitar fuente`

Fuentes principales:

-   Queen Online
-   Queen Live Archive
-   Queen Official Store / Live Aid
-   YouTube para los videos musicales
-   fuentes periodísticas y bibliográficas utilizadas para complementar
    la información

IMPORTANTE:

No inventar fuentes.

Si se incorporan nuevas fuentes durante el desarrollo, conservar el
enlace original y añadirlo aquí.

------------------------------------------------------------------------

# 12. JAVASCRIPT

`js/main.js` debe contener únicamente JavaScript vanilla.

## Funciones necesarias

### Menú móvil

Abrir/cerrar menú hamburguesa.

Cerrar menú cuando se selecciona una sección.

### Scroll suave

Todos los enlaces internos deben desplazarse suavemente.

### Navbar activo

Usar `IntersectionObserver` para determinar la sección visible.

### Timeline

Crear comportamiento:

-   un año puede estar seleccionado
-   al hacer clic se abre su card
-   la card anterior se cierra
-   animación suave
-   el primer año puede aparecer seleccionado inicialmente

No crear nueve estructuras HTML repetidas mediante JavaScript si no es
necesario. Preferir HTML semántico y JS para controlar estados.

### Integrantes

Al hacer clic:

-   actualizar integrante activo
-   mostrar card correspondiente
-   cambiar imagen
-   cambiar título
-   cambiar descripción
-   añadir clase `.active`

### Animaciones

Usar `IntersectionObserver` para revelar elementos al entrar al
viewport.

No abusar de las animaciones.

------------------------------------------------------------------------

# 13. CSS

`css/styles.css`

Organizar el CSS por secciones:

``` css
/* RESET */
/* VARIABLES */
/* GLOBAL */
/* TYPOGRAPHY */
/* NAVBAR */
/* HERO */
/* TIMELINE */
/* QUEEN */
/* MEMBERS */
/* MUSIC */
/* PERFORMANCES */
/* LEGACY */
/* SOURCES */
/* FOOTER */
/* ANIMATIONS */
/* RESPONSIVE */
/* MOBILE */
```

Utilizar variables CSS:

``` css
:root {
    --bg-main: #0b0b0b;
    --bg-secondary: #151515;
    --bg-card: rgba(20, 20, 20, 0.82);
    --text-main: #f2f2f2;
    --text-muted: #b8b8b8;
    --white: #ffffff;
    --accent: #c6a15b;
    --border: rgba(255,255,255,0.12);
}
```

------------------------------------------------------------------------

# 14. RESPONSIVE

El sitio debe funcionar correctamente en:

-   1440px
-   1280px
-   1024px
-   768px
-   480px
-   360px

## Desktop

-   navbar horizontal
-   timeline amplia
-   Queen dividido en dos columnas
-   cuatro integrantes en cuadrícula 2x2
-   tarjetas musicales en 4/2 columnas dependiendo del ancho

## Tablet

-   navbar adaptable
-   timeline compacta
-   Queen puede pasar a dos filas
-   música en 2 columnas

## Móvil

-   menú hamburguesa
-   hero adaptado
-   timeline vertical
-   card de timeline debajo del año
-   Queen en una sola columna
-   integrantes en 2x2
-   música en una columna
-   botones grandes y fáciles de tocar

Nunca debe aparecer scroll horizontal.

------------------------------------------------------------------------

# 15. ACCESIBILIDAD

Utilizar HTML semántico:

``` html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Todas las imágenes deben tener `alt`.

Los botones deben ser botones reales.

Los enlaces externos deben indicar que se abren en una nueva pestaña
cuando corresponda.

Mantener contraste adecuado.

No depender exclusivamente del color para indicar estados.

------------------------------------------------------------------------

# 16. IMÁGENES

Las imágenes deben conservar su proporción.

No deformarlas.

Utilizar:

``` css
object-fit: cover;
```

cuando formen parte de tarjetas.

Para fondos:

``` css
background-size: cover;
background-position: center;
```

No utilizar las imágenes de fondo como `<img>` dentro de una card.

Todos los fondos proporcionados deben ocupar visualmente toda su
sección.

------------------------------------------------------------------------

# 17. FOOTER

Crear un footer sencillo.

Contenido:

**Freddie Mercury --- Una vida detrás de una leyenda**

Texto:

> Proyecto educativo realizado para la materia de Lenguaje.

Añadir navegación resumida:

-   Inicio
-   Biografía
-   Queen
-   Música
-   Presentaciones
-   Legado
-   Fuentes

Añadir una nota:

> Este sitio tiene fines educativos.

------------------------------------------------------------------------

# 18. REGLAS IMPORTANTES PARA CODEX

1.  No utilizar React.
2.  No utilizar Vue.
3.  No utilizar Bootstrap.
4.  No utilizar Tailwind.
5.  No utilizar ninguna librería de JavaScript.
6.  No utilizar frameworks.
7.  Utilizar únicamente HTML, CSS y JavaScript vanilla.
8.  Mantener un único `index.html`.
9.  Separar CSS en `css/styles.css`.
10. Separar JavaScript en `js/main.js`.
11. No crear una página HTML gigante que contenga todo el sitio.
12. No cambiar la estructura de secciones.
13. No agregar años a la timeline.
14. No eliminar años de la timeline.
15. No agregar canciones diferentes a las ocho especificadas.
16. No eliminar canciones de la lista especificada.
17. Utilizar las imágenes proporcionadas.
18. Mantener las imágenes de fondo como fondos completos.
19. El sitio debe ser responsive.
20. Priorizar legibilidad.
21. Evitar saturar la interfaz con colores.
22. No utilizar efectos exagerados.
23. Mantener una estética elegante, oscura y teatral.
24. No llenar las tarjetas con demasiado texto.
25. El contenido debe poder leerse cómodamente.
26. Los videos deben abrirse mediante enlaces externos, no cargar todos
    automáticamente.
27. Las imágenes deben tener `alt`.
28. El código debe estar comentado en las partes donde exista lógica no
    obvia.
29. Mantener HTML, CSS y JS limpios y organizados.
30. No inventar datos históricos adicionales.

------------------------------------------------------------------------

# 19. RESULTADO FINAL ESPERADO

El resultado debe parecer un pequeño sitio documental interactivo y no
una página escolar genérica.

La experiencia debe seguir esta narrativa:

**FREDDIE MERCURY** ↓ **Su historia** ↓ **El nacimiento de Queen** ↓
**Sus canciones** ↓ **Su forma de dominar el escenario** ↓ **Su legado**
↓ **Fuentes**

El visitante debe poder recorrer toda la historia desde una sola página
mediante una navegación clara, visualmente atractiva y responsive.

La prioridad absoluta es:

**contenido claro + fotografía protagonista + buena tipografía +
interacción discreta + responsive + código limpio.**
