import React from "react";

export default function Heading({
    as: Tag = 'h1',
    className,
    children,
    ...props
}) {
    return (
        <Tag className={`font-heading font-extralight text-heading text-xlm md:text-xlt lg:text-xld ${className}`}>
            {children}
        </Tag>
    );
};