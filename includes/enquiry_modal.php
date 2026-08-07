<?php
/**
 * Enquiry Form Component & Notification Feedback Modal
 */
?>
<section id="enquiry" class="py-16 bg-slate-50 relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <!-- Form Info Left Column -->
      <div class="lg:col-span-5 space-y-6">
        <div class="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <i data-lucide="help-circle" class="w-4 h-4"></i>
          Get In Touch With Us
        </div>

        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          ADMISSION ENQUIRY & COUNSELING
        </h2>

        <p class="kannada-text text-red-600 font-bold text-lg">
          ಸಂಪರ್ಕಿಸಿ ಮತ್ತು ಪ್ರವೇಶಾತಿ ಮಾಹಿತಿ ಪಡೆಯಿರಿ
        </p>

        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
          Have questions regarding class timings, batch availability, or fee structures? Fill out the quick form and our counseling team will get back to you within 2 hours.
        </p>

        <div class="space-y-4 pt-2">
          
          <div class="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div class="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
              <i data-lucide="map-pin" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">Institute Location</div>
              <div class="text-sm font-semibold text-slate-900 mt-0.5">
                <?php echo FULL_ADDRESS; ?>
              </div>
            </div>
          </div>

          <div class="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <i data-lucide="phone-call" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">Helpline Contact Numbers</div>
              <div class="text-sm font-bold text-slate-900 mt-0.5 space-x-2">
                <a href="tel:919686575508" class="text-red-600 hover:underline"><?php echo PHONE_1; ?></a> •
                <a href="tel:919620320309" class="text-red-600 hover:underline"><?php echo PHONE_2; ?></a> •
                <a href="tel:919008735478" class="text-red-600 hover:underline"><?php echo PHONE_3; ?></a>
              </div>
            </div>
          </div>

          <div class="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <i data-lucide="mail" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">Official Email</div>
              <div class="text-sm font-semibold text-slate-900 mt-0.5">
                <?php echo INSTITUTE_EMAIL; ?>
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- Form Card Right Column -->
      <div class="lg:col-span-7">
        <div class="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 relative">
          
          <div class="mb-6">
            <h3 class="text-xl font-extrabold text-slate-900">Book Free Trial Class / Admission Query</h3>
            <p class="text-xs text-slate-500 mt-1">Submit your details to receive instant notification confirmation.</p>
          </div>

          <form id="enquiryForm" class="space-y-4" onsubmit="submitEnquiryForm(event)">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="student_name" class="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Student Full Name <span class="text-red-500">*</span>
                </label>
                <input type="text" id="student_name" name="student_name" required placeholder="e.g. Rahul Sharma" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none text-sm transition">
              </div>

              <div>
                <label for="parent_name" class="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Parent / Guardian Name
                </label>
                <input type="text" id="parent_name" name="parent_name" placeholder="e.g. Suresh Sharma" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none text-sm transition">
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="phone" class="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Contact Mobile Number <span class="text-red-500">*</span>
                </label>
                <input type="tel" id="phone" name="phone" required placeholder="e.g. 96865 75508" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none text-sm transition">
              </div>

              <div>
                <label for="email" class="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Email Address
                </label>
                <input type="email" id="email" name="email" placeholder="e.g. student@gmail.com" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none text-sm transition">
              </div>
            </div>

            <div>
              <label for="course" class="block text-xs font-bold text-slate-700 uppercase mb-1">
                Class / Standard Interested <span class="text-red-500">*</span>
              </label>
              <select id="course" name="course" required class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none text-sm bg-white transition">
                <option value="">Select Interested Class & Board</option>
                <optgroup label="8th Standard">
                  <option value="8th Standard (State)">8th Standard (State)</option>
                  <option value="8th Standard (CBSE)">8th Standard (CBSE)</option>
                  <option value="8th Standard (ICSE)">8th Standard (ICSE)</option>
                </optgroup>
                <optgroup label="9th Standard">
                  <option value="9th Standard (State)">9th Standard (State)</option>
                  <option value="9th Standard (CBSE)">9th Standard (CBSE)</option>
                  <option value="9th Standard (ICSE)">9th Standard (ICSE)</option>
                </optgroup>
                <optgroup label="10th Standard">
                  <option value="10th Standard - SSLC (State)">10th Standard - SSLC (State)</option>
                  <option value="10th Standard (CBSE)">10th Standard (CBSE)</option>
                  <option value="10th Standard (ICSE)">10th Standard (ICSE)</option>
                </optgroup>
                <optgroup label="Pre-University Coaching">
                  <option value="1st PUC (Science/Commerce)">1st PUC (Science / Commerce)</option>
                  <option value="2nd PUC (Science/Commerce)">2nd PUC (Science / Commerce)</option>
                </optgroup>
              </select>
            </div>

            <div>
              <label for="message" class="block text-xs font-bold text-slate-700 uppercase mb-1">
                Specific Subject Queries or Message
              </label>
              <textarea id="message" name="message" rows="3" placeholder="Tell us about specific subjects or preferred batch timings..." class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none text-sm transition"></textarea>
            </div>

            <button type="submit" id="submitEnquiryBtn" class="btn-primary w-full py-4 text-sm uppercase tracking-wider font-extrabold shadow-xl mt-2 justify-center">
              <i data-lucide="send" class="w-4 h-4 text-amber-400"></i>
              <span>Submit Enquiry Now</span>
            </button>

          </form>

        </div>
      </div>

    </div>

  </div>
</section>

<!-- Confirmation Notification Modal -->
<div id="enquirySuccessModal" class="modal-overlay" onclick="closeEnquirySuccessModalOnBackdrop(event)">
  <div class="modal-container text-center" onclick="event.stopPropagation()">
    
    <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
      <i data-lucide="check-circle-2" class="w-10 h-10"></i>
    </div>

    <h3 class="text-2xl font-black text-slate-900 mb-2">Enquiry Sent Successfully!</h3>
    <p class="kannada-text text-amber-600 font-bold mb-3">ನಿಮ್ಮ ವಿಚಾರಣೆ ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಕೆಯಾಗಿದೆ</p>
    
    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2 mb-6">
      <div class="flex justify-between border-b border-slate-200 pb-2">
        <span class="text-slate-500">Enquiry Ref ID:</span>
        <span id="modalEnquiryId" class="font-bold text-red-600">PT-2026-001</span>
      </div>
      <div class="flex justify-between border-b border-slate-200 pb-2">
        <span class="text-slate-500">Email Notification:</span>
        <span class="font-bold text-emerald-600 flex items-center gap-1">
          <i data-lucide="mail-check" class="w-3.5 h-3.5"></i> Sent to pranamyatutorials@gmail.com
        </span>
      </div>
      <div id="modalEnquiryMsg" class="text-slate-600 pt-1">
        We have dispatched an email and recorded your query. Our academic counselor will contact you shortly.
      </div>
    </div>

    <button onclick="closeEnquirySuccessModal()" class="btn-gold w-full py-3 text-sm justify-center">
      Got It, Thank You!
    </button>

  </div>
</div>
