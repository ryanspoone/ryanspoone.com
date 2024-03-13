import React from 'react';

import '../styles/About.css';

export default function About() {
    return (
        <section id="about" className="about">
            <h3 className="heading">About Me</h3>
            <div className="about-flex-container">
                <div className="about-content">
                    <div>
                        <p>Hello! I&apos;m Ryan, an engineering manager based in Austin, TX.</p>
                        <p>
                            Leadership in technology is not just about understanding the latest programming
                            languages or frameworks; it&apos;s about fostering a culture of innovation,
                            collaboration, and continuous improvement. My background as a software engineer,
                            with a strong inclination towards JavaScript (Node.js), has equipped me with the
                            technical foundation necessary to guide teams effectively. I thrive on the
                            challenge of turning complex problems into elegant solutions, and I am deeply
                            committed to nurturing the growth and development of my team members.
                        </p>
                        <p>
                            In my journey from coding to leadership, I&apos;ve learned to appreciate the
                            beauty of both the technical and human aspects of software development. Whether
                            it&apos;s architecting scalable back-end systems or crafting intuitive user
                            interfaces, my approach is always guided by the end goal of delivering value and
                            excellence.
                        </p>
                        <p>
                            Here are a few technologies and methodologies I&apos;ve been advocating for
                            recently:
                        </p>
                        <ul className="skills">
                            <li className="skill">JavaScript (ES6+), HTML & CSS, React, Node.js, Python</li>
                            <li className="skill">Agile and Scrum methodologies</li>
                            <li className="skill">
                                Continuous integration/continuous deployment (CI/CD) practices
                            </li>
                            <li className="skill">
                                Cloud computing and scalable infrastructure with AWS/Azure
                            </li>
                            <li className="skill">Data-driven decision making and KPI tracking</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
