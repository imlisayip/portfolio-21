import React from "react";

export default function Heading({
    as: Tag = 'h1',
    className = 'font-heading font-extralight text-heading text-xlm md:text-xlt lg:text-xld md:max-w-3/4',
    children,
    ...props
}) {
    return (
        <Tag className={`${className}`}>
            {children}
        </Tag>
    );
};