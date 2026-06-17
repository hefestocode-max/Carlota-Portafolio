# CLAUDE.md — Carlota Mac Portfolio

## Proyecto

Portfolio estático de **Carlota Mac Gregor** — directora, productora y guionista cinematográfica.
Stack: HTML + CSS + JS vanilla. Sin build, sin framework, sin backend.

## Objetivo actual

Reemplazar contenido placeholder con los datos reales de Carlota: videos, fotos, información de proyectos, bio, créditos y contacto. Luego pulir jerarquía visual, responsive y calidad general.

## Archivos principales

| Archivo | Rol |
|---|---|
| `index.html` | Landing principal — todas las secciones |
| `styles.css` | Estilos globales, responsive, animaciones |
| `main.js` | Navegación, video hero, filtros, sliders |
| `projects/*.html` | Página individual de cada proyecto |
| `projects/project.css` | Estilos de páginas de proyecto |
| `projects/project.js` | JS de páginas de proyecto |
| `Material visual/` | Imágenes y videos fuente (assets locales) |

## Cómo trabajar

```bash
# Servidor local
python3 -m http.server 8765
# → http://localhost:8765
```

Antes de cada cambio: `git diff`. Después: revisar en browser.
Para screenshots visuales: usar Playwright CLI (`playwright-cli`).

## Criterios de calidad UI

- Estética editorial/cinematográfica — lujo sobrio, no template.
- Tipografías: Great Vibes, Ibarra Real Nova, Poppins, Nunito Sans (ya cargadas).
- Librerías activas: Swiper y Lottie vía CDN.
- Hero video: premium e inmediato.
- Mobile: intencional, no solo apilado.
- Performance: videos e imágenes no deben romper la primera carga.
- Sin links rotos ni errores en consola.

## Reglas de este proyecto

- No agregar dependencias ni frameworks sin confirmación explícita.
- No usar Supabase, Prisma, Stripe, Docker, Cloudflare Workers ni Context7.
- No convertir a React/Next/Vite.
- No borrar assets originales — confirmar antes de reemplazar.
- No agregar co-autoría AI en commits.
- No buildear tras cambios (no hay build pipeline).

## Herramientas activas

| Herramienta | Cuándo usarla |
|---|---|
| `engram` (mem_save, mem_search) | Memoria persistente — usar siempre, automático |
| `github` MCP | git status, diff, PRs |
| `frontend-design` plugin | Decisiones de diseño visual |
| `playwright-cli` skill | Screenshots y validación visual |
| `/verify` skill | Confirmar que un cambio se ve bien en el browser |
| `/run` skill | Levantar el servidor local |
| `/impeccable` skill | Pulir UI/UX antes de cerrar una sección |
| `/branch-pr` skill | Crear PR con descripción completa |
| `code-reviewer` agent | Solo antes de PRs importantes |

## Herramientas a ignorar en este proyecto

Supabase, Stripe, Cloudflare, Vercel, Context7, SDD, TDD workflows, database-reviewer, healthcare-reviewer, build-error-resolver (no hay build), sdd-*, tdd-workflow.

## Validación mínima antes de cada commit

1. `python3 -m http.server 8765` → verificar en browser.
2. Hero video carga y se ve bien.
3. Navegación funciona, links no están rotos.
4. Filtros de proyectos responden.
5. Mobile: ninguna sección se rompe en viewport angosto.
6. `git diff` limpio y comprensible.

## Tono esperado del asistente

Directo, editorial, sin relleno. Cuando algo no está bien visualmente, decirlo con criterio. Cuando hay una decisión de diseño, proponer con razón — no solo ejecutar.
