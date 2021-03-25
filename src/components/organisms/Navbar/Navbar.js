import React from "react";
import { Link } from "@reach/router";

export default function Navbar({ isOpen, toggle }) {
    return (
        <nav
            className="flex justify-between items-center h-24 relative "
            role="navigation"
        >
            <Link to="/" className="text-2xl font-heading" >
                Lisa Yip
            </Link>
            <div className="cursor-pointer md:hidden" onClick={toggle}>
                <button className={`hamburger hamburger--elastic ${isOpen ? 'is-active' : ''}`} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <div className="hidden md:block">
                <Link className="p-4 text-xl font-heading" to="/">
                    work
                </Link>
                <Link className="p-4 text-xl font-heading" to="/about">
                    about
                </Link>
            </div>
        </nav>
    );
};
