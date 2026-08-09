<?php
/**
 * Condensed Footer Component
 * Strict Height Constraint: max-h-[500px] on all screens.
 * 3-column layout on desktop, stacked on mobile.
 */
?>
<footer class="bg-slate-950 text-slate-300 pt-8 pb-4 border-t-4 border-red-600">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- 3 Column Desktop Layout / Stacked Mobile -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pb-6 border-b border-slate-800 text-xs sm:text-sm">
      
      <!-- Column 1: Institute Identity & Address -->
      <div class="space-y-3">
        <div class="flex items-center gap-3">
          <img src="assets/images/logo.png" alt="Pranamya Tutorials Logo" class="w-10 h-10 object-contain">
          <div>
            <div class="font-extrabold text-lg text-white leading-none">PRANAMYA TUTORIALS</div>
            <div class="kannada-text text-amber-400 text-xs font-semibold"><?php echo SITE_KANNADA_NAME; ?></div>
          </div>
        </div>
        <p class="text-slate-400 text-xs italic">
          "<?php echo SITE_TAGLINE; ?>"
        </p>
        <div class="flex items-start gap-2 text-slate-300 pt-1">
          <i data-lucide="map-pin" class="w-4 h-4 text-red-500 shrink-0 mt-0.5"></i>
          <span><?php echo FULL_ADDRESS; ?></span>
        </div>
      </div>

      <!-- Column 2: Quick Links & Phones -->
      <div class="space-y-3">
        <h4 class="font-bold text-white text-sm tracking-wider uppercase border-b border-slate-800 pb-1 inline-block">
          Quick Links & Call Lines
        </h4>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <a href="#hero" class="hover:text-amber-400 transition flex items-center gap-1">
            <i data-lucide="chevron-right" class="w-3 h-3 text-red-500"></i> Home
          </a>
          <a href="#classes" class="hover:text-amber-400 transition flex items-center gap-1">
            <i data-lucide="chevron-right" class="w-3 h-3 text-red-500"></i> Classes Offered
          </a>
          <a href="#why-us" class="hover:text-amber-400 transition flex items-center gap-1">
            <i data-lucide="chevron-right" class="w-3 h-3 text-red-500"></i> Why Choose Us
          </a>
          <a href="#faculty" class="hover:text-amber-400 transition flex items-center gap-1">
            <i data-lucide="chevron-right" class="w-3 h-3 text-red-500"></i> Faculty Team
          </a>
          <a href="#enquiry" class="hover:text-amber-400 transition flex items-center gap-1">
            <i data-lucide="chevron-right" class="w-3 h-3 text-red-500"></i> Admission Form
          </a>
        </div>
        
        <div class="pt-2 text-xs space-y-1">
          <div class="text-slate-400 font-semibold">Direct Calling Lines:</div>
          <div class="flex flex-wrap gap-2 text-amber-400 font-bold">
            <a href="tel:919686575508" class="hover:underline">96865 75508</a> •
            <a href="tel:919620320309" class="hover:underline">96203 20309</a> •
            <a href="tel:919008735478" class="hover:underline">90087 35478</a>
          </div>
        </div>
      </div>

      <!-- Column 3: Location QR & Map CTA -->
      <div class="space-y-3">
        <h4 class="font-bold text-white text-sm tracking-wider uppercase border-b border-slate-800 pb-1 inline-block">
          Location & Directions
        </h4>
        <div class="flex items-center gap-4 bg-slate-900 p-3 rounded-2xl border border-slate-800">
          
          <!-- Mock QR Code SVG matching poster QR -->
          <div class="w-16 h-16 bg-white p-1 rounded-lg shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" class="w-full h-full">
              <path d="M0,0 L30,0 L30,30 L0,30 Z M40,0 L70,0 L70,30 L40,30 Z M0,40 L30,40 L30,70 L0,70 Z M50,50 L90,50 L90,90 L50,90 Z" fill="#0F172A"/>
              <rect x="7" y="7" width="16" height="16" fill="#C8102E"/>
              <rect x="47" y="7" width="16" height="16" fill="#C8102E"/>
              <rect x="7" y="47" width="16" height="16" fill="#C8102E"/>
            </svg>
          </div>

          <div class="space-y-1">
            <div class="text-xs font-bold text-amber-400 uppercase">Scan for Location</div>
            <div class="text-[11px] text-slate-400">Dr. Rajkumar Road, Rajajinagar</div>
            <a href="<?php echo GOOGLE_MAPS_LINK; ?>" target="_blank" class="inline-flex items-center gap-1 text-xs text-white font-bold bg-red-600 hover:bg-red-500 px-2.5 py-1 rounded-md transition mt-1">
              <i data-lucide="navigation" class="w-3 h-3"></i> Open Google Maps
            </a>
          </div>

        </div>
      </div>

    </div>

    <!-- Copyright Bar -->
    <div class="pt-4 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-2">
      <div>
        © <?php echo date('Y'); ?> <span class="font-bold text-slate-300"><?php echo SITE_NAME; ?></span>. All Rights Reserved.
      </div>
      <div class="kannada-text text-amber-400/80">
        ಉತ್ತಮ ಶಿಕ್ಷಣ • ಉಜ್ವಲ ಭವಿಷ್ಯ
      </div>
    </div>

  </div>
</footer>
