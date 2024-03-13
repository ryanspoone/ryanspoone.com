import React from 'react';

import '../styles/Contact.css';

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <h3 className="heading">What&apos;s Next?</h3>
            <h4 className="title">Get In Touch</h4>
            <div>
                <p>
                    While I am always on the lookout for challenges that stimulate growth and innovation, my
                    primary mission is to build and lead teams that leave a lasting impact. Whether
                    you&apos;re interested in discussing potential collaborations, leadership strategies, or
                    just want to share insights, my inbox is always open. I&apos;m eager to connect and
                    explore how we can drive technology forward together!
                </p>
            </div>
            <a className="btn btn-primary" href="mailto:me@ryanspoone.com">
                Say Hello
            </a>
        </section>
    );
}
