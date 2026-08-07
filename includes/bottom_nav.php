<?php
/**
 * Fixed Mobile Bottom Navigation Bar & Spacer Component
 * Features:
 * 1. 4-icon row fixed at bottom of mobile viewports.
 * 2. BottomBarSpacer div to prevent bar from overlapping content.
 */
?>

<!-- Fixed 4-Icon Mobile Bottom Navigation Bar -->
<div class="fixed-mobile-bottom-bar">
  
  <a href="#classes" class="bottom-bar-item">
    <i data-lucide="book-open"></i>
    <span>Quick Links</span>
  </a>

  <a href="#enquiry" class="bottom-bar-item">
    <i data-lucide="edit-3"></i>
    <span>Enquiry</span>
  </a>

  <a href="<?php echo GOOGLE_MAPS_LINK; ?>" target="_blank" class="bottom-bar-item">
    <i data-lucide="map-pin"></i>
    <span>Locate Us</span>
  </a>

  <a href="tel:91<?php echo PRIMARY_PHONE; ?>" class="bottom-bar-item active">
    <i data-lucide="phone-call" class="text-amber-400"></i>
    <span class="text-amber-400">Call Us</span>
  </a>

</div>

<!-- BottomBarSpacer: Prevents bar from covering content on mobile screens -->
<div class="bottom-bar-spacer"></div>
