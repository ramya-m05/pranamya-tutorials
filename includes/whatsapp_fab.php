<?php
/**
 * Floating Action Buttons Component (Call & WhatsApp)
 * Fixed Floating Action Buttons (Mobile & Desktop)
 * Call Icon opens native phone app on mobile (tel: protocol)
 */
?>
<!-- Floating Call FAB (Positioned directly above WhatsApp FAB) -->
<a href="tel:91<?php echo PRIMARY_PHONE; ?>" class="call-fab group" aria-label="Call Pranamya Tutorials">
  <div class="call-pulse"></div>
  <i data-lucide="phone-call" class="w-6 h-6 stroke-2 text-white"></i>
  
  <!-- Tooltip Hint -->
  <span class="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
    Call Us Directly
  </span>
</a>

<!-- Floating WhatsApp FAB -->
<a href="<?php echo WHATSAPP_LINK; ?>" target="_blank" rel="noopener noreferrer" class="whatsapp-fab group" aria-label="Chat on WhatsApp">
  <div class="whatsapp-pulse"></div>
  <i data-lucide="message-circle" class="w-7 h-7 fill-current stroke-none"></i>
  
  <!-- Tooltip Hint -->
  <span class="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
    Chat on WhatsApp
  </span>
</a>

