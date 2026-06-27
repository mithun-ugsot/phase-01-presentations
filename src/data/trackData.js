export const APPROACH_PILLARS = [
  {
    id: 'curriculum',
    title: 'World-Class Curriculum',
    summary: 'Industry-aligned syllabus, updated every cycle.',
    icon: '◈',
  },
  {
    id: 'projects',
    title: 'Project-Based Learning',
    summary: '136+ hands-on projects across the track.',
    icon: '⬡',
  },
  {
    id: 'day-one',
    title: 'Developers from Day One',
    summary: 'Git, terminals, and real workflows from week one.',
    icon: '▣',
  },
  {
    id: 'problem-solution',
    title: 'Problem → Solution',
    summary: 'Structured thinking before structured code.',
    icon: '↝',
  },
  {
    id: 'opensource',
    title: 'Open Source Culture',
    summary: 'Contribute, collaborate, and build in public.',
    icon: '◎',
  },
  {
    id: 'competitive',
    title: 'Competitive Knowledge',
    summary: 'Hackathons, challenges, and peer benchmarks.',
    icon: '⚑',
  },
  {
    id: 'industry-doing',
    title: 'Learning with Industry',
    summary: 'Build alongside professionals on real scenarios.',
    icon: '⬢',
  },
  {
    id: 'collaborations',
    title: 'Industry Collaborations',
    summary: 'Learn from engineers who have cracked it at scale.',
    icon: '⬤',
  },
  {
    id: 'research',
    title: 'Research & Startup Labs',
    summary: 'Workshops oriented toward innovation and ventures.',
    icon: '✦',
  },
  {
    id: 'mentorship',
    title: 'Mentorship & Reviews',
    summary: 'Structured code reviews and continuous feedback.',
    icon: '◉',
  },
]

export const CAMPUSES = [
  {
    id: 'bangalore',
    city: 'Bangalore',
    lead: 'Mithun',
    members: [
      { name: 'Sovik', role: 'Trainer' },
      { name: 'Karishma', role: 'Trainer' },
      { name: 'Jayprasad', role: 'Trainer' },
      { name: 'Arpit', role: 'Trainer' },
    ],
  },
  {
    id: 'pune',
    city: 'Pune',
    lead: 'Rahul',
    members: [
      { name: 'Dristi', role: 'Trainer' },
      { name: 'Deepak', role: 'Trainer' },
      { name: 'SP Archarya', role: 'Trainer' },
      { name: 'Pankaj Kandpal', role: 'Trainer' },
    ],
  },
]

export const SEMESTERS = [
  {
    id: 'sem1',
    label: 'Sem 01',
    title: 'Web Foundations',
    projects: 36,
    topics: ['Basics of Web', 'Linux', 'HTML', 'CSS', 'Tailwind CSS'],
    color: '#1d4ed8',
  },
  {
    id: 'sem2',
    label: 'Sem 02',
    title: 'Frontend Engineering',
    projects: 40,
    topics: ['JavaScript', 'React JS', 'BaaS', 'Redux'],
    color: '#2563eb',
  },
  {
    id: 'sem3',
    label: 'Sem 03',
    title: 'Backend & Data',
    projects: 30,
    topics: ['Databases', 'Node JS', 'Express JS', 'MySQL', 'MongoDB'],
    color: '#3b82f6',
  },
  {
    id: 'sem6',
    label: 'Sem 06',
    title: 'DevOps & Cloud',
    projects: 30,
    topics: [
      'DevOps',
      'Cloud Computing',
      'Containerisation',
      'AWS',
      'CI/CD',
      'Logging',
      'Infra Management',
      'SRE',
      'Chaos Engineering',
    ],
    color: '#60a5fa',
  },
]

