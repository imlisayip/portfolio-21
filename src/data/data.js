import { renderToString } from 'react-dom/server'

import Text from '../components/Text/Text'
import Eyebrow from '../components/Eyebrow/Eyebrow'
import Link from '../components/Link/Link'

import HeatmapsExplore from '../data/fullstory-heatmaps.png'
import JourneyMaps from '../data/fullstory-journey-maps.png'
import COE from '../data/creativity-over-everything.png'
import Product from '../data/patreon-product.png'
import WorkInProgress from '../data/work-in-progress.png'
import Transparency from '../data/dropbox-transparency.png'

import LisaYip from '../data/sf-trolley.png'


export const HEADER = {
    eyebrow: 'hello',
    intro: 'Lisa Yip  is a user experience engineer open to new opportunities, exploring and living in Bay Area. '
}
export const PROJECTS = [
    {
        title: 'FullStory Heatmaps',
        description: "FullStory is a web-based digital intelligence system that helps optimize the client experience. Heatmaps provide cues for how users <strong>explore and navigate your website via visual, aggregate data</strong>. Worked closely with team to <strong>build ground work connecting APIs and visual pieces together using React, TypeScript</strong>, and Go.",
        cta: 'Visit product page',
        ctaLink: 'https://www.fullstory.com/platform/heatmaps/',
        image: HeatmapsExplore,
        alt: 'Screenshot of FullStory Heatmaps Product',
        direction: true,
    },
    {
        title: 'FullStory Journey Maps',
        description: "FullStory is a web-based digital intelligence system that helps optimize the client experience. Journey maps is a <strong>highly anticipated analysis for visualizing user paths</strong>. Worked closely with team to <strong>build and connect UI pieces together using React, TypeScript</strong>, and Go.",
        cta: 'Visit product page',
        ctaLink: 'https://www.fullstory.com/platform/journey-maps/',
        image: JourneyMaps,
        alt: 'Screenshot of FullStory Journey Maps Product',
    },
    {
        title: 'Patreon Creativity Over Everything',
        description: "Patreon is a membership platform that makes it easy for artists and creators to get paid. Patreon's brand campaign emphasizing the system for creative people is broken, to ditch the old ways and let fans give creators the freedom and stability they need to do their best creative work. Collaborated alongside brand team from design to launch during a <strong>tight 3-week turnaround, building responsible landing page with React, Parcel.js</strong>.",
        cta: 'Visit site',
        ctaLink: 'https://www.creativityovereverything.com/',
        image: COE,
        alt: 'Screenshot of Creativity over Everything webpage',
        direction: true,
    },
    {
        title: 'Patreon Product',
        description: 'Patreon is a membership platform that makes it easy for artists and creators to get paid. Worked with the team to <strong>rebrand Patreon App Directory to add value to patrons with tools, benefits, and perks</strong>. Built website using React, Python.',
        cta: 'Visit site',
        ctaLink: 'https://www.patreon.com/product/premium',
        image: Product,
        alt: 'Screenshot of Patreon Product webpage',
    },
    {
        title: ' Dropbox Work In Progress',
        description: '<strong>Webby Award winning Dropbox Work in Progress Blogs</strong>, designed to communicate company updates and perspective. <strong>Worked closely with shareholders to launch under two month window with rebrand and migration</strong>. Built with Javascript, HTML5/CSS3, AEM.',
        cta: 'Visit site',
        ctaLink: 'https://blog.dropbox.com/',
        image: WorkInProgress,
        alt: 'Screenshot of Dropbox blogs webpage',
        direction: true,
    },
    {
        title: 'Dropbox Transparency',
        description: 'Dropbox is a modern workspace designed to reduce busywork-so you can focus on the things that matter. Site focused on being <strong>transparent about how government requests for user data is handled</strong>. Project built using <strong>D3.js, HTML5/CSS3 and AEM.</strong>',
        cta: 'Visit site',
        ctaLink: 'https://www.dropbox.com/transparency',
        image: Transparency,
        alt: 'Screenshot of Dropbox transparency webpage',
    }
]

export const PROFILE = {
    title: "Lisa Yip",
    description: renderToString(
        <>
            <Text>Hi! Thanks for stopping by. I am a User Experience Engineer actively looking for new opportunities. </Text>
            <Text>Previously, I delivered digital brand experiences at FullStory, Patreon, Dropbox and Informatica.</Text>
            <Text>My experience includes helping companies build components and resources to start a design system. I love the process of building creatively through empathy, innovation and teamwork. The synergy helps me find a balance between function and form.</Text>
            <Text>I'm always trying to grow and learn something new. I lose track of time when I'm volunteering at endurance events, curled up in a good book, and mesmerizing new places I explore.</Text>
            <Text>Please don't hesitate to reach out— I'm happy to chat about work or play!</Text>
            <Text>Website built with React, Parcel, and Vercel. Set in  Canela and GT America.</Text>

            <Eyebrow>Recognition</Eyebrow>
            FullStory Hackathon | Customer Love & Best In Show; Augmenting DXI
            <br />
            <Link href="https://winners.webbyawards.com/2019/websites/general-websites/community/83631/patreon">
                The Webby Awards | Webby Winner; Patreon Community
            </Link>
            <br/>
            <Link href="https://winners.webbyawards.com/2019/websites/general-websites/business-blogwebsite/91997/work-in-progress">
                The Webby Awards | People's Voice Winner; Dropbox Work in Progress Blogs
            </Link>
        </>
    ),
    image: LisaYip,
    direction: true,
    type: 'about'
}
