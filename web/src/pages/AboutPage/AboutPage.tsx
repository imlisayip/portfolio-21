import { Metadata } from '@redwoodjs/web'

import AboutBioCard from 'src/components/AboutBioCard/AboutBioCard'

import { PROFILE } from '../../../public/files/data'

const AboutPage = () => {
  return (
    <main className="my-10 sm:mb-40 md:mb-24">
      <Metadata
        title="About Lisa Yip - Front End Engineer"
        description="Learn more about Lisa Yip, a Front End Engineer with experience at FullStory, Patreon, and Dropbox. Discover her background, accomplishments, and passion for creating meaningful user experiences."
        og={{
          title: "About Lisa Yip - Front End Engineer",
          description: "Learn more about Lisa Yip, a Front End Engineer with experience at FullStory, Patreon, and Dropbox. Discover her background, accomplishments, and passion for creating meaningful user experiences.",
          type: "profile"
        }}
      />

      {AboutBioCard({
        heading: PROFILE.title,
        body: PROFILE.description,
        image: PROFILE.image,
        alt: PROFILE.alt,
        accomplishments: PROFILE.accomplishments,
      })}
    </main>
  )
}

export default AboutPage
