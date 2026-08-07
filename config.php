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
        'name' => 'Shishira Bhat',
        'designation' => 'Founder & CEO',
        'qualification' => 'M.Sc. (Physics), B.Ed.',
        'experience' => '16+ Years Experience',
        'subjects' => 'Physics (10th, 1st & 2nd PUC)',
        'image_url' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
        'image_bg' => 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        'avatar_initials' => 'SB',
        'linkedin_url' => 'https://linkedin.com',
        'bio' => 'Shishira Bhat is renowned for turning complex Physics concepts into intuitive visual stories. He has guided over 3,000+ students to achieve top scores in board examinations.',
        'quote' => 'Physics is not about memorizing formulas; it is about learning how to see the universe work.'
    ],
    [
        'id' => 2,
        'name' => 'Suraj Vijay Shetty',
        'designation' => 'Co-Founder & Director',
        'qualification' => 'M.Sc. (Mathematics), Gold Medalist',
        'experience' => '14+ Years Experience',
        'subjects' => 'Mathematics (8th, 9th, 10th & PUC)',
        'image_url' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
        'image_bg' => 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
        'avatar_initials' => 'SS',
        'linkedin_url' => 'https://linkedin.com',
        'bio' => 'Suraj Vijay Shetty specializes in building mental math agility, eliminating math phobia, and fostering problem-solving confidence among students.',
        'quote' => 'Mathematics is a language of logic. Once you grasp the basics, every problem has a key waiting to unlock it.'
    ],
    [
        'id' => 3,
        'name' => 'Dr. Vinay Kumar',
        'designation' => 'Chemistry Specialist',
        'qualification' => 'Ph.D. in Organic Chemistry',
        'experience' => '12+ Years Experience',
        'subjects' => 'Chemistry (9th, 10th, 1st & 2nd PUC)',
        'image_url' => 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
        'image_bg' => 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        'avatar_initials' => 'VK',
        'linkedin_url' => 'https://linkedin.com',
        'bio' => 'Dr. Vinay simplifies organic reaction mechanisms and chemical bonding using practical memory tricks and step-by-step reaction roadmaps.',
        'quote' => 'Understand the fundamental reactions, and Chemistry transforms from a challenge into your favorite subject.'
    ],
    [
        'id' => 4,
        'name' => 'Mrs. Archana K. Bhat',
        'designation' => 'Biology & Science Lead',
        'qualification' => 'M.Sc. (Botany & Zoology)',
        'experience' => '11+ Years Experience',
        'subjects' => 'Biology & Science (8th, 9th, 10th & PUC)',
        'image_url' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
        'image_bg' => 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
        'avatar_initials' => 'AB',
        'linkedin_url' => 'https://linkedin.com',
        'bio' => 'Mrs. Archana combines high-definition diagrammatic representations with memory techniques to help students achieve flawless scores in Biology.',
        'quote' => 'Clear diagrams and precise anatomical logic are the secrets to mastering life sciences.'
    ]
];
