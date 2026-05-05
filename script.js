/* ============================================
   MEET JAISWAL PORTFOLIO – script.js
   ============================================ */

// ============ CUSTOM CURSOR ============
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.15;
  followerY += (mouseY - followerY) * 0.15;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('a, button, .skill-card, .project-card, .edu-card, .form-group').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    follower.style.width = '60px';
    follower.style.height = '60px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    follower.style.width = '36px';
    follower.style.height = '36px';
  });
});

// ============ NAVBAR SCROLL ============
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============ HAMBURGER MENU ============
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// ============ TYPED TEXT EFFECT ============
const phrases = [
  'AI/ML Enthusiast',
  'GenAI Solutions',
  'Python Developer',
  'Full Stack Developer',
  'Azure Cloud + FinOps',
  'RAG Pipeline Builder + LLMs',
  'Dynamic web developer'
];
let phraseIndex = 0, charIndex = 0, deleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  const current = phrases[phraseIndex];
  if (!deleting) {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 50 : 90);
}
setTimeout(type, 1000);

// ============ SCROLL REVEAL ============
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal:not(.visible)'));
      const delay = siblings.indexOf(entry.target) * 80;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ============ VIDEO AUTOPLAY ON HOVER/INTERSECT ============
function setupVideo(videoId, overlayId, cardId) {
  const video = document.getElementById(videoId);
  const overlay = document.getElementById(overlayId);
  const card = document.getElementById(cardId);

  if (!video || !card) return;

  // Auto-play when project section enters viewport
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play().catch(() => {});
        if (overlay) overlay.classList.add('hidden');
      } else {
        video.pause();
        if (overlay) overlay.classList.remove('hidden');
      }
    });
  }, { threshold: 0.5 });

  videoObserver.observe(card);

  // Also play on hover
  card.addEventListener('mouseenter', () => {
    video.play().catch(() => {});
    if (overlay) overlay.classList.add('hidden');
  });

  card.addEventListener('mouseleave', () => {
    // keep playing if still in viewport
    const rect = card.getBoundingClientRect();
    const inViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
    if (!inViewport) {
      video.pause();
      if (overlay) overlay.classList.remove('hidden');
    }
  });
}

setupVideo('video1', 'overlay1', 'proj1');
setupVideo('video2', 'overlay2', 'proj2');

// ============ ACTIVE NAV LINK ============
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--accent)';
    }
  });
});

// ============ CONTACT FORM ============
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(function(response) {
      if (response.ok) {
        btn.textContent = '✅ Message Sent!';
        btn.style.background = 'linear-gradient(135deg, #06ffa5, #00a876)';
        form.reset();
      } else {
        btn.textContent = '❌ Failed, Try Again';
        btn.style.background = 'red';
      }
      setTimeout(function() {
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
      }, 3000);
    })
    .catch(function() {
      btn.textContent = '❌ Error, Try Again';
      btn.style.background = 'red';
      setTimeout(function() {
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
      }, 3000);
    });
  });
}

// ============ SMOOTH SECTION TRANSITIONS ============
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============ TILT EFFECT ON CARDS ============
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    card.style.transform = `translateY(-8px) rotateX(${-y}deg) rotateY(${x}deg)`;
    card.style.transition = 'transform 0.1s';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.4s cubic-bezier(0.4,0,0.2,1)';
  });
});

// ============ STAT COUNTER ANIMATION ============
function animateCounter(el, target, suffix = '') {
  const isFloat = target % 1 !== 0;
  let current = 0;
  const duration = 1500;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = isFloat ? current.toFixed(2) + suffix : Math.floor(current) + suffix;
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-num');
      nums.forEach(num => {
        const text = num.textContent;
        const raw = parseFloat(text.replace(/[^0-9.]/g, ''));
        const suffix = text.replace(/[0-9.]/g, '');
        animateCounter(num, raw, suffix);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.about-stats');
if (statsEl) statsObserver.observe(statsEl);

console.log('%c Meet Jaiswal — Portfolio', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('%c Built with passion | jaiswalme2525@gmail.com', 'color: #94a3b8; font-size: 12px;');

// Inject config values into page
document.querySelectorAll('[data-config]').forEach(el => {
  const key = el.getAttribute('data-config');
  const type = el.getAttribute('data-type');
  if (!CONFIG[key]) return;
  if (type === 'href') el.href = CONFIG[key];
  else if (type === 'text') el.textContent = CONFIG[key];
  else if (type === 'action') el.action = CONFIG[key];
  else if (type === 'src') el.src = CONFIG[key];
  else el.href = CONFIG[key];
});