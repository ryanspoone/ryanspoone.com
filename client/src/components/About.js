import React from 'react';

import '../styles/About.css';

export default function About() {
    return (
        <section id="about" className="about">
            <h3 className="heading">About Me</h3>
            <div className="about-flex-container">
                <div className="about-content">
                    <div>
                        <p>Hello! I&apos;m Ryan, a software engineer based in Austin, TX.</p>
                        <p>
                            I am not a purist when it comes to programming languages; however, currently, I
                            mainly work with JavaScript (Node.js). I love what I do, and adore the creative
                            process; it is addictive and can give never ending possibilities. Although I
                            mainly work professionally on back-end code, I do thoroughly enjoy the front-end
                            side of things. It&apos;s ever evolving and there is always something new to
                            learn. When not working professionally, I thoroughly enjoy getting to create and
                            spend time on personal projects, whether thats a new project I am lifting off the
                            ground or helping a friend with their work.
                        </p>
                        <p>Here are a few technologies I&apos;ve been working with recently:</p>
                        <ul className="skills">
                            <li className="skill">JavaScript (ES6+)</li>
                            <li className="skill">HTML &amp; CSS</li>
                            <li className="skill">React</li>
                            <li className="skill">Node.js</li>
                            <li className="skill">Python</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
