import React from 'react'

import TextStyler from '../TextStyler/TextStyler'

interface HeroProps {
  eyebrow: string
  intro: string
}

const Hero = React.memo(({ eyebrow, intro }: HeroProps) => {
  return (
    <section className="my-16 xl:max-w-4/5" aria-labelledby="hero-heading">
      <TextStyler caret>{eyebrow}</TextStyler>
      <h1 id="hero-heading" className="pt-5">{intro}</h1>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero
