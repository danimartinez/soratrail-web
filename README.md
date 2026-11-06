# Trail de Sora — Web Oficial (Astro + Tailwind CSS)

Clon modernitzat i optimitzat de [soratrail.cat](https://soratrail.cat/) construït amb **Astro 5** i **Tailwind CSS 4**, preparat per desplegar-se a **Vercel**.

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

## Desplegament a Vercel i configuració del domini `soratrail.cat`

1. Entra a [Vercel Dashboard](https://vercel.com/new) i importa el repositori de GitHub `danimartinez/soratrail-web`.
2. Vercel detectarà automàticament **Astro** gràcies a `vercel.json` (`npm run build` → `dist`). Fes clic a **Deploy**.
3. **Configurar el domini (`soratrail.cat`)**:
   - Dins del projecte a Vercel, ves a **Settings** → **Domains** i afegeix `soratrail.cat` (i `www.soratrail.cat`).
   - Al teu proveïdor de domini actual (sense transferir el domini), apunta els registres DNS que t'indiqui Vercel:
     - Registre **A** per a `@` (`soratrail.cat`) → `76.76.21.21`
     - Registre **CNAME** per a `www` → `cname.vercel-dns.com.`
   - Vercel generarà i renovarà el certificat SSL (HTTPS) automàticament.
4. *(Opcional)* Perquè el formulari de contacte enviï correus directament des de la funció `/api/contact` sense obrir el gestor de correu de l'usuari, afegeix la variable d'entorn `WEB3FORMS_ACCESS_KEY` a **Settings** → **Environment Variables** (gratuïta a [web3forms.com](https://web3forms.com/) per a `trailsora@gmail.com`).
