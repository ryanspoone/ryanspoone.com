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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Consectetur adipiscing elit ut aliquam. Gravida cum
                    sociis natoque penatibus et magnis dis parturient montes. Nibh mauris cursus mattis
                    molestie a iaculis at erat.
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
