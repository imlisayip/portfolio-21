import { Metadata } from '@redwoodjs/web'

import Hero from 'src/components/Hero/Hero'
import MediaCard from 'src/components/MediaCard/MediaCard'
import { generateMetaTags } from 'src/lib/seo'

import { HEADER, PROJECTS } from '../../../public/files/data'

const HomePage = () => {
  const metaTags = generateMetaTags()

  return (
    <main className="mt-10 sm:mb-40 md:mb-24">
      <Metadata 
        title={metaTags.title}
        description={metaTags.description}
        og={metaTags.openGraph}
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
          direction: project.direction as 'left' | 'right',
        })
      })}
    </main>
  )
}

export default HomePage
