import React from "react";
import { Link } from "@reach/router";

export default function Navbar({ isOpen, toggle }) {
    return (
        <nav
            className="flex justify-between items-center h-24 relative "
            role="navigation"
        >
            <Link to="/" className="text-xl font-h3" >
                Lisa Yip
            </Link>
            <div className="cursor-pointer sm:hidden" onClick={toggle}>
                <button className={`hamburger hamburger--elastic ${isOpen ? 'is-active' : ''}`} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <div className="hidden sm:block">
                <Link className="p-4 text-xl font-h3" to="/">
                    work
                </Link>
                <Link className="p-4 text-xl font-h3" to="/about">
                    about
                </Link>
            </div>
        </nav>
    );
};
