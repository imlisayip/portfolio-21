import React from "react";
import Eyebrow from '../../atoms/Eyebrow/Eyebrow'

export default function Header({
    eyebrow,
    intro
}) {
    return (
        <>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h3 className="font-heading text-heading text-3xl sm:text-5xl">
                {intro}
            </h3>
        </>

    )
}