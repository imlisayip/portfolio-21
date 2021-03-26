import React from "react";

export default function Heading({
    as: Tag = 'h3',
    className = 'font-heading text-heading text-4xl sm:text-6xl',
    children,
    ...props
}) {
    return (
        <Tag className={`${className}`}   {...props}>
            {children}
        </Tag>
    );
};