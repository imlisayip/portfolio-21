import { Helmet } from 'react-helmet-async'

import AboutBioCard from 'src/components/AboutBioCard'
import { generatePageMetaTags } from 'src/lib/seo'

import { PROFILE } from 'src/lib/data'

const AboutPage = () => {
  const metaTags = generatePageMetaTags(
    'About Lisa Yip',
    'Learn more about Lisa Yip, a Front End Engineer with experience at Instrument, FullStory, Patreon, and Dropbox. Discover her background, accomplishments, and passion for creating meaningful user experiences.'
  )

  return (
    <main className="my-10 sm:mb-40 md:mb-24">
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

      <AboutBioCard
        heading={PROFILE.title}
        body={PROFILE.description}
        image={PROFILE.image}
        alt={PROFILE.alt}
        accomplishments={PROFILE.accomplishments}
      />
    </main>
  )
}

export default AboutPage
