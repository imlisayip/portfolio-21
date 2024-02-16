import TextStyler from '../TextStyler/TextStyler'

const Hero = ({ eyebrow, intro }) => {
  return (
    <div className="md:max-w-4/5 my-16 lg:max-w-3/4">
      <TextStyler caret>{eyebrow}</TextStyler>
      <h1 className="pt-5">{intro}</h1>
    </div>
  )
}

export default Hero
