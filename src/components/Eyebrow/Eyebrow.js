import React from "react";

export default function Eyebrow({
    as: Tag = 'p',
    className,
    children,
}) {
    return (
        <>
            <Tag className={`font-eyebrow uppercase text-eyebrow text-sm pb-2 ${className}`}>
                {children}  »
            </Tag>
        </>
    );
};

