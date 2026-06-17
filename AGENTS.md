# AGENTS.md — Carlota Mac Portfolio

## Proyecto
Portfolio estático de Carlota Mac Gregor. El objetivo actual es cargar contenido real, fotos, videos e información de proyectos, y pulir una página elegante, narrativa y visualmente impecable.

## Stack real
- HTML estático: `index.html` y `projects/*.html`
- CSS: `styles.css`, `projects/project.css`
- JS vanilla: `main.js`, `projects/project.js`
- Assets locales: `Material visual/`
- No hay `package.json`, build, Prisma, Supabase, Tauri ni backend.

## Archivos principales para cambios
- `index.html` — landing principal y contenido global.
- `styles.css` — diseño, responsive, secciones y animaciones.
- `main.js` — navegación, video, filtros, sliders y microinteracciones.
- `projects/*.html` — páginas individuales de proyectos.
- `projects/project.css` — estilos de páginas de proyecto.
- `Material visual/` — imágenes y videos fuente.

## Herramientas recomendadas
- Servidor local: `python3 -m http.server 8765`
- Revisión visual: navegador o Playwright screenshots.
- Git: `git status`, `git diff` antes y después.

## Evitar en este proyecto
- No agregar dependencias ni frameworks sin pedir confirmación.
- No usar Supabase, Prisma, Stripe, Docker, Cloudflare Workers, Firecrawl o Context7 salvo solicitud explícita.
- No convertir a React/Next/Vite si no se solicita.
- No borrar assets originales; si se reemplazan, preservar respaldo o confirmar.

## Criterios UI
- Priorizar estética editorial/cinematográfica, lujo sobrio, ritmo visual y legibilidad.
- Optimizar mobile primero sin sacrificar desktop.
- Cuidar performance: videos e imágenes deben cargar de forma razonable.
- Validar que no haya links rotos ni errores en consola.

## Validación mínima
1. Ejecutar `python3 -m http.server 8765`.
2. Abrir `http://localhost:8765`.
3. Revisar hero video, navegación, filtros, secciones, responsive y páginas de proyecto.
4. Confirmar `git diff` limpio y comprensible.
