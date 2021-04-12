import React from "react";

export default function Text({ ...props }) {
    const {
        className = 'font-body pb-6 sm:pb-3.5',
        children,
        type
    } = props

    return (
        <p
            className={`${className} ${type === 'work' ? 'text-basew' : 'text-basea'}`}
            dangerouslySetInnerHTML={{ __html: children }}
        />
    );
};