<?php
/**
 * Admission CTA Banner Component for Pranamya Tutorials
 */
?>
<section class="py-12 bg-gradient-to-r from-red-700 via-red-600 to-amber-600 text-white relative overflow-hidden shadow-2xl">
  
  <!-- Decorative background circles -->
  <div class="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
  <div class="absolute -bottom-12 -left-12 w-64 h-64 bg-amber-400/20 rounded-full blur-2xl"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
      
      <div class="space-y-3 max-w-2xl">
        <div class="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-black px-3.5 py-1 rounded-full text-xs uppercase tracking-wider shadow-md">
          <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
          ADMISSION OPEN FOR NEW BATCHES
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Give Your Child The Advantage Of Strong Basics & Top Board Marks!
        </h2>
        <p class="kannada-text text-amber-200 text-base sm:text-lg font-bold">
          ನಿಮ್ಮ ಮಕ್ಕಳ ಪ್ರಕಾಶಮಾನ ಭವಿಷ್ಯಕ್ಕಾಗಿ ಇಂದು ನೋಂದಾಯಿಸಿ!
        </p>
        <p class="text-slate-100 text-xs sm:text-sm font-medium">
          Limited batch seats available for 8th, 9th, 10th SSLC and 1st & 2nd PUC. Contact our counseling desk today.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row items-center gap-4 shrink-0">
        <a href="#enquiry" class="btn-gold text-sm sm:text-base py-4 px-8 shadow-2xl uppercase tracking-wider">
          <i data-lucide="send" class="w-5 h-5"></i>
          Submit Admission Enquiry
        </a>
        <a href="tel:91<?php echo PRIMARY_PHONE; ?>" class="bg-slate-950/80 hover:bg-slate-900 text-amber-300 font-bold border border-amber-400/40 text-sm py-4 px-6 rounded-xl transition flex items-center gap-2">
          <i data-lucide="phone-call" class="w-5 h-5 text-amber-400"></i>
          Call 96865 75508
        </a>
      </div>

    </div>
  </div>
</section>
