import React from 'react';

import '../styles/Intro.css';

export default function Intro() {
    return (
        <section id="intro" className="intro">
            <h1 className="overline">Hi, my name is</h1>
            <h2 className="title">Ryan Spoone.</h2>
            <h3 className="subtitle">Let&apos;s build something together.</h3>
            <div className="description">
                <p>
                    I&apos;m a software engineer based in Austin, TX specializing in building performant and
                    scalable websites, applications, and everything in between.
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
