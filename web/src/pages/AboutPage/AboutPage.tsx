import { Metadata } from '@redwoodjs/web'

import AboutBioCard from 'src/components/AboutBioCard/AboutBioCard'
import { generatePageMetaTags } from 'src/lib/seo'

import { PROFILE } from '../../../public/files/data'

const AboutPage = () => {
  const metaTags = generatePageMetaTags(
    'About Lisa Yip',
    'Learn more about Lisa Yip, a Front End Engineer with experience at Instrument, FullStory, Patreon, and Dropbox. Discover her background, accomplishments, and passion for creating meaningful user experiences.'
  )

  return (
    <main className="my-10 sm:mb-40 md:mb-24">
      <Metadata
        title={metaTags.title}
        description={metaTags.description}
        og={metaTags.openGraph}
      />

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
