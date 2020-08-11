import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <section id="about" className="about">
                <h3 className="heading">About Me</h3>
                <div className="about-flex-container">
                    <div className="about-content">
                        <div>
                            <p>Hello! I&apos;m Ryan, a software engineer based in Austin, TX.</p>
                            <p>
                                I enjoy creating things that live on the internet, whether that be websites,
                                applications, or anything in between. My goal is to always build products that
                                provide pixel-perfect, performant experiences.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit ut
                                aliquam. Gravida cum sociis natoque penatibus et magnis dis parturient montes.
                                Nibh mauris cursus mattis molestie a iaculis at erat. Praesent elementum
                                facilisis leo vel fringilla est. Mauris cursus mattis molestie a iaculis at
                                erat pellentesque. Turpis cursus in hac habitasse platea dictumst quisque
                                sagittis purus. Quam adipiscing vitae proin sagittis nisl rhoncus mattis.
                                Etiam erat velit scelerisque in dictum non. Viverra nibh cras pulvinar mattis
                                nunc sed blandit libero volutpat. In tellus integer feugiat scelerisque varius
                                morbi enim nunc. Nulla aliquet enim tortor at auctor urna nunc id. Lectus quam
                                id leo in vitae turpis.
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
}
