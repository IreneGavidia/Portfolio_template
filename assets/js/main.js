/**
 * ==========================================================================
 * PORTFOLIO — Bootstrap + GSAP (Oversour-style)
 * Clean, performant scroll & hero animations
 * ==========================================================================
 */

/* --------------------------------------------------------------------------
   1. GSAP SETUP
-------------------------------------------------------------------------- */

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Accessibility: reduced motion
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

/* --------------------------------------------------------------------------
   2. HERO ANIMATIONS
-------------------------------------------------------------------------- */

function initHeroAnimations() {
  if (prefersReducedMotion) return;

  const heroTl = gsap.timeline({
    defaults: { ease: 'power3.out' }
  });

  heroTl
    .from('.hero-title', {
      y: 100,
      opacity: 0,
      duration: 1
    })
    .from(
      '.hero-subtitle',
      {
        y: 50,
        opacity: 0,
        duration: 0.8
      },
      '-=0.6'
    )
    .from(
      '.hero-cta',
      {
        y: 30,
        opacity: 0,
        duration: 0.6
      },
      '-=0.4'
    )
    .from(
      '.scroll-indicator',
      {
        opacity: 0,
        duration: 0.5
      },
      '-=0.2'
    );

  // Floating background shapes
  gsap.to('.shape-1', {
    x: 50,
    y: -30,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });

  gsap.to('.shape-2', {
    x: -40,
    y: 40,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });

  gsap.to('.shape-3', {
    x: 30,
    y: 20,
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });

  // Parallax effect
  gsap.to('.hero-bg', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  gsap.to('.floating-shapes', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
}

/* --------------------------------------------------------------------------
   3. SCROLL REVEAL ANIMATIONS
-------------------------------------------------------------------------- */

function initScrollReveals() {
  if (prefersReducedMotion) return;

  gsap.utils.toArray('.gsap-reveal').forEach((el) => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. SKILL BARS
-------------------------------------------------------------------------- */

function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar');

  bars.forEach((bar) => {
    const targetWidth = bar.dataset.width + '%';

    if (prefersReducedMotion) {
      bar.style.width = targetWidth;
      return;
    }

    gsap.to(bar, {
      width: targetWidth,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: bar,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. PROJECT CARDS (BATCH)
-------------------------------------------------------------------------- */

function initProjectCards() {
  if (prefersReducedMotion) return;

  ScrollTrigger.batch('.project-card', {
    onEnter: (batch) =>
      gsap.from(batch, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      }),
    start: 'top 90%',
    once: true
  });
}

/* --------------------------------------------------------------------------
   6. NAVBAR BACKGROUND ON SCROLL
-------------------------------------------------------------------------- */

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');

  ScrollTrigger.create({
    start: 'top -100',
    onUpdate: (self) => {
      navbar.classList.toggle('scrolled', self.scroll() > 100);
    }
  });
}

/* --------------------------------------------------------------------------
   7. SMOOTH SCROLL FOR ANCHORS
-------------------------------------------------------------------------- */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navHeight = document.querySelector('.navbar').offsetHeight;

      gsap.to(window, {
        duration: 0.8,
        scrollTo: { y: target, offsetY: navHeight },
        ease: 'power2.inOut'
      });
    });
  });
}

/* --------------------------------------------------------------------------
   8. INIT
-------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimations();
  initScrollReveals();
  initSkillBars();
  initProjectCards();
  initNavbarScroll();
  initSmoothScroll();

  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });

  console.log('🚀 GSAP portfolio animations initialized');
});

/* --------------------------------------------------------------------------
   9. CLEANUP (optional, SPA safety)
-------------------------------------------------------------------------- */

window.cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  gsap.killTweensOf('*');
};
