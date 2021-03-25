import React from "react";
import Text from '../../atoms/Text/Text'
import Eyebrow from '../../atoms/Eyebrow/Eyebrow'
import Image from '../../atoms/Image/Image'

export default function Hero({
    title,
    description,
    cta,
    ctaLink = "#",
    image,
    alt,
    color,
    direction,
    ...props
}) {
    return (
        <div className={`my-20 flex flex-col ${direction ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {image && (
                <div className="max-w-4xl pb-5 md:w-8/12">
                    <Image src={image} alt={alt} />
                </div>
            )}
            <div className={`md:px-4 md:w-4/12 ${direction ? '' : 'text-right'}`}>
                <h3 className={`font-heading text-heading text-3xl leading-9 ${direction ? '-ml-3.5' : 'ml-3.5'} pb-5 sm:text-4xl`}>
                    {title}
                </h3>
                <Text>{description}</Text>
                <Eyebrow>
                    <a href={ctaLink}>
                        {cta}
                    </a>
                </Eyebrow>
            </div>
        </div>
    )
}