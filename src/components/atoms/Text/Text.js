import React from "react";

export default function Text({
    as: Tag = 'p',
    variant = 'text-sm',
    className,
    children,
    ...props
}) {
    return (
        <Tag className={`font-body pb-5 sm:pb-3.5 ${className}`} {...props}>
            { children}
        </Tag >
    );
};