import React from 'react';
import Header from '../components/molecules/Header/Header'
import MediaText from '../components/organisms/MediaText/MediaText'

import COE from '../data/creativity-over-everything.png'
import Product from '../data/patreon-product.png'
import WorkInProgress from '../data/work-in-progress.png'
import Transparency from '../data/dropbox-transparency.png'

export default function Work() {
    return (
        <div className='my-10'>
            {Header({
                eyebrow: 'hello',
                intro: 'Lisa Yip  is a user experience engineer open to new opportunities, exploring and living in Bay Area. '
            })}
            {MediaText({
                title: 'Creativity Over Everything',
                description: "Patreon is a membership platform that makes it easy for artists and creators to get paid. Patreon's brand campaign emphasizing the system for creative people is broken, to ditch the old ways and let fans give creators the freedom and stability they need to do their best creative work.Collaborated alongside brand team from design to launch during a tight 3-week turnaround, building responsible landing page with React, Parcel.js.",
                cta: 'Visit site »',
                ctaLink: 'https://www.creativityovereverything.com/',
                image: COE,
                alt: 'Screenshot of Creativity over Everything webpage',
                direction: true,
            })}
            {MediaText({
                title: 'Patreon Product',
                description: 'Patreon is a membership platform that makes it easy for artists and creators to get paid. Worked with the team to rebrand Patreon App Directory to add value to patrons with tools, benefits, and perks. Built website using React, Python.',
                cta: 'Visit site »',
                ctaLink: 'https://www.patreon.com/product/premium',
                image: Product,
                alt: 'Screenshot of Patreon Product webpage',
            })}
            {MediaText({
                title: 'Work In Progress',
                description: 'Webby Award winning Dropbox Work in Progress Blogs, designed to communicate company updates and perspective. Worked closely with shareholders to launch under two month window with rebrand and migration. Built with Javascript, HTML5/CSS3, AEM.',
                cta: 'Visit site »',
                ctaLink: 'https://blog.dropbox.com/',
                image: WorkInProgress,
                alt: 'Screenshot of Dropbox blogs webpage',
                direction: true,
            })}
            {MediaText({
                title: 'Dropbox Transparency',
                description: 'Dropbox is a modern workspace designed to reduce busywork-so you can focus on the things that matter. Site focused on being transparent about how government requests for user data is handled. Project built the project using D3.js, HTML5/CSS3 and AEM.',
                cta: 'Visit site »',
                ctaLink: 'https://www.dropbox.com/transparency',
                image: Transparency,
                alt: 'Screenshot of Dropbox transparency webpage',
            })}
        </div>
    );
};
