import React from "react";

function Project(title, description, cta, image, color) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <h6>{cta}</h6>
            {image}
        </div>
    )
}
export default function Work() {
    return (
        <>
            work
            {Project("Box Annotations", "Enriching the preview experience to facilitate conversation and create new feedback tools", "READ STUDY", "")}
            {Project("Box Annotations", "Enriching the preview experience to facilitate conversation and create new feedback tools", "READ STUDY", "")}
            {Project("Box Annotations", "Enriching the preview experience to facilitate conversation and create new feedback tools", "READ STUDY", "")}
        </>
    );
};
