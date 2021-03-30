import React from "react";

export default function Title({
    as: Tag = 'h3',
    className = 'font-heading text-heading text-lg',
    children,
    ...props
}) {
    return (
        <Tag className={`${className}`}>
            {children}
        </Tag>
    );
};