import { Metadata } from '@redwoodjs/web'

import AboutBioCard from 'src/components/AboutBioCard/AboutBioCard'

import { PROFILE } from '../../../public/files/data'

const AboutPage = () => {
  return (
    <div className="my-10 sm:mb-40 md:mb-24">
      <Metadata title="About" description="About page" />

      {AboutBioCard({
        heading: PROFILE.title,
        body: PROFILE.description,
        image: PROFILE.image,
        alt: PROFILE.alt,
        accomplishments: PROFILE.accomplishments,
      })}
    </div>
  )
}

export default AboutPage
