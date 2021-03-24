import React from "react";
import Feed from "react-instagram-authless-feed"

export default function About() {
    return (
        <div className="my-10">
            <div>Hero, Image</div>
            <div className="my-10">Blurb about me</div>
            <div className="my-10">Tiled Gallery</div>
            <div className="my-10">
                <Feed userName="imlisayip" className="grid grid-cols-3 gap-4" classNameLoading="Loading" limit="6" />
            </div>
            <div className="my-10">Latest and Greatest</div>
        </div>
    );
};
