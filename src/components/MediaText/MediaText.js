import React from 'react';
import Text from '../Text/Text'
import Eyebrow from '../Eyebrow/Eyebrow'
import Image from '../Image/Image'
import Title from '../Title/Title';
import Link from '../Link/Link';

export default function Hero({ ...props }) {
    const {
        title,
        description,
        cta,
        ctaLink = '#',
        image,
        key,
        alt,
        direction,
        type = 'work',
    } = props

    let containerClassNames = type === 'work'
        ? `${direction ? 'md:flex-row' : 'md:flex-row-reverse'}`
        : `${direction ? 'sm:flex-row' : 'sm:flex-row-reverse'}`
    let imageClassNames = type === 'work'
        ? 'max-w-4xl md:w-6/12 lg:w-8/12 md:mt-12 lg:mt-0'
        : 'max-w-xl sm:w-5/12  md:w-4/12 lg:w-4/12 sm:mr-4 lg:mr-8'
    let textClassNames = type === 'work'
        ? 'md:px-4 md:w-6/12 lg:w-4/12 lg:mt-12'
        : 'sm:w-7/12 md:w-6/12 lg:w-5/12 sm:mt-10 md:mt-12 lg:mt-24'
    return (
        <div key={key} className={`my-16 md:my-28 flex flex-col justify-center ${containerClassNames}`}>
            {image && cta ? (
                <div className={`${imageClassNames} pb-6`} >
                    <a href={ctaLink}>
                        <Image src={image} alt={alt} />
                    </a>
                </div>
            ) : (
                <div className={`${imageClassNames} pb-6`} >
                    <Image src={image} alt={alt} />
                </div>
            )}

            <div className={`${textClassNames} ${direction ? '' : 'md:text-right'}`}>
                <Title type={type} direction={direction}>{title}</Title>
                <Text type={type}>{description}</Text>
                {cta && (
                    <Eyebrow>
                        <Link href={ctaLink} highlight>
                            {cta}
                        </Link>
                    </Eyebrow>
                )}
            </div>
        </div >
    )
}