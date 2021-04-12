import React from "react";

export default function Link({ ...props }) {
    const {
        children,
        href,
        highlight
    } = props

    return (
        <a
            className={highlight ? 'highlight' : ''}
            href={href}>
            {children}
        </a>
    );
};