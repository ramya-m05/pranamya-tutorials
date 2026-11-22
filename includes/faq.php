<?php
/**
 * Interactive FAQ Component for Pranamya Tutorials
 * Features:
 * 1. 60fps CSS Grid expandable accordions.
 * 2. Keyboard accessible (Space / Enter / aria-expanded).
 * 3. Quick question action callouts.
 */
?>
<!-- Interactive FAQ Section -->
<section id="faq" class="py-16 bg-white relative overflow-hidden border-t border-slate-200">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Header -->
    <div class="section-header text-center mb-12 space-y-3">
      <div class="inline-flex items-center gap-2 bg-red-100 text-red-700 border border-red-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
        <i data-lucide="help-circle" class="w-3.5 h-3.5 text-amber-500"></i>
        <span>Frequently Asked Questions</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        Everything You Need to Know About <span class="text-red-600">Pranamya Tutorials</span>
      </h2>
      <p class="kannada-text text-red-700 font-bold text-sm sm:text-base">
        ಪೋಷಕರು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳು
      </p>
      <p class="text-slate-600 text-xs sm:text-sm">
        Got questions? Here are honest, direct answers about our courses, timings, faculty, and teaching methodology.
      </p>
    </div>

    <!-- FAQ Accordion List -->
    <div class="space-y-4">
      
      <!-- FAQ Item 1 -->
      <div class="faq-item">
        <button type="button" class="faq-trigger" aria-expanded="false" aria-controls="faq-ans-1">
          <span class="font-bold text-slate-900 text-sm sm:text-base">What boards and grades do you offer coaching for?</span>
          <i data-lucide="chevron-down" class="faq-icon"></i>
        </button>
        <div id="faq-ans-1" class="faq-content">
          <div class="faq-inner">
            <div class="faq-body">
              We provide targeted board examination coaching for <strong>8th, 9th, and 10th Standards</strong> (Karnataka State Board, CBSE, and ICSE), as well as <strong>1st &amp; 2nd PUC</strong> across both Science (PCMB / PCMC) and Commerce (Accounts, Business Studies, Economics, Statistics) streams.
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Item 2 -->
      <div class="faq-item">
        <button type="button" class="faq-trigger" aria-expanded="false" aria-controls="faq-ans-2">
          <span class="font-bold text-slate-900 text-sm sm:text-base">Where is Pranamya Tutorials located in Rajajinagar?</span>
          <i data-lucide="chevron-down" class="faq-icon"></i>
        </button>
        <div id="faq-ans-2" class="faq-content">
          <div class="faq-inner">
            <div class="faq-body">
              Our institute is conveniently located at <strong><?php echo FULL_ADDRESS; ?></strong>. The center is easily accessible via public transport, bus routes, and the Rajajinagar metro station.
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Item 3 -->
      <div class="faq-item">
        <button type="button" class="faq-trigger" aria-expanded="false" aria-controls="faq-ans-3">
          <span class="font-bold text-slate-900 text-sm sm:text-base">What is the average batch size at your institute?</span>
          <i data-lucide="chevron-down" class="faq-icon"></i>
        </button>
        <div id="faq-ans-3" class="faq-content">
          <div class="faq-inner">
            <div class="faq-body">
              We strictly limit our batches to <strong>15–20 students</strong>. Unlike overcrowded mass-commercial classes, our limited capacity guarantees that our professors know every student by name, monitor their daily grasp, and address doubts individually.
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Item 4 -->
      <div class="faq-item">
        <button type="button" class="faq-trigger" aria-expanded="false" aria-controls="faq-ans-4">
          <span class="font-bold text-slate-900 text-sm sm:text-base">Can a student attend a free demo or trial session before enrolling?</span>
          <i data-lucide="chevron-down" class="faq-icon"></i>
        </button>
        <div id="faq-ans-4" class="faq-content">
          <div class="faq-inner">
            <div class="faq-body">
              <strong>Yes, absolutely!</strong> We actively encourage every prospective student and parent to book and attend a free demo class. This allows you to experience our interactive, concept-first teaching atmosphere firsthand before making any commitment.
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Item 5 -->
      <div class="faq-item">
        <button type="button" class="faq-trigger" aria-expanded="false" aria-controls="faq-ans-5">
          <span class="font-bold text-slate-900 text-sm sm:text-base">Are comprehensive study materials and test series included?</span>
          <i data-lucide="chevron-down" class="faq-icon"></i>
        </button>
        <div id="faq-ans-5" class="faq-content">
          <div class="faq-inner">
            <div class="faq-body">
              Yes. All enrolled students receive our curated chapter notes, formula sheets, question banks containing the last 10 years of solved board examination questions, and periodic weekly mock tests matching official board patterns.
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Item 6 -->
      <div class="faq-item">
        <button type="button" class="faq-trigger" aria-expanded="false" aria-controls="faq-ans-6">
          <span class="font-bold text-slate-900 text-sm sm:text-base">How are parents kept updated regarding academic progress?</span>
          <i data-lucide="chevron-down" class="faq-icon"></i>
        </button>
        <div id="faq-ans-6" class="faq-content">
          <div class="faq-inner">
            <div class="faq-body">
              We maintain active communication through regular test score reports, attendance tracking, and scheduled Parent-Teacher Meetings (PTMs). Parents can also directly consult subject professors to discuss their ward's growth and strategy.
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Quick Question Prompt -->
    <div class="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="text-left">
        <div class="text-sm font-bold text-slate-900">Have a specific question not listed here?</div>
        <div class="text-xs text-slate-600">Our academic counselors are available on call and WhatsApp.</div>
      </div>
      <div class="flex items-center gap-3">
        <a href="tel:91<?php echo PRIMARY_PHONE; ?>" class="btn-primary text-xs py-2.5 px-4">
          <i data-lucide="phone" class="w-3.5 h-3.5 text-amber-400"></i>
          Call <?php echo PHONE_1; ?>
        </a>
        <a href="<?php echo WHATSAPP_LINK; ?>" target="_blank" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition flex items-center gap-1.5">
          <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
          WhatsApp
        </a>
      </div>
    </div>

  </div>
</section>

