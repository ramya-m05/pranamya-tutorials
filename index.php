<?php
/**
 * Main Index Page - Pranamya Tutorials
 * Assembles all modular components into a responsive, high-performing PHP web application.
 */

// Header Component (HTML Head, Meta, Topbar & Sticky Navbar)
require_once __DIR__ . '/includes/header.php';

// Hero Section (Sliding Classroom BG, Max-h-[380px] Mobile, Fact Scroll Strip)
require_once __DIR__ . '/includes/hero.php';

// Classes Section (Desktop Grid, Mobile Horizontal Snap-Scroll)
require_once __DIR__ . '/includes/classes.php';

// Why Choose Us Section (Numbered Grid 01-06)
require_once __DIR__ . '/includes/why_us.php';

// Faculty Section & Slide-Up Detail Modal
require_once __DIR__ . '/includes/faculty.php';

// High-Converting Admission CTA Banner
require_once __DIR__ . '/includes/admission_cta.php';

// Interactive Enquiry Form & Instant Mail Notification Handler
require_once __DIR__ . '/includes/enquiry_modal.php';

// Condensed Footer (Max Height <= 500px, 3 Columns Desktop, Stacked Mobile)
require_once __DIR__ . '/includes/footer.php';

// Floating WhatsApp FAB Button (Pre-filled Message: "Hi, I am interested to know more about Pranamya Tutorials.")
require_once __DIR__ . '/includes/whatsapp_fab.php';

// Fixed Mobile 4-Icon Bottom Bar (Quick Links, Enquiry, Locate Us, Call Us) & BottomBarSpacer
require_once __DIR__ . '/includes/bottom_nav.php';
?>

  <!-- Main JavaScript App Initialization -->
  <script src="assets/js/app.js"></script>

</body>
</html>
