# MI PORTFOLIO TEMPLATE
by Irene Gavidia
You can visit mi site [https://irenegavidia.github.io/Portfolio_template/](https://irenegavidia.github.io/Portfolio_template/)



## Introducción

Este proyecto consiste en el diseño y desarrollo de una plantilla de portfolio web profesional, creada desde cero utilizando HTML5, CSS3, Bootstrap 5 y JavaScript, con animaciones avanzadas mediante GSAP.

El objetivo principal es construir una base sólida, escalable y visualmente cuidada que represente mi identidad como diseñadora gráfica y web, aplicando buenas prácticas de desarrollo front-end, diseño responsive y accesibilidad.



## Plan 1 — Estructura base y layout del portfolio
Prompt a la IA

“Necesito planificar la estructura y arquitectura de una plantilla profesional de portfolio web usando HTML5, CSS3 y JavaScript vanilla, siguiendo buenas prácticas de diseño responsive, semántica HTML y organización de archivos.”

Respuesta de la IA (Plan)
Objetivo del sprint

Definir una estructura base clara y profesional para el portfolio, que permita crecer el proyecto sin problemas técnicos y facilite el mantenimiento del código.

 # Alcance

      No incluir animaciones complejas en esta fase

      No incluir contenido definitivo

      Priorizar estructura, orden del código y responsive design

      Estructura del proyecto


 # Organización de archivos en carpetas (assets/css y assets/js)

      Un único archivo HTML principal

      Un archivo CSS principal como punto de entrada

      Un archivo JavaScript para interacciones básicas

            Portfolio_template/
      ├── assets/
      │   ├── css/
      │   └── js/
      ├── docs/
      ├── index.html
      ├── 404.html
      ├── README.md
      ├── LICENSE
      └── .gitignore


 # Estructura HTML

      Uso de etiquetas semánticas:

      header para la navegación

      main para el contenido principal

      section para cada bloque de contenido

      footer para información final

      Correcta jerarquía de encabezados (un solo h1)


 # Responsive

      Enfoque mobile-first

      Uso de Bootstrap Grid

      Tipografía fluida con clamp()

      Eliminación de scroll horizontal en móvil


 # Accesibilidad básica

      Contraste adecuado de colores

      Uso de atributos alt en imágenes

      Estructura clara y legible


 # Despliegue

      Creación de repositorio en GitHub

      Configuración de GitHub Pages

      Página 404 personalizada


 # Implementación real

      Se creó la estructura de carpetas del proyecto

      Se desarrolló un HTML semántico y ordenado

      Se definieron variables CSS globales

      Se desplegó correctamente en GitHub Pages




## Plan 2 — Hero section y visual identity
Prompt a la IA

“Help me design an organic animated hero background inspired by Oversour Studio using CSS gradients and Bootstrap.”

 # Respuesta de la IA (resumen)

      Uso de gradientes animados mediante CSS

      Movimiento orgánico y sutil

      Tipografía editorial con contraste

      Respeto a prefers-reduced-motion

 
 # Implementación real

      Creación de una sección hero a pantalla completa

      Fondo animado con gradientes CSS

      Uso de Instrument Serif para títulos

      Uso de DM Sans para texto

      Tipografía fluida y responsive

      Botones personalizados sobre Bootstrap




## Plan 3 — Animaciones con GSAP y ScrollTrigger
Prompt a la IA

“How can I add smooth scroll-based animations using GSAP without affecting performance or accessibility?”

 # Respuesta de la IA (resumen)

      Uso de GSAP con ScrollTrigger

      Animaciones activadas al entrar en viewport

      Evitar animaciones excesivas

      Compatibilidad con prefers-reduced-motion


 # Implementación real

      Animaciones de entrada en la sección hero

      Animaciones tipo fade + translate en scroll

      Uso de la clase .gsap-reveal

      Animación progresiva de barras de habilidades

      Animaciones por lotes en las cards de proyectos

      Optimización del rendimiento




## Plan 4 — Projects section y cards layout
 # Problema detectado

      Durante el desarrollo de la sección de proyectos surgieron varios problemas:

      Desalineación de las cards

      Efecto “escalera” por alturas variables

      Conflictos entre Bootstrap, Flexbox y GSAP

      Aparición de overflow horizontal en pantallas pequeñas


 # Solución aplicada

      Uso de Flexbox en las cards (flex-direction: column)

      Altura fija en el contenedor de imagen

      Uso de margin-top: auto para alinear el contenido inferior

      Revisión completa del CSS

      Corrección de media queries


 # Resultado final

      Cards perfectamente alineadas

      Diseño limpio y consistente

      Comportamiento responsive correcto

      Integración correcta con animaciones GSAP



## Plan 5 — Optimización responsive y bugs finales
 # Problemas detectados

      Aparición de un margen blanco lateral en móvil (< 580px)

      Conflictos de overflow

      Diferencias entre entorno local y GitHub Pages


 # Soluciones aplicadas

      Revisión de overflow-x

      Ajuste de media queries

      Verificación de rutas relativas

      Pruebas cruzadas en diferentes resoluciones


 # Tecnologías utilizadas

      HTML5

      CSS3

      Bootstrap 5

      JavaScript 

      GSAP + ScrollTrigger

      GitHub Pages

      Google Fonts


 # License

Este proyecto está bajo la licencia MIT.
Consulta el archivo LICENSE para más información.


 # Uso de herramientas de IA

Este proyecto utilizó herramientas de inteligencia artificial como apoyo en la fase de planificación y resolución de problemas.

El flujo de trabajo fue:

1. Plantear el problema o necesidad

2. Analizar la respuesta de la IA

3. Implementar manualmente el código

4. Ajustar, depurar y optimizar

El resultado final es un proyecto desarrollado y controlado manualmente, utilizando la IA como herramienta de apoyo, no como generador automático de código.