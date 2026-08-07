<?php
// classes.php – Classes Page
include 'includes/header.php';

$classes = [
  [
    'id'       => 'std8',
    'icon'     => '📚',
    'name'     => '8th Standard',
    'color'    => 'c1',
    'badge'    => '#4A90D9',
    'tagline'  => 'Building the Foundation',
    'desc'     => 'The 8th standard is a critical year where concepts from science and mathematics start getting deeper. We ensure students develop strong basics that will support them all the way through PUC.',
    'features' => [
      ['icon'=>'🧠','title'=>'Concept Clarity','desc'=>'Crystal-clear understanding of each topic through interactive explanation'],
      ['icon'=>'📝','title'=>'Regular Tests',  'desc'=>'Weekly and monthly assessments to track progress consistently'],
      ['icon'=>'🏠','title'=>'Homework Support','desc'=>'Guided assistance on school homework and assignments'],
      ['icon'=>'🏗️','title'=>'Strong Foundation','desc'=>'Core concepts reinforced to ensure readiness for higher classes'],
    ],
    'subjects' => ['Mathematics','Science (Physics & Chemistry)','English','Kannada / Hindi','Social Studies'],
  ],
  [
    'id'       => 'std9',
    'icon'     => '📖',
    'name'     => '9th Standard',
    'color'    => 'c2',
    'badge'    => '#27AE60',
    'tagline'  => 'Deepening Knowledge',
    'desc'     => 'The 9th standard introduces advanced topics that form the basis for 10th board exams. Our structured coaching helps students master difficult subjects with confidence.',
    'features' => [
      ['icon'=>'📗','title'=>'In-depth Learning','desc'=>'Deep dives into complex topics with step-by-step explanations'],
      ['icon'=>'❓','title'=>'Doubt Solving',    'desc'=>'Dedicated doubt-clearing sessions for every student'],
      ['icon'=>'📝','title'=>'Regular Tests',    'desc'=>'Periodic tests aligned to KSEEB pattern'],
      ['icon'=>'📅','title'=>'Exam Preparation', 'desc'=>'Strategic exam prep with model papers and revision plans'],
    ],
    'subjects' => ['Mathematics','Physics','Chemistry','Biology','English','Kannada'],
  ],
  [
    'id'       => 'std10',
    'icon'     => '🎯',
    'name'     => '10th Standard',
    'color'    => 'c3',
    'badge'    => '#E67E22',
    'tagline'  => 'Board Exam Excellence',
    'desc'     => 'The most crucial year for school students. Our 10th standard coaching is specifically designed to maximize your board exam score with targeted practice and expert guidance.',
    'features' => [
      ['icon'=>'🎓','title'=>'Board Exam Focus',     'desc'=>'Entire coaching aligned to KSEEB board exam pattern'],
      ['icon'=>'❗','title'=>'Important Questions',   'desc'=>'Curated list of high-weightage questions from previous years'],
      ['icon'=>'⏱️','title'=>'Time Management',      'desc'=>'Proven strategies to complete exam within time limits'],
      ['icon'=>'📊','title'=>'Performance Tracking',  'desc'=>'Detailed analysis of test results to fill knowledge gaps'],
    ],
    'subjects' => ['Mathematics','Physics','Chemistry','Biology','English','Kannada / Hindi'],
  ],
  [
    'id'       => 'puc1',
    'icon'     => '🔬',
    'name'     => '1st PUC',
    'color'    => 'c4',
    'badge'    => '#9B59B6',
    'tagline'  => 'Concept Building for PUC',
    'desc'     => 'The transition from 10th to PUC can be challenging. Our 1st PUC coaching bridges the gap, building strong concepts so students feel confident in this advanced curriculum.',
    'features' => [
      ['icon'=>'🧱','title'=>'Concept Building',      'desc'=>'Step-by-step conceptual teaching for PUC subjects'],
      ['icon'=>'🔢','title'=>'Problem Solving',        'desc'=>'Extensive problem-solving practice for maths and science'],
      ['icon'=>'📑','title'=>'Chapterwise Tests',      'desc'=>'Chapter-by-chapter testing to ensure complete coverage'],
      ['icon'=>'📋','title'=>'Exam Oriented Prep',     'desc'=>'Practice tailored to the PUC examination format'],
    ],
    'subjects' => ['Mathematics','Physics','Chemistry','Biology (PCMB/PCMC)','Computer Science','English'],
  ],
  [
    'id'       => 'puc2',
    'icon'     => '🏆',
    'name'     => '2nd PUC',
    'color'    => 'c5',
    'badge'    => '#E91E8C',
    'tagline'  => 'Road to Excellence',
    'desc'     => 'The final milestone before engineering, medical, or commerce colleges. Our 2nd PUC coaching is intensive, focused, and designed to help you score the highest possible marks.',
    'features' => [
      ['icon'=>'🚀','title'=>'Advanced Learning',      'desc'=>'Advanced topics covered with depth and clarity'],
      ['icon'=>'📜','title'=>'Previous Year Papers',   'desc'=>'Exhaustive practice with past 10 years of board papers'],
      ['icon'=>'📝','title'=>'Model Tests',            'desc'=>'Full-length mock tests simulating actual board exams'],
      ['icon'=>'🎯','title'=>'Scoring Strategies',     'desc'=>'Smart techniques to maximise marks in every section'],
    ],
    'subjects' => ['Mathematics','Physics','Chemistry','Biology','Computer Science','English'],
  ],
];
?>

