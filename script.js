/**
 * ARDA UTANCAK — PORTFOLIO SCRIPT
 * Global Command Palette (Ctrl+K / Cmd+K), Project Architecture & Code Modal,
 * Interactive Terminal, Category Filtering, Scroll Spy, Reveals & Form Validation
 */

(() => {
  'use strict';

  const EMAIL_ADDRESS = 'ardautancak2@gmail.com';
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const prefersReducedMotion = () => reducedMotionQuery.matches;

  const PROJECT_DATA = {
    turnuva: {
      category: 'Öne Çıkan · Web Uygulaması',
      title: 'Futbol Turnuva Ağacı & Canlı İstatistik',
      summary:
        '5 takımlı eleme ağacı, Supabase WebSockets üzerinden anlık skor senkronizasyonu, otomatik puan durumu ve 34 oyunculu gol krallığı takip sistemi.',
      role: 'Uçtan uca Front-End mimari, veritabanı şema tasarımı ve gerçek zamanlı senkronizasyon geliştirme.',
      highlights: [
        'Supabase Realtime kanalları ile sayfa yenilenmeden tüm istemcilerde eşzamanlı skor ve fikstür güncellemesi.',
        'Maç skorları girildiğinde puan tablosu, averaj ve gol krallığı sıralamasını otomatik hesaplayan istemci mantığı.',
        'Yönetici paneli üzerinden duyuru ve maç saati güncellemelerinin anlık yayına alınması.'
      ],
      tags: ['JavaScript ES6+', 'Supabase', 'PostgreSQL', 'WebSockets', 'Glassmorphism'],
      liveUrl: 'https://turnuvaagac.vercel.app',
      githubUrl: 'https://github.com/ArdaaaU/Turnuva-A-ac-',
      codeFile: 'realtime-sync.js',
      codeSnippet: `// Supabase Realtime kanal aboneliği ve puan durumu yeniden hesaplama
const channel = supabase
  .channel('turnuva-matches')
  .on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'matches'
  }, (payload) => {
    syncBracketNode(payload.new);
    recomputeStandingsAndTopScorers();
  })
  .subscribe();`
    },
    'ascii-knight': {
      category: 'Öne Çıkan · Grafik & Simülasyon',
      title: 'ASCII Knight Fizik & Ses Motoru',
      summary:
        'Sıfır harici kütüphane kullanılarak geliştirilmiş gerçek zamanlı ASCII karakter rasterizasyon, kumaş fiziği ve prosedürel rüzgar sentezi motoru.',
      role: 'Canvas render boru hattı, fizik simülasyonu, Web Audio API ses sentezi ve kontrol arayüzü tasarımı.',
      highlights: [
        'Uint32Array bellek tamponu üzerinde yüksek performanslı 60 FPS ASCII sahne rasterizasyonu.',
        'Bézier eğrileri ve dinamik rüzgar kuvveti parametreleriyle pelerin ve çimen hareket simülasyonu.',
        'Web Audio API pembe gürültü ve biquad filtreleri kullanarak tamamen tarayıcı içi rüzgar sesi üretimi.'
      ],
      tags: ['HTML5 Canvas', 'Saf JavaScript', 'Web Audio API', 'Uint32Array'],
      liveUrl: 'https://ascii-knight.vercel.app',
      githubUrl: 'https://github.com/ArdaaaU/ascii-knight',
      codeFile: 'cape-physics-raster.js',
      codeSnippet: `// 60 FPS Uint32Array bellek tamponunda Bézier pelerin rasterizasyonu
const frameBuffer = new Uint32Array(cols * rows);
function sampleCapeWave(t, windForce, waveAmp) {
  frameBuffer.fill(0x20); // Boşluk karakteriyle hızlı tampon temizliği
  for (let u = 0; u <= 1; u += 0.02) {
    const sway = Math.sin(u * 4.2 - t * 3.1) * windForce * waveAmp;
    const gx = Math.round(anchorX + u * spanX + sway);
    const gy = Math.round(anchorY + u * spanY);
    if (gx >= 0 && gx < cols && gy >= 0 && gy < rows) {
      frameBuffer[gy * cols + gx] = 0x23; // '#' yoğunluk glifi
    }
  }
}`
    },
    kyk: {
      category: 'Web Uygulaması · Mobil Öncelikli',
      title: 'KYK Yemek Portalı & Kalori Takibi',
      summary:
        'Yurt ağlarındaki düşük bağlantı hızlarında bile anında açılan, öğrencilerin günlük ve aylık yemek listelerine tek ekrandan ulaşabildiği hafif web uygulaması.',
      role: 'UI/UX tasarımı, mobil öncelikli grid düzeni ve hızlı veri sunum arayüzü.',
      highlights: [
        'Ağ yükünü minimumda tutan hafif sayfa mimarisi ve tek bakışta bugün vurgusu.',
        'Kahvaltı ve akşam yemeği görünümleri arasında tek dokunuşla hızlı geçiş.',
        'Mobil cihazlarda konforlu okunabilirlik için temiz kart ve takvim hiyerarşisi.'
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Figma'],
      liveUrl: 'https://kykyemek.vercel.app',
      githubUrl: 'https://github.com/ArdaaaU/KykYemek',
      codeFile: 'menu-calendar.js',
      codeSnippet: `// Bugünün tarihini takvimde vurgulayan sıfır bağımlılıklı filtreleyici
function renderMealCalendar(meals, mealType = 'aksam') {
  const todayDay = new Date().getDate();
  return meals.map((entry) => ({
    day: entry.day,
    isToday: entry.day === todayDay,
    items: entry[mealType] ?? [],
    kcal: entry.calories?.[mealType] ?? 0
  }));
}`
    },
    'cyber-shield': {
      category: 'UI/UX & Vitrin · Erişilebilirlik',
      title: 'Cyber Shield — Siber Zorbalık Rehberi',
      summary:
        'Çocuk ve gençleri akran zorbalığı hakkında bilgilendiren, çevrimiçi vaka simülasyonları sunan pedagojik ve WCAG odaklı dijital farkındalık platformu.',
      role: 'Bilgi mimarisi, WCAG uyumlu renk kontrastı tasarımı ve etkileşimli senaryo arayüzleri.',
      highlights: [
        'Yüksek okunabilirlik ve kontrast standartlarına göre tasarlanmış karanlık arayüz hiyerarşisi.',
        'Adım adım "Tanı, Korun, Harekete Geç" pedagojik akış kurgusu.',
        'Etkileşimli senaryo ve rol yapma simülasyonu modülleri.'
      ],
      tags: ['HTML5', 'CSS3', 'Bootstrap', 'WCAG UI/UX', 'Figma'],
      liveUrl: 'https://siberzorbalik.vercel.app',
      githubUrl: 'https://github.com/ArdaaaU/siberZorbalik',
      codeFile: 'scenario-engine.js',
      codeSnippet: `// WCAG klavye erişilebilir vaka simülasyonu durum geçişi
function selectScenarioChoice(stepId, optionIndex) {
  const step = SCENARIOS.find((s) => s.id === stepId);
  if (!step) return;
  const choice = step.options[optionIndex];
  liveRegion.textContent = choice.feedback;
  progressBadge.setAttribute('aria-valuenow', String(step.order));
}`
    },
    coremax: {
      category: 'UI/UX & Vitrin · E-Ticaret Konsepti',
      title: 'CoreMax — Oyuncu Ekipmanları Vitrini',
      summary:
        'Bilgisayar donanımları odaklı konsept teknoloji markası için tasarlanmış kurumsal kimlik, özel marka dili ve duyarlı ürün kataloğu vitrini.',
      role: 'Marka kimliği, tipografik vurgu sistemi, hero vitrin ve ürün grid arayüzü.',
      highlights: [
        'Donanım odaklı yüksek kontrastlı koyu tema ve keskin aksiyon düğmeleri.',
        'Kargo, güvenlik ve destek özet kartlarıyla net güven sinyalleri.',
        'Masaüstü ve mobil ekranlar için esnek ürün listeleme yapısı.'
      ],
      tags: ['HTML5', 'CSS3', 'Bootstrap', 'Kurumsal Kimlik'],
      liveUrl: 'https://coremaxtech.vercel.app',
      githubUrl: 'https://github.com/ArdaaaU/Coremax',
      codeFile: 'catalog-grid.css',
      codeSnippet: `/* Donanım vitrini için responsive otomatik ürün ızgarası */
.coremax-catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}
.coremax-card:hover {
  border-color: rgba(249, 115, 22, 0.55);
  transform: translateY(-4px);
}`
    },
    'ders-programi': {
      category: 'Web Uygulaması · Vanilla JS',
      title: 'Web Tasarım & Kodlama Ders Takvimi',
      summary:
        '2. Sınıf Güz dönemi için saf JavaScript ile geliştirilmiş; otomatik gün tespiti, dinamik Dark/Light tema desteği ve sınav takvimi sunan web platformu.',
      role: 'Durum yönetimi, LocalStorage kalıcılığı ve responsive ders programı tasarımı.',
      highlights: [
        'Kullanıcının tema tercihini LocalStorage üzerinde saklayıp anında uygulayan tema motoru.',
        'Bulunulan günü otomatik algılayarak aktif ders saatlerini öne çıkaran program görünümü.',
        'Vize ve final sınav tarihlerini tek panelden takip etme imkanı.'
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript ES6+', 'LocalStorage', 'Responsive'],
      liveUrl: 'https://dersprog.vercel.app',
      githubUrl: 'https://github.com/ArdaaaU/Ders-Program-',
      codeFile: 'schedule-theme.js',
      codeSnippet: `// Otomatik gün tespiti ve LocalStorage tema senkronizasyonu
const DAYS_TR = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
const currentDay = DAYS_TR[new Date().getDay()];
const savedTheme = localStorage.getItem('dersprog-theme') || 'dark';
document.documentElement.dataset.theme = savedTheme;
highlightActiveDayColumn(currentDay);`
    },
    ucakmotor: {
      category: 'Grafik & Simülasyon · 3D WebGL',
      title: 'Jet Engine 3D Showcase (ucakmotor)',
      summary:
        'Three.js ve WebGL tabanlı gerçek zamanlı 3B jet motoru modelleme, yörünge kamera kontrolleri ve havacılık telemetri analiz sahnesi.',
      role: 'Three.js sahne kurulumu, ışıklandırma, GLTF/GLB model yükleme ve kamera kontrolü.',
      highlights: [
        'OrbitControls ile 360 derece etkileşimli parça inceleme ve yakınlaştırma.',
        'GLTF/GLB 3B varlık yükleme ve gerçek zamanlı sahne ışıklandırması.',
        'Havacılık temalı telemetri ve parça analiz arayüzü.'
      ],
      tags: ['Three.js', 'WebGL', 'GLTF/GLB', 'JavaScript'],
      liveUrl: null,
      githubUrl: 'https://github.com/ArdaaaU/ucakmotor',
      codeFile: 'turbine-scene.js',
      codeSnippet: `// Three.js OrbitControls & GLB türbin yükleme döngüsü
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.06;

loader.load('/models/jet_engine.glb', (gltf) => {
  turbineMesh = gltf.scene;
  scene.add(turbineMesh);
  renderer.setAnimationLoop(renderTelemetryFrame);
});`
    },
    obs: {
      category: 'Web Uygulaması · Full-Stack',
      title: 'Öğrenci Bilgi Sistemi (OBS)',
      summary:
        'Admin, Akademisyen ve Öğrenci olmak üzere 3 rollü yetkilendirme mimarisine sahip; ders atama, vize/final not girişi ve devamsızlık takip sistemi.',
      role: 'Flask rota ve rol kontrol mimarisi, SQLite şema tasarımı ve şablon arayüzleri.',
      highlights: [
        'Admin, Akademisyen ve Öğrenci panellerini izole eden 3 rollü yetkilendirme akışı.',
        'Akademisyenler için ders bazlı vize/final not girişi ve devamsızlık kaydı.',
        'Öğrenciler için ortalama hesaplama ve ders başarı durumu görüntüleme.'
      ],
      tags: ['Python (Flask)', 'SQLite', 'HTML5', 'CSS3'],
      liveUrl: null,
      githubUrl: 'https://github.com/ArdaaaU/OBS-sistemi',
      codeFile: 'rbac_routes.py',
      codeSnippet: `# Flask 3-rollü (Admin, Akademisyen, Öğrenci) yetkilendirme dekoratörü
def role_required(*allowed_roles):
    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            if session.get("role") not in allowed_roles:
                abort(403)
            return fn(*args, **kwargs)
        return wrapper
    return decorator`
    }
  };

  let projectModalApi = null;

  document.addEventListener('DOMContentLoaded', () => {
    initHeaderAndBackToTop();
    initScrollSpy();
    initScrollReveals();
    initMobileDrawer();
    initTerminal();
    initPortfolioFilters();
    projectModalApi = initProjectModal();
    initCommandPalette();
    initAmbientCursor();
    initCardSpotlight();
    initCopyEmail();
    initContactForm();
  });

  // ==========================================
  // 1. HEADER SCROLL STATE, PROGRESS & BACK TO TOP
  // ==========================================
  function initHeaderAndBackToTop() {
    const header = document.getElementById('siteHeader');
    const backToTop = document.getElementById('backToTop');
    const scrollProgress = document.getElementById('scrollProgress');
    let ticking = false;

    const updateOnScroll = () => {
      const y = window.scrollY;
      if (header) {
        header.classList.toggle('is-scrolled', y > 24);
      }
      if (backToTop) {
        backToTop.classList.toggle('visible', y > 420);
      }
      if (scrollProgress) {
        const doc = document.documentElement;
        const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 0);
        const ratio = maxScroll > 0 ? Math.min(Math.max(y / maxScroll, 0), 1) : 0;
        scrollProgress.style.transform = `scaleX(${ratio.toFixed(4)})`;
      }
      ticking = false;
    };

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(updateOnScroll);
          ticking = true;
        }
      },
      { passive: true }
    );

    updateOnScroll();

    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion() ? 'auto' : 'smooth'
        });
      });
    }
  }

  // ==========================================
  // 2. INTERSECTION OBSERVER SCROLL SPY
  // ==========================================
  function initScrollSpy() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = document.querySelectorAll('main section[id]');
    if (!navLinks.length || !sections.length) return;

    const setActiveLink = (id) => {
      navLinks.forEach((link) => {
        const isMatch = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('active', isMatch);
        if (isMatch) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-38% 0px -52% 0px',
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  // ==========================================
  // 3. STAGGERED SCROLL REVEALS
  // ==========================================
  function initScrollReveals() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    document.querySelectorAll('.projects-grid, .approach-grid').forEach((grid) => {
      const items = grid.querySelectorAll('.reveal');
      items.forEach((item, index) => {
        const delay = Math.min(index * 35, 175);
        item.style.setProperty('--reveal-delay', `${delay}ms`);
      });
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  // ==========================================
  // 4. ACCESSIBLE MOBILE DRAWER
  // ==========================================
  function initMobileDrawer() {
    const toggle = document.getElementById('mobileToggle');
    const drawer = document.getElementById('navLinks');
    const navbar = document.querySelector('.navbar');
    if (!toggle || !drawer) return;

    const setMenuOpen = (open) => {
      drawer.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Gezinme menüsünü kapat' : 'Gezinme menüsünü aç');
    };

    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('is-open');
      setMenuOpen(!isOpen);
    });

    drawer.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        setMenuOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (drawer.classList.contains('is-open') && navbar && !navbar.contains(e.target)) {
        setMenuOpen(false);
      }
    });
  }

  // ==========================================
  // 5. INTERACTIVE TERMINAL (XSS-Safe DOM)
  // ==========================================
  function initTerminal() {
    const body = document.getElementById('terminalBody');
    const output = document.getElementById('terminalOutput');
    const form = document.getElementById('terminalForm');
    const input = document.getElementById('terminalInput');
    const chips = document.querySelectorAll('.cmd-chip[data-cmd]');

    if (!body || !output || !form || !input) return;

    const history = [];
    let historyIndex = -1;

    const createRow = (key, value, valueClass = '') => {
      const row = document.createElement('div');
      row.className = 'term-row';

      const keySpan = document.createElement('span');
      keySpan.className = 't-key';
      keySpan.textContent = key;

      const valSpan = document.createElement('span');
      valSpan.className = valueClass ? `t-val ${valueClass}` : 't-val';
      valSpan.textContent = value;

      row.append(keySpan, valSpan);
      return row;
    };

    const appendCommandEcho = (rawCmd) => {
      const entry = document.createElement('div');
      entry.className = 'term-entry';

      const line = document.createElement('div');
      line.className = 'term-line';

      const user = document.createElement('span');
      user.className = 'term-user';
      user.textContent = 'arda@izmir';

      const sep1 = document.createElement('span');
      sep1.className = 'term-sep';
      sep1.textContent = ':';

      const dir = document.createElement('span');
      dir.className = 'term-dir';
      dir.textContent = '~';

      const sep2 = document.createElement('span');
      sep2.className = 'term-sep';
      sep2.textContent = '$';

      const cmdSpan = document.createElement('span');
      cmdSpan.className = 'term-cmd';
      cmdSpan.textContent = rawCmd;

      line.append(user, sep1, dir, sep2, cmdSpan);
      entry.appendChild(line);

      const block = document.createElement('div');
      block.className = 'term-block';
      entry.appendChild(block);

      output.appendChild(entry);
      return block;
    };

    const COMMANDS = {
      help: (block) => {
        [
          ['whoami', 'Geliştirici profili ve eğitim özeti'],
          ['stack', 'Front-End, veritabanı, OOP ve ağ teknolojileri'],
          ['projects', 'Yayındaki seçili 8 web projesi'],
          ['exp', 'Üniversite, IT stajı ve lise geçmişi'],
          ['contact', 'E-posta, GitHub ve LinkedIn bilgileri'],
          ['copy', 'E-posta adresini panoya kopyalar'],
          ['clear', 'Terminal çıktısını temizler']
        ].forEach(([cmd, desc]) => block.appendChild(createRow(cmd, desc, 'accent')));
      },
      whoami: (block) => {
        block.append(
          createRow('Geliştirici', 'Arda Utancak', 'highlight'),
          createRow('Odak', 'Front-End Developer & UI Engineer'),
          createRow('Üniversite', 'Manisa Celal Bayar Üniv. (Web Tasarım)'),
          createRow('Temel', 'Çiğli BİST MTAL — C# / Java OOP'),
          createRow('Staj', 'Uniteks IT (Help Desk & Network)'),
          createRow('Canlı Yayın', '8+ Vercel & GitHub Projesi', 'accent'),
          createRow('Konum', 'İzmir, Türkiye (Remote / Hibrit)')
        );
      },
      stack: (block) => {
        block.append(
          createRow('Front-End', 'HTML5, CSS3, ES6+, Canvas 2D, Three.js, Web Audio'),
          createRow('Veri & BaaS', 'Supabase Realtime, PostgreSQL, MySQL, Flask, SQLite'),
          createRow('OOP & Kod', 'C# (Visual Studio), Java, Temiz Kod'),
          createRow('Sistem & Ağ', 'TCP/IP, DHCP, DNS, Git/GitHub, Vercel')
        );
      },
      projects: (block) => {
        block.append(
          createRow('01 Turnuva', 'turnuvaagac.vercel.app (Supabase Realtime)', 'accent'),
          createRow('02 ASCII Knight', 'ascii-knight.vercel.app (60 FPS Canvas & Audio)', 'accent'),
          createRow('03 KYK Yemek', 'kykyemek.vercel.app (Mobil Öncelikli)'),
          createRow('04 Cyber Shield', 'siberzorbalik.vercel.app (WCAG UI/UX)'),
          createRow('05 CoreMax', 'coremaxtech.vercel.app (E-Ticaret Vitrini)'),
          createRow('06 Ders Prog.', 'dersprog.vercel.app (ES6+ & LocalStorage)'),
          createRow('07 Jet 3D', 'github.com/ArdaaaU/ucakmotor (Three.js)'),
          createRow('08 OBS', 'github.com/ArdaaaU/OBS-sistemi (Flask & SQLite)')
        );
      },
      exp: (block) => {
        block.append(
          createRow('Devam Ediyor', 'Manisa Celal Bayar Üniv. — Web Tasarımı ve Kodlama', 'highlight'),
          createRow('Kurumsal Staj', 'Uniteks IT Departmanı — Help Desk & TCP/IP Ağ'),
          createRow('Lise Temeli', 'Çiğli BİST MTAL — C# / Java OOP & Veritabanı')
        );
      },
      contact: (block) => {
        block.append(
          createRow('E-Posta', EMAIL_ADDRESS, 'accent'),
          createRow('GitHub', 'github.com/ArdaaaU'),
          createRow('LinkedIn', 'linkedin.com/in/arda-utancak-b67753432'),
          createRow('Konum', 'İzmir, Türkiye (Remote / Hibrit)')
        );
      },
      copy: (block) => {
        copyToClipboard(EMAIL_ADDRESS).then((ok) => {
          if (ok) {
            showToast('E-posta adresi panoya kopyalandı.');
          }
        });
        block.appendChild(createRow('Pano', `${EMAIL_ADDRESS} kopyalandı.`, 'accent'));
      }
    };

    COMMANDS.skills = COMMANDS.stack;
    COMMANDS.experience = COMMANDS.exp;
    COMMANDS.edu = COMMANDS.exp;
    COMMANDS.education = COMMANDS.exp;

    const executeCommand = (rawInput) => {
      const trimmed = rawInput.trim();
      if (!trimmed) return;

      const normalized = trimmed.toLowerCase();
      history.push(trimmed);
      historyIndex = history.length;

      if (normalized === 'clear' || normalized === 'cls') {
        output.replaceChildren();
        return;
      }

      const block = appendCommandEcho(trimmed);
      const handler = COMMANDS[normalized];

      if (handler) {
        handler(block);
      } else {
        const msg = document.createElement('p');
        msg.className = 'term-note';
        msg.textContent = `Komut bulunamadı: "${trimmed}". Kullanılabilir komutlar için "help" yazın.`;
        block.appendChild(msg);
      }

      body.scrollTop = body.scrollHeight;
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      executeCommand(input.value);
      input.value = '';
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp' && history.length > 0) {
        e.preventDefault();
        historyIndex = Math.max(0, historyIndex - 1);
        input.value = history[historyIndex];
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < history.length - 1) {
          historyIndex += 1;
          input.value = history[historyIndex];
        } else {
          historyIndex = history.length;
          input.value = '';
        }
      }
    });

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const cmd = chip.getAttribute('data-cmd');
        if (cmd) {
          executeCommand(cmd);
        }
      });
    });

    body.addEventListener('click', () => {
      const selection = window.getSelection();
      if (!selection || selection.toString().length === 0) {
        input.focus();
      }
    });
  }

  // ==========================================
  // 6. PORTFOLIO CATEGORY FILTERING
  // ==========================================
  function initPortfolioFilters() {
    const buttons = document.querySelectorAll('.filter-btn[data-filter]');
    const grid = document.getElementById('projectsGrid');
    const cards = document.querySelectorAll('.project-card[data-category]');
    const status = document.getElementById('filterStatus');

    if (!buttons.length || !grid || !cards.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter') || 'all';

        buttons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle('active', active);
          b.setAttribute('aria-pressed', String(active));
        });

        grid.classList.toggle('is-filtered', filter !== 'all');

        let visibleCount = 0;
        cards.forEach((card) => {
          const matches = filter === 'all' || card.getAttribute('data-category') === filter;
          card.classList.toggle('is-hidden', !matches);
          if (matches) {
            card.classList.add('is-visible');
            visibleCount += 1;
          }
        });

        if (status) {
          const label = btn.childNodes[0]?.textContent?.trim() || filter;
          status.textContent =
            filter === 'all'
              ? `Tüm kategorilerden ${visibleCount} proje gösteriliyor.`
              : `${label} kategorisinde ${visibleCount} proje gösteriliyor.`;
        }
      });
    });
  }

  // ==========================================
  // 7. PROJECT ARCHITECTURE & CODE MODAL (<dialog>)
  // ==========================================
  function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.getElementById('modalClose');
    const triggers = document.querySelectorAll('[data-project]');

    if (!modal || !triggers.length) return null;

    const categoryEl = document.getElementById('modalCategory');
    const titleEl = document.getElementById('modalTitle');
    const summaryEl = document.getElementById('modalSummary');
    const roleEl = document.getElementById('modalRole');
    const highlightsEl = document.getElementById('modalHighlights');
    const tagsEl = document.getElementById('modalTags');
    const actionsEl = document.getElementById('modalActions');

    const tabArch = document.getElementById('tabArch');
    const tabCode = document.getElementById('tabCode');
    const panelArch = document.getElementById('panelArch');
    const panelCode = document.getElementById('panelCode');
    const codeFileEl = document.getElementById('modalCodeFile');
    const codeBlockEl = document.getElementById('modalCodeBlock');
    const copyCodeBtn = document.getElementById('modalCopyCode');

    let lastFocused = null;
    let activeCodeText = '';

    const setActiveTab = (tabName) => {
      const showCode = tabName === 'code';
      if (tabArch) {
        tabArch.classList.toggle('is-active', !showCode);
        tabArch.setAttribute('aria-selected', String(!showCode));
      }
      if (tabCode) {
        tabCode.classList.toggle('is-active', showCode);
        tabCode.setAttribute('aria-selected', String(showCode));
      }
      if (panelArch) panelArch.hidden = showCode;
      if (panelCode) panelCode.hidden = !showCode;
    };

    const createExternalLink = (href, label, className) => {
      const a = document.createElement('a');
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = className;
      a.textContent = label;
      return a;
    };

    const openProjectModal = (id, triggerEl) => {
      const data = PROJECT_DATA[id];
      if (!data) return;

      lastFocused = triggerEl || document.activeElement;
      setActiveTab('arch');

      if (categoryEl) categoryEl.textContent = data.category;
      if (titleEl) titleEl.textContent = data.title;
      if (summaryEl) summaryEl.textContent = data.summary;
      if (roleEl) roleEl.textContent = data.role;

      if (highlightsEl) {
        highlightsEl.replaceChildren();
        data.highlights.forEach((item) => {
          const li = document.createElement('li');
          li.textContent = item;
          highlightsEl.appendChild(li);
        });
      }

      if (tagsEl) {
        tagsEl.replaceChildren();
        data.tags.forEach((tag) => {
          const span = document.createElement('span');
          span.textContent = tag;
          tagsEl.appendChild(span);
        });
      }

      activeCodeText = data.codeSnippet || '';
      if (codeFileEl) codeFileEl.textContent = data.codeFile || 'snippet.js';
      if (codeBlockEl) codeBlockEl.textContent = activeCodeText;

      if (actionsEl) {
        actionsEl.replaceChildren();
        if (data.liveUrl) {
          actionsEl.appendChild(createExternalLink(data.liveUrl, 'Canlı Demoyu Aç', 'btn btn-primary btn-sm'));
        }
        if (data.githubUrl) {
          actionsEl.appendChild(createExternalLink(data.githubUrl, 'GitHub Deposunu İncele', 'btn btn-secondary btn-sm'));
        }
      }

      if (typeof modal.showModal === 'function') {
        modal.showModal();
      } else {
        modal.setAttribute('open', '');
      }

      if (tabArch && typeof tabArch.focus === 'function') {
        tabArch.focus({ preventScroll: true });
      }
    };

    const closeModal = () => {
      if (typeof modal.close === 'function') {
        modal.close();
      } else {
        modal.removeAttribute('open');
      }
      if (lastFocused && typeof lastFocused.focus === 'function') {
        lastFocused.focus();
      }
    };

    if (tabArch) {
      tabArch.addEventListener('click', () => setActiveTab('arch'));
      tabArch.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && tabCode) {
          setActiveTab('code');
          tabCode.focus();
        }
      });
    }

    if (tabCode) {
      tabCode.addEventListener('click', () => setActiveTab('code'));
      tabCode.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && tabArch) {
          setActiveTab('arch');
          tabArch.focus();
        }
      });
    }

    if (copyCodeBtn) {
      copyCodeBtn.addEventListener('click', async () => {
        if (!activeCodeText) return;
        const ok = await copyToClipboard(activeCodeText);
        if (ok) {
          showToast('Kod parçası panoya kopyalandı.');
        }
      });
    }

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const id = trigger.getAttribute('data-project');
        if (id) openProjectModal(id, trigger);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    modal.addEventListener('cancel', (e) => {
      e.preventDefault();
      closeModal();
    });

    return { openById: openProjectModal };
  }

  // ==========================================
  // 8. GLOBAL COMMAND PALETTE (CTRL+K / CMD+K)
  // ==========================================
  function initCommandPalette() {
    const modal = document.getElementById('cmdkModal');
    const input = document.getElementById('cmdkInput');
    const list = document.getElementById('cmdkList');
    const empty = document.getElementById('cmdkEmpty');
    const triggerBtn = document.getElementById('cmdkTrigger');
    const extraOpeners = document.querySelectorAll('[data-open-cmdk]');
    const shortcutHint = document.getElementById('cmdkShortcutHint');
    const shortcutBadges = document.querySelectorAll('[data-cmdk-kbd]');

    if (!modal || !input || !list) return;

    const isApple = /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent || '');
    const kbdLabel = isApple ? '⌘K' : 'Ctrl K';
    if (shortcutHint) shortcutHint.textContent = kbdLabel;
    shortcutBadges.forEach((el) => {
      el.textContent = kbdLabel;
    });

    let activeIndex = 0;
    let visibleItems = [];
    let lastFocused = null;

    const scrollToSection = (selector) => {
      const target = document.querySelector(selector);
      if (target) {
        target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
      }
    };

    const getAllCommands = () => {
      const navCommands = [
        { group: 'Gezinme', title: 'Anasayfa & Terminal', sub: '#anasayfa', keywords: 'hero başlangıç terminal', run: () => scrollToSection('#anasayfa') },
        { group: 'Gezinme', title: 'Seçili Projeler', sub: '#portfolyo', keywords: 'projeler portfolyo işler', run: () => scrollToSection('#portfolyo') },
        { group: 'Gezinme', title: 'Hakkımda & Deneyim', sub: '#hakkimda', keywords: 'eğitim staj uniteks cbu', run: () => scrollToSection('#hakkimda') },
        { group: 'Gezinme', title: 'Teknoloji Yığını', sub: '#uzmanlik', keywords: 'yetenekler stack javascript supabase', run: () => scrollToSection('#uzmanlik') },
        { group: 'Gezinme', title: 'Mühendislik Yaklaşımı', sub: '#hizmetler', keywords: 'yaklaşım hizmetler wcag', run: () => scrollToSection('#hizmetler') },
        { group: 'Gezinme', title: 'İletişim & Form', sub: '#iletisim', keywords: 'iletişim mesaj eposta', run: () => scrollToSection('#iletisim') }
      ];

      const projectCommands = Object.entries(PROJECT_DATA).map(([id, proj]) => ({
        group: 'Projeler',
        title: proj.title,
        sub: proj.category,
        keywords: `${proj.tags.join(' ')} ${id}`,
        run: () => {
          if (projectModalApi) {
            projectModalApi.openById(id, lastFocused);
          }
        }
      }));

      const actionCommands = [
        {
          group: 'Eylemler',
          title: 'E-Posta Adresini Kopyala',
          sub: EMAIL_ADDRESS,
          keywords: 'mail email kopyala iletişim',
          run: () => {
            copyToClipboard(EMAIL_ADDRESS).then((ok) => {
              if (ok) showToast('E-posta adresi panoya kopyalandı.');
            });
          }
        },
        {
          group: 'Eylemler',
          title: 'GitHub Profilini Aç',
          sub: 'github.com/ArdaaaU',
          keywords: 'github kod repo',
          run: () => window.open('https://github.com/ArdaaaU', '_blank', 'noopener,noreferrer')
        },
        {
          group: 'Eylemler',
          title: 'LinkedIn Profilini Aç',
          sub: 'linkedin.com/in/arda-utancak',
          keywords: 'linkedin kariyer',
          run: () =>
            window.open('https://www.linkedin.com/in/arda-utancak-b67753432/', '_blank', 'noopener,noreferrer')
        }
      ];

      return [...navCommands, ...projectCommands, ...actionCommands];
    };

    const updateActiveHighlight = () => {
      const itemEls = list.querySelectorAll('.cmdk-item');
      itemEls.forEach((el, idx) => {
        const active = idx === activeIndex;
        el.classList.toggle('is-active', active);
        el.setAttribute('aria-selected', String(active));
        if (active) {
          el.scrollIntoView({ block: 'nearest' });
        }
      });
    };

    const executeItem = (item) => {
      if (!item) return;
      closePalette(false);
      window.requestAnimationFrame(() => {
        item.run();
      });
    };

    const renderList = (queryText) => {
      const q = queryText.trim().toLocaleLowerCase('tr-TR');
      const all = getAllCommands();

      visibleItems = q
        ? all.filter((item) => {
            const haystack = `${item.title} ${item.sub} ${item.group} ${item.keywords}`.toLocaleLowerCase('tr-TR');
            return haystack.includes(q);
          })
        : all;

      list.replaceChildren();
      activeIndex = 0;

      if (!visibleItems.length) {
        if (empty) empty.hidden = false;
        return;
      }

      if (empty) empty.hidden = true;

      let lastGroup = '';
      visibleItems.forEach((item, index) => {
        if (item.group !== lastGroup) {
          lastGroup = item.group;
          const groupEl = document.createElement('div');
          groupEl.className = 'cmdk-group-title';
          groupEl.textContent = item.group;
          list.appendChild(groupEl);
        }

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'cmdk-item';
        btn.setAttribute('role', 'option');
        btn.setAttribute('aria-selected', String(index === 0));

        const main = document.createElement('div');
        main.className = 'cmdk-item-main';

        const title = document.createElement('span');
        title.className = 'cmdk-item-title';
        title.textContent = item.title;

        const sub = document.createElement('span');
        sub.className = 'cmdk-item-sub';
        sub.textContent = item.sub;

        main.append(title, sub);

        const hint = document.createElement('span');
        hint.className = 'cmdk-item-hint';
        hint.textContent = '↵';

        btn.append(main, hint);

        btn.addEventListener('mouseenter', () => {
          activeIndex = index;
          updateActiveHighlight();
        });

        btn.addEventListener('click', () => executeItem(item));

        list.appendChild(btn);
      });

      updateActiveHighlight();
    };

    const openPalette = () => {
      if (modal.open) return;
      lastFocused = document.activeElement;
      input.value = '';
      renderList('');

      if (typeof modal.showModal === 'function') {
        modal.showModal();
      } else {
        modal.setAttribute('open', '');
      }
      input.focus();
    };

    const closePalette = (restoreFocus = true) => {
      if (!modal.open && !modal.hasAttribute('open')) return;
      if (typeof modal.close === 'function') {
        modal.close();
      } else {
        modal.removeAttribute('open');
      }
      if (restoreFocus && lastFocused && typeof lastFocused.focus === 'function') {
        lastFocused.focus();
      }
    };

    if (triggerBtn) triggerBtn.addEventListener('click', openPalette);
    extraOpeners.forEach((btn) => btn.addEventListener('click', openPalette));

    input.addEventListener('input', () => {
      renderList(input.value);
    });

    input.addEventListener('keydown', (e) => {
      if (!visibleItems.length) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIndex = (activeIndex + 1) % visibleItems.length;
        updateActiveHighlight();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIndex = (activeIndex - 1 + visibleItems.length) % visibleItems.length;
        updateActiveHighlight();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        executeItem(visibleItems[activeIndex]);
      }
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closePalette(true);
      }
    });

    modal.addEventListener('cancel', (e) => {
      e.preventDefault();
      closePalette(true);
    });

    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (modal.open) {
          closePalette(true);
        } else {
          openPalette();
        }
      }
    });
  }

  // ==========================================
  // 9. AMBIENT CURSOR GLOW & CARD SPOTLIGHT
  // ==========================================
  function initAmbientCursor() {
    if (prefersReducedMotion()) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let rafId = null;
    let cx = window.innerWidth * 0.5;
    let cy = window.innerHeight * 0.35;

    const commit = () => {
      document.documentElement.style.setProperty('--cursor-x', `${cx}px`);
      document.documentElement.style.setProperty('--cursor-y', `${cy}px`);
      rafId = null;
    };

    window.addEventListener(
      'pointermove',
      (e) => {
        cx = e.clientX;
        cy = e.clientY;
        if (!rafId) {
          rafId = window.requestAnimationFrame(commit);
        }
      },
      { passive: true }
    );
  }

  function initCardSpotlight() {
    if (prefersReducedMotion()) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach((card) => {
      card.addEventListener(
        'pointermove',
        (e) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
          card.style.setProperty('--my', `${e.clientY - rect.top}px`);
        },
        { passive: true }
      );
    });
  }

  // ==========================================
  // 10. COPY EMAIL & TOAST NOTIFICATION
  // ==========================================
  let toastTimer = null;

  function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('is-visible');

    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2600);
  }

  async function copyToClipboard(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand('copy');
      document.body.removeChild(textarea);
      return copied;
    } catch {
      return false;
    }
  }

  function initCopyEmail() {
    const copyBtn = document.getElementById('copyEmailBtn');
    if (!copyBtn) return;

    let resetTimer = null;

    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.getAttribute('data-copy') || EMAIL_ADDRESS;
      const ok = await copyToClipboard(email);

      if (ok) {
        copyBtn.classList.add('is-copied');
        copyBtn.setAttribute('aria-label', 'E-posta adresi kopyalandı');
        showToast('E-posta adresi panoya kopyalandı.');

        if (resetTimer) window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(() => {
          copyBtn.classList.remove('is-copied');
          copyBtn.setAttribute('aria-label', 'E-posta adresini kopyala');
        }, 2200);
      } else {
        showToast('Kopyalanamadı. Lütfen adresi manuel olarak seçin.');
      }
    });
  }

  // ==========================================
  // 11. CONTACT FORM VALIDATION & SUBMISSION
  // ==========================================
  function initContactForm() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');
    if (!form || !submitBtn) return;

    const fields = {
      name: {
        input: document.getElementById('name'),
        error: document.getElementById('nameError'),
        validate: (val) => (val.length >= 2 ? '' : 'Lütfen adınızı ve soyadınızı girin.')
      },
      email: {
        input: document.getElementById('email'),
        error: document.getElementById('emailError'),
        validate: (val) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? '' : 'Lütfen geçerli bir e-posta adresi girin.'
      },
      subject: {
        input: document.getElementById('subject'),
        error: document.getElementById('subjectError'),
        validate: (val) => (val.length >= 3 ? '' : 'Lütfen kısa bir konu başlığı girin.')
      },
      message: {
        input: document.getElementById('message'),
        error: document.getElementById('messageError'),
        validate: (val) =>
          val.length >= 10 ? '' : 'Mesajınız en az 10 karakter olmalıdır.'
      }
    };

    const setFieldError = (fieldObj, msg) => {
      if (!fieldObj.input || !fieldObj.error) return;
      fieldObj.error.textContent = msg;
      if (msg) {
        fieldObj.input.setAttribute('aria-invalid', 'true');
      } else {
        fieldObj.input.removeAttribute('aria-invalid');
      }
    };

    Object.values(fields).forEach((fieldObj) => {
      if (!fieldObj.input) return;
      fieldObj.input.addEventListener('input', () => {
        if (fieldObj.input.getAttribute('aria-invalid') === 'true') {
          const msg = fieldObj.validate(fieldObj.input.value.trim());
          setFieldError(fieldObj, msg);
        }
      });
    });

    const renderFormStatus = (type, text, includeMailLink = false) => {
      if (!formStatus) return;
      formStatus.replaceChildren();
      const box = document.createElement('p');
      box.className = `form-status-msg ${type === 'success' ? 'is-success' : 'is-error'}`;
      box.appendChild(document.createTextNode(text));

      if (includeMailLink) {
        box.appendChild(document.createTextNode(' '));
        const link = document.createElement('a');
        link.href = `mailto:${EMAIL_ADDRESS}`;
        link.textContent = EMAIL_ADDRESS;
        box.appendChild(link);
      }

      formStatus.appendChild(box);
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      let firstInvalid = null;
      let isValid = true;

      Object.values(fields).forEach((fieldObj) => {
        if (!fieldObj.input) return;
        const msg = fieldObj.validate(fieldObj.input.value.trim());
        setFieldError(fieldObj, msg);
        if (msg) {
          isValid = false;
          if (!firstInvalid) firstInvalid = fieldObj.input;
        }
      });

      if (!isValid) {
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const originalContent = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Gönderiliyor...';
      if (formStatus) formStatus.replaceChildren();

      const name = fields.name.input.value.trim();
      const email = fields.email.input.value.trim();
      const subject = fields.subject.input.value.trim();
      const message = fields.message.input.value.trim();

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${EMAIL_ADDRESS}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            'Ad Soyad': name,
            'Gönderen E-Posta': email,
            Konu: subject,
            Mesaj: message,
            _subject: `Yeni Portfolyo Mesajı: ${name} — ${subject}`,
            _template: 'table',
            _captcha: 'false'
          })
        });

        if (!response.ok) {
          throw new Error('Gönderim başarısız.');
        }

        form.reset();
        renderFormStatus(
          'success',
          `Mesajınız başarıyla ${EMAIL_ADDRESS} adresine iletildi. En kısa sürede dönüş yapacağım.`
        );
        showToast('Mesajınız gönderildi.');
      } catch {
        renderFormStatus(
          'error',
          'Mesaj gönderilemedi. Doğrudan e-posta göndermek için:',
          true
        );
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalContent;
      }
    });
  }
})();
