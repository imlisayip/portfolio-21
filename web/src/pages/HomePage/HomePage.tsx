import { FatalErrorBoundary } from '@redwoodjs/web'
import { MetaTags } from '@redwoodjs/web'

import Hero from 'src/components/Hero'
import MediaCard from 'src/components/MediaCard'
import { generateMetaTags } from 'src/lib/seo'

import { HEADER, PROJECTS } from 'src/lib/data'

const HomePage = () => {
  const metaTags = generateMetaTags()

  return (
    <main className="mt-10 sm:mb-40 md:mb-24">
      <MetaTags
        title={metaTags.title}
        description={metaTags.description}
        og={metaTags.openGraph}
      />

      <Hero eyebrow={HEADER.eyebrow} intro={HEADER.intro} />
      {PROJECTS.map((project, index) => (
        <MediaCard
          key={index}
          heading={project.title}
          body={project.description}
          cta={project.cta}
          ctaLink={project.ctaLink}
          image={project.image}
          alt={project.alt}
          direction={project.direction as 'left' | 'right'}
        />
      ))}
    </main>
  )
}

export default HomePage
