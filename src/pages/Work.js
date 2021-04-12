import React from 'react';
import Header from '../components/Header/Header'
import MediaText from '../components/MediaText/MediaText'
import { HEADER, PROJECTS } from '../data/data'

export default function Work() {

    return (
        <div className='my-10'>
            {Header({
                eyebrow: HEADER.eyebrow,
                intro: HEADER.intro
            })}
            {PROJECTS.map((project, index) => {
                return MediaText({
                    key: index,
                    title: project.title,
                    description: project.description,
                    cta: project.cta,
                    ctaLink: project.ctaLink,
                    image: project.image,
                    alt: project.alt,
                    direction: project.direction,
                })
            })}
        </div>
    );
};
