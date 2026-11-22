<?php
/**
 * Cinematic 3D Hero Component for Pranamya Tutorials
 * "Every Step Takes You Closer to Excellence"
 * 
 * Features:
 * 1. Two-Column Desktop Layout: Conversion hierarchy on left, 3D scene on right.
 * 2. Mobile Responsive Stacked Layout with high-performance CSS animated fallback.
 * 3. Exact headline and conversion CTAs ("Book Free Demo" & "Explore Courses").
 * 4. Fact cards scroll strip with animated counters.
 */
?>
<!-- Cinematic 3D Hero Section -->
<section id="hero" class="hero-cinematic py-10 sm:py-14 lg:py-16 relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

      <!-- Left Column: Content & Conversion Hierarchy -->
      <div class="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
        
        <!-- Top Badge -->
        <div class="hero-badge inline-flex items-center gap-2 bg-red-600/90 text-amber-300 border border-amber-400/40 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-md">
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span>Admissions Open for Academic Year 2026-27</span>
        </div>

        <!-- Main Headlines -->
        <div class="space-y-2 sm:space-y-3">
          <div class="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-400 flex items-center justify-center lg:justify-start gap-2">
            <span class="w-6 h-0.5 bg-amber-400 hidden sm:inline-block"></span>
            <span><?php echo SITE_HEADLINE; ?></span>
            <span class="w-6 h-0.5 bg-amber-400 hidden sm:inline-block lg:hidden"></span>
          </div>
          
          <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-md">
            Expert SSLC, PUC, CBSE & ICSE Coaching in <span class="text-amber-400 "><?php echo ADDRESS_AREA; ?>, <?php echo ADDRESS_CITY; ?></span>
          </h1>

          <div class="pt-1">
            <p class="hero-kannada kannada-text text-amber-300 text-sm sm:text-lg font-bold">
              <?php echo SITE_KANNADA_NAME; ?> — ಪ್ರವೇಶಾತಿ ಪ್ರಾರಂಭವಾಗಿದೆ
            </p>
            <p class="text-slate-300 text-xs sm:text-sm font-medium italic mt-0.5">
              "<?php echo SITE_TAGLINE; ?>"
            </p>
          </div>
        </div>

        <!-- Supporting Text -->
        <p class="hero-subtext text-slate-200 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Empowering students with concept-first education, personalized batch mentorship, and proven board exam strategies. Comprehensive coaching for 8th, 9th, 10th (State, CBSE & ICSE) and 1st & 2nd PUC (Science & Commerce).
        </p>

        <!-- Trust Indicators / Chips -->
        <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
          <div class="hero-trust-chip inline-flex items-center gap-1.5 bg-slate-900/80 border border-slate-700/60 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200">
            <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-400"></i>
            <span>10+ Years Excellence</span>
          </div>
          <div class="hero-trust-chip inline-flex items-center gap-1.5 bg-slate-900/80 border border-slate-700/60 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200">
            <i data-lucide="users" class="w-3.5 h-3.5 text-amber-400"></i>
            <span>Limited Batch Sizes</span>
          </div>
          <div class="hero-trust-chip inline-flex items-center gap-1.5 bg-slate-900/80 border border-slate-700/60 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200">
            <i data-lucide="award" class="w-3.5 h-3.5 text-amber-400"></i>
            <span>100% Concept Mastery</span>
          </div>
          <div class="hero-trust-chip inline-flex items-center gap-1.5 bg-slate-900/80 border border-slate-700/60 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200">
            <i data-lucide="graduation-cap" class="w-3.5 h-3.5 text-red-400"></i>
            <span>Top Board Prep</span>
          </div>
        </div>

        <!-- CTAs (Touch friendly >= 44px) -->
        <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
          <a href="#enquiry" class="hero-cta-btn btn-gold text-xs sm:text-base py-3 sm:py-3.5 px-6 sm:px-8 shadow-xl">
            <i data-lucide="calendar-check" class="w-4 h-4 sm:w-5 sm:h-5"></i>
            Book Free Demo
          </a>
          <a href="#classes" class="hero-cta-btn bg-slate-900/90 hover:bg-slate-800 text-white font-bold border border-slate-700 text-xs sm:text-base py-3 sm:py-3.5 px-6 sm:px-8 rounded-xl backdrop-blur-md transition flex items-center gap-2">
            <i data-lucide="book-open" class="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"></i>
            Explore Courses
          </a>
          <a href="tel:91<?php echo PRIMARY_PHONE; ?>" class="hero-cta-btn inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-amber-400 py-3 px-3 transition">
            <i data-lucide="phone-call" class="w-4 h-4 text-amber-400"></i>
            Call: <?php echo PHONE_1; ?>
          </a>
        </div>

      </div>

      <!-- Right Column: Cinematic 3D Learning Journey Scene -->
      <div class="lg:col-span-5 relative mt-4 lg:mt-0">
        <div class="hero-3d-wrapper relative mx-auto max-w-[500px] lg:max-w-none">
          
          <!-- 3D Canvas Mount Point -->
          <div id="hero-3d-canvas-container" class="w-full h-full relative z-10 flex items-center justify-center">
            
            <!-- Subtle Interactive Overlay Badge -->
            <div class="hero-3d-badge">
              <i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-400"></i>
              <span>Every Step Takes You Closer to Excellence</span>
            </div>

            <!-- Static / CSS Animated Fallback (Rendered when WebGL is absent or on low-end devices) -->
            <div id="hero-3d-fallback" class="hero-3d-fallback-view p-4 sm:p-6 text-center">
              <div class="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto flex items-center justify-center">
                <div class="absolute inset-0 rounded-3xl bg-gradient-to-tr from-red-600/20 to-amber-500/20 blur-2xl"></div>
                <div class="relative z-10 space-y-4">
                  <div class="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-red-700 via-red-600 to-amber-500 p-0.5 shadow-2xl animate-float">
                    <div class="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                      <i data-lucide="graduation-cap" class="w-12 h-12 text-amber-400"></i>
                    </div>
                  </div>
                  <div class="bg-slate-900/95 border border-amber-400/40 rounded-xl p-3 shadow-lg backdrop-blur-md">
                    <div class="text-xs font-bold text-amber-400 uppercase tracking-wider">Learning Journey</div>
                    <div class="text-[11px] text-slate-300">Every Step Takes You Closer to Excellence</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

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
          <div class="text-xs text-amber-400 font-bold uppercase" data-counter="100" data-counter-suffix="% Concept Focus">100% Concept Focus</div>
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
          <div class="text-xs text-amber-400 font-bold uppercase"><?php echo ADDRESS_AREA; ?> Location</div>
          <div class="text-[11px] text-slate-300">Easy Accessibility</div>
        </div>
      </div>

    </div>
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
