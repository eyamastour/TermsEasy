# TermsEasy

A modern, educational Angular web app that summarizes the key points of the terms of service for major digital platforms (social networks, e-commerce, streaming, etc). The site provides clear, accessible summaries written in advance—no automatic contract analysis.

## Features
- **Homepage:** Modern hero, description, and feature highlights
- **Platform List:** Browse and filter major platforms
- **Platform Detail:** See a summary of each platform's terms, with logo, ratings, and key criteria
- **Comparison:** Compare two platforms side-by-side on privacy, payment, risk, and more
- **Fully in English:** All content and navigation
- **Responsive Design:** Works on desktop and mobile

## Technologies
- Angular 17+ (standalone components)
- TypeScript
- CSS (modern, responsive)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
1. Clone the repository:
2. Install dependencies:
	```bash
	npm install
	```
3. Start the development server:
	```bash
	npm start
	```
4. Open your browser at [http://localhost:4200](http://localhost:4200)

## Project Structure
- `src/app/pages/home/` — Homepage
- `src/app/pages/platforms/` — Platform list
- `src/app/pages/platform-detail/` — Platform detail page
- `src/app/pages/comparison/` — Comparison page
- `src/app/layout/` — Header and footer
- `src/assets/img/` — (If needed) Local images

## Customization
- To add or edit platforms, update the `platforms` array in `src/app/pages/platform-detail/platform-detail.component.ts`.
- Platform logos can use web URLs or local images.

## License
MIT

---
Made with ❤️ by Franco Dipre
