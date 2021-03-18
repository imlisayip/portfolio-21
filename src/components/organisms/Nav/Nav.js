import React from "react";
import { Link } from "@reach/router";

export default function Nav() {
    return (
        <header>
            logo/icon
            <Link to="/">Work</Link>
            <Link to="/about">About</Link>
        </header>
    );
};
