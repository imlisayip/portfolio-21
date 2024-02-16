import { Metadata } from '@redwoodjs/web'

import AboutBioCard from 'src/components/AboutBioCard/AboutBioCard'

import { PROFILE } from '../../../public/files/data'

const AboutPage = () => {
  return (
    <>
      <Metadata title="About" description="About page" />

      {AboutBioCard({
        heading: PROFILE.title,
        body: PROFILE.description,
        image: PROFILE.image,
        alt: PROFILE.alt,
        accomplishments: PROFILE.accomplishments,
      })}
    </>
  )
}

export default AboutPage
