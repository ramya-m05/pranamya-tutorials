<?php
require_once __DIR__ . '/../config.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo SITE_NAME; ?> — <?php echo SITE_TAGLINE; ?></title>
  <meta name="description" content="Pranamya Tutorials - Top Private Coaching Institute in Rajajinagar, Bengaluru for 8th, 9th, 10th (State, CBSE & ICSE), 1st PUC & 2nd PUC. Strong Basics. Bright Future.">
  <meta name="keywords" content="Pranamya Tutorials, Coaching Institute Rajajinagar, SSLC Tuition Bengaluru, 8th 9th 10th CBSE ICSE State, 1st PUC Science Commerce, 2nd PUC Board Exam, State CBSE ICSE Tuitions Bengaluru">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="assets/images/logo.png">
  <link rel="shortcut icon" href="assets/images/logo.png">

  <!-- Tailwind CSS CDN for Utility Classes -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brandRed: '#C8102E',
            brandRedDark: '#990000',
            brandGold: '#FFB800',
            brandSlate: '#0F172A'
          }
        }
      }
    }
  </script>
  
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
  
  <!-- Three.js 3D & GSAP Motion Libraries -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

  <!-- Custom Main CSS -->
  <link rel="stylesheet" href="assets/css/main.css">
</head>
<body class="bg-slate-50 text-slate-900 antialiased selection:bg-red-600 selection:text-white pb-0">

  <!-- Top Notification Bar -->
  <div class="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-red-900/40">
    <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
      <div class="flex items-center gap-4 flex-wrap">
        <span class="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
          <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
          <?php echo ADDRESS_AREA; ?>, Bengaluru - 560010
        </span>
        <span class="hidden sm:inline-block text-slate-600">|</span>
        <span class="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition">
          <i data-lucide="mail" class="w-3.5 h-3.5 text-red-500"></i>
          <?php echo INSTITUTE_EMAIL; ?>
        </span>
      </div>
      <div class="flex items-center gap-3 ml-auto">
        <span class="text-slate-400 font-medium">Call Us:</span>
        <a href="tel:91<?php echo PRIMARY_PHONE; ?>" class="font-bold text-amber-400 hover:underline flex items-center gap-1">
          <i data-lucide="phone" class="w-3.5 h-3.5"></i>
          <?php echo PHONE_1; ?>
        </a>
        <span class="text-slate-600 hidden md:inline">•</span>
        <a href="tel:919620320309" class="font-bold text-amber-400 hover:underline hidden md:inline">
          <?php echo PHONE_2; ?>
        </a>
      </div>
    </div>
  </div>

  <!-- Sticky Main Navbar -->
  <header class="sticky top-0 z-50 nav-glass transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <!-- Brand Logo & Name -->
        <a href="index.php" class="flex items-center gap-3 group">
          <div class="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <img src="assets/images/logo.png" alt="Pranamya Tutorials Logo" class="w-full h-full object-contain">
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-2">
              <span class="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 leading-none">
                PRANAMYA
              </span>
              <span class="kannada-text text-xs bg-red-600 text-white px-2 py-0.5 rounded-md font-semibold">
                <?php echo SITE_KANNADA_NAME; ?>
              </span>
            </div>
            <span class="text-xs tracking-widest uppercase font-bold text-red-600 leading-tight">
              TUTORIALS
            </span>
            <span class="hidden lg:block text-[10px] text-slate-500 font-medium">
              <?php echo SITE_TAGLINE; ?>
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center space-x-7 font-semibold text-sm text-slate-700">
          <a href="#hero" class="hover:text-red-600 transition-colors py-2 border-b-2 border-transparent hover:border-red-600">Home</a>
          <a href="#classes" class="hover:text-red-600 transition-colors py-2 border-b-2 border-transparent hover:border-red-600">Classes Offered</a>
          <a href="#why-us" class="hover:text-red-600 transition-colors py-2 border-b-2 border-transparent hover:border-red-600">Why Us</a>
          <a href="#faculty" class="hover:text-red-600 transition-colors py-2 border-b-2 border-transparent hover:border-red-600">Our Faculty</a>
          <a href="#faq" class="hover:text-red-600 transition-colors py-2 border-b-2 border-transparent hover:border-red-600">FAQ</a>
          <a href="#enquiry" class="hover:text-red-600 transition-colors py-2 border-b-2 border-transparent hover:border-red-600">Admissions</a>
        </nav>

        <!-- Header Right CTA Button -->
        <div class="hidden sm:flex items-center gap-3">
          <a href="#enquiry" class="btn-primary text-xs uppercase tracking-wider">
            <i data-lucide="graduation-cap" class="w-4 h-4 text-amber-400"></i>
            Enquire Now
          </a>
        </div>

        <!-- Mobile Hamburger Button -->
        <button id="mobileMenuBtn" aria-label="Toggle Navigation Menu" class="md:hidden p-2 rounded-lg text-slate-700 hover:text-red-600 hover:bg-slate-100 focus:outline-none">
          <i data-lucide="menu" class="w-7 h-7"></i>
        </button>

      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div id="mobileDrawer" class="hidden md:hidden bg-slate-900/95 backdrop-blur-xl text-white border-b border-red-900/50 transition-all duration-300">
      <div class="px-6 py-6 space-y-4 font-semibold text-base">
        <div class="flex justify-between items-center pb-3 border-b border-slate-800">
          <span class="text-amber-400 text-sm font-bold tracking-wider uppercase">Menu Navigation</span>
          <button id="closeMobileDrawerBtn" class="text-slate-400 hover:text-white">
            <i data-lucide="x" class="w-6 h-6"></i>
          </button>
        </div>
        <a href="#hero" class="mobile-nav-link block py-2 border-b border-slate-800/60 hover:text-amber-400">Home</a>
        <a href="#classes" class="mobile-nav-link block py-2 border-b border-slate-800/60 hover:text-amber-400">Classes Offered</a>
        <a href="#why-us" class="mobile-nav-link block py-2 border-b border-slate-800/60 hover:text-amber-400">Why Choose Us</a>
        <a href="#faculty" class="mobile-nav-link block py-2 border-b border-slate-800/60 hover:text-amber-400">Faculty Team</a>
        <a href="#faq" class="mobile-nav-link block py-2 border-b border-slate-800/60 hover:text-amber-400">FAQ &amp; Answers</a>
        <a href="#enquiry" class="mobile-nav-link block py-2 border-b border-slate-800/60 hover:text-amber-400">Enquiry & Admissions</a>
        <div class="pt-4 flex flex-col gap-3">
          <a href="tel:91<?php echo PRIMARY_PHONE; ?>" class="btn-gold w-full text-center text-sm py-3 justify-center">
            <i data-lucide="phone-call" class="w-4 h-4"></i>
            Call Us Immediately
          </a>
          <a href="<?php echo WHATSAPP_LINK; ?>" target="_blank" class="bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl text-center text-sm flex items-center justify-center gap-2 hover:bg-emerald-500">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </div>
  </header>
