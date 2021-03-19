import React from "react";

export default function Footer() {
    return (
        <footer className="flex justify-between flex-col text-center sm:flex-row">
            {/* <span>imlisayip@gmail.com</span> */}
            <span>imlisayip@gmail.com</span>
            <div>
                <a href="https://www.linkedin.com/in/imlisayip/">LinkedIn</a>
                <span> • </span>
                <a href="https://www.instagram.com/imlisayip/">Instagram</a>
                <span> • </span>
                {/* TODO: update resume link */}
                <a href="#">Resume</a>
            </div>
        </footer>
    );
};
