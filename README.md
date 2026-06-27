# JSONYAMify

Transform, edit, and format **JSON / YAML** instantly — right in your browser. No backend, no data upload, no tracking. Everything runs 100% client-side.

🔗 **Live demo:** _add your deployed URL here_

---

## 🇮🇩 Bahasa Indonesia

### Apa ini?
JSONYAMify adalah tool web ringan untuk **melihat, mengedit, dan mengubah format** data JSON/YAML secara instan. Cocok untuk developer, QA, atau siapa pun yang sering bongkar-pasang payload API, file konfigurasi, atau data uji coba.

### ✨ Fitur
- **Parse JSON & YAML** — input otomatis dideteksi, tidak perlu pilih format manual.
- **4 template contoh siap pakai** — 2 contoh JSON (E-commerce Order, User Profile & Subscription) dan 2 contoh YAML (Server/Infra Config, CI/CD Pipeline), pilih lewat dropdown.
- **Prettify & Minify** — rapikan indentasi atau padatkan jadi satu baris dengan satu klik.
- **Output ganda: JSON ↔ YAML** — pilih format output sesuai kebutuhan, lengkap dengan mode Compact/Pretty.
- **Flatten View & Tree View** — lihat struktur data sebagai daftar rata (dot notation) atau pohon bertingkat yang bisa di-collapse.
- **Deteksi tipe data otomatis** — angka, tanggal (`YYYYMMDD`), datetime ISO, date+sequence number, string, object, array.
- **Aksi cepat per tipe data** — `+1`/`-1` untuk angka, `Hari ini` untuk tanggal, `Set Now` untuk datetime ISO, edit langsung untuk string.
- **Perintah teks (dot notation)** — contoh: `tambah 1 ke order.summary.totalItems`, `ganti order.customer.name dengan Budi`.
- **Pencarian/filter field** — temukan key/value tertentu dengan cepat pada data besar.
- **Upload & Download file** — `.json` / `.yaml`.
- **Mode gelap & Dwibahasa (ID/EN)**.
- Semua proses berjalan di browser — **data Anda tidak pernah dikirim ke server manapun**.

### 🚀 Cara Menjalankan
Tidak perlu build tool atau server backend. Cukup:
1. Clone/download repo ini.
2. Buka `index.html` langsung di browser, **atau** jalankan local server sederhana (disarankan agar file CSS/JS termuat dengan benar di semua browser):
   ```bash
   npx serve .
   # atau
   python3 -m http.server 8080
   ```
3. Buka `http://localhost:8080` di browser.

### 📁 Struktur File
```
.
├── index.html            # markup halaman utama (tool)
├── about.html            # halaman Tentang
├── faq.html              # halaman FAQ (JSON vs YAML, dll)
├── privacy.html          # halaman kebijakan privasi
├── ads.txt               # verifikasi Google AdSense (isi Publisher ID setelah disetujui)
├── favicon.svg           # ikon situs
├── robots.txt            # instruksi untuk crawler search engine
├── sitemap.xml           # daftar halaman untuk Google Search Console
├── css/
│   └── style.css         # semua styling tool utama
├── js/
│   └── script.js         # semua logika aplikasi tool utama
├── blog-assets/
│   ├── blog.css          # styling khusus halaman blog & FAQ
│   └── lang.js           # toggle bahasa ID/EN di blog & FAQ
├── blog/
│   ├── index.html        # daftar/listing semua artikel blog
│   ├── apa-itu-json.html
│   ├── apa-itu-yaml.html
│   ├── json-vs-yaml.html
│   ├── json-untuk-pemula.html
│   ├── kesalahan-umum-json.html
│   ├── json-schema-validation.html
│   ├── konversi-json-yaml.html
│   ├── yaml-devops.html
│   ├── tips-debug-api-payload.html
│   └── cara-format-json-online.html
└── README.md
```
CSS dan JS dipisah dari HTML (folder `css/` dan `js/`), serta artikel blog dipisah ke folder `blog/` dengan asetnya sendiri di `blog-assets/`, agar lebih mudah dirawat, di-debug, dan di-cache oleh browser.

> ⚠️ **Penting:** ganti semua placeholder `https://JSONYAMify.example.com/` di `index.html`, `about.html`, `faq.html`, `privacy.html`, `sitemap.xml`, dan `robots.txt` dengan domain asli kamu setelah deploy (misalnya `https://namakamu.pages.dev/`). Ganti juga `ca-pub-XXXXXXXXXXXXXXXX` di `index.html` dan `pub-0000000000000000` di `ads.txt` dengan Publisher ID asli setelah akun AdSense kamu disetujui.

### 🤝 Kontribusi
Pull request terbuka untuk siapa saja. Untuk laporan bug/saran fitur, kirim email lewat tautan di footer aplikasi atau buka issue di repo ini.

