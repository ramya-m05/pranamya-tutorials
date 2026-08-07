<?php
/**
 * Classes Component for Pranamya Tutorials
 * Features:
 * 1. Desktop 3-column grid.
 * 2. Mobile horizontal snap-scroll layout.
 * 3. Detailed feature list per standard (8th, 9th, 10th, 1st PUC, 2nd PUC).
 */
?>
<section id="classes" class="py-16 bg-slate-100 relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto mb-12">
      <div class="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
        <i data-lucide="book-open-check" class="w-4 h-4"></i>
        Academic Coaching Courses
      </div>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        CLASSES WE OFFER
      </h2>
      <p class="kannada-text text-red-600 font-semibold text-lg mt-1">
        ತರಗತಿಗಳು: 8th, 9th, 10th Standard & 1st, 2nd PUC
      </p>
      <p class="text-slate-600 text-sm sm:text-base mt-2">
        Tailored curriculum designed for Karnataka State Board excellence with individual attention and conceptual mastery.
      </p>
    </div>

    <!-- General Highlights Banner -->
    <div class="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
      <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
          <i data-lucide="file-text" class="w-5 h-5"></i>
        </div>
        <div class="text-left">
          <div class="font-bold text-sm text-slate-900">MATERIALS PROVIDED</div>
          <div class="text-xs text-slate-500">Structured Notes & Question Banks</div>
        </div>
      </div>

      <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
          <i data-lucide="users" class="w-5 h-5"></i>
        </div>
        <div class="text-left">
          <div class="font-bold text-sm text-slate-900">LIMITED BATCH SIZE</div>
          <div class="text-xs text-slate-500">Personalized Doubt Resolution</div>
        </div>
      </div>

      <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-red-100 text-red-700 flex items-center justify-center font-bold">
          <i data-lucide="award" class="w-5 h-5"></i>
        </div>
        <div class="text-left">
          <div class="font-bold text-sm text-slate-900">STATE SYLLABUS</div>
          <div class="text-xs text-slate-500">Aligned with Board Blueprints</div>
        </div>
      </div>
    </div>

    <!-- Mobile Swipe Hint -->
    <div class="flex items-center justify-between md:hidden mb-4 px-2">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Swipe to view courses</span>
      <span class="text-xs text-red-600 font-semibold flex items-center gap-1">
        Scroll Right <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
      </span>
    </div>

    <!-- Classes Container (Mobile Snap-Scroll & Desktop Grid) -->
    <div class="mobile-snap-scroll gap-6">
      <?php foreach ($courses as $c): ?>
        <div class="snap-card-item">
          <div class="bg-white rounded-2xl overflow-hidden card-hover-effect flex flex-col h-full border border-slate-200 shadow-md">
            
            <!-- Card Header Banner -->
            <div class="p-6 bg-gradient-to-r <?php echo $c['color_gradient']; ?> text-white relative">
              <span class="absolute top-4 right-4 bg-black/30 backdrop-blur-md text-amber-300 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border border-amber-300/30">
                <?php echo $c['badge']; ?>
              </span>
              <div class="kannada-text text-amber-300 text-sm font-bold mb-1">
                <?php echo $c['kannada_title']; ?>
              </div>
              <h3 class="text-2xl font-black tracking-tight">
                <?php echo $c['title']; ?>
              </h3>
            </div>

            <!-- Card Body & Feature Checklist -->
            <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p class="text-xs text-slate-600 leading-relaxed">
                <?php echo $c['description']; ?>
              </p>

              <div class="space-y-2.5 pt-2 border-t border-slate-100">
                <div class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Key Highlights:</div>
                <?php foreach ($c['features'] as $f): ?>
                  <div class="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <div class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <i data-lucide="check" class="w-3 h-3"></i>
                    </div>
                    <span><?php echo $f; ?></span>
                  </div>
                <?php endforeach; ?>
              </div>

              <!-- Enquire Action -->
              <div class="pt-4 border-t border-slate-100">
                <a href="#enquiry" onclick="preselectCourse('<?php echo $c['title']; ?>')" class="w-full bg-slate-900 hover:bg-red-600 text-white text-xs font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 group">
                  <span>Enquire for <?php echo $c['title']; ?></span>
                  <i data-lucide="chevron-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>

            </div>

          </div>
        </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>
