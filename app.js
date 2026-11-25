const courseData = {
  '8': { tag: 'CLASS 8 · STATE / CBSE / ICSE', title: 'A strong start changes everything.', description: 'Build a happy foundation in Mathematics, Science and Languages. We take each idea step by step, so confidence can grow right alongside curiosity.', points: ['Concept clarity', 'Chapter-wise tests', 'Homework support'] },
  '9': { tag: 'CLASS 9 · STATE / CBSE / ICSE', title: 'Grow your confidence, one idea at a time.', description: 'Connect the dots between what you know and what comes next. Thoughtful explanations and regular practice help you feel ready for the year ahead.', points: ['In-depth subject learning', 'Dedicated doubt solving', 'Weekly tests'] },
  '10': { tag: 'CLASS 10 / SSLC · STATE / CBSE / ICSE', title: 'Make board prep feel more doable.', description: 'Build a steady study rhythm with chapter practice, model papers and supportive guidance—so you can walk into exam day feeling prepared.', points: ['Board-focused practice', 'Model papers & blueprints', 'Time-management tips'] },
  '11': { tag: '1ST PUC · SCIENCE / COMMERCE', title: 'A new chapter. A stronger foundation.', description: 'Get comfortable with the concepts behind your PUC subjects. Learn to apply what you know and practise solving problems with purpose.', points: ['Science or Commerce', 'Concepts & application', 'Chapter-wise tests'] },
  '12': { tag: '2ND PUC · SCIENCE / COMMERCE', title: 'Keep your goals close. Keep practising.', description: 'Bring the pieces together with revision, past-paper practice and regular feedback as you prepare for your 2nd PUC board exams.', points: ['Science or Commerce', 'Past-paper revision', 'Full-length model tests'] }
};
const whatsapp = 'https://wa.me/919686575508?text=';
const options = [...document.querySelectorAll('.course-option')];
const detail = document.querySelector('.course-detail');
function selectCourse(key, focusTab = false) {
  const course = courseData[key];
  if (!course) return;
  options.forEach((button) => {
    const active = button.dataset.course === key;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
    button.setAttribute('tabindex', active ? '0' : '-1');
    if (active && focusTab) button.focus();
  });
  detail.classList.remove('panel-refresh');
  void detail.offsetWidth;
  detail.classList.add('panel-refresh');
  document.querySelector('#course-tag').textContent = course.tag;
  document.querySelector('#course-title').textContent = course.title;
  document.querySelector('#course-description').textContent = course.description;
  document.querySelector('#course-points').innerHTML = course.points.map((point) => `<span>✦ ${point}</span>`).join('');
  const label = key === '11' ? '1st PUC' : key === '12' ? '2nd PUC' : `Class ${key}`;
  const enquiry = document.querySelector('#course-enquiry');
  enquiry.href = '#contact';
  enquiry.innerHTML = `Ask us about ${label} <span>→</span>`;
}
options.forEach((button, index) => {
  button.addEventListener('click', () => selectCourse(button.dataset.course));
  button.addEventListener('keydown', (event) => {
    if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % options.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + options.length) % options.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = options.length - 1;
    selectCourse(options[next].dataset.course, true);
  });
});
selectCourse('8');

