# Jane Doenut

Jane Doenut adalah usaha kuliner yang menawarkan beragam pilihan donat dengan rasa menarik dan harga terjangkau. Melalui website ini, pelanggan dapat mengenal Jane Doenut, melihat menu dan promo, serta memperoleh informasi lokasi dan kontak dengan mudah.

Website profile **Jane Doenut** yang dikembangkan sebagai Tugas Besar Tahap 1 oleh kelompok **Kapal Karam**. Website ini memperkenalkan profil usaha, produk, promo, cerita usaha, lokasi, dan menyediakan halaman kontak dalam tampilan responsif.

> **Status pengembangan:** Dalam proses pengerjaan.

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur Utama](#fitur-utama)
- [Halaman Website](#halaman-website)
- [Teknologi](#teknologi)
- [Anggota dan Pembagian Tugas](#anggota-dan-pembagian-tugas)
- [Struktur Folder](#struktur-folder)
- [Cara Menjalankan Proyek](#cara-menjalankan-proyek)
- [Script yang Tersedia](#script-yang-tersedia)
- [Alur Kerja Git](#alur-kerja-git)
- [Aturan Kontribusi](#aturan-kontribusi)
- [Pengujian](#pengujian)
- [Deployment](#deployment)
- [Sumber Aset](#sumber-aset)

## Tentang Proyek

Jane Doenut adalah website profil usaha donat yang dibangun menggunakan React dan Vite. Website dirancang untuk membantu pengunjung:

- Mengenal Jane Doenut dan cerita usahanya.
- Melihat daftar produk berdasarkan kategori.
- Mencari dan menyaring produk.
- Melihat daftar serta detail promo.
- Menemukan informasi lokasi dan kontak.
- Mengirim pesan melalui formulir kontak.

Proyek dikembangkan secara kolaboratif menggunakan GitHub, feature branch, dan pull request agar kontribusi setiap anggota terdokumentasi dengan jelas.

## Fitur Utama

- Navigasi antars halaman menggunakan React Router.
- Navbar responsif untuk desktop, tablet, dan perangkat seluler.
- Komponen layout yang dapat digunakan kembali.
- Daftar produk dengan pencarian dan filter kategori.
- Daftar promo dan halaman detail promo dinamis.
- Pengambilan data menggunakan Fetch API.
- Loading, error, empty, dan success state.
- Formulir kontak dengan validasi input.
- Semantic HTML dan dukungan aksesibilitas dasar.
- Halaman 404 untuk alamat yang tidak ditemukan.
- Tampilan responsif menggunakan Flexbox, Grid, dan media query.

## Halaman Website

| Route | Halaman | Penanggung Jawab |
|---|---|---|
| `/` | Home | Aqsa |
| `/menu` | Menu produk | Langga |
| `/promo` | Daftar promo | Eru |
| `/promo/:slug` | Detail promo dinamis | Eru |
| `/about` | Our Story | Eru |
| `/location` | Lokasi dan informasi usaha | Aqsa |
| `/contact` | Formulir kontak | Eru |
| Route tidak dikenal | Not Found / 404 | Aqsa |

## Teknologi

- React
- Vite
- React Router DOM
- JavaScript
- HTML5
- CSS3
- Fetch API
- OxLint
- Git dan GitHub

## Anggota dan Pembagian Tugas

### Muh Aqsa Sirojudin

**Peran:** Project setup, shared layout, Home, Location, dan integrasi.

Tanggung jawab:

- Menyiapkan project React dan Vite.
- Mengatur struktur folder dan routing.
- Membuat Navbar, Footer, dan Main Layout.
- Membuat halaman Home.
- Membuat halaman Location.
- Membuat komponen loading dan error yang dapat digunakan kembali.
- Mengintegrasikan pekerjaan seluruh anggota.
- Memeriksa lint, production build, navigasi, dan responsive design.

### Nandana Atha Balangga

**Peran:** Menu dan data produk.

Tanggung jawab:

- Membuat halaman Menu.
- Membuat data produk.
- Mengambil data produk menggunakan Fetch API.
- Membuat reusable product card.
- Membuat filter kategori.
- Membuat fitur pencarian produk.
- Menangani loading, error, dan empty state pada halaman menu.
- Memastikan halaman menu responsif dan mudah diakses.

### Putra Erlang Duawa

**Peran:** Promo, About, dan Contact.

Tanggung jawab:

- Membuat halaman daftar Promo.
- Membuat halaman detail promo dinamis.
- Membuat data promo dan mengambilnya menggunakan Fetch API.
- Membuat halaman Our Story.
- Membuat halaman Contact.
- Membuat validasi formulir dan pesan kesalahan.
- Menampilkan success state setelah formulir berhasil dikirim.
- Memastikan halaman yang dibuat responsif dan mudah diakses.

## Struktur Folder

```text
jane-doenut/
├── public/
│   ├── data/
│   │   ├── about.json
│   │   ├── contact.json
│   │   ├── locations.json
│   │   ├── products.json
│   │   └── profile.json
│   ├── images/
│   │   ├── common/
│   │   │   ├── bg-about.webp
│   │   │   ├── bg-contact.webp
│   │   │   ├── Gambar-about.webp
│   │   │   ├── gambar-about2.webp
│   │   │   ├── gambar-judul.webp
│   │   │   ├── hero-donuts.webp
│   │   │   ├── menu-banner.webp
│   │   │   ├── value-gambar1.webp
│   │   │   ├── value-gambar2.webp
│   │   │   └── value-gambar3.webp
│   │   └── products/
│   │       ├── bomboloni-custard.webp
│   │       ├── bomboloni-krim-cokelat.webp
│   │       ├── bomboloni-matcha.webp
│   │       ├── bomboloni-selai-stroberi.webp
│   │       ├── bomboloni-stroberi.webp
│   │       ├── bomboloni-vanilla.webp
│   │       ├── donat-eclair-blueberry.webp
│   │       ├── donat-eclair-cokelat-pisang.webp
│   │       ├── donat-eclair-isi-vanilla.webp
│   │       ├── donat-eclair-matcha.webp
│   │       ├── donat-eclair-regal.webp
│   │       ├── donat-eclair-stoberi-sunday.webp
│   │       ├── donat-glaze-caramel.webp
│   │       ├── donat-keju.webp
│   │       ├── donat-matcha-wijen.webp
│   │       ├── donat-mint-vanilla.webp
│   │       ├── donat-mochi-chococips.webp
│   │       ├── donat-mochi-cokelat-karamel.webp
│   │       ├── donat-mochi-cokelat-meses.webp
│   │       ├── donat-mochi-marshmallow.webp
│   │       ├── donat-mochi-matcha.webp
│   │       ├── donat-mochi-vanilla-almond.webp
│   │       ├── donat-oreo.webp
│   │       └── donat-vanilla-kacang.webp
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   └── vite.svg
│   ├── components/
│   │   ├── home/
│   │   │   ├── FeaturedMenu.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   └── PromoPreview.jsx
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── MainLayout.jsx
│   │   │   └── Navbar.jsx
│   │   ├── location/
│   │   │   └── LocationCard.jsx
│   │   ├── menu/
│   │   │   ├── CategoryFilter.jsx
│   │   │   ├── MenuHero.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── SearchBar.jsx
│   │   └── ui/
│   │       ├── ErrorMessage.jsx
│   │       ├── LoadingSpinner.jsx
│   │       └── SectionHeader.jsx
│   ├── hooks/
│   │   └── useFetch.js
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── LocationPage.jsx
│   │   ├── MenuPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── PromoDetailPage.jsx
│   │   └── PromoPage.jsx
│   ├── styles/
│   │   ├── about.css
│   │   ├── contact.css
│   │   ├── home.css
│   │   ├── location.css
│   │   └── menu.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

Folder `node_modules/` dan `dist/` tidak dicantumkan karena merupakan dependency lokal dan hasil production build yang dapat dibuat kembali melalui perintah npm.

## Cara Menjalankan Proyek

### Prasyarat

Pastikan perangkat sudah memiliki:

- Node.js
- npm
- Git

Periksa instalasi dengan perintah berikut:

```bash
node --version
npm --version
git --version
```

### 1. Clone repository

```bash
git clone https://github.com/kapal-karam-web/jane-doenut.git
```

### 2. Masuk ke folder proyek

```bash
cd jane-doenut
```

### 3. Install dependency

```bash
npm install
```

### 4. Jalankan development server

```bash
npm run dev
```

Buka URL lokal yang ditampilkan oleh Vite di terminal. Secara default, Vite biasanya menggunakan:

```text
http://localhost:5173
```

## Script yang Tersedia

Menjalankan development server:

```bash
npm run dev
```

Memeriksa source code menggunakan OxLint:

```bash
npm run lint
```

Membuat production build:

```bash
npm run build
```

Meninjau hasil production build secara lokal:

```bash
npm run preview
```

## Alur Kerja Git

Proyek menggunakan dua branch utama:

- `main`: versi stabil atau siap dirilis.
- `develop`: tempat integrasi seluruh fitur sebelum masuk ke `main`.

Setiap fitur harus dikerjakan pada branch terpisah yang dibuat dari `develop`.

### Memulai pekerjaan

```bash
git checkout develop
git pull origin develop
git checkout -b feature/nama-fitur-namaanggota
```

Contoh:

```bash
git checkout -b feature/menu-langga
```

### Menyimpan perubahan

```bash
git add .
git commit -m "feat(menu): add product category filter"
git push -u origin feature/menu-langga
```

Setelah fitur selesai, buat pull request dari feature branch menuju `develop`.

### Format nama branch

```text
feature/nama-fitur-namaanggota
fix/nama-perbaikan-namaanggota
chore/nama-pekerjaan-namaanggota
```

Contoh:

```text
feature/home-aqsa
feature/menu-langga
feature/promo-eru
fix/mobile-navbar-aqsa
```

### Format commit

Proyek menggunakan pesan commit yang singkat dan deskriptif:

```text
feat: menambahkan fitur baru
fix: memperbaiki bug
style: mengubah tampilan tanpa mengubah logika
refactor: merapikan kode tanpa mengubah fungsi
chore: konfigurasi atau pemeliharaan proyek
docs: memperbarui dokumentasi
test: menambahkan atau memperbaiki pengujian
```

Contoh:

```bash
git commit -m "feat(home): add featured products section"
git commit -m "fix(navbar): close mobile menu after navigation"
git commit -m "docs: update project installation guide"
```

## Aturan Kontribusi

1. Jangan mengerjakan fitur langsung pada branch `main`.
2. Selalu perbarui branch `develop` sebelum membuat feature branch.
3. Kerjakan hanya bagian yang menjadi tanggung jawab masing-masing.
4. Jangan mengubah file milik anggota lain tanpa berkomunikasi terlebih dahulu.
5. Buat commit bertahap dan bermakna.
6. Jangan memasukkan API key, password, atau data sensitif ke repository.
7. Jalankan lint dan build sebelum membuat pull request.
8. Jelaskan perubahan dan cara pengujian pada deskripsi pull request.
9. Selesaikan conflict pada feature branch, bukan langsung pada `main`.
10. Minta minimal satu anggota lain memeriksa pull request sebelum merge.

## Pengujian

Sebelum membuat pull request, jalankan:

```bash
npm run lint
npm run build
```

Checklist pemeriksaan manual:

- [ ] Seluruh route dapat dibuka.
- [ ] Tidak ada error pada browser console.
- [ ] Navbar dapat digunakan pada desktop dan mobile.
- [ ] Menu mobile dapat dibuka dan ditutup.
- [ ] Navigasi dapat digunakan menggunakan keyboard.
- [ ] Seluruh gambar memiliki teks alternatif yang sesuai.
- [ ] Data menampilkan loading state ketika dimuat.
- [ ] Data menampilkan error state ketika gagal dimuat.
- [ ] Tombol retry bekerja.
- [ ] Formulir menampilkan validasi yang sesuai.
- [ ] Tampilan telah diperiksa pada ukuran mobile, tablet, dan desktop.
- [ ] Halaman 404 muncul untuk route yang tidak tersedia.
---

Dikembangkan oleh **Muh Aqsa Sirojudin, Nandana Atha Balangga, dan Putra Erlang Duawa** untuk Tugas Besar Tahap 1.
