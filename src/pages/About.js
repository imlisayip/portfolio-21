import React from "react";
import MediaText from '../components/MediaText/MediaText'
import Text from '../components/Text/Text'
import Feed from "react-instagram-authless-feed"
import Eyebrow from "../components/Eyebrow/Eyebrow";
import Title from "../components/Title/Title";
import { PROFILE } from '../data/data'
import Link from "../components/Link/Link";
import { renderToString } from "react-dom/server";

export default function About() {
    return (
        <div className="my-10">
            {MediaText({
                title: PROFILE.title,
                description: PROFILE.description,
                cta: PROFILE.cta,
                ctaLink: PROFILE.ctaLink,
                image: PROFILE.image,
                alt: PROFILE.alt,
                direction: PROFILE.direction,
                type: PROFILE.type
            })}

            {/* <div className="my-10">
                <Feed userName="imlisayip" className="grid grid-cols-3 gap-4" classNameLoading="Loading" limit="6" />
            </div> */}
            <div className="my-10 grid grid-cols-1 md:grid-cols-3">
                <div className="pb-8">
                    <Title type="work">Latest and Greatest</Title>
                    <p className="text-sm">As of July 2021</p>
                </div>
                <div className="grid grid-col-1 md:col-span-2 md:grid-cols-2">
                    <div className=" md:pt-16">
                        <Eyebrow>books</Eyebrow>
                        <Text>
                            {renderToString(
                                <>
                                    <Link href="https://www.npr.org/2020/10/03/918868242/its-not-quite-dark-enough-in-the-midnight-library">
                                        Midnight Library
                                    </Link>
                                    <br />
                                    <Link href="https://www.youtube.com/watch?v=QSCXyYuT2rE">
                                        The Body Keeps the Score
                                    </Link>
                                </>
                            )}
                        </Text>
                    </div>
                    {/* <div className="md:pt-16">
                        <Eyebrow>obsession</Eyebrow>
                        <Text>Creating a "joy" calendar</Text>
                    </div> */}
                    <div className="md:pt-16">
                        <Eyebrow>adventure</Eyebrow>
                        <Text>Prepping for a multiday backpacking trip out in the Sequoia & Kings Canyon National Parks.</Text>
                    </div>
                </div>
            </div>
        </div >
    );
};
