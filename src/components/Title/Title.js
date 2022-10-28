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
        ? 'text-lgm md:text-lgt lg:text-lgd'
        : 'text-center sm:text-left text-name'
    return (
        <Tag className={`${className} ${textStyles}`}>
            {children}
        </Tag>
    );
};