### ⚠️ Catatan Privasi
JSONYAMify tidak mengirim data apa pun ke server. Namun untuk data sensitif (PII, kredensial, data finansial, dll), tetap disarankan untuk **tidak** menempelkannya ke tool publik mana pun kecuali Anda yakin host/deploy sendiri secara privat.

---

## 🇬🇧 English

### What is this?
JSONYAMify is a lightweight web tool to **view, edit, and convert** JSON/YAML data instantly. Useful for developers, QA engineers, or anyone who frequently inspects API payloads, config files, or test fixtures.

### ✨ Features
- **Parse JSON & YAML** — input format is auto-detected.
- **4 ready-made example templates** — 2 JSON examples (E-commerce Order, User Profile & Subscription) and 2 YAML examples (Server/Infra Config, CI/CD Pipeline), selectable via dropdown.
- **Prettify & Minify** — one-click formatting or compaction.
- **Dual output: JSON ↔ YAML** — choose your output format, with Compact/Pretty modes.
- **Flatten View & Tree View** — see data as a flat dot-notation list or a collapsible nested tree.
- **Automatic type detection** — numbers, dates (`YYYYMMDD`), ISO datetimes, date+sequence strings, strings, objects, arrays.
- **Quick actions per type** — `+1`/`-1` for numbers, `Today` for dates, `Set Now` for ISO datetimes, inline editing for strings.
- **Text commands (dot notation)** — e.g. `add 1 to order.summary.totalItems`, `set order.customer.name to Budi`.
- **Field search/filter** — quickly locate a key/value in large data.
- **File upload & download** — `.json` / `.yaml`.
- **Dark mode & bilingual UI (ID/EN)**.
- Runs entirely in the browser — **your data is never sent to any server**.

### 🚀 Getting Started
No build step or backend required.
1. Clone/download this repo.
2. Open `index.html` directly in a browser, **or** serve it locally (recommended for full CSS/JS compatibility):
   ```bash
   npx serve .
   # or
   python3 -m http.server 8080
   ```
3. Visit `http://localhost:8080`.

### 📁 File Structure
```
.
├── index.html            # main tool page markup
├── about.html            # About page
├── faq.html              # FAQ page (JSON vs YAML, etc.)
├── privacy.html          # privacy policy page
├── ads.txt               # Google AdSense verification (fill in Publisher ID once approved)
├── favicon.svg           # site icon
├── robots.txt            # search engine crawler instructions
├── sitemap.xml           # page list for Google Search Console
├── css/
│   └── style.css         # all styling for the main tool
├── js/
│   └── script.js         # all application logic for the main tool
├── blog-assets/
│   ├── blog.css           # styling for blog & FAQ pages
│   └── lang.js             # ID/EN language toggle for blog & FAQ
├── blog/
│   ├── index.html         # blog listing page
│   ├── apa-itu-json.html
│   ├── apa-itu-yaml.html
│   ├── json-vs-yaml.html
│   ├── json-untuk-pemula.html
│   ├── kesalahan-umum-json.html
│   ├── json-schema-validation.html
│   ├── konversi-json-yaml.html
│   ├── yaml-devops.html
│   ├── tips-debug-api-payload.html
│   └── cara-format-json-online.html
└── README.md
```
CSS and JS live in their own `css/` and `js/` folders, and blog articles live in `blog/` with their own assets in `blog-assets/`, for easier maintenance, debugging, and browser caching.

> ⚠️ **Important:** replace every `https://JSONYAMify.example.com/` placeholder in `index.html`, `about.html`, `faq.html`, `privacy.html`, `sitemap.xml`, and `robots.txt` with your real domain after deploying (e.g. `https://yourname.pages.dev/`). Also replace `ca-pub-XXXXXXXXXXXXXXXX` in `index.html` and `pub-0000000000000000` in `ads.txt` with your real Publisher ID once your AdSense account is approved.

### 🤝 Contributing
Pull requests are welcome. For bug reports or feature requests, email via the link in the app footer or open an issue on this repo.

### ⚠️ Privacy Note
JSONYAMify never transmits your data to a server. That said, avoid pasting highly sensitive data (PII, credentials, financial records, etc.) into any public-facing tool unless you control the deployment yourself.

---

## 🗺️ Roadmap Ideas / Saran Fitur Selanjutnya
- JSON Schema validation
- Diff / compare two JSON-YAML documents
- Undo / redo history
- Autosave to local storage with a "restore last session" prompt
- Export field list as CSV
- Syntax highlighting in the raw input textarea
- Keyboard shortcuts (e.g. `Ctrl+Enter` to parse, `Ctrl+B` to prettify)
- Shareable link (encode small JSON in URL hash) for quick sharing
- CSV ⇄ JSON conversion

## 📄 License
MIT — feel free to use, modify, and share.