const faculty = [
  { name: 'Abhishek M R', designation: 'Founder & CEO', qualification: 'M.Com, (Ph.D.)', experience: '10+ years experience', subjects: 'Commerce · Class 10, 1st & 2nd PUC', image: 'assets/images/Abhishek.jpeg', alt: 'Abhishek M R, Founder and CEO of Pranamya Tutorials', bio: 'Abhishek M R is a Commerce educator with over 10 years of teaching experience. His published profile highlights practical examples and concept-driven learning across Accounting, Business Studies and Economics, helping students build confidence and work toward their academic goals.' },
  { name: 'Mohammad Rafi', designation: 'Professor', qualification: 'M.Sc, B.Ed, K-SET, K-TET', experience: '10+ years experience', subjects: 'Science · Physics, Chemistry & General Science', image: 'assets/images/Rafi.png', alt: 'Mohammad Rafi, Science professor at Pranamya Tutorials', bio: 'Mohammad Rafi has 10 years of teaching experience. His published profile describes clear, visual explanations of Science concepts, with a focus on helping students understand the ideas behind formulas in Physics, Chemistry and General Science.' },
  { name: 'Dr. Rajanna S', designation: 'Professor', qualification: 'M.A, Ph.D.', experience: '20+ years experience', subjects: 'Social Science · History, society & civics', image: 'assets/images/Rajanna.png', alt: 'Dr. Rajanna S, Social Science professor at Pranamya Tutorials', bio: 'Dr. Rajanna is an experienced Social Science educator with over 20 years of teaching experience. His published profile emphasizes making history, society and civics clear and relatable, using meaningful examples and critical thinking rather than rote memorization.' },
  { name: 'Nandini', designation: 'Professor', qualification: 'M.Com., (Ph.D)', experience: '10 years experience', subjects: 'Statistics', image: 'assets/images/Nandini.png', alt: 'Nandini, Statistics professor at Pranamya Tutorials', bio: 'Nandini has 10 years of teaching experience in Statistics. Her published profile highlights clear, practical explanations, strong fundamentals and analytical thinking to help students apply statistical methods and solve problems with confidence.' },
  { name: 'Shilpa', designation: 'Professor', qualification: 'M.Sc.', experience: '2 years experience', subjects: 'Mathematics', image: 'assets/images/Shilpa.png', alt: 'Shilpa, Mathematics professor at Pranamya Tutorials', bio: 'Shilpa is a Mathematics educator with 2 years of teaching experience. Her published profile focuses on strong fundamentals, step-by-step explanations and helping students approach challenging problems with clarity and confidence.' }
];
const facultyGrid = document.querySelector('#faculty-grid');
const facultyDialog = document.querySelector('#faculty-dialog');
const dialogClose = document.querySelector('#faculty-dialog-close');
function renderFaculty() {
  facultyGrid.innerHTML = faculty.map((person, index) => `
    <article class="mentor-card reveal" style="--mentor-accent:${['#f7c6a9', '#cfe6d8', '#d3e1fa', '#edd9b6', '#dfd0f4'][index]}">
      <button type="button" class="mentor-open" data-mentor-index="${index}" aria-haspopup="dialog" aria-label="View ${person.name}’s faculty profile">
        <span class="mentor-photo"><img src="${person.image}" alt="${person.alt}" loading="lazy" /><span class="mentor-experience">${person.experience}</span><span class="mentor-photo-arrow" aria-hidden="true">↗</span></span>
        <span class="mentor-card-copy"><span class="mentor-subject">${person.subjects.split(' · ')[0]}</span><b>${person.name}</b><small>${person.designation}</small><span class="mentor-link">Meet your mentor <span aria-hidden="true">→</span></span></span>
      </button>
    </article>`).join('');
  facultyGrid.querySelectorAll('.mentor-open').forEach((button) => button.addEventListener('click', () => openFaculty(Number(button.dataset.mentorIndex))));
}
function openFaculty(index) {
  const person = faculty[index];
  if (!person) return;
  document.querySelector('#faculty-dialog-name').textContent = person.name;
  document.querySelector('#dialog-role').textContent = person.designation;
  document.querySelector('#dialog-experience').textContent = person.experience;
  document.querySelector('#dialog-qualification').textContent = person.qualification;
  document.querySelector('#dialog-subjects').textContent = person.subjects;
  document.querySelector('#dialog-bio').textContent = person.bio;
  const portrait = document.querySelector('#dialog-portrait');
  portrait.src = person.image;
  portrait.alt = person.alt;
  facultyDialog.showModal();
  dialogClose.focus();
}
function closeFaculty() { if (facultyDialog.open) facultyDialog.close(); }
dialogClose.addEventListener('click', closeFaculty);
facultyDialog.addEventListener('click', (event) => { if (event.target === facultyDialog) closeFaculty(); });
document.querySelector('#dialog-ask').addEventListener('click', () => closeFaculty());
renderFaculty();

