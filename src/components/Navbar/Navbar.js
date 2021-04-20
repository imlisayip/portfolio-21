import React from "react";
import { Link } from "@reach/router";

export default function Navbar({ isOpen, toggle }) {
    return (
        <div className="bg-white  sm:pt-6">
            <nav
                className="flex justify-between items-center h-16 sm:h-24 relative sm:mx-6 px-5 bg-cream"
                role="navigation"
            >
                <Link to="/" className="text-md font-heading" >
                    LY
                </Link>
                <div className="cursor-pointer md:hidden" onClick={toggle}>
                    <button className={`hamburger hamburger--elastic ${isOpen ? 'is-active' : ''}`} type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <div className="hidden md:block">
                    <Link className="p-4 text-md font-heading" to="/">
                        work
                </Link>
                    <Link className="p-4 text-md font-heading" to="/about">
                        about
                </Link>
                </div>
            </nav>
        </div>
    );
};