export const SEM1_PROJECTS = {
  label: 'Sem 01',
  title: 'Web Foundations',
  topics: ['HTML', 'CSS', 'Tailwind CSS', 'Responsive UI'],
  featured: [
    { name: 'Zomato UI Clone', image: '/projects/zomato-clone.png' },
    { name: 'Linkedin Landing Page', image: '/projects/linkedin-landing.png' },
    { name: 'Personal Portfolio Page', image: '/projects/portfolio-page.png' },
    { name: 'Chatgpt UI Clone', image: '/projects/chatgpt-clone.png' },
    { name: 'Ecommerce Page', image: '/projects/ecommerce-page.png' },
    { name: 'Gmail UI clone', image: '/projects/gmail-clone.png' },
  ],
  names: [
    'Building A TimeTable Using HTML Tables',
    'News Website',
    'Tribute Page',
    'Restaurant Menu',
    'Personal Portfolio Page',
    'Event Invitation Page',
    'My Movie Gallery',
    'Local Music Festival Schedule Page',
    'Personal Habit Tracker Dashboard',
    'Classic Video Game Walkthrough & FAQ Page',
    'College / School Website',
    'Charity Campaign Page',
    'Student Registration System',
    'Digital Magazine Front Page',
    'Interactive Trip Itinerary',
    'Professional API Documentation Site',
    'Build the Anatomy of a SaaS Landing Page',
    'Contact Us Page',
    'Questionnaire',
    'CSS multipage website',
    'HTML CSS Navbar with Dropdown',
    'One card UI CSS',
    'Build Styled Forms',
    'Responsive Organization Chart',
    'Zomato UI Clone',
    'Parallax website',
    'Redbus Clone',
    'Chatgpt UI Clone',
    'Technical documentation page',
    'Linkedin Landing Page',
    'Youtube Landing Page',
    'Slack Landing Page',
    'Leetcode Home Page clone',
    'Gmail UI clone',
    'Ecommerce Page',
    'Food Delivery App',
  ],
}

export const SEM2_PROJECTS = {
  label: 'Sem 02',
  title: 'Frontend Engineering',
  topics: ['JavaScript', 'React', 'BaaS', 'Redux', 'AI Apps'],
  featured: [
    { name: 'Travel Itinerary Planner', image: '/projects/sem2-travel-itinerary.png' },
    { name: 'CineVerse (Movie Website)', image: '/projects/sem2-cineverse.png' },
    {
      name: 'CodeTutor AI – Interactive Coding Problem Assistant',
      image: '/projects/sem2-codetutor-ai.png',
    },
    { name: 'Gym Workout Tracker', image: '/projects/sem2-gym-tracker.png' },
    { name: 'Agri-AI – Smart Crop Advisor', image: '/projects/sem2-agri-ai.png' },
    {
      name: 'Global Market Snapshot – AI Financial Dashboard',
      image: '/projects/sem2-financial-dashboard.png',
    },
  ],
  names: [
    'Student Result Calculator',
    'Flight Booking System',
    'Restaurant Order Total',
    'Form Validation and Data Extraction',
    'Password Strength Checker',
    'Personal Expense Tracker',
    'Currency Converter',
    'Bill Calculator',
    'Rock, Paper, Scissors Game',
    'Simple Encryption/Decryption Tool (Caesar Cipher)',
    'Search Highlight',
    'Toast Notification',
    'Show My Location App',
    "Chrome's T-Rex Runner Game",
    'Customizable Pomodoro Timer',
    'Card-Matching Memory Game',
    'Interactive FAQ Accordion',
    'Real-Time Search Filter',
    'Gym Workout Tracker',
    'Travel Itinerary Planner',
    'Movie Ticket Booking System with Discounts',
    'Weather Alert & Advice System',
    'Library Management App',
    'Virtual Wardrobe Organizer',
    'Simple To-Do List',
    'Multi-Step Contact Form (React 19 Actions)',
    'Mini E-Commerce Product Filter',
    'Persistent Wishlist',
    'E-commerce Shopping Cart (Redux)',
    'Global User Authentication Context',
    'CineVerse (Movie Website)',
    'Movie Discovery Website',
    'Recipe Finder App',
    'News Aggregator',
    'AI Chatbot',
    'CodeTutor AI – Interactive Coding Problem Assistant',
    'Agri-AI – Smart Crop Advisor',
    'Global Market Snapshot – AI Financial Dashboard',
    'Atlas – Collaborative AI Trip Planner',
    'GainsAI – Personalized Fitness Architect',
  ],
}

