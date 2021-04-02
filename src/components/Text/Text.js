import React from "react";

export default function Text({
    as: Tag = 'p',
    className = 'font-body pb-6 sm:pb-3.5',
    children,
    type,
    ...props
}) {
    return (
        <Tag className={`${className} ${type === 'work' ? 'text-basew' : 'text-basea'}`}>
            {children}
        </Tag >
    );
};