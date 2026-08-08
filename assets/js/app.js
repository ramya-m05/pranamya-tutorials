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

  menuBtn.addEventListener('click', () => {
    drawer.classList.toggle('hidden');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.add('hidden');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.add('hidden');
    });
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

/* Client-Side JavaScript Enquiry Submission */
function submitEnquiryForm(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = document.getElementById('submitEnquiryBtn');
  const btnText = submitBtn ? submitBtn.querySelector('span') : null;

  if (btnText) btnText.textContent = 'Processing Enquiry...';
  if (submitBtn) submitBtn.disabled = true;

  const studentName = document.getElementById('student_name')?.value || '';
  const parentName = document.getElementById('parent_name')?.value || 'N/A';
  const phone = document.getElementById('phone')?.value || '';
  const email = document.getElementById('email')?.value || 'Not Provided';
  const course = document.getElementById('course')?.value || '';
  const message = document.getElementById('message')?.value || '';

  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const enquiryId = `PT-${new Date().getFullYear()}-${randomNum}`;
  const timestamp = new Date().toLocaleString();

  const enquiryData = {
    enquiryId,
    timestamp,
    studentName,
    parentName,
    phone,
    email,
    course,
    message
  };

  // Submit to Google Form (saves into Google Sheet linked to the Google Form)
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdqIAAxOGWxkEl74fl-yeLbf9YNix211acVY2r-hJcAwp5HGw/formResponse';
  
  const googleFormData = new FormData();
  googleFormData.append('entry.2005620554', studentName); // Name
  googleFormData.append('entry.1065046570', course);      // Class/Standard
  googleFormData.append('entry.1166974658', phone);       // Phone Number
  googleFormData.append('entry.839337160', message);      // Message/Queries

  // Send request using mode: 'no-cors' so Google Form accepts the submission seamlessly
  fetch(googleFormUrl, {
    method: 'POST',
    mode: 'no-cors',
    body: googleFormData
  }).catch(err => {
    console.warn('Google Form submission error:', err);
  }).finally(() => {
    // Save to LocalStorage
    try {
      const existingEnquiries = JSON.parse(localStorage.getItem('pranamya_enquiries') || '[]');
      existingEnquiries.unshift(enquiryData);
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

    if (btnText) btnText.textContent = 'Submit Enquiry Now';
    if (submitBtn) submitBtn.disabled = false;
  });
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
