<?php
/**
 * Configuration & Metadata for Pranamya Tutorials
 */

define('SITE_NAME', 'Pranamya Tutorials');
define('SITE_KANNADA_NAME', 'ಪ್ರಣಮ್ಯ ಟ್ಯೂಟೋರಿಯಲ್ಸ್');
define('SITE_TAGLINE', 'Strong Basics. Bright Future. Inspiring Young Minds.');
define('SITE_HEADLINE', 'BUILD TODAY EXCEL TOMORROW');
define('INSTITUTE_TYPE', 'Private Coaching Institute');

// Contact Information
define('PRIMARY_PHONE', '9686575508');
define('PHONE_1', '96865 75508');
define('PHONE_2', '96203 20309');
define('PHONE_3', '90087 35478');
define('INSTITUTE_EMAIL', 'pranamyatutorials@gmail.com');

// Address Information
define('ADDRESS_STREET', '#637/B, 1st K Block, E Block, Dr. Rajkumar Road, 2nd Stage');
define('ADDRESS_AREA', 'Rajajinagar');
define('ADDRESS_CITY', 'Bengaluru');
define('ADDRESS_PINCODE', '560010');
define('FULL_ADDRESS', '#637/B, 1st K Block, E Block, Dr. Rajkumar Road, 2nd Stage, Rajajinagar, Bengaluru – 560010');
define('GOOGLE_MAPS_LINK', 'https://maps.google.com/?q=637/B,+1st+K+Block,+Dr+Rajkumar+Rd,+Rajajinagar,+Bengaluru,+Karnataka+560010');

// WhatsApp Link
define('WHATSAPP_NUMBER', '919686575508');
define('WHATSAPP_PREFILLED_MSG', 'Hi, I am interested to know more about Pranamya Tutorials.');
define('WHATSAPP_LINK', 'https://wa.me/' . WHATSAPP_NUMBER . '?text=' . urlencode(WHATSAPP_PREFILLED_MSG));

// Course Offerings Data
$courses = [
    [
        'id' => '8th-std',
        'title' => '8th Standard',
        'kannada_title' => '8 ನೇ ತರಗತಿ',
        'badge' => 'State Syllabus',
        'color_gradient' => 'from-blue-600 to-indigo-700',
        'bg_light' => '#EEF2FF',
        'accent' => '#3B82F6',
        'features' => [
            'Concept Clarity & Foundation',
            'Regular Chapterwise Tests',
            'Daily Homework Support',
            'Strong Academic Foundation'
        ],
        'description' => 'Targeted guidance for 8th grade students to master fundamentals in Mathematics, Science & Languages with zero exam stress.'
    ],
    [
        'id' => '9th-std',
        'title' => '9th Standard',
        'kannada_title' => '9 ನೇ ತರಗತಿ',
        'badge' => 'State Syllabus',
        'color_gradient' => 'from-cyan-600 to-teal-700',
        'bg_light' => '#ECFEFF',
        'accent' => '#06B6D4',
        'features' => [
            'In-depth Subject Learning',
            'Dedicated Doubt Solving',
            'Weekly Performance Tests',
            'Early SSLC Exam Prep'
        ],
        'description' => 'Comprehensive coverage bridging middle school concepts to board exam readiness with step-by-step problem solving.'
    ],
    [
        'id' => '10th-std',
        'title' => '10th Standard (SSLC)',
        'kannada_title' => '10 ನೇ ತರಗತಿ (SSLC)',
        'badge' => 'Board Exam Special',
        'color_gradient' => 'from-red-600 to-rose-800',
        'bg_light' => '#FFF1F2',
        'accent' => '#E11D48',
        'features' => [
            'SSLC Board Exam Focus',
            'Important Questions & Blueprints',
            'Time Management Strategies',
            'Continuous Performance Tracking'
        ],
        'description' => 'Rigorous board preparation with model papers, chapter test series, and individualized feedback for distinction scores.'
    ],
    [
        'id' => '1st-puc',
        'title' => '1st PUC',
        'kannada_title' => '1 ನೇ ಪಿಯುಸಿ',
        'badge' => 'Science & Commerce',
        'color_gradient' => 'from-amber-500 to-orange-700',
        'bg_light' => '#FFFBEB',
        'accent' => '#F59E0B',
        'features' => [
            'Concept Building & Application',
            'Problem Solving Mastery',
            'Chapterwise Test Series',
            'Exam Oriented Preparation'
        ],
        'description' => 'Deep conceptual coaching for PCMB / Commerce subjects transitioning students smoothly into pre-university excellence.'
    ],
    [
        'id' => '2nd-puc',
        'title' => '2nd PUC',
        'kannada_title' => '2 ನೇ ಪಿಯುಸಿ',
        'badge' => 'Board & Competitive Focus',
        'color_gradient' => 'from-fuchsia-600 to-purple-800',
        'bg_light' => '#FDF4FF',
        'accent' => '#C026D3',
        'features' => [
            'Advanced Subject Learning',
            'Previous Year Question Papers',
            'Full Length Model Tests',
            'Scoring Strategies & Tips'
        ],
        'description' => 'Mastery program designed for top ranks in 2nd PUC Board exams with regular mock tests and past paper revisions.'
    ]
];

