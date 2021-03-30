import React from "react";

export default function Text({
    as: Tag = 'p',
    variant = 'text-base',
    className = 'font-body pb-5 sm:pb-3.5',
    children,
    ...props
}) {
    return (
        <Tag className={` ${className}`}>
            { children}
        </Tag >
    );
};