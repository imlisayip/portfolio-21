import React from "react";
import Eyebrow from '../Eyebrow/Eyebrow'
import Heading from '../Heading/Heading';

export default function Header({
    eyebrow,
    intro
}) {
    return (
        <>
            <Eyebrow >{eyebrow}</Eyebrow>
            <Heading>{intro}</Heading>
        </>

    )
}