# Murad Kızılay — Software Engineer Portfolio

A modern, high-performance personal portfolio website built with **Astro 5** and **Tailwind CSS**, designed specifically for software engineers with an emphasis on backend systems, microservices, and data retrieval.

---

## 🚀 Features

- **Blazing Fast & Ultra-Lightweight:** Powered by Astro static site generation (zero client-side JS overhead by default).
- **Dark / Light Mode Support:** Smooth theme toggling with zero flash on page load (FOUC prevention) and local storage preference persistence.
- **CV Data Driven:** All content (Experiences, Skills, Education, Personal info) is strictly typed and decoupled in [`src/data/cvData.ts`](./src/data/cvData.ts).
- **Interactive Career Timeline:** Highlighting responsibilities, achievements, and tech stacks for **Mobileaction**, **Rollee**, and **AppNava**.
- **Interactive Skills Matrix:** Grouped into Backend, Languages, Reverse Engineering, Cloud, and Databases.
- **Direct CV Download & Preview:** Integrated button to download or preview [`MuradKizilayCV.pdf`](./public/MuradKizilayCV.pdf).
- **SEO & Social Share Ready:** Pre-configured Open Graph meta tags and metadata for LinkedIn / Twitter sharing.

---

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Typography & Icons:** Inter, JetBrains Mono, Custom SVG icons
- **Language:** TypeScript

---

## 💻 Local Development

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 2. Build for Production
```bash
npm run build
```
Generates static assets in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🚢 Deployment (Canlıya Alma)

Bu projeyi tamamen ücretsiz ve otomatik CI/CD ile canlıya almak için 2 harika seçenek:

### Seçenek 1: Vercel (Önerilen)
1. Kodunuzu GitHub'a gönderin (`git push`).
2. [vercel.com](https://vercel.com) adresine gidin ve GitHub hesabınızla giriş yapın.
3. **"Add New Project"** butonuna tıklayıp bu depoyu seçin.
4. Framework Preset olarak **Astro** otomatik seçilecektir.
5. **"Deploy"** butonuna basın. Yaklaşık 20 saniye içinde siteniz `muradkizilay.vercel.app` (veya belirleyeceğiniz bir alt alan adı) ile yayında olacaktır!

### Seçenek 2: Cloudflare Pages
1. [dash.cloudflare.com](https://dash.cloudflare.com) adresinden **Workers & Pages** bölümüne gidin.
2. **Create application** -> **Pages** -> **Connect to Git** seçin.
3. Build command: `npm run build`, Output directory: `dist` olarak ayarlayın ve dağıtımı başlatın.
