import React, { useLayoutEffect } from "react";
import { Link } from "@reach/router";

export default function Dropdown({ toggle }) {
    useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = originalStyle);
    }, []);

    return (
        // TODO: add transition
        <div className="absolute w-screen max-h-full  sm:mx-6 sm:w-11/12">
            <div
                className='grid grid-rows-12 auto-rows-min text-center items-center bg-cream'
                onClick={toggle}
            >
                <div className="row-span-1"></div>
                <Link className="py-4 text-md font-heading row-span-1" to="/">work</Link>
                <Link className="py-4 text-md font-heading row-span-1" to="/about">about</Link>
            </ div>
        </div>
    )
}
