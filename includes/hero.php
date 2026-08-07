<?php
/**
 * Hero Component for Pranamya Tutorials
 * Features:
 * 1. Sliding classroom background images with auto-advance.
 * 2. Mobile strict max height: max-h-[380px].
 * 3. Fact cards as scroll strip at hero bottom.
 */
?>
<section id="hero" class="hero-container relative">
  <!-- Background Image Slides with Auto-Advance -->
  <div class="hero-slide active" style="background-image: url('assets/images/hero1.svg');"></div>
  <div class="hero-slide" style="background-image: url('assets/images/hero2.svg');"></div>
  <div class="hero-slide" style="background-image: url('assets/images/hero3.svg');"></div>

  <!-- Dark Gradient Overlay for Text Legibility -->
  <div class="absolute inset-0 hero-overlay flex flex-col justify-between p-4 sm:p-8 lg:p-12 text-white">
    
    <!-- Hero Header Content -->
    <div class="max-w-4xl mx-auto w-full text-center my-auto py-2 sm:py-6">
      
      <!-- Top Badge -->
      <div class="inline-flex items-center gap-2 bg-red-600/90 text-amber-300 border border-amber-400/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 sm:mb-4 shadow-lg backdrop-blur-md">
        <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
        Admissions Open for Academic Year
      </div>

      <!-- Headline -->
      <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase font-sans">
        <span class="text-white drop-shadow-md">BUILD TODAY</span>
        <span class="text-amber-400 drop-shadow-md"> EXCEL TOMORROW</span>
      </h1>

      <!-- Kannada Title / Tagline Badge -->
      <div class="mt-1 sm:mt-2">
        <p class="kannada-text text-amber-300 text-sm sm:text-xl font-bold">
          <?php echo SITE_KANNADA_NAME; ?> — ಪ್ರವೇಶಾತಿ ಪ್ರಾರಂಭವಾಗಿದೆ
        </p>
        <p class="text-slate-200 text-xs sm:text-lg font-medium italic mt-0.5 sm:mt-1">
          "<?php echo SITE_TAGLINE; ?>"
        </p>
      </div>

      <!-- Hero Action Buttons (Compact on Mobile) -->
      <div class="mt-3 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <a href="#enquiry" class="btn-gold text-xs sm:text-base py-2.5 px-5 sm:py-3.5 sm:px-8 shadow-xl">
          <i data-lucide="edit-3" class="w-4 h-4 sm:w-5 sm:h-5"></i>
          Enroll / Book Free Demo
        </a>
        <a href="#classes" class="bg-slate-950/80 hover:bg-slate-900 text-white font-bold border border-slate-700 text-xs sm:text-base py-2.5 px-5 sm:py-3.5 sm:px-8 rounded-xl backdrop-blur-md transition flex items-center gap-2">
          <i data-lucide="book-open" class="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"></i>
          View Courses
        </a>
      </div>

    </div>

    <!-- Carousel Dots Indicator -->
    <div class="flex justify-center items-center gap-2 mb-2">
      <button class="hero-dot w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400 transition-all duration-300 opacity-100" data-slide="0" aria-label="Slide 1"></button>
      <button class="hero-dot w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/50 transition-all duration-300 opacity-50" data-slide="1" aria-label="Slide 2"></button>
      <button class="hero-dot w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/50 transition-all duration-300 opacity-50" data-slide="2" aria-label="Slide 3"></button>
    </div>

  </div>
</section>

<!-- Fact Cards Scroll Strip at Hero Bottom -->
<div class="hero-scroll-strip py-3 px-2">
  <div class="max-w-7xl mx-auto">
    <div class="marquee-container gap-3 sm:gap-4">
      
      <div class="fact-card">
        <span class="w-8 h-8 rounded-full bg-red-600/80 flex items-center justify-center text-amber-300">
          <i data-lucide="check-circle" class="w-4 h-4"></i>
        </span>
        <div>
          <div class="text-xs text-amber-400 font-bold uppercase">100% Concept Focus</div>
          <div class="text-[11px] text-slate-300">No Rote Learning</div>
        </div>
      </div>

      <div class="fact-card">
        <span class="w-8 h-8 rounded-full bg-amber-500/80 flex items-center justify-center text-slate-950">
          <i data-lucide="award" class="w-4 h-4"></i>
        </span>
        <div>
          <div class="text-xs text-amber-400 font-bold uppercase">State, CBSE & ICSE Experts</div>
          <div class="text-[11px] text-slate-300">Targeted Board Prep</div>
        </div>
      </div>

      <div class="fact-card">
        <span class="w-8 h-8 rounded-full bg-blue-600/80 flex items-center justify-center text-white">
          <i data-lucide="users" class="w-4 h-4"></i>
        </span>
        <div>
          <div class="text-xs text-amber-400 font-bold uppercase">Limited Batch Size</div>
          <div class="text-[11px] text-slate-300">Personalized Care</div>
        </div>
      </div>

      <div class="fact-card">
        <span class="w-8 h-8 rounded-full bg-purple-600/80 flex items-center justify-center text-white">
          <i data-lucide="file-text" class="w-4 h-4"></i>
        </span>
        <div>
          <div class="text-xs text-amber-400 font-bold uppercase">Materials Included</div>
          <div class="text-[11px] text-slate-300">Notes & Model Papers</div>
        </div>
      </div>

      <div class="fact-card">
        <span class="w-8 h-8 rounded-full bg-emerald-600/80 flex items-center justify-center text-white">
          <i data-lucide="trending-up" class="w-4 h-4"></i>
        </span>
        <div>
          <div class="text-xs text-amber-400 font-bold uppercase">Regular Test Series</div>
          <div class="text-[11px] text-slate-300">Parent Analytics Update</div>
        </div>
      </div>

      <div class="fact-card">
        <span class="w-8 h-8 rounded-full bg-rose-600/80 flex items-center justify-center text-white">
          <i data-lucide="map-pin" class="w-4 h-4"></i>
        </span>
        <div>
          <div class="text-xs text-amber-400 font-bold uppercase">Rajajinagar Location</div>
          <div class="text-[11px] text-slate-300">Easy Accessibility</div>
        </div>
      </div>

    </div>
  </div>
</div>
