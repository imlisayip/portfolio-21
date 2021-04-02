import React from "react";

export default function Footer() {
    return (
        <footer className="flex text-sm justify-between items-center flex-col text-center md:flex-row">
            <div>hello@lisayip.com</div>
            <div className="flex items-center">
                <div className="p-4 hover:text-gray-800">
                    <a href="https://www.linkedin.com/in/imlisayip/">LinkedIn</a>
                </div>
                <span> • </span>
                <div className="p-4 hover:text-gray-800">
                    <a href="https://www.instagram.com/imlisayip/">Instagram</a>
                </div>
                <span> • </span>
                {/* TODO: update resume link */}
                <div className="p-4 hover:text-gray-800">
                    <a href="#">Resume</a>
                </div>
            </div>
        </footer>
    );
};
