import React from 'react';

import '../styles/Intro.css';

export default function Intro() {
    return (
        <section id="intro" className="intro">
            <h1 className="overline">Hi, my name is</h1>
            <h2 className="title">Ryan Spoone.</h2>
            <h3 className="subtitle">I love to build cool things.</h3>
            <div className="description">
                <p>
                    I&apos;m a software engineer based in Austin, TX specializing in designing and building
                    exceptional applications, websites, and everything in-between.
                </p>
            </div>
            <div>
                <a className="btn btn-primary" href="mailto:me@ryanspoone.com">
                    Get In Touch
                </a>
            </div>
        </section>
    );
}
