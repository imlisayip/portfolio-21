import React from "react";
import { Link } from "@reach/router";

export default function Dropdown({ isOpen, toggle }) {
    return (
        // TODO: add transition
        <div
            className={
                isOpen
                    ? 'grid grid-rows-2 text-center items-center '
                    : 'hidden'}
            onClick={toggle}
        >
            <Link className="py-4 text-md font-heading" to="/">work</Link>
            <Link className="py-4 text-md font-heading" to="/about">about</Link>
        </ div>
    )
}