const quiz = [
  { subject: 'MATHS', question: 'If 3 notebooks cost ₹45, how much is one notebook?', answers: ['₹10', '₹15', '₹20'], correct: 1, win: 'That’s it! ₹45 shared equally between 3 is ₹15 each.' },
  { subject: 'SCIENCE', question: 'At sea level, what temperature does water freeze at?', answers: ['0°C', '10°C', '100°C'], correct: 0, win: 'You got it! At standard atmospheric pressure, water freezes at 0°C.' },
  { subject: 'LOGIC', question: 'What comes next: 2, 4, 8, 16…?', answers: ['24', '30', '32'], correct: 2, win: 'Exactly! The numbers double each time, so the next one is 32.' },
  { subject: 'MATHS', question: 'Which fraction is the same as one half?', answers: ['2/3', '3/6', '4/6'], correct: 1, win: 'That’s right! 3/6 simplifies to 1/2.' },
  { subject: 'GEOMETRY', question: 'Two angles in a triangle are 60° and 70°. What is the third?', answers: ['40°', '50°', '60°'], correct: 1, win: 'Perfect! Triangle angles add up to 180°, so the third angle is 50°.' }
];
let questionIndex = 0;
let questPoints = 0;
let currentStreak = 0;
let bestStreak = 0;
let answered = false;
function updateQuestStats() {
  document.querySelector('#xp-total').textContent = questPoints;
  document.querySelector('#streak-total').textContent = currentStreak;
  document.querySelector('#quest-level').textContent = questPoints >= 30 ? 'Curiosity star' : questPoints >= 10 ? 'Bright thinker' : 'Rookie';
  const track = document.querySelector('.quest-progress-track');
  track.setAttribute('aria-valuenow', questionIndex);
  document.querySelector('#quest-progress-fill').style.width = `${(questionIndex / quiz.length) * 100}%`;
}
function renderQuiz() {
  answered = false;
  const current = quiz[questionIndex];
  document.querySelector('.quiz-label').innerHTML = `<span>✳</span> CURIOSITY QUEST · ${current.subject}`;
  document.querySelector('#quiz-progress').textContent = `${String(questionIndex + 1).padStart(2, '0')} / ${String(quiz.length).padStart(2, '0')}`;
  document.querySelector('#quiz-question').textContent = current.question;
  const wrap = document.querySelector('#quiz-options');
  wrap.hidden = false;
  wrap.innerHTML = current.answers.map((answer, index) => `<button type="button" data-answer-index="${index}">${answer}</button>`).join('');
  document.querySelector('#quiz-feedback').textContent = 'Choose an answer—every try is a little progress.';
  document.querySelector('#quiz-feedback').className = 'quiz-feedback';
  document.querySelector('#quiz-next').hidden = true;
  document.querySelector('#quiz-complete').hidden = true;
  wrap.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => answerQuiz(Number(button.dataset.answerIndex))));
  updateQuestStats();
}
function answerQuiz(answerIndex) {
  if (answered) return;
  answered = true;
  const current = quiz[questionIndex];
  const feedback = document.querySelector('#quiz-feedback');
  const buttons = [...document.querySelectorAll('#quiz-options button')];
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === current.correct) button.classList.add('correct');
    else if (index === answerIndex) button.classList.add('incorrect');
  });
  if (answerIndex === current.correct) {
    questPoints += 10;
    currentStreak += 1;
    bestStreak = Math.max(bestStreak, currentStreak);
    feedback.textContent = `+10 stars! ${current.win}`;
    feedback.className = 'quiz-feedback success';
  } else {
    currentStreak = 0;
    feedback.textContent = `Good try—your streak starts fresh. ${current.win}`;
    feedback.className = 'quiz-feedback encourage';
  }
  questionIndex += 1;
  updateQuestStats();
  if (questionIndex < quiz.length) document.querySelector('#quiz-next').hidden = false;
  else {
    document.querySelector('#quiz-options').hidden = true;
    const allCorrect = questPoints === quiz.length * 10;
    document.querySelector('#quest-result-title').textContent = allCorrect ? 'Curiosity Champion!' : 'Quest complete!';
    document.querySelector('#quest-result-copy').textContent = `You earned ${questPoints} stars and a ${bestStreak}-answer best streak. ${allCorrect ? 'You unlocked the gold star badge.' : 'You unlocked the curious explorer badge.'}`;
    document.querySelector('#quiz-complete').hidden = false;
  }
}
document.querySelector('#quiz-next').addEventListener('click', () => { renderQuiz(); document.querySelector('#quiz-question').focus?.(); });
document.querySelector('#quiz-again').addEventListener('click', () => { questionIndex = 0; questPoints = 0; currentStreak = 0; bestStreak = 0; renderQuiz(); });
renderQuiz();

/* Testimonial sample data and carousel are disabled until real feedback is approved.
const stories = [
  { quote: '“Step-by-step explanations make it feel easier to try a question I used to skip.”', grade: 'Class 10 · illustrative preview' },
  { quote: '“Having space to ask questions helps the lesson make more sense to me.”', grade: 'Class 9 · illustrative preview' },
  { quote: '“Practising a little at a time makes a big chapter feel more manageable.”', grade: '1st PUC · illustrative preview' }
];
let storyIndex = 0;
function renderStory(index) {
  storyIndex = (index + stories.length) % stories.length;
  const story = stories[storyIndex];
  document.querySelector('#story-quote').textContent = story.quote;
  document.querySelector('#story-grade').textContent = story.grade;
  document.querySelector('#story-index').textContent = `${String(storyIndex + 1).padStart(2, '0')} / ${String(stories.length).padStart(2, '0')}`;
  document.querySelector('#story-avatar').textContent = String(storyIndex + 1);
  document.querySelectorAll('.story-dot').forEach((button, index) => {
    button.classList.toggle('active', index === storyIndex);
    button.setAttribute('aria-pressed', String(index === storyIndex));
  });
}
document.querySelector('#story-prev').addEventListener('click', () => renderStory(storyIndex - 1));
document.querySelector('#story-next').addEventListener('click', () => renderStory(storyIndex + 1));
document.querySelector('#story-dots').innerHTML = stories.map((_, index) => `<button type="button" class="story-dot${index === 0 ? ' active' : ''}" aria-label="Show sample story ${index + 1}" aria-pressed="${index === 0}" data-story-index="${index}"></button>`).join('');
document.querySelectorAll('.story-dot').forEach((button) => button.addEventListener('click', () => renderStory(Number(button.dataset.storyIndex))));
*/

const galleryDialog = document.querySelector('#gallery-dialog');
const galleryPhotoOpeners = document.querySelectorAll('[data-gallery-photo]');
const galleryDialogImage = galleryDialog.querySelector('img');
const galleryDialogTitle = document.querySelector('#gallery-dialog-title');
const galleryDialogClose = document.querySelector('#gallery-dialog-close');
galleryDialogClose.setAttribute('aria-label', 'Close gallery photo');
galleryPhotoOpeners.forEach((button) => {
  button.addEventListener('click', () => {
    const photo = button.querySelector('img');
    galleryDialogImage.src = photo.getAttribute('src');
    galleryDialogImage.alt = photo.alt;
    galleryDialogTitle.textContent = button.dataset.galleryCaption;
    galleryDialog.showModal();
  });
});
galleryDialogClose.addEventListener('click', () => galleryDialog.close());
galleryDialog.addEventListener('click', (event) => {
  if (event.target === galleryDialog) galleryDialog.close();
});

const form = document.querySelector('#enquiry-form');
if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const status = document.querySelector('#form-status');
    const studentName = form.elements.student_name.value.trim();
    const course = form.elements.course.value.trim();
    const phone = form.elements.phone.value.trim();
    let finderDetails = '';
    try {
      const savedFinder = sessionStorage.getItem('pranamyaCourseFinderEnquiry');
      if (savedFinder) {
        const details = JSON.parse(savedFinder);
        if (details.class && details.boardOrStream && details.subjects && details.goal) {
          finderDetails = `\n\nCourse finder suggestion:\nClass: ${details.class}\nBoard/stream: ${details.boardOrStream}\nSubject interests: ${details.subjects}\nGoal: ${details.goal}`;
        }
        sessionStorage.removeItem('pranamyaCourseFinderEnquiry');
      }
    } catch (error) {
      finderDetails = '';
    }
    const message = `Hi, I’d like to enquire about a free demo at Pranamya Tutorials.\n\nStudent’s name: ${studentName}\nInterested in: ${course}\nParent’s phone number: ${phone}${finderDetails}`;
    status.textContent = 'Opening WhatsApp with your enquiry. Please review the message there and tap Send to submit it.';
    window.location.href = `https://wa.me/919686575508?text=${encodeURIComponent(message)}`;
  });
}

let revealObserver;
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealObserver = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      activeObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}


