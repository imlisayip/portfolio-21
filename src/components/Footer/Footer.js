import React from "react";
import Resume from "../../data/YIP_Resume_21.pdf"
import Link from '../Link/Link'

export default function Footer() {
    return (
        <footer className="flex text-sm justify-between items-center flex-col text-center md:flex-row">
            <div>hello@lisayip.com</div>
            <div className="flex items-center">
                <div className="p-4 hover:text-gray-800">
                    <Link highlight href="https://www.linkedin.com/in/imlisayip/">LinkedIn</Link>
                </div>
                <span> • </span>
                <div className="p-4 hover:text-gray-800">
                    <Link highlight href="https://github.com/imlisayip">Github</Link>
                </div>
                {/* <span> • </span>
                <div className="p-4 hover:text-gray-800">
                    <Link highlight href={Resume}>Resume</Link>
                </div> */}
            </div>
        </footer>
    );
};
