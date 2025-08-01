import { Helmet } from 'react-helmet-async'

import Hero from 'src/components/Hero'
import MediaCard from 'src/components/MediaCard'
import { generateMetaTags } from 'src/lib/seo'

import { HEADER, PROJECTS } from 'src/lib/data'

const HomePage = () => {
  const metaTags = generateMetaTags()

  return (
    <main className="mt-10 sm:mb-40 md:mb-24">
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta property="og:title" content={metaTags.openGraph.title} />
        <meta property="og:description" content={metaTags.openGraph.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaTags.openGraph.url} />
        <meta property="og:image" content={metaTags.openGraph.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTags.openGraph.title} />
        <meta name="twitter:description" content={metaTags.openGraph.description} />
        <meta name="twitter:image" content={metaTags.openGraph.image} />
      </Helmet>

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