export const YEAR_ONE_CAPSTONES = {
  label: 'Year 01',
  title: 'Capstone Projects',
  subtitle: '4 advanced integration builds for Year 1',
  projects: [
    {
      id: 'flight-booking',
      name: 'Online Reporting & Flight Booking Platform',
      status: 'upcoming',
      summary: 'Unified reporting dashboards with end-to-end flight booking flows.',
      image: '/projects/capstone-flight-booking.png',
    },
    {
      id: 'dynamic-ui',
      name: 'Dynamic UI with JSON Configs',
      status: 'in_progress',
      summary: 'Schema-driven interfaces rendered from JSON configuration.',
      image: '/projects/capstone-dynamic-ui.png',
    },
    {
      id: 'payment-processor',
      name: 'Distributed Payment Processor with Webhook Retry',
      status: 'upcoming',
      summary: 'Resilient payments with webhook retries and failure recovery.',
      image: '/projects/capstone-payment-processor.png',
    },
    {
      id: 'api-gateway',
      name: 'API Gateway: Rate Limiting & Circuit Breaker',
      status: 'upcoming',
      summary: 'Gateway layer with rate limits, circuit breaking, and observability.',
      image: '/projects/capstone-api-gateway.png',
    },
  ],
}

export const TOTAL_PROJECTS = SEMESTERS.reduce((sum, s) => sum + s.projects, 0)

export const CAREER_TRACKS = {
  core: {
    id: 'core',
    title: 'Core Development',
    tagline: 'Industry Employment',
    summary: 'Internships & full-time career readiness.',
    outcomes: ['Internships', 'Full-Time Roles', 'Placement Pipeline'],
    color: '#1d4ed8',
    light: '#dbeafe',
    position: 'center',
  },
  openSource: {
    id: 'openSource',
    title: 'Open Source',
    tagline: 'Core + OSS Excellence',
    summary: 'GSoC, MLH Fellowship & global OSS contributions.',
    outcomes: ['GSoC', 'MLH Fellowship', 'OSS Portfolio'],
    color: '#059669',
    light: '#d1fae5',
    position: 'top-left',
  },
  startup: {
    id: 'startup',
    title: 'Startup',
    tagline: 'Core + Entrepreneurship',
    summary: 'Product & service ventures, plus freelance opportunities.',
    outcomes: ['Product Startups', 'Service Ventures', 'Freelancing'],
    color: '#d97706',
    light: '#fef3c7',
    position: 'top-right',
  },
  research: {
    id: 'research',
    title: 'Research',
    tagline: 'Core + Innovation',
    summary: 'Research papers, labs, and deep technical exploration.',
    outcomes: ['Research Labs', 'Publications', 'Tech Innovation'],
    color: '#7c3aed',
    light: '#ede9fe',
    position: 'bottom-left',
  },
  higherStudies: {
    id: 'higherStudies',
    title: 'Higher Studies',
    tagline: 'Core + Academia',
    summary: 'Masters, PhD pathways, and academic excellence.',
    outcomes: ['MS Programs', 'PhD Track', 'Global Universities'],
    color: '#0891b2',
    light: '#cffafe',
    position: 'bottom-right',
  },
}

export const SPECIALIZATION_TRACKS = [
  CAREER_TRACKS.openSource,
  CAREER_TRACKS.startup,
  CAREER_TRACKS.research,
  CAREER_TRACKS.higherStudies,
]

export const BTECH_PROGRAM = {
  duration: '4 Years',
  degree: 'B.Tech',
  label: '4-Year B.Tech Program',
  strategy: 'Complete everything by Year 3 · Intern in Year 3 · Enter industry in Year 4',
  timeline: [
    { years: 'Year 01 – 02', phase: 'Build', detail: 'Foundations through full stack engineering' },
    { years: 'Year 03', phase: 'Complete & Intern', detail: 'Finish full curriculum and secure internship' },
    { years: 'Year 04', phase: 'Industry', detail: 'Enter industry and launch your career' },
  ],
}

