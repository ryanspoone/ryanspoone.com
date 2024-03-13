import React from 'react';

import '../styles/Intro.css';

export default function Intro() {
    return (
        <section id="intro" className="intro">
            <h1 className="overline">Hi, my name is</h1>
            <h2 className="title">Ryan Spoone.</h2>
            <h3 className="subtitle">Let&apos;s lead and innovate together.</h3>
            <div className="description">
                <p>
                    I&apos;m an engineering manager based in Austin, TX, committed to driving the development
                    of performant and scalable websites, applications, and comprehensive digital solutions.
                    With a passion for technology and a proven track record in team leadership, I focus on
                    fostering a culture of innovation, excellence, and continuous learning.
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
