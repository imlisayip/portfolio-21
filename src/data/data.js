import { renderToString } from "react-dom/server";

import Text from "../components/Text/Text";
import Eyebrow from "../components/Eyebrow/Eyebrow";
import Link from "../components/Link/Link";

import SalesforceDreamforce from "../data/salesforce-dreamforce.png";
import HeatmapsExplore from "../data/fullstory-heatmaps.png";
import JourneyMaps from "../data/fullstory-journey-maps.png";
import COE from "../data/creativity-over-everything.png";
import Product from "../data/patreon-product.png";
import WorkInProgress from "../data/work-in-progress.png";
import Transparency from "../data/dropbox-transparency.png";

import LisaYip from "../data/sf-trolley.png";

export const HEADER = {
  eyebrow: "hello",
  intro:
    "Lisa Yip  is a user experience engineer, eager to embrace new opportunities while enjoying life in the vibrant Bay Area.",
};
export const PROJECTS = [
  {
    title: "Dreamforce 2023",
    description:
      "At Salesforce's Dreamforce 2023 conference, the focus lies in AI, Data, and CRM fusion, offering insights into AI-driven innovation for faster data-based decisions. Responsibilities included <strong>leading website enhancement, assuming leadership following a colleague's departure, supporting dynamic client needs, resolving legacy code complexities, and managing dynamic web elements and content</strong> utilizing HTML, SCSS, JavaScript, and Adobe Experience Manager (AEM).",
    cta: "Visit site",
    ctaLink: "https://www.dreamforce.com/",
    image: SalesforceDreamforce,
    alt: "Screenshot of 2023 Salesforce Dreamforce Home page",
    direction: true,
  },
  {
    title: "FullStory Heatmaps",
    description:
      "FullStory is a web-based digital intelligence system that helps optimize the client experience. Heatmaps provide cues for how users <strong>explore and navigate your website via visual, aggregate data</strong>. Worked closely with team to <strong>build ground work connecting APIs and visual pieces together using React, TypeScript</strong>, and Go.",
    cta: "Visit product page",
    ctaLink: "https://www.fullstory.com/platform/heatmaps/",
    image: HeatmapsExplore,
    alt: "Screenshot of FullStory Heatmaps Product",
  },
  {
    title: "FullStory Journey Maps",
    description:
      "FullStory is a web-based digital intelligence system that helps optimize the client experience. Journey maps is a <strong>highly anticipated analysis for visualizing user paths</strong>. Worked closely with team to <strong>build and connect UI pieces together using React, TypeScript</strong>, and Go.",
    cta: "Visit product page",
    ctaLink: "https://www.fullstory.com/platform/journey-maps/",
    image: JourneyMaps,
    alt: "Screenshot of FullStory Journey Maps Product",
    direction: true,
  },
  {
    title: "Patreon Creativity Over Everything",
    description:
      "Patreon, a membership platform simplifying artist and creator payments, launched a brand campaign urging creative individuals to break free from outdated systems and empower fans to provide the stability needed for their best work. During a brief <strong>3-week timeline</strong>, collaborated with the <strong>brand team on design-to-launch efforts, building a responsive landing page using React and Parcel.js.</strong>",
    cta: "Visit site",
    ctaLink: "https://www.creativityovereverything.com/",
    image: COE,
    alt: "Screenshot of Creativity over Everything webpage",
  },
  {
    title: "Patreon Product",
    description:
      "Patreon is a membership platform that makes it easy for artists and creators to get paid. Worked with the team to <strong>rebrand Patreon App Directory to add value to patrons with tools, benefits, and perks</strong>. Built website using React, Python.",
    cta: "Visit site",
    ctaLink: "https://www.patreon.com/product/premium",
    image: Product,
    alt: "Screenshot of Patreon Product webpage",
    direction: true,
  },
  {
    title: " Dropbox Work In Progress",
    description:
      "<strong>Webby Award winning Dropbox Work in Progress Blogs</strong>, designed to communicate company updates and perspective. <strong>Worked closely with shareholders to launch under two month window with rebrand and migration</strong>. Built with Javascript, HTML5/CSS3, AEM.",
    cta: "Visit site",
    ctaLink: "https://blog.dropbox.com/",
    image: WorkInProgress,
    alt: "Screenshot of Dropbox blogs webpage",
  },
  {
    title: "Dropbox Transparency",
    description:
      "Dropbox is a modern workspace designed to reduce busywork-so you can focus on the things that matter. Site focused on being <strong>transparent about how government requests for user data is handled</strong>. Project built using <strong>D3.js, HTML5/CSS3 and AEM.</strong>",
    cta: "Visit site",
    ctaLink: "https://www.dropbox.com/transparency",
    image: Transparency,
    alt: "Screenshot of Dropbox transparency webpage",
    direction: true,
  },
];

export const PROFILE = {
  title: "Lisa Yip",
  description: renderToString(
    <>
      <Text>
        Hello! Thanks for dropping by. I'm a User Experience Engineer actively
        on the lookout for new and exciting opportunities. I enjoy creating
        meaningful work that packs communication within a snapshot.
      </Text>
      <Text>
        Previously, I've had the privilege of crafting digital brand experiences
        at FullStory, Patreon, Dropbox, and Informatica.
      </Text>
      <Text>
        My experience includes helping organizations establish the building
        blocks for a robust design system. I'm passionate about the creative
        process, and I believe that empathy, innovation, and teamwork are key
        ingredients in achieving the perfect balance between functionality and
        aesthetics.
      </Text>
      <Text>
        I'm a perpetual learner, always seeking new knowledge and experiences.
        In my free time, I give back by teaching Vinyasa yoga to the community
        and indulging in art classes. I also find myself completely engrossed
        when volunteering at endurance events, losing track of time in the pages
        of a good book, or exploring captivating new places.
      </Text>
      <Text>
        Feel free to reach out—I'm more than happy to have a chat, whether it's
        about work or leisure!
      </Text>
      <Text>
        Website built with React, Parcel, and Vercel. Set in Canela and GT
        America.
      </Text>
      <Eyebrow>Accolades</Eyebrow>
      Yoga Alliance | Registered Yoga Teacher 200
      <br />
      CCACA Student Exhibition
      <br />
      FullStory Hackathon | Customer Love & Best In Show; Augmenting DXI
      <br />
      <Link href="https://winners.webbyawards.com/2019/websites/general-websites/community/83631/patreon">
        The Webby Awards | Webby Winner; Patreon Community
      </Link>
      <br />
      <Link href="https://winners.webbyawards.com/2019/websites/general-websites/business-blogwebsite/91997/work-in-progress">
        The Webby Awards | People's Voice Winner; Dropbox Work in Progress Blogs
      </Link>
    </>
  ),
  image: LisaYip,
  direction: true,
  type: "about",
};
