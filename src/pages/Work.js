import React from "react";

function Project(title, description, cta, image, color) {
    return (
        <div className="my-10">
            <h3>{title}</h3>
            <p>{description}</p>
            <h6>{cta}</h6>
            {image}
        </div>
    )
}
function Intro(eyebrow, intro) {

    return (
        <div>
            <span>{eyebrow}</span>
            <h3>{intro}</h3>
        </div>
    )
}
export default function Work() {
    return (
        <div className="my-10">
            {Intro('hello', 'Lisa Yip  is a user experience engineer open to new opportunities, exploring and living in Bay Area. ')}
            {Project("Box Annotations", "Enriching the preview experience to facilitate conversation and create new feedback tools", "READ STUDY", "")}
            {Project("Box Annotations", "Enriching the preview experience to facilitate conversation and create new feedback tools", "READ STUDY", "")}
            {Project("Box Annotations", "Enriching the preview experience to facilitate conversation and create new feedback tools", "READ STUDY", "")}
        </div>
    );
};
