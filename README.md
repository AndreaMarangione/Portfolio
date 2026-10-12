<div align="center">

# Portfolio

**The personal portfolio of Andrea Marangione, industrial automation software developer.**

Plants, sites and tools from years of commissioning around the world, in a
bilingual Next.js site styled after an Ubuntu desktop.

![Next.js](https://img.shields.io/badge/Next.js%2016-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React%2019-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%204-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js%2024-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

[**andreamarangione.com**](https://andreamarangione.com)

</div>

> [!NOTE]
> The site is bilingual. Every page exists in English (`/en`) and Italian
> (`/it`), and any address without a language prefix redirects to `/en`.

---

## What it is

Industrial automation is hard to put in a portfolio. The code belongs to the
customer, the plants sit behind a fence on the other side of the world, and a
PLC program means little to anyone who has never stood next to the machine it
drives.

This site shows what can be shown: where the work happened, what the plants
produce and how their lines are built, the tools used along the way, and how
to get in touch. The interface borrows from the places that work actually
happens in — an Ubuntu desktop with terminal and editor windows, an operator
panel, a live P&ID and, when something goes wrong, ladder logic.

---

## Preview

**Hero** — a live P&ID of a gas turbine test bench runs behind the introduction.

![Hero section with the live P&ID](assets/hero.png)

---

## Features

- **Live P&ID** — an ISA-5.1 diagram of the test bench drawn behind the hero,
  with animated gas flow and process values in the reader's units: °F and psi
  in English, °C and bar in Italian.
- **Sites on the map** — on desktop, an SVG world map with SMIL-animated
  markers; on mobile, a 3D globe that is only loaded when it scrolls into view.
- **Skills as equipment** — automation modules on an HMI panel with a live
  clock and status LEDs, the software stack as `cat package.json` in a
  terminal, and two marquee rows of tools.
- **Projects as plants** — every plant card carries site, product, daily
  capacity and production flow; software projects link to their repositories.
- **Editor windows** — About and Contact are written as Markdown documents,
  with a status bar that reports line and column of the cursor.
- **Fault pages** — the 404 and the error boundary are ladder networks, with a
  recovery rung that energises when its button is hovered.
- **Bit background** — a canvas of binary digits lit by an orange glow that
  follows the pointer, enabled only on devices with a fine pointer.
- **Bilingual** — locale routes, typed dictionaries, a language switch and
  locale-aware number formatting.
- **Search and sharing** — canonical URLs, hreflang alternates, a sitemap,
  Person structured data and an Open Graph image generated per language.

---

## Architecture

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/architecture.png">
  <img alt="Portfolio architecture" src="assets/architecture.png">
</picture>

---

## License

Distributed under the **GNU General Public License v3.0**. See [`LICENSE`](LICENSE) for the full text.
