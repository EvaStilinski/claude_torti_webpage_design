# Publicar la página de Tortillería Rascón

Tienes dos formas de poner esta página en línea. La **Opción A** es la más rápida; la **Opción B** te da una URL gratis con tu propio dominio de GitHub.

---

## Opción A — Un solo archivo HTML (suben a cualquier hosting)

Archivo: `tortilleria-rascon-standalone.html`

Es un **solo archivo** con todo el código, fuentes, imágenes y estilos adentro. Lo puedes:

- Abrir directamente en tu navegador (doble clic).
- Subir a cualquier hosting (Netlify Drop, Vercel, Hostinger, GoDaddy, lo que sea) arrastrando el archivo.
- Mandarlo por WhatsApp / correo y la persona lo abre y funciona.

**Cómo subirlo a Netlify gratis (5 min):**
1. Entra a [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra `tortilleria-rascon-standalone.html`
3. Listo. Te da una URL pública del tipo `nombre-random.netlify.app`.
4. Renombra el sitio desde Site settings si quieres.

---

## Opción B — GitHub Pages (gratis, con el código en tu repo)

Esto deja el código en GitHub y la página viva en `https://evastilinski.github.io/<nombre-del-repo>/`.

**Paso 1 — Descarga los archivos**
Descarga la carpeta `deploy/` (botón de descarga en la sección de archivos del proyecto, o usa "Download project").

**Paso 2 — Sube los archivos al repo `claude_torti_webpage_design`**
Tienes dos formas:

*Vía web (más fácil, sin terminal):*
1. Abre tu repo: <https://github.com/EvaStilinski/claude_torti_webpage_design>
2. Click en **Add file → Upload files**
3. Arrastra **todo el contenido de la carpeta `deploy/`** (NO la carpeta misma — los archivos adentro: `index.html`, `colors_and_type.css`, todos los `.jsx`, y la carpeta `assets/`).
4. Abajo, escribe un mensaje de commit (ej. *"Primera versión de la página"*) y click en **Commit changes**.

*Vía terminal (si te animas con `git`):*
```bash
git clone https://github.com/EvaStilinski/claude_torti_webpage_design.git
cd claude_torti_webpage_design
# copia el contenido de la carpeta `deploy/` aquí
git add .
git commit -m "Primera versión de la página"
git push
```

**Paso 3 — Activa GitHub Pages**
1. En el repo, ve a **Settings** (arriba a la derecha).
2. En el menú izquierdo, click en **Pages**.
3. En **Source**, elige la rama **`main`** y la carpeta **`/ (root)`**.
4. Click en **Save**.
5. Espera 1–2 minutos. Te aparece arriba el enlace tipo `https://evastilinski.github.io/claude_torti_webpage_design/`.

**Paso 4 — (Opcional) Dominio propio**
Si compras un dominio (`tortilleriarascon.com` por ejemplo), desde la misma pantalla de Pages puedes ponerlo en **Custom domain** y seguir las instrucciones para apuntar el DNS.

---

## ¿Qué hay en cada archivo?

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | La página principal. Lo que ve el visitante. |
| `colors_and_type.css` | Colores, fuentes, espaciados de la marca. |
| `Header.jsx` `Hero.jsx` etc. | Cada bloque de la página por separado. |
| `assets/` | Imágenes (mascota, patrón). |
| `tortilleria-rascon-standalone.html` | Todo en uno — solo para Opción A. |

## Si quieres cambiar algo

- **Texto del menú / precios** → abre `Header.jsx` o el archivo `index.html` (busca la lista `PRODUCTS`).
- **Horarios** → `HoursPanel.jsx`.
- **Foto de la mascota** → reemplaza `assets/mascot-photo-transparent.png`.

Si quieres que te ayude a hacer cambios específicos antes de publicar, mándame qué quieres mover/cambiar.
