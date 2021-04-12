import React from "react";
import MediaText from '../components/MediaText/MediaText'
import Text from '../components/Text/Text'
import Feed from "react-instagram-authless-feed"
import LisaYip from '../data/lisa-yip.png'
import Eyebrow from "../components/Eyebrow/Eyebrow";
import Title from "../components/Title/Title";
import Resume from "../data/YIP_Resume_21.pdf"


export default function About() {
    return (
        <div className="my-10">
            {MediaText({
                title: "Lisa Yip",
                description:
                    <>
                        <Text>Hi! Thanks for stopping by. I am a User Experience Engineer actively looking for new opportunities. </Text>
                        <Text>Previously, I delivered digital brand experiences at Patreon, Dropbox and Informatica.</Text>
                        <Text>My experience includes helping companies helping companies build components and resources to start a design system. I love the process of building creatively through empathy, innovation and teamwork. The synergy helps me find a balance between function and form.</Text>
                        <Text>I'm always trying to grow and learn something new. I lose track of time when I'm volunteering at endurance events, curled up in a good book, and mesmerizing new places I explore.</Text>
                        <Text>Please don't hesitate to reach out— I'm happy to chat about work or play!</Text>
                        <Text>Website built with React, Parcel, and Vercel. Set in  Canela and GT America.</Text>

                        <Eyebrow>Contact</Eyebrow>
                        <Text>hello@lisayip.com</Text>

                        <Eyebrow>Links</Eyebrow>
                        <Text>
                            <div >
                                <a href="https://www.linkedin.com/in/imlisayip/">LinkedIn</a>
                            </div>
                            <div >
                                <a href="https://www.instagram.com/imlisayip/">Instagram</a>
                            </div>
                            <div >
                                <a href={Resume}>Resume</a>
                            </div>
                        </Text>

                        <Eyebrow>Recognition</Eyebrow>
                        <Text>
                            <div>
                                <a href="https://winners.webbyawards.com/2019/websites/general-websites/business-blogwebsite/91997/work-in-progress">
                                    The Webby Awards | People's Voice Winner; Dropbox Work in Progress Blogs
                                </a>
                            </div>
                            <div>
                                <a href="https://winners.webbyawards.com/2019/websites/general-websites/community/83631/patreon">
                                    The Webby Awards | Webby Winner; Patreon Community
                                </a>
                            </div>
                        </Text>
                    </>,
                image: LisaYip,
                direction: true,
                type: 'about'
            })}

            {/* <div className="my-10">
                <Feed userName="imlisayip" className="grid grid-cols-3 gap-4" classNameLoading="Loading" limit="6" />
            </div> */}
            <div className="my-10 grid grid-cols-1 md:grid-cols-3">
                <div className="pb-8">
                    <Title type="work"> Latest and Greatest</Title>
                    <p className="text-sm">As of April 2021</p>
                </div>
                <div className="grid grid-col-1 md:col-span-2 md:grid-cols-3">
                    <div className=" md:pt-16">
                        <Eyebrow>books</Eyebrow>
                        <Text>
                            <a href="https://www.danielletown.com/book/">
                                Invested
                            </a>
                            <br />
                            <a href="https://www.saltfatacidheat.com/">
                                Salt Fat Head Acid
                            </a>
                        </Text>
                    </div>
                    <div className="md:pt-16">
                        <Eyebrow>obsession</Eyebrow>
                        <Text>Creating a "joy" calendar</Text>
                    </div>
                    <div className="md:pt-16">
                        <Eyebrow>adventure</Eyebrow>
                        <Text>Spending a lot of time on the mountain learning to ski, finally felt brave enough for black diamonds and off píste! Still working up my courage to attempt moguls.</Text>
                    </div>
                </div>
            </div>
        </div >
    );
};