// Why Choose Us Items
$why_us_items = [
    [
        'num' => '01',
        'title' => 'Experienced Faculties',
        'desc' => 'Seasoned educators with over 12+ years of expertise in State Board curriculum delivering clear, concise explanations.',
        'icon' => 'user-check'
    ],
    [
        'num' => '02',
        'title' => 'Regular Tests & Analysis',
        'desc' => 'Weekly unit tests, monthly grand tests, and detailed progress analytics shared regularly with parents.',
        'icon' => 'bar-chart-3'
    ],
    [
        'num' => '03',
        'title' => 'Personal Attention',
        'desc' => 'Strict student-to-teacher ratio ensuring every child receives individualized doubt clearing and guidance.',
        'icon' => 'heart-handshake'
    ],
    [
        'num' => '04',
        'title' => 'Concepts over Rote Learning',
        'desc' => 'Interactive teaching method focused on deep understanding, logical reasoning, and real-world applications.',
        'icon' => 'brain-circuit'
    ],
    [
        'num' => '05',
        'title' => 'Materials Provided',
        'desc' => 'Exhaustive notes, chapterwise question banks, formula sheets, and past year solutions provided to every student.',
        'icon' => 'book-open'
    ],
    [
        'num' => '06',
        'title' => 'Limited Batch Sizes',
        'desc' => 'Small batch capacity guaranteeing focused study environment, quiet discipline, and active classroom participation.',
        'icon' => 'users-round'
    ]
];

// Faculty Members
$faculty_members = [
    [
        'id' => 1,
        'name' => 'Abhishek M R',
        'designation' => 'Founder & CEO',
        'qualification' => 'M.Com, (Ph.D.)',
        'experience' => '16+ Years Experience',
        'subjects' => 'Commerce (10th, 1st & 2nd PUC)',
        'image_url' => 'assets/images/Abhishek.jpeg',
        'image_bg' => 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        'avatar_initials' => 'AM',
        'linkedin_url' => 'https://linkedin.com',
        'bio' => 'Abhishek M R is a passionate Commerce educator with over 16 years of teaching experience. He is known for simplifying Accounting, Business Studies, and Economics through practical examples and concept-driven learning, helping students build confidence and achieve excellent academic results.',
        'quote' => 'At Pranamya Tutorials, we believe that education is the most powerful tool for shaping a student\'s future. Our mission is to provide quality education, strengthen conceptual understanding, and inspire confidence in every learner. We focus on building strong fundamentals, encouraging consistent practice, and supporting the overall development of each student. Our dedicated approach ensures that students are well-prepared not only for board examinations but also for future academic and professional success.'
    ],
    [
        'id' => 2,
        'name' => 'Mohammad Rafi',
        'designation' => 'Co-Founder & Director',
        'qualification' => 'M.Sc, B.Ed, K-SET, K-TET',
        'experience' => '15+ Years Experience',
        'subjects' => 'Science Faculty',
        'image_url' => 'assets/images/Rafi.png',
        'image_bg' => 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
        'avatar_initials' => 'MR',
        'linkedin_url' => 'https://linkedin.com',
        'bio' => 'Mohammad Rafi is renowned for transforming abstract Science concepts into clear, visual explanations. With 15 years of experience, he specializes in making Physics and Chemistry intuitive, ensuring students don\'t just memorize formulas—they understand the logic behind them.',
        'quote' => 'At Pranamya Tutorials, we believe that science is not just about learning formulas and facts—it\'s about understanding the world through curiosity, observation, and logical thinking. Our goal is to make every concept in Physics, Chemistry, and General Science simple, engaging, and easy to understand.'
    ]
];
