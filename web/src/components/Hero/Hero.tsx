import TextStyler from '../TextStyler/TextStyler'

const Hero = ({ eyebrow, intro }) => {
  return (
    <section className="my-16 xl:max-w-4/5" aria-labelledby="hero-heading">
      <TextStyler caret>{eyebrow}</TextStyler>
      <h1 id="hero-heading" className="pt-5">{intro}</h1>
    </section>
  )
}

export default Hero