export const YEAR_TARGETS = {
  year01: {
    id: 'year01',
    label: 'Year 01',
    title: 'Foundation & Frontend Mastery',
    subtitle: 'Web foundations through React, BaaS & real product building',
    coverage: 'Sem 01 – 02',
    tracks: [
      {
        trackId: 'core',
        targets: [
          'Build any website frontend on the planet',
          'Ship real-world products using BaaS and open source solutions',
        ],
      },
      {
        trackId: 'openSource',
        targets: [
          'Set up an open source project and start contributing',
          'Crack open source flagships like GSoC & MLH',
          'Every student must complete Hacktoberfest and other open source initiatives',
        ],
      },
      {
        trackId: 'startup',
        targets: [
          'Build real-world products and complete freelance projects',
          'Identify market gaps and fill them with web solutions',
        ],
      },
      {
        trackId: 'research',
        targets: [
          'Explore research domains across full stack and CS',
          'Attempt to publish survey and research papers',
        ],
      },
    ],
  },
  year02: {
    id: 'year02',
    label: 'Year 02',
    title: 'Full Stack Engineering',
    subtitle: 'Backend mastery — building toward accelerated Year 3 completion',
    coverage: 'Sem 03',
    tracks: [
      {
        trackId: 'core',
        targets: [
          'Architect and deploy full stack apps with Node, Express & databases',
          'Stay on track to finish the entire curriculum by end of Year 3',
        ],
      },
      {
        trackId: 'openSource',
        targets: [
          'Land merged PRs in established open source repositories',
          'Lead small OSS initiatives with documented contributor guides',
        ],
      },
      {
        trackId: 'startup',
        targets: [
          'Deliver paid freelance and client projects end-to-end',
          'Launch validated MVPs in product or service sectors',
        ],
      },
      {
        trackId: 'research',
        targets: [
          'Co-author technical survey papers with faculty mentors',
          'Participate in research labs and innovation challenges',
        ],
      },
      {
        trackId: 'higherStudies',
        targets: [
          'Build a research portfolio aligned with MS program goals',
          'Engage in academic reading groups and profile-building activities',
        ],
      },
    ],
  },
  year03: {
    id: 'year03',
    label: 'Year 03',
    title: 'Complete Everything & Internship',
    subtitle: 'Finish the full track curriculum and secure an industry internship',
    coverage: 'Sem 04 – 06 · Full Track',
    milestone: 'Curriculum complete · Internship begins',
    tracks: [
      {
        trackId: 'core',
        targets: [
          'Complete the entire Full Stack curriculum — DevOps, cloud, CI/CD & all projects',
          'Secure internships at product companies, startups or tech teams',
        ],
      },
      {
        trackId: 'openSource',
        targets: [
          'Finish OSS milestones — GSoC, MLH or flagship program applications',
          'Use open source portfolio as a differentiator for internship selection',
        ],
      },
      {
        trackId: 'startup',
        targets: [
          'Complete freelance and product projects that demonstrate industry readiness',
          'Enter internship with a validated venture or client portfolio',
        ],
      },
      {
        trackId: 'research',
        targets: [
          'Complete all research deliverables — papers, surveys and lab outputs',
          'Secure research-oriented internships at labs or innovation teams',
        ],
      },
      {
        trackId: 'higherStudies',
        targets: [
          'Complete academic profile building before final-year industry focus',
          'Align research portfolio for MS/PhD applications post-graduation',
        ],
      },
    ],
  },
  year04: {
    id: 'year04',
    label: 'Year 04',
    title: 'Industry Entry & Career Launch',
    subtitle: 'Final year spent in industry — converting internship into full-time career',
    coverage: 'Final Year · Industry Immersion',
    milestone: 'Enter industry · Full-time conversion',
    tracks: [
      {
        trackId: 'core',
        targets: [
          'Enter industry through internship-to-full-time conversion',
          'Deliver production engineering outcomes in live industry environments',
        ],
      },
      {
        trackId: 'openSource',
        targets: [
          'Continue OSS contributions while working in industry roles',
          'Represent the program through community leadership and mentorship',
        ],
      },
      {
        trackId: 'startup',
        targets: [
          'Scale startup or freelance practice alongside industry experience',
          'Apply industry learnings to grow product or service ventures',
        ],
      },
      {
        trackId: 'research',
        targets: [
          'Publish and present research while embedded in industry or lab settings',
          'Bridge academic work with real-world engineering problems',
        ],
      },
      {
        trackId: 'higherStudies',
        targets: [
          'Submit MS/PhD applications with industry-backed research portfolio',
          'Graduate with published work, LoRs and proven industry experience',
        ],
      },
    ],
  },
}

