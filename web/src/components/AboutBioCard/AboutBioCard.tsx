import TextStyler from '../TextStyler/TextStyler'

interface AboutBioCardProps {
  heading: string
  body: string[]
  image: string
  alt: string
  accomplishments: { event: string; cta: string }[]
}
const AboutBioCard = ({
  heading,
  body,
  image,
  alt,
  accomplishments,
}: AboutBioCardProps) => {
  return (
    <div className={`flex flex-col justify-center sm:flex-row `}>
      <div
        className={`max-w-xl pb-6  sm:mr-4 sm:mt-10 sm:w-5/12 md:mt-12 md:w-4/12 lg:mr-8 lg:mt-20 lg:w-4/12`}
      >
        <img src={image} alt={alt} />
      </div>

      <div className={`sm:w-8/12 md:w-7/12 lg:w-6/12`}>
        <h2 className="pb-6 text-center text-name sm:text-left">{heading}</h2>

        {body.map((section, index) => {
          return (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: section }}
              className="pb-6 font-body text-base leading-7 sm:pb-3.5"
            />
          )
        })}

        <div className="py-6 sm:py-3.5">
          <TextStyler caret>Recognition</TextStyler>
        </div>
        {accomplishments.map((section, index) => {
            return (
            <p key={index} className="leading-7">
              {section.cta ? (
                <a href={section.cta}>{section.event}</a>
              ) : (
                <div>{section.event}</div>
              )}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default AboutBioCard
