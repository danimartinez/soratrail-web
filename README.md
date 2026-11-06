# Trail de Sora — Web Oficial (Astro + Tailwind CSS)

Clon modernitzat i optimitzat de [soratrail.cat](https://soratrail.cat/) construït amb **Astro 5** i **Tailwind CSS 4**, preparat per desplegar-se a **Cloudflare Pages**.

## Estructura de pàgines

- `/` — Pàgina d'inici (Hero 16 maig de 2026, resultats, compte enrere, accés ràpid a seccions i vídeo resum)
- `/trail-de-sora/` — Història de totes les edicions (2021–2026) i col·laboració solidària amb Casa Terra
- `/rutes/` — Rutes oficials (La Curta 11K i La Llarga 21K) i enllaç al llistat de participants
- `/reglament-2026/` (i `/reglament/`) — Visor i descàrrega directa del Dossier Reglament 2026 en PDF
- `/albums-de-fotos/` — Galeries fotogràfiques de totes les edicions (2021–2026)
- `/fotos-2026/` — Galeria amb les 591 fotografies de l'edició 2026 (Part 2) amb càrrega progressiva
- `/patrocinadors/` — Graella de patrocinadors i col·laboradors
- `/sora-2/` (i `/sora/`) — Informació sobre el municipi de Sora, l'entorn del Bisaura i on menjar/dormir
- `/contact/` (i `/contacte/`) — Mapa d'ubicació (Zona esportiva de Sora), dades de contacte i formulari accessible

## Desenvolupament local

```bash
npm install
npm run dev
```

Per generar la versió estàtica de producció (`dist/`):

```bash
npm run build
npm run preview
```

## Desplegament a Cloudflare Pages

1. Entra a [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Selecciona el repositori de GitHub `danimartinez/soratrail-web`.
3. Configura el build:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. *(Opcional)* Perquè el formulari de contacte enviï correus directament des de la funció `/api/contact` sense obrir el gestor de correu de l'usuari, afegeix la variable d'entorn `WEB3FORMS_ACCESS_KEY` (gratuïta a [web3forms.com](https://web3forms.com/) per a `trailsora@gmail.com`).