export const YEAR_REQUIREMENTS = {
  year01: {
    label: 'Year 01',
    title: 'Additional Requirements',
    subtitle: 'Infrastructure and track-wise mentorship for Year 1 targets',
    categories: [
      {
        title: 'Infrastructure',
        items: [
          '15 computers to custom build',
          '15 Raspberry Pis',
          'Linux lab environments and cloud dev sandboxes for all students',
          'Organisation GitHub with project templates and CI basics',
          'BaaS and open source tool access provisioned across both campuses',
          'Jira or ClickUp for project and task management',
          'Vercel team account',
          'AWS account with shared permissions',
        ],
      },
      {
        title: 'Mentorship',
        trackSessions: [
          {
            trackId: 'openSource',
            sessions: [
              'Guest session with a GSoC contributor or GitHub Campus Expert',
              'Guest session with an open source tool maintainer',
            ],
          },
          {
            trackId: 'startup',
            sessions: [
              'Guest session with a freelance agency owner',
              'Guest session with a tech founder building a web product',
            ],
          },
          {
            trackId: 'research',
            sessions: [
              'Guest session with an IEEE expert on research exposure and publishing pathways',
              'Guest session on writing research and survey papers — citing, structure and review standards',
            ],
          },
        ],
      },
    ],
  },
  year02: {
    label: 'Year 02',
    title: 'Additional Requirements',
    subtitle: 'Accelerate delivery while keeping Year 3 completion on track',
    categories: [
      {
        title: 'Curriculum Delivery',
        items: [
          'Sem 03 backend content — Node, Express, MySQL, MongoDB — fully live',
          '30 backend projects with real-world API and database scenarios',
          'Year 3 accelerated roadmap shared with students and faculty',
        ],
      },
      {
        title: 'Track Specialisation',
        items: [
          'Dedicated mentorship pods for OSS, startup, research & higher studies',
          'Track selection counselling at end of Year 2',
          'Portfolio standards defined per pathway',
        ],
      },
      {
        title: 'Industry & Partners',
        items: [
          'Backend engineering mentors from industry for code reviews',
          'Hackathon and competitive programming calendar for the year',
          'Freelance and MVP partner briefs for startup-track students',
        ],
      },
      {
        title: 'Quality & Assessment',
        items: [
          'Full stack project assessments with production-grade criteria',
          'Research paper drafting support with faculty reviewers',
          'Progress dashboards tracking Year 3 readiness per student',
        ],
      },
    ],
  },
  year03: {
    label: 'Year 03',
    title: 'Additional Requirements',
    subtitle: 'Everything needed to complete the track and place interns',
    categories: [
      {
        title: 'Curriculum Completion',
        items: [
          'Sem 04 – 06 content delivered on accelerated schedule',
          'All track projects live with recordings and mentor support',
          'DevOps, AWS, CI/CD, SRE & chaos engineering labs operational',
        ],
      },
      {
        title: 'Internship Pipeline',
        items: [
          'MoUs with product companies, startups and research labs',
          'Dedicated internship placement cell across Bangalore & Pune',
          'Interview prep — DSA, system design & behavioural coaching',
        ],
      },
      {
        title: 'Industry Partnerships',
        items: [
          'Minimum intern slot commitments from partner organisations',
          'Industry mentors assigned per student before internship begins',
          'Live capstone problems sourced from partner companies',
        ],
      },
      {
        title: 'Track Closure',
        items: [
          'OSS flagship applications — GSoC, MLH — supported end-to-end',
          'Startup & freelance portfolios audited for industry readiness',
          'Research deliverables reviewed and submission-ready',
        ],
      },
    ],
  },
  year04: {
    label: 'Year 04',
    title: 'Additional Requirements',
    subtitle: 'Enable industry entry and full-time career conversion',
    categories: [
      {
        title: 'Industry Immersion',
        items: [
          'Full-time industry placement or continuation of Year 3 internship',
          'University–industry agreement for final-year credit alignment',
          'Industry supervisor + faculty co-mentor model per student',
        ],
      },
      {
        title: 'Career Conversion',
        items: [
          'Pre-placement offer (PPO) pipeline with partner companies',
          'Performance reviews tied to full-time conversion criteria',
          'Production engineering expectations documented with employers',
        ],
      },
      {
        title: 'Parallel Track Support',
        items: [
          'OSS maintainers continue community contributions on flexible schedule',
          'Startup founders supported with industry-hours venture guidance',
          'Research students publish while embedded in industry or lab roles',
        ],
      },
      {
        title: 'Graduation & Beyond',
        items: [
          'Higher studies application desk — SOP, LoR, portfolio reviews',
          'Alumni network onboarding for ongoing mentorship',
          'Graduation showcase — demo day for industry and investors',
        ],
      },
    ],
  },
}

