import React from "react";

export default function Eyebrow({
    as: Tag = 'span',
    className = 'font-eyebrow tracking-widest uppercase text-eyebrow text-base',
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

