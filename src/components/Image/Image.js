import React from "react";

export default function Image({
    src,
    alt,
    children,
    ...props
}) {
    return (
        <img src={src} alt={alt} />
    );
};