export const YEAR_ONE = {
  label: 'Year 01',
  subtitle: '76 projects · Sem 01 – 02',
  semesterIds: ['sem1', 'sem2'],
  totalProjects: 76,
}

export const YEAR_ONE_PROGRESS = {
  overall: {
    percent: 35,
    label: 'Year 01 Overall',
    detail: 'Sem 02 content at 35% · Dynamic UI capstone in progress · recordings pending',
  },
  content: {
    label: 'Content',
    status: 'In Progress',
    completed: 1,
    total: 2,
    percent: Math.round((100 + 35) / 2),
    valueText: 'Sem 01 done · Sem 02 at 35%',
    detail: 'Sem 01 modules complete. Sem 02 content authoring underway.',
  },
  projects: {
    label: 'Projects',
    status: 'Sem 01 Complete',
    completed: 36,
    total: YEAR_ONE.totalProjects,
    percent: Math.round((36 / YEAR_ONE.totalProjects) * 100),
    detail: '36 of 76 Year 1 projects ready for delivery.',
  },
  recordings: {
    label: 'Recordings',
    status: 'In Progress',
    completed: 0,
    total: 2,
    percent: 0,
    projectsDone: true,
    recordingsDone: false,
    detail: 'Sem 01 projects finalised. Class recordings scheduled next.',
  },
  capstone: {
    label: 'Capstone Project',
    status: 'In Progress',
    completed: 1,
    total: 4,
    percent: Math.round((1 / 4) * 100),
    detail: 'Dynamic UI with JSON Configs in progress · 3 capstones upcoming',
  },
  semesters: [
    { id: 'sem1', label: 'Sem 01', status: 'complete', content: 100, projects: 100, recordings: 0 },
    { id: 'sem2', label: 'Sem 02', status: 'in_progress', content: 35, projects: 0, recordings: 0 },
  ],
}

export const PROGRESS = {
  content: {
    label: 'Content Progress',
    status: 'Sem 01 Complete',
    completedSemesters: 1,
    totalSemesters: SEMESTERS.length,
    percent: Math.round((1 / SEMESTERS.length) * 100),
    detail: 'All Sem 01 modules authored and reviewed.',
  },
  projects: {
    label: 'Project Progress',
    status: 'Sem 01 Complete',
    completed: 36,
    total: TOTAL_PROJECTS,
    percent: Math.round((36 / TOTAL_PROJECTS) * 100),
    detail: `36 of ${TOTAL_PROJECTS} track projects ready for delivery.`,
  },
  recordings: {
    label: 'Class Recordings',
    status: 'In Progress',
    projectsDone: true,
    recordingsDone: false,
    percent: 0,
    detail: 'Sem 01 projects finalised. Recordings scheduled next.',
  },
}
