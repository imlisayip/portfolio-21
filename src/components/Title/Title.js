import React from "react";

export default function Title({
    as: Tag = 'h3',
    className = 'font-heading text-heading font-extralight pb-6',
    children,
    direction,
    type,
    ...props
}) {
    let textStyles = type === 'work'
        ? `text-lgm md:text-lgt lg:text-lgd ${direction ? 'md:-ml-16' : 'md:-mr-16'}`
        : 'text-center sm:text-left text-name sm:-ml-10 md:-ml-12 lg:-ml-20'
    return (
        <Tag className={`${className} ${textStyles}`}>
            {children}
        </Tag>
    );
};