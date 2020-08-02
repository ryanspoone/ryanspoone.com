import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <section id="contact" className="contact">
                <h3 className="heading">What&apos;s Next?</h3>
                <h1>Get In Touch</h1>
                <p>
                    Although I&apos;m not currently looking for any new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll try my best to get
                    back to you!
                </p>
                <div>
                    <a className="btn btn-primary" href="mailto:me@ryanspoone.com">
                        Say Hello
                    </a>
                </div>
            </section>
        );
    }
}
