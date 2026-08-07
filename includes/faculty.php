<?php
/**
 * Faculty Section & Slide-Up Detail Modal Component
 * Features:
 * 1. Portrait Faculty Cards matching reference design with dark gradient overlay & LinkedIn badge.
 * 2. Horizontal Slider on both mobile & desktop with left/right scroll controls.
 * 3. Interactive click -> detail modal (#facultyModal).
 */
?>
<section id="faculty" class="py-16 bg-slate-950 text-white relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Header with Title & Slider Controls -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
      <div>
        <div class="inline-flex items-center gap-2 bg-red-900/60 text-amber-300 border border-red-700/50 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <i data-lucide="award" class="w-4 h-4 text-amber-400"></i>
          Expert Educators
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          MEET OUR FACULTY TEAM
        </h2>
        <p class="kannada-text text-amber-400 font-semibold text-lg mt-1">
          ಅನುಭವಿ ಮತ್ತು ಬದ್ಧತೆಯುಳ್ಳ ಶಿಕ್ಷಕರ ತಂಡ
        </p>
        <p class="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
          Click on any faculty card to view complete qualifications, teaching methodology, and student mentorship details.
        </p>
      </div>

      <!-- Slider Left / Right Navigation Buttons (Visible on Mobile & Desktop) -->
      <div class="flex items-center gap-3 self-end md:self-auto">
        <button onclick="scrollFacultySlider(-1)" aria-label="Previous Faculty" class="w-11 h-11 rounded-full bg-slate-800 border border-slate-700 hover:border-amber-400 text-white hover:text-amber-400 flex items-center justify-center transition shadow-lg active:scale-95">
          <i data-lucide="chevron-left" class="w-6 h-6"></i>
        </button>
        <button onclick="scrollFacultySlider(1)" aria-label="Next Faculty" class="w-11 h-11 rounded-full bg-slate-800 border border-slate-700 hover:border-amber-400 text-white hover:text-amber-400 flex items-center justify-center transition shadow-lg active:scale-95">
          <i data-lucide="chevron-right" class="w-6 h-6"></i>
        </button>
      </div>
    </div>

    <!-- Faculty Horizontal Slide Track (Mobile & Desktop) -->
    <div id="facultySlider" class="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scrollbar-none scroll-smooth">
      <?php foreach ($faculty_members as $fac): ?>
        <div onclick="openFacultyModal(<?php echo $fac['id']; ?>)" class="snap-start flex-none w-[280px] sm:w-[340px] h-[400px] sm:h-[460px] rounded-3xl overflow-hidden relative group cursor-pointer border border-slate-800 hover:border-amber-400/60 transition-all duration-300 shadow-2xl transform hover:-translate-y-2">
          
          <!-- Faculty Full Height Background Image -->
          <?php if (!empty($fac['image_url'])): ?>
            <img src="<?php echo $fac['image_url']; ?>" alt="<?php echo $fac['name']; ?>" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700">
          <?php else: ?>
            <div class="w-full h-full flex items-center justify-center text-4xl font-black text-white" style="background: <?php echo $fac['image_bg']; ?>;">
              <?php echo $fac['avatar_initials']; ?>
            </div>
          <?php endif; ?>

          <!-- Bottom Dark Gradient Overlay (Matches reference design) -->
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>

          <!-- Top Badge: Experience -->
          <div class="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-amber-300 border border-amber-400/30 text-[11px] font-bold px-3 py-1 rounded-full">
            <?php echo $fac['experience']; ?>
          </div>

          <!-- Bottom Card Info Overlay Content -->
          <div class="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-amber-300 transition-colors leading-tight">
              <?php echo $fac['name']; ?>
            </h3>
            <div class="text-sm text-slate-300 font-medium mt-1">
              <?php echo $fac['designation']; ?>
            </div>
            
            <div class="flex items-center justify-between mt-4">
              <!-- LinkedIn Icon Button (Bottom Left matching wireframe) -->
              <div onclick="event.stopPropagation(); window.open('<?php echo $fac['linkedin_url']; ?>', '_blank')" class="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <i data-lucide="linkedin" class="w-5 h-5 fill-current stroke-none"></i>
              </div>

              <!-- Click hint -->
              <span class="text-xs font-bold text-amber-400 flex items-center gap-1 group-hover:underline">
                View Profile <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
              </span>
            </div>
          </div>

        </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>

<!-- Slide-Up Faculty Detail Modal -->
<div id="facultyModal" class="modal-overlay" onclick="closeFacultyModalOnBackdrop(event)">
  <div class="modal-container" onclick="event.stopPropagation()">
    
    <div class="flex justify-between items-start pb-4 border-b border-slate-200">
      <div>
        <span id="modalFacultyExperience" class="text-xs font-extrabold text-amber-600 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
          Experience Badge
        </span>
        <h3 id="modalFacultyName" class="text-2xl font-black text-slate-900 mt-2">
          Faculty Name
        </h3>
        <div id="modalFacultyDesignation" class="text-xs font-semibold text-slate-500">
          Designation
        </div>
      </div>
      <button onclick="closeFacultyModal()" aria-label="Close Modal" class="p-2 text-slate-400 hover:text-red-600 rounded-full hover:bg-slate-100 transition">
        <i data-lucide="x" class="w-6 h-6"></i>
      </button>
    </div>

    <!-- Modal Body -->
    <div class="py-6 space-y-4">
      <div class="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-xl">
        <div class="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">Qualifications & Expertise</div>
        <div id="modalFacultyQualification" class="text-sm font-semibold text-slate-800"></div>
        <div id="modalFacultySubjects" class="text-xs text-slate-600 mt-1"></div>
      </div>

      <div>
        <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Biography & Teaching Approach</h4>
        <p id="modalFacultyBio" class="text-xs sm:text-sm text-slate-600 leading-relaxed"></p>
      </div>

      <div class="bg-slate-900 text-amber-300 p-4 rounded-xl italic text-xs sm:text-sm relative">
        <i data-lucide="quote" class="w-6 h-6 text-amber-500/30 absolute top-2 right-2"></i>
        <div id="modalFacultyQuote"></div>
      </div>
    </div>

    <!-- Modal Footer Actions -->
    <div class="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
      <a href="#enquiry" onclick="closeFacultyModal()" class="btn-primary text-xs w-full justify-center">
        <i data-lucide="message-square" class="w-4 h-4"></i>
        Ask Question to Faculty
      </a>
    </div>

  </div>
</div>

<script>
  const facultyData = <?php echo json_encode($faculty_members); ?>;

  function scrollFacultySlider(direction) {
    const slider = document.getElementById('facultySlider');
    if (!slider) return;
    const scrollAmount = 340;
    slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

  function openFacultyModal(id) {
    const fac = facultyData.find(f => f.id === id);
    if (!fac) return;

    document.getElementById('modalFacultyName').textContent = fac.name;
    document.getElementById('modalFacultyDesignation').textContent = fac.designation;
    document.getElementById('modalFacultyQualification').textContent = fac.qualification;
    document.getElementById('modalFacultyExperience').textContent = fac.experience;
    document.getElementById('modalFacultySubjects').textContent = 'Subjects Taught: ' + fac.subjects;
    document.getElementById('modalFacultyBio').textContent = fac.bio;
    document.getElementById('modalFacultyQuote').textContent = '"' + fac.quote + '"';

    const modal = document.getElementById('facultyModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeFacultyModal() {
    const modal = document.getElementById('facultyModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function closeFacultyModalOnBackdrop(e) {
    if (e.target.id === 'facultyModal') {
      closeFacultyModal();
    }
  }
</script>

