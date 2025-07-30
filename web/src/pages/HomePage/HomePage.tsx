import { Metadata } from '@redwoodjs/web'

import Hero from 'src/components/Hero/Hero'
import MediaCard from 'src/components/MediaCard/MediaCard'

import { HEADER, PROJECTS } from '../../../public/files/data'

const HomePage = () => {
  return (
    <main className="mt-10 sm:mb-40 md:mb-24">
      <Metadata
        title="Lisa Yip - Front End Engineer"
        description="Front End Engineer with experience at FullStory, Patreon, and Dropbox. Specializing in React, TypeScript, and creating impactful user experiences."
        og={{
          title: "Lisa Yip - Front End Engineer",
          description: "Front End Engineer with experience at FullStory, Patreon, and Dropbox. Specializing in React, TypeScript, and creating impactful user experiences.",
          type: "website"
        }}
      />

      <Hero eyebrow={HEADER.eyebrow} intro={HEADER.intro} />
      {PROJECTS.map((project, index) => {
        return MediaCard({
          key: index,
          heading: project.title,
          body: project.description,
          cta: project.cta,
          ctaLink: project.ctaLink,
          image: project.image,
          alt: project.alt,
          direction: project.direction,
        })
      })}
    </main>
  )
}

export default HomePage
