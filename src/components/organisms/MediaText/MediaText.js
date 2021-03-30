import React from "react";
import Text from '../../atoms/Text/Text'
import Eyebrow from '../../atoms/Eyebrow/Eyebrow'
import Image from '../../atoms/Image/Image'
import Heading from "../../atoms/Heading/Heading";

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
                <div className="max-w-4xl pb-5 md:w-6/12 lg:w-8/12 md:mt-12 lg:mt-0" >
                    <Image src={image} alt={alt} />
                </div>
            )}
            <div className={`md:px-4 md:w-6/12 lg:w-4/12 lg:mt-12 ${direction ? '' : 'md:text-right'}`}>
                {/* <h3 className={`font-heading text-heading text-xl leading-9  pb-5 `}>
                   
                </h3> */}
                <Heading>{title}</Heading>
                <Text>{description}</Text>
                <Eyebrow>
                    <a href={ctaLink}>
                        {cta}
                    </a>
                </Eyebrow>
            </div>
        </div >
    )
}