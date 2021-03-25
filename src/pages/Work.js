import React from "react";
import Header from '../components/molecules/Header/Header'
import MediaText from '../components/organisms/MediaText/MediaText'


export default function Work() {
    return (
        <div className="my-10">

            {Header({
                eyebrow: 'hello',
                intro: 'Lisa Yip  is a user experience engineer open to new opportunities, exploring and living in Bay Area. '
            })}
            {MediaText({
                title: "Creativity Over Everything",
                // description: "Patreon is a membership platform that makes it easy for artists and creators to get paid. Patreon's brand campaign emphasizing the system for creative people is broken, to ditch the old ways and let fans give creators the freedom and stability they need to do their best creative work. Collaborated alongside brand team from design to launch during a tight 3-week turnaround, building responsible landing page with React, Parcel.js.",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
                cta: "Visit site",
                ctaLink: "https://www.creativityovereverything.com/",
                image: "https://images.unsplash.com/photo-1509909756405-be0199881695?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
                alt: "",
                direction: true,
            })}
            {MediaText({
                title: "Patreon Product",
                // description: "Patreon is a membership platform that makes it easy for artists and creators to get paid. Worked with the team to rebrand Patreon App Directory to add value to patrons with tools, benefits, and perks. Built website using React, Python.",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
                cta: "Visit site",
                ctaLink: "https://www.patreon.com/product/premium",
                image: "https://images.unsplash.com/photo-1509909756405-be0199881695?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
                alt: "",
            })}
            {MediaText({
                title: "Work In Progress",
                // description: "Webby Award winning Dropbox Work in Progress Blogs, designed to communicate company updates and perspective. Worked closely with shareholders to launch under two month window with rebrand and migration. Built with Javascript, HTML5/CSS3, AEM.",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
                cta: "Visit site",
                ctaLink: "https://blog.dropbox.com/",
                image: "https://images.unsplash.com/photo-1509909756405-be0199881695?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
                alt: "",
                direction: true,
            })}
            {MediaText({
                title: "Dropbox Transparency",
                // description: "Dropbox is a modern workspace designed to reduce busywork-so you can focus on the things that matter. Site focused on being transparent about how government requests for user data is handled. Project built the project using D3.js, HTML5/CSS3 and AEM.",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
                cta: "Visit site",
                ctaLink: "https://www.dropbox.com/transparency",
                image: "https://images.unsplash.com/photo-1509909756405-be0199881695?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
                alt: "",
            })}
        </div>
    );
};
