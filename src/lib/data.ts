export const SITE = {
  name: "Pranamya Tutorials",
  tagline: "Strong Basics. Bright Future.",
  hero: "Build Today. Excel Tomorrow.",
  address: "#637/B, 1st K Block, E Block, Dr. Rajkumar Road, 2nd Stage, Rajajinagar, Bengaluru - 560010",
  phones: ["96865 75508", "96203 20309", "90087 35478"],
  phonesRaw: ["+919686575508", "+919620320309", "+919008735478"],
  email: "info@pranamyatutorials.in",
  mapQuery: "637/B 1st K Block Dr Rajkumar Road 2nd Stage Rajajinagar Bengaluru 560010",
};

export type ClassLevel = {
  slug: string;
  label: string;
  eyebrow: string;
  accent: string; // tailwind color token name
  hex: string;
  points: string[];
};

export const CLASSES: ClassLevel[] = [
  {
    slug: "8th-standard",
    label: "8th Standard",
    eyebrow: "Foundation",
    accent: "navy-800",
    hex: "#1c2a63",
    points: [
      "Concept clarity across every subject",
      "Regular tests to track progress early",
      "Homework support after school hours",
      "Strong foundation for board years ahead",
    ],
  },
  {
    slug: "9th-standard",
    label: "9th Standard",
    eyebrow: "Depth",
    accent: "sky-500",
    hex: "#2196c9",
    points: [
      "In-depth learning, not just textbook answers",
      "Doubt-solving sessions built into every week",
      "Regular tests with honest feedback",
      "Exam preparation that starts early",
    ],
  },
  {
    slug: "10th-standard",
    label: "10th Standard",
    eyebrow: "Board Focus",
    accent: "red-700",
    hex: "#b81d1d",
    points: [
      "Board exam focus from day one",
      "Important questions flagged and practiced",
      "Time-management drills for the exam hall",
      "Performance tracking parents can see",
    ],
  },
  {
    slug: "1st-puc",
    label: "1st PUC",
    eyebrow: "Building Up",
    accent: "gold-600",
    hex: "#c4790a",
    points: [
      "Concept building for a harder syllabus",
      "Problem-solving practice, not just theory",
      "Chapter-wise tests after every unit",
      "Exam-oriented preparation throughout the year",
    ],
  },
  {
    slug: "2nd-puc",
    label: "2nd PUC",
    eyebrow: "Board Ready",
    accent: "pink-500",
    hex: "#d63384",
    points: [
      "Advanced learning for the final stretch",
      "Previous year papers, worked through properly",
      "Full-length model tests under exam conditions",
      "Scoring strategies for every answer type",
    ],
  },
];

export const WHY_US = [
  {
    title: "Experienced faculties",
    detail: "Teachers who know the State, CBSE and ICSE syllabi inside out, and know how 8th graders and 2nd PUC students learn differently.",
  },
  {
    title: "Regular tests & performance analysis",
    detail: "No surprises before the board exam — every test result is tracked and discussed.",
  },
  {
    title: "Personal attention to every student",
    detail: "Batches are kept limited on purpose, so no one is just another face in the room.",
  },
  {
    title: "Focus on concepts, not just marks",
    detail: "Marks follow understanding. We teach the 'why', so it stays long after the exam.",
  },
];

export const FACTS = [
  { label: "Materials provided", detail: "All study material included" },
  { label: "Limited batch size", detail: "Small groups, real attention" },
  { label: "State, CBSE & ICSE", detail: "8th–10th across all three boards" },
];

// Options for the contact form's "Class interested in" dropdown.
// 8th–10th are offered across three boards; 1st/2nd PUC is State Board only.
export const CLASS_OPTIONS = [
  "8th State",
  "8th CBSE",
  "8th ICSE",
  "9th State",
  "9th CBSE",
  "9th ICSE",
  "10th State",
  "10th CBSE",
  "10th ICSE",
  "1st PUC",
  "2nd PUC",
  "Not sure yet",
];
