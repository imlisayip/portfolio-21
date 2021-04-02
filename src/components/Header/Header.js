import React from "react";
import Eyebrow from '../Eyebrow/Eyebrow'
import Heading from '../Heading/Heading';

export default function Header({
    eyebrow,
    intro
}) {
    return (
        <div className="my-16 md:my-28 md:max-w-4/5 lg:max-w-3/4 ">
            <Eyebrow >{eyebrow}</Eyebrow>
            <Heading className="pt-5">{intro}</Heading>
        </div>

    )
}