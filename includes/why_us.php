<?php
/**
 * Why Choose Us Component for Pranamya Tutorials
 * Features:
 * 1. Numbered Grid (01-06) with vibrant crimson & gold glassmorphism cards.
 * 2. Responsive grid layout with hover animations.
 */
?>
<section id="why-us" class="py-16 bg-white relative overflow-hidden">
  
  <!-- Subtle Background Glow Orbs -->
  <div class="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
  <div class="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Title -->
    <div class="text-center max-w-3xl mx-auto mb-14">
      <div class="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
        <i data-lucide="sparkles" class="w-4 h-4 text-amber-600"></i>
        Why Choose Pranamya Tutorials?
      </div>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        OUR PILLARS OF ACADEMIC EXCELLENCE
      </h2>
      <p class="kannada-text text-red-600 font-semibold text-lg mt-1">
        ಏಕೆ ಪ್ರಣಮ್ಯ ಟ್ಯೂಟೋರಿಯಲ್ಸ್ ಆಯ್ಕೆ ಮಾಡಬೇಕು?
      </p>
      <p class="text-slate-600 text-sm sm:text-base mt-2">
        We go beyond traditional coaching to empower young minds with conceptual clarity, individual attention, and confidence for a bright future.
      </p>
    </div>

    <!-- Numbered Grid 01 - 06 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <?php foreach ($why_us_items as $item): ?>
        <div class="why-us-card group">
          <div class="flex items-center justify-between mb-4">
            <span class="why-us-number font-mono">
              <?php echo $item['num']; ?>
            </span>
            <div class="w-12 h-12 rounded-xl bg-red-50 group-hover:bg-red-600 text-red-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
              <i data-lucide="<?php echo $item['icon']; ?>" class="w-6 h-6"></i>
            </div>
          </div>
          
          <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
            <?php echo $item['title']; ?>
          </h3>
          
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <?php echo $item['desc']; ?>
          </p>
        </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>
