import React from "react";
import { Link } from "@reach/router";


export default function Dropdown({ isOpen, toggle }) {
    return (
        <div
            className={isOpen ? 'grid grid-rows-2 text-center items-center' : 'hidden'}
            onClick={toggle}
        >
            <Link className="py-4 text-xl font-h3" to="/">work</Link>
            <Link className="py-4 text-xl font-h3" to="/about">about</Link>
        </ div>
    )
}