import COE from '../images/optimized/creativity-over-everything.png'
import Transparency from '../images/optimized/dropbox-transparency.png'
import HeatmapsExplore from '../images/optimized/fullstory-heatmaps.png'
import JourneyMaps from '../images/optimized/fullstory-journey-maps.png'
import Product from '../images/optimized/patreon-product.png'
import SalesforceDreamforce from '../images/optimized/salesforce-dreamforce.png'
import LisaYip from '../images/optimized/sf-trolley.png'
import WorkInProgress from '../images/optimized/work-in-progress.png'
import YIR from '../images/optimized/YIR.png'

import RESUMEPATH from './YIP_Resume_25.pdf'

// Contact information from constants
const CONTACT_INFO = {
  email: 'hello@lisayip.com',
  linkedin: 'https://www.linkedin.com/in/imlisayip/',
  github: 'https://github.com/imlisayip/',
  website: 'https://lisayip.com'
}

export const HEADER = {
  eyebrow: 'hello',
  intro:
    'Lisa Yip, a front end engineer, with a passion for crafting intuitive and impactful user experiences,  is open to engaging with innovative projects and teams.',
}
export const PROJECTS = [
  {
    title: 'Nike Year End Review ',
    description: `Nike's 'Year in Review' offers a personalized and holistic journey for members, celebrating 2023's achievements and setting future goals. The project, crafted with <strong>React</strong>, incorporates <strong>i18n for global localization</strong>, ensures seamless experience, and utilizes a comprehensive <strong>design system</strong>, showcasing the synergy of various expertises to forge a truly international and user-focused experience.`,
    cta: 'Visit case study',
    ctaLink: 'https://www.instrument.com/work/nike-year-in-review',
    image: YIR,
    alt: 'Screenshot of 2023 Salesforce Dreamforce Home page',
  },
  {
    title: 'Dreamforce 2023',
    description:
      "At Salesforce's Dreamforce 2023 conference, the focus lies in AI, Data, and CRM fusion, offering insights into AI-driven innovation for faster data-based decisions. Responsibilities included <strong>leading website enhancement, assuming leadership following a colleague's departure, supporting dynamic client needs, resolving legacy code complexities, and managing dynamic web elements and content</strong> utilizing HTML, SCSS, JavaScript, and Adobe Experience Manager (AEM).",
    cta: 'Visit site',
    ctaLink: 'https://www.dreamforce.com/',
    image: SalesforceDreamforce,
    alt: 'Screenshot of 2023 Salesforce Dreamforce Home page',
    direction: 'right',
  },
  {
    title: 'FullStory Heatmaps',
    description:
      'FullStory is a web-based digital intelligence system that helps optimize the client experience. Heatmaps provide cues for how users <strong>explore and navigate your website via visual, aggregate data</strong>. Worked closely with team to <strong>build ground work connecting APIs and visual pieces together using React, TypeScript</strong>, and Go.',
    cta: 'Visit product page',
    ctaLink: 'https://www.fullstory.com/platform/heatmaps/',
    image: HeatmapsExplore,
    alt: 'Screenshot of FullStory Heatmaps Product',
  },
  {
    title: 'FullStory Journey Maps',
    description:
      'FullStory is a web-based digital intelligence system that helps optimize the client experience. Journey maps is a <strong>highly anticipated analysis for visualizing user paths</strong>. Worked closely with team to <strong>build and connect UI pieces together using React, TypeScript</strong>, and Go.',
    cta: 'Visit product page',
    ctaLink: 'https://www.fullstory.com/platform/journey-maps/',
    image: JourneyMaps,
    alt: 'Screenshot of FullStory Journey Maps Product',
    direction: 'right',
  },
  {
    title: 'Patreon Creativity Over Everything',
    description:
      'Patreon, a membership platform simplifying artist and creator payments, launched a brand campaign urging creative individuals to break free from outdated systems and empower fans to provide the stability needed for their best work. During a brief <strong>3-week timeline</strong>, collaborated with the <strong>brand team on design-to-launch efforts, building a responsive landing page using React and Parcel.js.</strong>',
    cta: 'Visit site',
    ctaLink: 'https://www.creativityovereverything.com/',
    image: COE,
    alt: 'Screenshot of Creativity over Everything webpage',
  },
  {
    title: 'Patreon Product',
    description:
      'Patreon is a membership platform that makes it easy for artists and creators to get paid. Worked with the team to <strong>rebrand Patreon App Directory to add value to patrons with tools, benefits, and perks</strong>. Built website using React, Python.',
    cta: 'Visit site',
    ctaLink: 'https://www.patreon.com/product/premium',
    image: Product,
    alt: 'Screenshot of Patreon Product webpage',
    direction: 'right',
  },
  {
    title: ' Dropbox Work In Progress',
    description:
      '<strong>Webby Award winning Dropbox Work in Progress Blogs</strong>, designed to communicate company updates and perspective. <strong>Worked closely with shareholders to launch under two month window with rebrand and migration</strong>. Built with Javascript, HTML5/CSS3, AEM.',
    cta: 'Visit site',
    ctaLink: 'https://blog.dropbox.com/',
    image: WorkInProgress,
    alt: 'Screenshot of Dropbox blogs webpage',
  },
  {
    title: 'Dropbox Transparency',
    description:
      'Dropbox is a modern workspace designed to reduce busywork-so you can focus on the things that matter. Site focused on being <strong>transparent about how government requests for user data is handled</strong>. Project built using <strong>D3.js, HTML5/CSS3 and AEM.</strong>',
    cta: 'Visit site',
    ctaLink: 'https://www.dropbox.com/transparency',
    image: Transparency,
    alt: 'Screenshot of Dropbox transparency webpage',
    direction: 'right',
  },
]

