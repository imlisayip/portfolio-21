import TextStyler from '../TextStyler/TextStyler'

const Hero = ({ eyebrow, intro }) => {
  return (
    <div className="my-16 xl:max-w-4/5">
      <TextStyler caret>{eyebrow}</TextStyler>
      <h1 className="pt-5">{intro}</h1>
    </div>
  )
}

export default Hero
