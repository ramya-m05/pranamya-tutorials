<?php
// about.php – About Page
include 'includes/header.php';

$team = [
  ['name'=>'Director', 'role'=>'Academic Head', 'icon'=>'👨‍🏫',
   'desc'=>'A passionate educator committed to shaping the academic future of every student.'],
  ['name'=>'Senior Faculty', 'role'=>'Mathematics & Science', 'icon'=>'🔬',
   'desc'=>'Expert in breaking down complex concepts into simple, understandable ideas.'],
  ['name'=>'Faculty', 'role'=>'Languages & Social Studies', 'icon'=>'📖',
   'desc'=>'Dedicated to strengthening the foundational knowledge of each student.'],
];

$milestones = [
  ['year'=>'Day One', 'event'=>'Founded with a vision to provide quality, affordable coaching'],
  ['year'=>'Growing', 'event'=>'Expanded to cover all classes from 8th Standard to 2nd PUC'],
  ['year'=>'Today',   'event'=>'Hundreds of students coached — many scoring top ranks in boards'],
  ['year'=>'Future',  'event'=>'Committed to continuous growth with new batches & technology'],
];
?>

<!-- Page Hero -->
<section class="hero" style="min-height:55vh;">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <div class="hero-grid-pattern"></div>
  <div class="hero-content" style="grid-template-columns:1fr; text-align:center; padding:8rem 2rem 4rem;">
    <div>
      <div class="hero-badge"><span class="dot"></span>Our Story</div>
      <h1 class="hero-title">About <span class="highlight">Pranamya Tutorials</span></h1>
      <p class="hero-tagline">Dedicated to nurturing young minds since our founding in Rajajinagar, Bengaluru.</p>
    </div>
  </div>
</section>

<div class="marquee-section">
  <div class="marquee-track">
    <?php foreach (array_fill(0, 3, ['Inspiring Young Minds','Experienced Faculty','Limited Batch Seats','State Syllabus','Regular Tests','Concept-Based Learning']) as $set):
      foreach ($set as $item): ?>
        <span class="marquee-item"><span class="marquee-dot">●</span> <?= $item ?></span>
    <?php endforeach; endforeach; ?>
  </div>
</div>

<!-- Mission & Vision -->
<section class="about-section">
  <div class="section-wrapper">
    <div class="about-grid">
      <div class="about-visual reveal-left">
        <div class="about-main-card">
          <span class="about-icon-stack">🏫</span>
          <div class="about-card-title">Our Mission</div>
          <div class="about-card-sub">What drives us every day</div>
          <p style="font-size:0.88rem; color:rgba(255,255,255,0.65); margin-top:1.25rem; line-height:1.8;">
            To provide every student with a strong conceptual foundation, personalized attention,
            and the confidence to excel not just in exams — but in life.
          </p>
          <div style="margin-top:1.5rem; padding:1rem; background:rgba(212,160,23,0.1); border-radius:12px; border:1px solid rgba(212,160,23,0.2);">
            <p style="font-size:1rem; font-weight:700; color:var(--gold-bright); font-style:italic;">
              "Learn with Confidence, Achieve with Pride!"
            </p>
          </div>
        </div>
      </div>

      <div class="about-content reveal-right">
        <div class="section-eyebrow">Who We Are</div>
        <h2 class="about-title">
          More Than Just a <span style="color:var(--gold-bright)">Coaching Centre</span>
        </h2>
        <p class="about-text">
          Pranamya Tutorials was founded with a clear purpose: to bridge the gap between
          school teaching and a student's actual understanding. We believe that most
          students struggle not because they lack intelligence, but because they lack
          the right guidance and environment.
        </p>
        <p class="about-text">
          Our experienced faculty members go beyond textbooks to ensure that students
          grasp underlying concepts, enabling them to tackle any problem — expected or
          unexpected — in exams and beyond.
        </p>
        <div class="about-motto">"Build Today, Excel Tomorrow. Strong Basics, Bright Future."</div>
        <ul class="highlights-list">
          <li class="highlight-item"><div class="highlight-icon">🎯</div><span class="highlight-text">Concept-based teaching methodology</span></li>
          <li class="highlight-item"><div class="highlight-icon">📊</div><span class="highlight-text">Data-driven performance tracking</span></li>
          <li class="highlight-item"><div class="highlight-icon">🤝</div><span class="highlight-text">Strong student-teacher relationship</span></li>
          <li class="highlight-item"><div class="highlight-icon">🏅</div><span class="highlight-text">Proven track record of academic success</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Core Values -->
<section class="features-section">
  <div class="section-wrapper">
    <div class="section-header">
      <div class="section-eyebrow">Our Values</div>
      <h2 class="section-title">What We <span class="gold">Stand For</span></h2>
      <div class="section-divider"></div>
    </div>
    <div class="features-grid">
      <div class="feature-card reveal">
        <div class="feature-card-icon">💡</div>
        <div class="feature-card-title">Concept Clarity</div>
        <p class="feature-card-desc">We prioritize understanding over memorization. Students learn the "why" behind every topic.</p>
      </div>
      <div class="feature-card reveal" style="transition-delay:0.12s">
        <div class="feature-card-icon">❤️</div>
        <div class="feature-card-title">Personal Care</div>
        <p class="feature-card-desc">Every student matters. Our small batches ensure personal attention and individual guidance.</p>
      </div>
      <div class="feature-card reveal" style="transition-delay:0.24s">
        <div class="feature-card-icon">📈</div>
        <div class="feature-card-title">Continuous Improvement</div>
        <p class="feature-card-desc">Regular tests and performance analysis help identify weaknesses and turn them into strengths.</p>
      </div>
    </div>
  </div>
</section>

<!-- Faculty -->
<section class="whyus-section">
  <div class="section-wrapper">
    <div class="section-header">
      <div class="section-eyebrow">Our Team</div>
      <h2 class="section-title">Meet Our <span class="gold">Educators</span></h2>
      <p class="section-desc">Passionate professionals dedicated to your child's success.</p>
      <div class="section-divider"></div>
    </div>
    <div class="classes-grid" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">
      <?php foreach ($team as $i => $member): ?>
      <div class="class-card c<?= $i+1 ?> reveal" style="transition-delay:<?= $i*0.1 ?>s; text-align:center;">
        <span class="class-icon" style="font-size:3.5rem;"><?= $member['icon'] ?></span>
        <div class="class-name"><?= $member['name'] ?></div>
        <div class="class-label" style="color:var(--gold-light);margin-bottom:.75rem;"><?= $member['role'] ?></div>
        <p style="font-size:.8rem;color:rgba(255,255,255,0.6);line-height:1.7;"><?= $member['desc'] ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Timeline -->
<section class="classes-section">
  <div class="section-wrapper">
    <div class="section-header">
      <div class="section-eyebrow">Our Journey</div>
      <h2 class="section-title">The <span class="gold">Pranamya</span> Story</h2>
      <div class="section-divider"></div>
    </div>
    <div style="max-width:700px; margin:0 auto;">
      <?php foreach ($milestones as $i => $m): ?>
      <div class="reason-item reveal" style="transition-delay:<?= $i*0.12 ?>s; margin-bottom:1rem;">
        <div class="reason-num" style="min-width:56px; font-size:0.65rem; text-align:center;"><?= $m['year'] ?></div>
        <div>
          <div class="reason-text"><?= htmlspecialchars($m['event']) ?></div>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php include 'includes/footer.php'; ?>
