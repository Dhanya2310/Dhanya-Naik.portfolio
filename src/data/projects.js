// ===================================================================
// PROJECTS: edit this file to add, remove or update projects.
//   github: link to the repo ('' hides the button)
//   live:   link to a live demo ('' hides the button)
//   status: short label shown on the card
//   kind:   used by the filter buttons ('Web App' | 'Prototype' | 'Hackathon')
// GitHub links below point to your profile as a PLACEHOLDER. Replace each
// with the real repository URL.
// ===================================================================

const GITHUB_PROFILE = 'https://github.com/Dhanya2310'

export const projects = [
  {
    id: 'aptitrio',
    name: 'Aptitrio',
    tagline: 'Adaptive gamified aptitude learning platform',
    status: 'Hackathon Project',
    kinds: ['Web App', 'Hackathon'],
    description:
      'An adaptive, gamified aptitude learning platform that guides students from beginner level to interview-level aptitude preparation.',
    problem:
      'Aptitude prep is often unstructured and one-size-fits-all, so students are not sure where to start or what to practise next.',
    role: 'Team project. I worked on the Tests & Interview System module.',
    features: [
      'Diagnostic assessment',
      'Topic-wise learning',
      'Difficulty adaptation',
      'MCQ-based tests',
      'Explanations for incorrect answers',
      'Similar follow-up questions',
      'XP, levels, badges and streaks',
      'Progress tracking',
    ],
    tech: ['React', 'Node.js', 'Express', 'Gemini API'],
    github: GITHUB_PROFILE, // PLACEHOLDER: replace with the repo URL
    live: '',
  },
  {
    id: 'lifelink',
    name: 'LifeLink',
    tagline: 'Blood donation web app',
    status: 'Web App',
    kinds: ['Web App'],
    description:
      'A blood donation web application that connects donors with people who need blood.',
    problem:
      'Finding a willing donor quickly is hard when information is scattered across calls and messages.',
    role: '',
    features: [
      'Donor information',
      'Blood requests',
      'User authentication interface',
      'Local data storage',
      'Responsive interface',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    github: GITHUB_PROFILE, // PLACEHOLDER
    live: '',
  },
  {
    id: 'farm2home',
    name: 'Farm2Home',
    tagline: 'Farmer-to-consumer platform (prototype)',
    status: 'Prototype',
    kinds: ['Prototype'],
    description:
      'A platform concept that helps regional farmers connect directly with consumers.',
    problem:
      'Farmers often depend on middlemen, while consumers have little visibility into where their produce comes from.',
    role: '',
    features: [
      'Direct farmer-to-consumer idea',
      'Focus on regional produce',
      'Prototype interface',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: GITHUB_PROFILE, // PLACEHOLDER
    live: '',
  },
  {
    id: 'ai-health-companion',
    name: 'AI Health Companion',
    tagline: 'Preventive-care concept (hackathon prototype)',
    status: 'Hackathon Prototype',
    kinds: ['Prototype', 'Hackathon'],
    description:
      'An AI-powered health awareness and preventive-care concept developed for a hackathon.',
    problem:
      'People often track their health informally and miss routine check-ins, reminders and early awareness.',
    role: '',
    features: [
      'Daily health check-ins',
      'Health history',
      'AI-based health guidance',
      'Preventive-care reminders',
      'Medicine reminders',
      'Family profiles',
      'Care navigation',
    ],
    tech: ['Generative AI', 'Gemini API'], // confirm the exact stack you used
    github: GITHUB_PROFILE, // PLACEHOLDER
    live: '',
  },
]

export const projectFilters = ['All', 'Web App', 'Prototype', 'Hackathon']