<!-- Page Hero -->
<section class="hero" style="min-height:55vh;">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <div class="hero-grid-pattern"></div>
  <div class="hero-content" style="grid-template-columns:1fr; text-align:center; padding:8rem 2rem 4rem;">
    <div>
      <div class="hero-badge"><span class="dot"></span>What We Teach</div>
      <h1 class="hero-title">Our <span class="highlight">Classes</span></h1>
      <p class="hero-tagline">Comprehensive coaching for Karnataka State Syllabus — 8th Standard to 2nd PUC</p>
      <div class="hero-buttons" style="justify-content:center;">
        <a href="contact.php" class="btn-primary">📞 Enquire for Admission</a>
      </div>
    </div>
  </div>
</section>

<div class="marquee-section">
  <div class="marquee-track">
    <?php
    $items = ['8th Standard','9th Standard','10th Standard','1st PUC','2nd PUC',
              'Board Exam Focus','Concept Building','Regular Tests','Materials Provided','Limited Batch'];
    foreach (array_merge($items,$items,$items) as $item): ?>
      <span class="marquee-item"><span class="marquee-dot">●</span> <?= $item ?></span>
    <?php endforeach; ?>
  </div>
</div>

<!-- Class Overview Cards -->
<section class="classes-section">
  <div class="section-wrapper">
    <div class="section-header">
      <div class="section-eyebrow">Enrol Now</div>
      <h2 class="section-title">Classes <span class="gold">We Offer</span></h2>
      <p class="section-desc">Click on any class card below to learn more about what we teach and how we help your child succeed.</p>
      <div class="section-divider"></div>
    </div>

    <!-- Quick Nav tabs -->
    <div style="display:flex; gap:0.75rem; flex-wrap:wrap; justify-content:center; margin-bottom:3rem;">
      <?php foreach ($classes as $cls): ?>
        <a href="#<?= $cls['id'] ?>"
           style="padding:.5rem 1.25rem; background:rgba(255,255,255,0.05); border:1px solid rgba(212,160,23,0.25);
                  border-radius:50px; font-size:.78rem; font-weight:600; color:var(--gold-light);
                  transition:all .3s ease;"
           onmouseover="this.style.background='rgba(212,160,23,0.15)'"
           onmouseout="this.style.background='rgba(255,255,255,0.05)'">
          <?= $cls['icon'] ?> <?= $cls['name'] ?>
        </a>
      <?php endforeach; ?>
    </div>

    <!-- Detailed Class Sections -->
    <?php foreach ($classes as $i => $cls): ?>
    <div id="<?= $cls['id'] ?>" style="margin-bottom:4rem; scroll-margin-top:90px;">
      <div class="whyus-inner reveal" style="transition-delay:<?= $i*0.05 ?>s;">
        <div style="display:grid; grid-template-columns:1fr 2fr; gap:3rem; align-items:start;">

          <!-- Left: Class Card -->
          <div style="text-align:center;">
            <div class="class-card <?= $cls['color'] ?>" style="animation:none; transform:none;">
              <span class="class-icon" style="font-size:4rem;"><?= $cls['icon'] ?></span>
              <div class="class-name" style="font-size:1.4rem;"><?= $cls['name'] ?></div>
              <div class="class-label" style="color:var(--gold-light); margin-bottom:1rem;"><?= $cls['tagline'] ?></div>
              <div style="font-size:0.8rem; color:rgba(255,255,255,0.6); line-height:1.7;"><?= $cls['desc'] ?></div>
            </div>
            <a href="contact.php?class=<?= urlencode($cls['name']) ?>" class="btn-primary" style="margin-top:1.5rem; display:inline-flex;">
              📩 Enrol for <?= $cls['name'] ?>
            </a>
          </div>

          <!-- Right: Features + Subjects -->
          <div>
            <h3 style="font-size:1.3rem; font-weight:700; color:var(--gold-bright); margin-bottom:1.5rem;">
              What You'll Learn
            </h3>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:2rem;">
              <?php foreach ($cls['features'] as $feat): ?>
              <div class="feature-card" style="padding:1.25rem; text-align:left;">
                <div style="font-size:1.5rem; margin-bottom:.5rem;"><?= $feat['icon'] ?></div>
                <div class="feature-card-title" style="font-size:.9rem; margin-bottom:.35rem;"><?= $feat['title'] ?></div>
                <p class="feature-card-desc" style="font-size:.78rem;"><?= $feat['desc'] ?></p>
              </div>
              <?php endforeach; ?>
            </div>

            <div>
              <h4 style="font-size:.8rem; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--gold); margin-bottom:1rem;">
                Subjects Covered
              </h4>
              <div style="display:flex; gap:.6rem; flex-wrap:wrap;">
                <?php foreach ($cls['subjects'] as $sub): ?>
                <span style="padding:.3rem .8rem; background:rgba(212,160,23,0.12); border:1px solid rgba(212,160,23,0.25);
                             border-radius:50px; font-size:.72rem; font-weight:600; color:var(--gold-light);">
                  <?= $sub ?>
                </span>
                <?php endforeach; ?>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <?php endforeach; ?>
  </div>
</section>

<!-- Features -->
<section class="features-section">
  <div class="section-wrapper">
    <div class="section-header">
      <div class="section-eyebrow">All Classes Include</div>
      <h2 class="section-title">Our <span class="gold">Standard Benefits</span></h2>
      <div class="section-divider"></div>
    </div>
    <div class="features-grid">
      <div class="feature-card reveal">
        <div class="feature-card-icon">📋</div>
        <div class="feature-card-title">Study Materials</div>
        <p class="feature-card-desc">Comprehensive printed materials provided free with enrollment.</p>
      </div>
      <div class="feature-card reveal" style="transition-delay:.12s">
        <div class="feature-card-icon">👥</div>
        <div class="feature-card-title">Small Batches</div>
        <p class="feature-card-desc">Limited students per batch so every student gets personal attention.</p>
      </div>
      <div class="feature-card reveal" style="transition-delay:.24s">
        <div class="feature-card-icon">🏛️</div>
        <div class="feature-card-title">State Syllabus</div>
        <p class="feature-card-desc">Strictly follows Karnataka State Board (KSEEB) curriculum and exam pattern.</p>
      </div>
    </div>
  </div>
</section>

<?php include 'includes/footer.php'; ?>