export const PROFILE = {
  title: 'Lisa Yip',
  description: [
    `Hello! Thanks for dropping by. I'm a Front End Engineer actively on the
        lookout for new and exciting opportunities. I enjoy creating meaningful
        work that packs communication within a snapshot.`,
    `Previously, I've had the privilege of crafting digital brand experiences
        at Instrument, FullStory, Patreon, and Dropbox.`,
    `My experience includes helping organizations establish the building
        blocks for a robust design system. I'm passionate about the creative
        process, and I believe that empathy, innovation, and teamwork are key
        ingredients in achieving the perfect balance between functionality and
        aesthetics.`,
    `I'm a perpetual learner, always seeking new knowledge and experiences.
        In my free time, I give back by teaching yoga to the community and
        indulging in art or dance classes. I also find myself completely
        engrossed when volunteering at endurance events, losing track of time in
        the pages of a good book, or exploring captivating new places.`,
    `Feel free to reach out — I'm more than happy to have a chat, whether
        it's about work or leisure!`,
    `Website built with Typescript, Redwood.JS, and Tailwind. Set in
        Canela and GT America.`,
  ],
  accomplishments: [
    { event: 'Yoga Alliance | Registered Yoga Teacher 200', cta: '' },
    { event: 'CCACA Student Exhibition', cta: '' },
    {
      event:
        'FullStory Hackathon | Customer Love & Best In Show; Augmenting DXI',
      cta: '',
    },
    {
      event: `The Webby Awards | Webby Winner; Patreon Community`,
      cta: 'https://winners.webbyawards.com/2019/websites/general-websites/community/83631/patreon',
    },
    {
      event: `The Webby Awards | People's Voice Winner; Dropbox Work in Progress Blogs`,
      cta: 'https://winners.webbyawards.com/2019/websites/general-websites/business-blogwebsite/91997/work-in-progress',
    },
  ],
  image: LisaYip,
  alt: 'A woman stands on a cable car, smiling, wearing a hat, sunglasses, maroon top, and mustard pants, with city buildings in the background.',
  type: 'about',
}
export const LINKEDIN = CONTACT_INFO.linkedin
export const GITHUB = CONTACT_INFO.github
export const RESUME = RESUMEPATH
