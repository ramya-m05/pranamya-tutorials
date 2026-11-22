/**
 * Pranamya Tutorials - Global Animation System
 * Powered by GSAP & ScrollTrigger with native CSS fallbacks & prefers-reduced-motion support.
 */

(function () {
  'use strict';

  const PranamyaAnimations = {
    reducedMotion: false,
    hasGSAP: false,
    hasScrollTrigger: false,

    init: function () {
      this.reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.hasGSAP = typeof gsap !== 'undefined';
      this.hasScrollTrigger = typeof ScrollTrigger !== 'undefined';

      if (this.hasGSAP && this.hasScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }

      this.initHeaderAnimation();
      this.initHeroTextAnimation();
      this.initFactCardsAnimation();
      this.initClassesAnimation();
      this.initWhyUsAnimation();
      this.initFacultyAnimation();
      this.initAdmissionProcessAnimation();
      this.initFaqAccordion();
      this.initEnquiryAnimation();
      this.initFooterAnimation();
      this.initFloatingActionsAnimation();
      this.initCountersAnimation();
    },

    // 1. Header & Navigation Animations
    initHeaderAnimation: function () {
      const header = document.querySelector('header');
      if (!header) return;

      // Scroll listener for sticky header styling
      let lastScrollY = window.scrollY;
      const onScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 30) {
          header.classList.add('nav-scrolled');
        } else {
          header.classList.remove('nav-scrolled');
        }
        lastScrollY = scrollY;
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      // Entrance animation on page load
      if (!this.reducedMotion && this.hasGSAP) {
        const logo = header.querySelector('a[href="index.html"]');
        const navLinks = header.querySelectorAll('nav a');
        const ctaBtn = header.querySelector('.btn-primary');
        const mobileBtn = document.getElementById('mobileMenuBtn');

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        if (logo) {
          tl.fromTo(logo, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8 }, 0.1);
        }
        if (navLinks.length) {
          tl.fromTo(navLinks, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, 0.2);
        }
        if (ctaBtn) {
          tl.fromTo(ctaBtn, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6 }, 0.4);
        }
        if (mobileBtn) {
          tl.fromTo(mobileBtn, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.2);
        }
      }
    },

    // 2. Hero Section Left Column Animations
    initHeroTextAnimation: function () {
      if (this.reducedMotion) return;

      const hero = document.getElementById('hero');
      if (!hero) return;

      const badge = hero.querySelector('.hero-badge');
      const h1 = hero.querySelector('h1');
      const kannada = hero.querySelector('.hero-kannada');
      const subtext = hero.querySelector('.hero-subtext');
      const trustChips = hero.querySelectorAll('.hero-trust-chip');
      const ctas = hero.querySelectorAll('.hero-cta-btn');

      if (this.hasGSAP) {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        if (badge) {
          tl.fromTo(badge, { opacity: 0, y: 20, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.7 }, 0.15);
        }
        if (h1) {
          tl.fromTo(h1, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.85 }, 0.3);
        }
        if (kannada) {
          tl.fromTo(kannada, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7 }, 0.5);
        }
        if (subtext) {
          tl.fromTo(subtext, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7 }, 0.65);
        }
        if (trustChips.length) {
          tl.fromTo(trustChips, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, 0.8);
        }
        if (ctas.length) {
          tl.fromTo(ctas, { opacity: 0, y: 20, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1 }, 0.95);
        }
      }
    },

    // 3. Fact Cards Scroll Strip Animations
    initFactCardsAnimation: function () {
      const cards = document.querySelectorAll('.fact-card');
      if (!cards.length) return;

      if (!this.reducedMotion && this.hasGSAP && this.hasScrollTrigger) {
        gsap.fromTo(cards,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.hero-scroll-strip',
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    },

    // 4. Classes Offered Section Animations
    initClassesAnimation: function () {
      const section = document.getElementById('classes');
      if (!section) return;

      const header = section.querySelector('.section-header');
      const cards = section.querySelectorAll('.class-card, [id^="class-card-"]');

      if (!this.reducedMotion && this.hasGSAP && this.hasScrollTrigger) {
        if (header) {
          gsap.fromTo(header,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%'
              }
            }
          );
        }

        if (cards.length) {
          gsap.fromTo(cards,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 70%'
              }
            }
          );
        }
      }
    },

    // 5. Why Choose Us Section Animations
    initWhyUsAnimation: function () {
      const section = document.getElementById('why-us');
      if (!section) return;

      const header = section.querySelector('.section-header');
      const cards = section.querySelectorAll('.why-us-card, [class*="why-card"]');

      if (!this.reducedMotion && this.hasGSAP && this.hasScrollTrigger) {
        if (header) {
          gsap.fromTo(header,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%'
              }
            }
          );
        }

        if (cards.length) {
          gsap.fromTo(cards,
            { opacity: 0, y: 35, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              stagger: 0.1,
              ease: 'back.out(1.2)',
              scrollTrigger: {
                trigger: section,
                start: 'top 70%'
              }
            }
          );
        }
      }
    },

    // 6. Faculty Section Animations
    initFacultyAnimation: function () {
      const section = document.getElementById('faculty');
      if (!section) return;

      const header = section.querySelector('.section-header');
      const cards = section.querySelectorAll('.faculty-card, #facultySlider > div');

      if (!this.reducedMotion && this.hasGSAP && this.hasScrollTrigger) {
        if (header) {
          gsap.fromTo(header,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%'
              }
            }
          );
        }

        if (cards.length) {
          gsap.fromTo(cards,
            { opacity: 0, x: 30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.75,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 70%'
              }
            }
          );
        }
      }
    },

    // 7. Admission Process 4-Step Animated Journey
    initAdmissionProcessAnimation: function () {
      const section = document.getElementById('admission-process');
      if (!section) return;

      const steps = section.querySelectorAll('.admission-step');
      const progressBar = section.querySelector('.admission-progress-bar');

      if (!this.reducedMotion && this.hasGSAP && this.hasScrollTrigger) {
        if (steps.length) {
          gsap.fromTo(steps,
            { opacity: 0, y: 30, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              stagger: 0.15,
              ease: 'back.out(1.2)',
              scrollTrigger: {
                trigger: section,
                start: 'top 75%'
              }
            }
          );
        }

        if (progressBar) {
          gsap.fromTo(progressBar,
            { scaleX: 0, transformOrigin: 'left center' },
            {
              scaleX: 1,
              duration: 1.2,
              ease: 'power2.inOut',
              scrollTrigger: {
                trigger: section,
                start: 'top 70%'
              }
            }
          );
        }
      }
    },

    // 8. FAQ Accordion with Smooth 60fps Animation & Keyboard Accessibility
    initFaqAccordion: function () {
      const faqItems = document.querySelectorAll('.faq-item');
      if (!faqItems.length) return;

      faqItems.forEach((item) => {
        const trigger = item.querySelector('.faq-trigger');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');

        if (!trigger || !content) return;

        trigger.addEventListener('click', () => {
          const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

          // Close other accordion items for clean single-expand presentation
          faqItems.forEach((other) => {
            if (other !== item) {
              const otherTrigger = other.querySelector('.faq-trigger');
              const otherContent = other.querySelector('.faq-content');
              const otherIcon = other.querySelector('.faq-icon');
              if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
              if (otherContent) otherContent.classList.remove('faq-open');
              if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
              other.classList.remove('faq-active');
            }
          });

          // Toggle current
          if (isExpanded) {
            trigger.setAttribute('aria-expanded', 'false');
            content.classList.remove('faq-open');
            if (icon) icon.style.transform = 'rotate(0deg)';
            item.classList.remove('faq-active');
          } else {
            trigger.setAttribute('aria-expanded', 'true');
            content.classList.add('faq-open');
            if (icon) icon.style.transform = 'rotate(180deg)';
            item.classList.add('faq-active');
          }
        });

        // Keyboard accessibility (Space / Enter)
        trigger.addEventListener('keydown', (e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            trigger.click();
          }
        });
      });

      // Scroll entrance for FAQ section
      const faqSection = document.getElementById('faq');
      if (faqSection && !this.reducedMotion && this.hasGSAP && this.hasScrollTrigger) {
        gsap.fromTo(faqItems,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: faqSection,
              start: 'top 80%'
            }
          }
        );
      }
    },

    // 9. Enquiry Section Animations
    initEnquiryAnimation: function () {
      const section = document.getElementById('enquiry');
      if (!section) return;

      const leftCol = section.querySelector('.enquiry-info');
      const rightCol = section.querySelector('.enquiry-form-card');

      if (!this.reducedMotion && this.hasGSAP && this.hasScrollTrigger) {
        if (leftCol) {
          gsap.fromTo(leftCol,
            { opacity: 0, x: -35 },
            {
              opacity: 1,
              x: 0,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 75%'
              }
            }
          );
        }

        if (rightCol) {
          gsap.fromTo(rightCol,
            { opacity: 0, x: 35 },
            {
              opacity: 1,
              x: 0,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 75%'
              }
            }
          );
        }
      }
    },

    // 10. Footer Section Animations
    initFooterAnimation: function () {
      const footer = document.querySelector('footer');
      if (!footer) return;

      if (!this.reducedMotion && this.hasGSAP && this.hasScrollTrigger) {
        const cols = footer.querySelectorAll('.grid > div');
        if (cols.length) {
          gsap.fromTo(cols,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.12,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: footer,
                start: 'top 90%'
              }
            }
          );
        }
      }
    },

    // 11. Floating Action Buttons & Bottom Navigation Entrance
    initFloatingActionsAnimation: function () {
      if (this.reducedMotion) return;

      const callFab = document.querySelector('.call-fab');
      const waFab = document.querySelector('.whatsapp-fab');
      const bottomBar = document.querySelector('.fixed-mobile-bottom-bar');

      if (this.hasGSAP) {
        if (callFab) {
          gsap.fromTo(callFab, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, delay: 1.2, ease: 'back.out(1.8)' });
        }
        if (waFab) {
          gsap.fromTo(waFab, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, delay: 1.35, ease: 'back.out(1.8)' });
        }
        if (bottomBar) {
          gsap.fromTo(bottomBar, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.8, ease: 'power3.out' });
        }
      }
    },

    // 12. Numerical Counters Animation for Existing Verified Figures
    initCountersAnimation: function () {
      const counters = document.querySelectorAll('[data-counter]');
      if (!counters.length || this.reducedMotion) return;

      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute('data-counter'));
        const suffix = counter.getAttribute('data-counter-suffix') || '';
        const prefix = counter.getAttribute('data-counter-prefix') || '';
        if (isNaN(target)) return;

        if (this.hasGSAP && this.hasScrollTrigger) {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: counter,
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            onUpdate: function () {
              counter.textContent = prefix + Math.floor(obj.val) + suffix;
            }
          });
        }
      });
    }
  };

  // Expose
  window.PranamyaAnimations = PranamyaAnimations;

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => PranamyaAnimations.init());
  } else {
    PranamyaAnimations.init();
  }
})();

