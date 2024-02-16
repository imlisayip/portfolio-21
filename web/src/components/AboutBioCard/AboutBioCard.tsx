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
    <div className={`my-16 flex flex-col justify-center sm:flex-row md:my-24`}>
      <div
        className={`max-w-xl pb-6  sm:mr-4 sm:mt-10 sm:w-5/12 md:mt-12 md:w-4/12 lg:mr-8 lg:mt-20 lg:w-4/12`}
      >
        <img src={image} alt={alt} />
      </div>

      <div className={`sm:w-7/12 md:w-6/12 lg:w-5/12`}>
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

        {accomplishments.map((section, index) => {
          if (section.cta) {
            return (
              <TextStyler key={index} link={section.cta} caret>
                {section.event}
              </TextStyler>
            )
          }
          return <p key={index}>{section.event}</p>
        })}
      </div>
    </div>
  )
}

export default AboutBioCard
