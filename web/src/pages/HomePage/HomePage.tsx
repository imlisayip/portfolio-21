import { MetaTags } from '@redwoodjs/web'

import Hero from '../../components/Hero/Hero'
import MediaCard from '../../components/MediaCard/MediaCard'
import { generateMetaTags } from '../../lib/seo'

import { HEADER, PROJECTS } from '../../lib/data'

const HomePage = () => {
  const metaTags = generateMetaTags()

  return (
    <main className="mt-10 sm:mb-40 md:mb-24">
      <MetaTags
        title={metaTags.title}
        description={metaTags.description}
        ogType={metaTags.openGraph.type}
        ogUrl={metaTags.openGraph.url as `${'http://' | 'https://'}${string}`}
        ogContentUrl={metaTags.openGraph.image}
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
