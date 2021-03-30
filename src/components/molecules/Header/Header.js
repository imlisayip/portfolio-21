import React from "react";
import Eyebrow from '../../atoms/Eyebrow/Eyebrow'
import Heading from "../../atoms/Heading/Heading";

export default function Header({
    eyebrow,
    intro
}) {
    return (
        <>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading>{intro}</Heading>
        </>

    )
}