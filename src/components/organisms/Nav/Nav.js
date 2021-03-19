import React from "react";
import { Link } from "@reach/router";

export default function Nav() {
    return (
        <header className="flex justify-between flex-row ">
            <span>
                {/* TODO: find logo */}
                LOGO
            </span>
            <div>
                <Link to="/">Work</Link>
                <span> </span>
                <Link to="/about">About</Link>
            </div>
        </header>
    );
};
