/**
 * ARDA UTANCAK — PORTFOLYO SCRIPT
 * Interactive Terminal, Filtering, Smooth Navigation, Copy to Clipboard, Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. NAVBAR SCROLL EFFECT & SCROLL SPY
  // ==========================================
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Glass blur / background change on scroll
    if (scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (backToTop) {
      if (scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    // Scroll spy
    let current = '';
    const scrollPosition = scrollY + 160;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================
  // 2. MOBILE MENU TOGGLE
  // ==========================================
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navLinks');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    // Close when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // ==========================================
  // 3. PORTFOLIO FILTERING
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================
  // 4. COPY EMAIL TO CLIPBOARD
  // ==========================================
  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = copyBtn.getAttribute('data-copy') || 'ardautancak2@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const icon = copyBtn.querySelector('i');
        icon.className = 'fa-solid fa-check';
        copyBtn.style.color = '#10b981';
        copyBtn.style.borderColor = '#10b981';

        setTimeout(() => {
          icon.className = 'fa-regular fa-copy';
          copyBtn.style.color = '';
          copyBtn.style.borderColor = '';
        }, 2200);
      }).catch(err => {
        console.error('Kopyalama hatası: ', err);
      });
    });
  }

  // ==========================================
  // 5. CONTACT FORM HANDLING (Direct to Email)
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> E-postanıza Gönderiliyor...';
      if (formStatus) formStatus.innerHTML = '';

      try {
        const response = await fetch('https://formsubmit.co/ajax/ardautancak2@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            'Ad Soyad': name,
            'Gönderen E-Posta': email,
            'Konu': subject,
            'Mesaj': message,
            '_subject': `📩 Yeni Portfolyo Mesajı: ${name} — ${subject}`,
            '_template': 'table',
            '_captcha': 'false'
          })
        });

        if (response.ok) {
          contactForm.reset();
          submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Mesajınız E-Postama İletildi!';
          submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
          submitBtn.style.color = '#fff';

          if (formStatus) {
            formStatus.innerHTML = '<p style="color: #34d399; margin-top: 10px; font-size: 0.9rem;"><i class="fa-solid fa-circle-check"></i> Teşekkürler! Mesajınız başarıyla ardautancak2@gmail.com adresime iletildi. En kısa sürede yanıtlayacağım.</p>';
          }
        } else {
          throw new Error('Gönderim başarısız.');
        }
      } catch (err) {
        submitBtn.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Gönderilemedi';
        submitBtn.style.background = '#ef4444';
        submitBtn.style.color = '#fff';

        if (formStatus) {
          formStatus.innerHTML = '<p style="color: #f87171; margin-top: 10px; font-size: 0.9rem;"><i class="fa-solid fa-circle-exclamation"></i> Bir sorun oluştu. Lütfen doğrudan <a href="mailto:ardautancak2@gmail.com" style="text-decoration: underline; color: #fff;">ardautancak2@gmail.com</a> adresine e-posta gönderin.</p>';
        }
      } finally {
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          submitBtn.style.color = '';
          if (formStatus) formStatus.innerHTML = '';
        }, 6000);
      }
    });
  }

});