// Course finder: a short, responsive guide that recommends a discussion starter—not a placement.
const finder = {
  step: 0,
  answers: { level: '', pathway: '', subjects: [], goal: '' }
};
const finderSteps = [
  { key: 'level', title: 'What class are you in?', hint: 'Choose the class you’re studying now.', kind: 'single', options: [
    { value: '8', label: 'Class 8', detail: 'Build the basics' },
    { value: '9', label: 'Class 9', detail: 'Grow your confidence' },
    { value: '10', label: 'Class 10 / SSLC', detail: 'Get board-ready' },
    { value: '11', label: '1st PUC', detail: 'Choose your stream' },
    { value: '12', label: '2nd PUC', detail: 'Keep exam goals close' }
  ] },
  { key: 'pathway', title: 'Which board or stream?', hint: 'We’ll shape the suggestion around your current path.', kind: 'single', options: [] },
  { key: 'subjects', title: 'What would you like to focus on?', hint: 'Pick one or more interests. You can change them later.', kind: 'multiple', options: [] },
  { key: 'goal', title: 'What would you most like help with?', hint: 'There’s no wrong answer—this just helps us tailor the next step.', kind: 'single', options: [
    { value: 'strong-basics', label: 'Build strong basics', detail: 'Get comfortable with the concepts' },
    { value: 'exam-prep', label: 'Prepare for exams', detail: 'Practise, revise and feel ready' },
    { value: 'challenge', label: 'Take on a challenge', detail: 'Go deeper and stretch my skills' }
  ] }
];
const finderPanel = document.querySelector('#finder-panel');
if (finderPanel) {
  const finderQuestion = document.querySelector('#finder-question');
  const finderHint = document.querySelector('#finder-hint');
  const finderOptions = document.querySelector('#finder-options');
  const finderBack = document.querySelector('#finder-back');
  const finderNext = document.querySelector('#finder-next');
  const finderFeedback = document.querySelector('#finder-feedback');
  const finderQuestionBlock = document.querySelector('#finder-question-block');
  const finderResult = document.querySelector('#finder-result');
  const finderProgress = document.querySelector('.finder-progress');
  function finderStepOptions(index) {
    if (index === 1) {
      return finder.answers.level === '11' || finder.answers.level === '12'
        ? [
          { value: 'Science', label: 'Science', detail: 'Explore science subjects' },
          { value: 'Commerce', label: 'Commerce', detail: 'Explore commerce subjects' }
        ]
        : ['Karnataka State', 'CBSE', 'ICSE'].map((board) => ({ value: board, label: board, detail: board === 'Karnataka State' ? 'Karnataka State syllabus' : `${board} syllabus` }));
    }
    if (index === 2) {
      if (finder.answers.level === '11' || finder.answers.level === '12') {
        return finder.answers.pathway === 'Science'
          ? [
            { value: 'Physics & Chemistry', label: 'Physics & Chemistry', detail: 'Understand the ideas behind the formulas' },
            { value: 'Mathematics', label: 'Mathematics', detail: 'Practise methods and problem-solving' },
            { value: 'Biology', label: 'Biology', detail: 'Explore living systems and concepts' },
            { value: 'Computer Science', label: 'Computer Science', detail: 'Build logical and coding foundations' }
          ]
          : [
            { value: 'Accountancy', label: 'Accountancy', detail: 'Build confidence with accounts' },
            { value: 'Business Studies', label: 'Business Studies', detail: 'Understand organisations and decisions' },
            { value: 'Economics', label: 'Economics', detail: 'Connect concepts with everyday life' },
            { value: 'Statistics', label: 'Statistics', detail: 'Turn data into understanding' }
          ];
      }
      return [
        { value: 'Mathematics', label: 'Mathematics', detail: 'Build step-by-step problem-solving' },
        { value: 'Science', label: 'Science', detail: 'Make concepts clear and visual' },
        { value: 'English & Languages', label: 'English & Languages', detail: 'Practise communication and comprehension' },
        { value: 'Social Science', label: 'Social Science', detail: 'Explore history, society and civics' }
      ];
    }
    return finderSteps[index].options;
  }
  function finderRender() {
    const step = finderSteps[finder.step];
    const options = finderStepOptions(finder.step);
    const selected = finder.answers[step.key];
    finderQuestion.textContent = step.title;
    finderHint.textContent = step.hint;
    document.querySelector('#finder-step-label').textContent = `STEP ${finder.step + 1} OF 4`;
    document.querySelector('#finder-progress-fill').style.width = `${((finder.step + 1) / finderSteps.length) * 100}%`;
    finderProgress.setAttribute('aria-valuenow', String(finder.step + 1));
    finderOptions.setAttribute('aria-label', step.title);
    finderOptions.innerHTML = options.map((option) => {
      const active = step.kind === 'multiple' ? selected.includes(option.value) : selected === option.value;
      return `<button type="button" class="finder-option${active ? ' selected' : ''}" data-finder-value="${option.value}" aria-pressed="${active}"><span class="finder-option-copy"><b>${option.label}</b><small>${option.detail}</small></span><span class="finder-option-mark" aria-hidden="true">${active ? '✓' : '＋'}</span></button>`;
    }).join('');
    finderOptions.querySelectorAll('.finder-option').forEach((button) => button.addEventListener('click', () => {
      const value = button.dataset.finderValue;
      if (step.kind === 'multiple') {
        const interests = finder.answers.subjects;
        finder.answers.subjects = interests.includes(value) ? interests.filter((item) => item !== value) : [...interests, value];
      } else {
        if (step.key === 'level' && finder.answers.level !== value) {
          finder.answers.pathway = '';
          finder.answers.subjects = [];
        }
        if (step.key === 'pathway' && finder.answers.pathway !== value) finder.answers.subjects = [];
        finder.answers[step.key] = value;
      }
      finderFeedback.textContent = step.kind === 'multiple'
        ? `${finder.answers.subjects.length} interest${finder.answers.subjects.length === 1 ? '' : 's'} selected.`
        : `${value} selected.`;
      finderRender();
      const selectedButton = [...finderOptions.querySelectorAll('.finder-option')].find((item) => item.dataset.finderValue === value);
      selectedButton?.focus();
    }));
    finderBack.disabled = finder.step === 0;
    finderNext.disabled = step.kind === 'multiple' ? finder.answers.subjects.length === 0 : !selected;
    finderNext.innerHTML = finder.step === finderSteps.length - 1 ? 'See my suggestion <span>→</span>' : 'Next <span>→</span>';
    finderFeedback.textContent = step.kind === 'multiple' && selected.length ? `${selected.length} interest${selected.length === 1 ? '' : 's'} selected.` : '';
  }
  function finderGoalCopy() {
    if (finder.answers.goal === 'exam-prep') return 'A steady revision rhythm, syllabus-focused practice and timed questions could be a helpful place to begin.';
    if (finder.answers.goal === 'challenge') return 'Worked examples followed by stretch questions can help deepen understanding and build problem-solving confidence.';
    return 'Clear explanations, strong fundamentals and regular guided practice can help make the next topics feel more manageable.';
  }
  function finderShowResult() {
    const grade = finder.answers.level === '11' ? '1st PUC' : finder.answers.level === '12' ? '2nd PUC' : `Class ${finder.answers.level}`;
    const focus = finder.answers.subjects.join(', ');
    const pathLabel = finder.answers.level === '11' || finder.answers.level === '12' ? `${finder.answers.pathway} stream` : `${finder.answers.pathway} board`;
    document.querySelector('#finder-result-title').textContent = `${grade} · ${finder.answers.pathway}`;
    document.querySelector('#finder-result-copy').textContent = `Explore ${focus} in the ${pathLabel} as a starting point. ${finderGoalCopy()} A tutor can help confirm the most suitable subject plan with you.`;
    const tags = [grade, pathLabel, ...finder.answers.subjects];
    document.querySelector('#finder-result-tags').innerHTML = tags.map((tag) => `<span>${tag}</span>`).join('');
    const goalNames = { 'strong-basics': 'build strong basics', 'exam-prep': 'prepare for exams', challenge: 'take on a challenge' };
    const enquiryLink = document.querySelector('#finder-enquiry');
    enquiryLink.href = '#contact';
    enquiryLink.onclick = () => {
      try {
        sessionStorage.setItem('pranamyaCourseFinderEnquiry', JSON.stringify({
          class: grade,
          boardOrStream: finder.answers.pathway,
          subjects: focus,
          goal: goalNames[finder.answers.goal]
        }));
      } catch (error) {
        // Keep navigation working if browser storage is unavailable.
      }
    };
    finderQuestionBlock.hidden = true;
    finderResult.hidden = false;
    document.querySelector('#finder-result-title').focus();
  }
  finderNext.addEventListener('click', () => {
    const step = finderSteps[finder.step];
    if (step.kind === 'multiple' ? finder.answers.subjects.length === 0 : !finder.answers[step.key]) {
      finderFeedback.textContent = 'Choose at least one option to continue.';
      return;
    }
    if (finder.step === finderSteps.length - 1) finderShowResult();
    else {
      finder.step += 1;
      finderFeedback.textContent = '';
      finderRender();
      finderQuestion.focus();
    }
  });
  finderBack.addEventListener('click', () => {
    if (finder.step === 0) return;
    finder.step -= 1;
    finderFeedback.textContent = '';
    finderRender();
    finderQuestion.focus();
  });
  document.querySelector('#finder-restart').addEventListener('click', () => {
    try { sessionStorage.removeItem('pranamyaCourseFinderEnquiry'); } catch (error) {}
    finder.step = 0;
    finder.answers = { level: '', pathway: '', subjects: [], goal: '' };
    finderResult.hidden = true;
    finderQuestionBlock.hidden = false;
    finderRender();
    finderQuestion.focus();
  });
  finderRender();
}
