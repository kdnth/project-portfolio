import builpLogo from '@/assets/projects/logos/builp.png'
import campaignKeepLogo from '@/assets/projects/logos/campaignkeep.png'
import chordShufflerLogo from '@/assets/projects/logos/chord-shuffler.png'
import portfolioTrackerLogo from '@/assets/projects/logos/portfolio-tracker.png'
import builpScreenshot from '@/assets/projects/screenshots/builp.png'
import campaignKeepScreenshot from '@/assets/projects/screenshots/campaignkeep.png'
import chordShufflerScreenshot from '@/assets/projects/screenshots/chord-shuffler.png'
import portfolioTrackerScreenshot from '@/assets/projects/screenshots/portfolio-tracker.png'

export type Project = {
  id: string
  name: string
  summary: string
  description: string
  tags: string[]
  logo: string
  logoAlt: string
  screenshot: string
  screenshotAlt: string
  liveUrl: string
  sourceUrl: string
}

export const projects: Project[] = [
  {
    id: 'builp',
    name: 'builp',
    summary:
      'Targeted learning course platform with a course generation AI workflow. Courses contain written lessons, runnable code practice, and interactive activities.',
    description:
      'Write, generate, and work through courses combining written lessons, runnable code practice, and interactive activities. Course generation is powered by LangGraph with tiered Anthropic model routing, using either a server-managed free credit or a user-supplied API key. React/Mantine frontend, FastAPI/SQLAlchemy/Postgres backend, and Neon Auth.',
    tags: [
      'React',
      'FastAPI',
      'LangGraph',
      'Anthropic API',
      'Agentic AI',
      'PostgreSQL',
      'Neon Auth',
      'TypeScript',
    ],
    logo: builpLogo,
    logoAlt: 'builp logo. stylized lowercase b and p to create cartoon eyes',
    screenshot: builpScreenshot,
    screenshotAlt: 'builp course view showing a Dynamic Programming Fundamentals lesson outline',
    liveUrl: 'https://builp.kdnth.co',
    sourceUrl: 'https://github.com/kdnth/builp',
  },
  {
    id: 'portfolio-tracker',
    name: 'PortfolioTracker',
    summary: 'Investment portfolio tracker with FastAPI and Vue 3.',
    description:
      'Create accounts and portfolios, record buy/sell trades, and analyze your portfolio with an AI agent powered by the Anthropic API. View holdings with weighted-average cost basis stored as integer cents. Layered FastAPI services, ownership-scoped routes, JWT auth, and a typed Vue 3 SPA with Pinia. Deployed API on Railway, SPA on Netlify, Postgres on Neon.',
    tags: [
      'FastAPI',
      'Anthropic API',
      'Agentic AI',
      'Vue 3',
      'PostgreSQL',
      'Pinia',
      'JWT',
      'Docker',
    ],
    logo: portfolioTrackerLogo,
    logoAlt: 'PortfolioTracker logo — folder with letter P',
    screenshot: portfolioTrackerScreenshot,
    screenshotAlt: 'PortfolioTracker portfolios list with Retirement book',
    liveUrl: 'https://portfolio-tracker.kdnth.co',
    sourceUrl: 'https://github.com/kdnth/portfolio-tracker',
  },
  {
    id: 'campaignkeep',
    name: 'CampaignKeep',
    summary: 'D&D campaign and character tracker for players and game masters.',
    description:
      'Full-stack D&D 5e organizer with JWT auth, email confirm/reset via Resend, and role-based campaign access (master/player). Manage campaigns, characters, inventory, spells, session logs, and roll dice client-side. Capstone for my Software Engineering degree @ WGU. Vue 3 SPA, Spring Boot API, PostgreSQL.',
    tags: ['Vue 3', 'Spring Boot', 'PostgreSQL', 'JWT', 'Railway', 'Netlify'],
    logo: campaignKeepLogo,
    logoAlt: 'CampaignKeep logo — isometric six-sided die',
    screenshot: campaignKeepScreenshot,
    screenshotAlt: 'CampaignKeep campaign dashboard showing NPC character sheet',
    liveUrl: 'https://campaignkeep.kdnth.co',
    sourceUrl: 'https://github.com/kdnth/CampaignKeep',
  },
  {
    id: 'chordshuffler',
    name: 'ChordShuffler',
    summary: 'Client-side chord practice tool with audio playback and a built-in metronome.',
    description:
      'Timed flashcards for 7th chords that run entirely in the browser. Users pick chord types, optional key or progression, and shuffle on a seconds or beats interval. Includes Web Audio playback and a metronome with adjustable BPM and time signature. No backend required.',
    tags: ['Vue 3', 'TypeScript', 'Vite', 'Web Audio'],
    logo: chordShufflerLogo,
    logoAlt: 'ChordShuffler logo — fretboard grid with shuffle arrows',
    screenshot: chordShufflerScreenshot,
    screenshotAlt: 'ChordShuffler practice UI showing Cmaj7 with metronome controls',
    liveUrl: 'https://chordshuffler.kdnth.co',
    sourceUrl: 'https://github.com/kdnth/ChordShuffler',
  },
]
