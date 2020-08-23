import React from 'react';

import '../styles/EmailSidebar.css';

export default function EmailSidebar() {
    return (
        <div orientation="right" className="email-sidebar">
            <div className="email-item">
                <a href="mailto:me@ryanspoone.com">me@ryanspoone.com</a>
            </div>
        </div>
    );
}
