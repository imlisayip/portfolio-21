import React from "react";
import MediaText from '../components/organisms/MediaText/MediaText'
import Text from '../components/atoms/Text/Text'
import Feed from "react-instagram-authless-feed"

export default function About() {
    return (
        <div className="my-10">
            {MediaText({
                title: "Lisa Yip",
                description: "Enriching the preview experience to facilitate conversation and create new feedback tool",
                image: "https://images.unsplash.com/photo-1509909756405-be0199881695?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
                direction: true
            })}
            <div className="my-10">
                <Text>
                    Blurb about me Blurb about me Blurb about me Blurb about me Blurb about me Blurb about me Blurb about me Blurb about me Blurb about me Blurb about me Blurb about me Blurb about me Blurb about me
                </Text>
            </div>

            <div className="my-10">
                gallery
                {/* <Feed userName="imlisayip" className="grid grid-cols-3 gap-4" classNameLoading="Loading" limit="6" /> */}
            </div>
            <div className="my-10">Latest and Greatest</div>
        </div>
    );
};
