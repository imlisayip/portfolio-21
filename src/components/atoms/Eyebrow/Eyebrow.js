import React from "react";

export default function Eyebrow({
    as: Tag = 'span',
    className = 'font-eyebrow tracking-widest uppercase text-eyebrow text-xs',
    children,
    ...props
}) {
    return (
        <>
            <Tag className={`${className}`} {...props}>
                {children}
            </Tag>
        </>
    );
};

