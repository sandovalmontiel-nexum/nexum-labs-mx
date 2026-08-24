# NEXUM LABS MX — WEB V9

V9 incorpora analítica local para pruebas y preparación para analítica real con Google Analytics 4 (GA4).

## Qué incluye

- Sitio institucional Nexum Labs MX.
- EduDocIA.
- Servicios profesionales.
- Cursos de IA.
- Contador local de visitas.
- Seguimiento local de:
  - EduDocIA
  - Servicios
  - Cursos
  - Contacto
- Registro local de eventos.
- Preparación para Google Analytics 4.
- Eventos de conversión:
  - `generate_lead` para contacto.
  - `select_item` para interés en servicios y cursos.
  - `edudocia_click`
  - `services_click`
  - `courses_click`
- No se envían archivos ni contenido de documentos a la analítica.

## Activar analítica real

La V9 está preparada, pero necesita tu Measurement ID de GA4.

1. En Google Analytics crea o abre una propiedad GA4.
2. Obtén el Measurement ID, por ejemplo `G-ABC1234567`.
3. Abre `index.html`.
4. Busca:
   `window.NEXUM_GA4_ID = "YOUR-GA4-ID";`
5. Sustituye `YOUR-GA4-ID` por el ID real.
6. Guarda el archivo y haz commit en GitHub.
7. Espera a que GitHub Pages publique el cambio.
8. En Google Analytics abre **Tiempo real** y prueba EduDocIA, Servicios, Cursos y Contacto.

Mientras el ID sea `YOUR-GA4-ID`, la web sigue funcionando y los contadores locales siguen funcionando, pero no se envían datos a Google.

## Pruebas locales

En la consola del navegador:

`NexumAnalyticsV9.getLocalMetrics()`

Para reiniciar las métricas locales:

`NexumAnalyticsV9.resetLocalMetrics()`

## Publicación

GitHub Pages:

`https://sandovalmontiel-nexum.github.io/nexum-labs-mx/`

## Nota de privacidad

La analítica no recibe archivos ni el contenido de documentos usados por EduDocIA. Los datos de formularios deben mantenerse fuera de los parámetros de analítica.

## Próximo paso

Configurar el Measurement ID real y hacer una prueba controlada en GA4 antes de promocionar públicamente Nexum Labs MX.
