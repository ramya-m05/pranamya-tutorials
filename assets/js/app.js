/**
 * Pranamya Tutorials - Main Application JavaScript
 * Handles hero slider, mobile navigation drawer, AJAX enquiry processing & toast alerts.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 1. Hero Auto-Slider Logic
  initHeroSlider();

  // 2. Mobile Drawer Navigation
  initMobileDrawer();

  // 3. Smooth Scrolling for Anchor Links
  initSmoothScroll();
});

/* Hero Background Slider */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let currentSlide = 0;
  const slideInterval = 4500; // 4.5s auto advance

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    if (dots[currentSlide]) {
      dots[currentSlide].classList.remove('bg-amber-400', 'opacity-100');
      dots[currentSlide].classList.add('bg-white/50', 'opacity-50');
    }

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) {
      dots[currentSlide].classList.add('bg-amber-400', 'opacity-100');
      dots[currentSlide].classList.remove('bg-white/50', 'opacity-50');
    }
  }

  let timer = setInterval(() => goToSlide(currentSlide + 1), slideInterval);

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      goToSlide(idx);
      timer = setInterval(() => goToSlide(currentSlide + 1), slideInterval);
    });
  });
}

/* Mobile Drawer */
function initMobileDrawer() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('closeMobileDrawerBtn');
  const drawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    menuBtn.setAttribute('aria-expanded', 'true');
    if (closeBtn) closeBtn.focus();
  }

  function closeDrawer() {
    drawer.classList.add('hidden');
    document.body.style.overflow = '';
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.addEventListener('click', () => {
    if (drawer.classList.contains('hidden')) {
      openDrawer();
    } else {
      closeDrawer();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !drawer.classList.contains('hidden')) {
      closeDrawer();
      menuBtn.focus();
    }
  });

  // Close on click outside drawer
  document.addEventListener('click', (e) => {
    if (!drawer.classList.contains('hidden') && !drawer.contains(e.target) && !menuBtn.contains(e.target)) {
      closeDrawer();
    }
  });
}

/* Smooth Scroll */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* Preselect Course from Class Card */
function preselectCourse(courseName) {
  const courseSelect = document.getElementById('course');
  if (courseSelect) {
    for (let i = 0; i < courseSelect.options.length; i++) {
      if (courseSelect.options[i].value.includes(courseName) || courseName.includes(courseSelect.options[i].value)) {
        courseSelect.selectedIndex = i;
        break;
      }
    }
  }
}

/* JavaScript & PHP Backend Enquiry Submission */
async function submitEnquiryForm(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = document.getElementById('submitEnquiryBtn');
  const btnText = submitBtn ? submitBtn.querySelector('span') : null;

  if (btnText) btnText.textContent = 'Processing Enquiry...';
  if (submitBtn) submitBtn.disabled = true;

  const formData = new FormData(form);

  const studentName = document.getElementById('student_name')?.value || '';
  const phone = document.getElementById('phone')?.value || '';
  const course = document.getElementById('course')?.value || '';

  try {
    const response = await fetch('process_enquiry.php', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      const enquiryId = result.enquiry_id || `PT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

      // Save to LocalStorage as additional backup
      try {
        const existingEnquiries = JSON.parse(localStorage.getItem('pranamya_enquiries') || '[]');
        existingEnquiries.unshift({
          enquiryId,
          timestamp: new Date().toLocaleString(),
          studentName,
          parentName: document.getElementById('parent_name')?.value || 'N/A',
          phone,
          email: document.getElementById('email')?.value || 'Not Provided',
          course,
          message: document.getElementById('message')?.value || ''
        });
        localStorage.setItem('pranamya_enquiries', JSON.stringify(existingEnquiries));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }

      // Update modal details
      const modalIdElem = document.getElementById('modalEnquiryId');
      const modalMsgElem = document.getElementById('modalEnquiryMsg');

      if (modalIdElem) modalIdElem.textContent = enquiryId;
      if (modalMsgElem) {
        modalMsgElem.textContent = `Thank you, ${studentName}! Your inquiry for ${course} has been registered successfully. Our team will call you at ${phone} shortly.`;
      }

      const modal = document.getElementById('enquirySuccessModal');
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }

      showToast('Enquiry submitted successfully!');
      form.reset();
    } else {
      showToast(result.message || 'Error submitting enquiry. Please try again.');
    }
  } catch (err) {
    console.error('Submission error:', err);
    showToast('Failed to connect to server. Please try again.');
  } finally {
    if (btnText) btnText.textContent = 'Submit Enquiry Now';
    if (submitBtn) submitBtn.disabled = false;
  }
}

function closeEnquirySuccessModal() {
  const modal = document.getElementById('enquirySuccessModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function closeEnquirySuccessModalOnBackdrop(e) {
  if (e.target.id === 'enquirySuccessModal') {
    closeEnquirySuccessModal();
  }
}

/* Dynamic Toast Alert */
function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast-notification';
    toast.innerHTML = `
      <i data-lucide="bell" class="w-5 h-5 text-amber-400 shrink-0"></i>
      <span id="toastMsg" class="text-xs font-semibold">Notification</span>
    `;
    document.body.appendChild(toast);
    if (window.lucide) lucide.createIcons();
  }

  document.getElementById('toastMsg').textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}
