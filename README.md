# Arda Utancak — Kişisel Portfolyo

Sıfır derleme (zero-build) statik mimariyle hazırlanmış, sabit **Alabaster Light & Amber** tasarım sistemine sahip kişisel geliştirici portfolyosu.

[![Canlı Portfolyo](https://img.shields.io/badge/Canl%C4%B1%20Portfolyo-ardautancak.vercel.app-d97706?style=for-the-badge&logo=vercel&logoColor=white)](https://ardautancak.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-ArdaaaU-18181b?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ArdaaaU)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Arda%20Utancak-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arda-utancak-b67753432/)

## Öne Çıkan Özellikler

- **Alabaster Light & Amber Tasarım Sistemi**: Sıcak taş beyazı yüzey katmanları (`#f7f7f5` → `#ffffff`), koyu mürekkep tipografi, WCAG AA uyumlu amber vurgu (`#b45309` / `#d97706`) ve yüksek kontrastlı koyu kod/terminal pencereleri.
- **Global Komut Paleti (`Ctrl+K` / `⌘K`)**: Sayfa içi bölümler, 11 proje detayı ve hızlı eylemler arasında klavyeyle anlık arama ve gezinme.
- **Mimari & Teknik Kod Modalı**: Her proje için `<dialog>` penceresinde **Mimari Özet** ve kopyalanabilir **Teknik Kod** sekmeleri.
- **Gerçek Etkileşimli Terminal**: `whoami`, `stack`, `projects`, `exp`, `contact`, `copy`, `help` ve `clear` komutlarını destekleyen XSS güvenli terminal simülatörü.
- **Erişilebilirlik & Performans (WCAG 2.1 AA)**: Satır içi SVG ikonlar, skip-link, `:focus-visible` halkaları, `44×44px` dokunma hedefleri, GPU tabanlı okuma ilerleme çizgisi, kardeş öğe odaklama ve `@media (prefers-reduced-motion: reduce)` desteği.

## Teknolojiler

- **Yapı & Stil**: Semantik HTML5, CSS3 Custom Properties (Grid, Flexbox, `@starting-style`)
- **Etkileşim**: Saf JavaScript (ES6+)
- **Tipografi**: *Bricolage Grotesque*, *Plus Jakarta Sans*, *JetBrains Mono* (Google Fonts)
- **Dağıtım**: Vercel

## Dosya Yapısı

```text
├── assets/        # Profil fotoğrafı ve proje ekran görüntüleri
├── index.html     # Semantik sayfa iskeleti, proje önizlemeleri, Modal ve CmdK yapısı
├── style.css      # Sabit Alabaster & Amber tasarım token'ları ve duyarlı stiller
├── script.js      # CmdK paleti, modal sekmeleri, terminal, filtreleme ve doğrulama
└── README.md      # Proje dokümantasyonu
```

© 2026 Arda Utancak. Tüm hakları saklıdır.
