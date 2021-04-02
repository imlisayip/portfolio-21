import React from "react";

export default function Eyebrow({
    as: Tag = 'p',
    className = 'font-eyebrow uppercase text-eyebrow text-sm pb-5',
    children,
    ...props
}) {
    return (
        <>
            <Tag className={`${className}`} {...props}>
                {children}  »
            </Tag>
        </>
    );
};

