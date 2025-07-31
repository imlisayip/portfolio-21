import TextStyler from '../TextStyler/TextStyler'

interface MediaCardProps {
  direction: 'left' | 'right'
  heading: string
  body: string
  cta: string
  ctaLink: string
  image: string
  alt: string
  key: number
}

const MediaCard = ({
  direction = 'left',
  heading,
  body,
  ctaLink,
  cta,
  image,
  alt,
  key,
}: MediaCardProps) => {
  return (
    <article
      key={key}
      className={`my-16 flex flex-col justify-center   ${
        direction === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      aria-labelledby={`project-heading-${key}`}
    >
      <div className={`max-w-4xl pb-6 md:w-6/12  lg:w-8/12`}>
        <a
          href={ctaLink}
          aria-label={`View ${heading} project`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={image}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </a>
      </div>

      <div
        className={`md:w-6/12 md:px-4 lg:mt-12 lg:w-4/12 ${
          direction === 'left' ? '' : 'md:text-right'
        }`}
      >
        <h2 id={`project-heading-${key}`} className="pb-6 text-lgm md:text-lgt lg:text-lgd">{heading}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: body }}
          className="pb-6 sm:pb-3.5"
          aria-describedby={`project-heading-${key}`}
        />
        <TextStyler link={ctaLink} caret highlight>
          {cta}
        </TextStyler>
      </div>
    </article>
  )
}

export default MediaCard
