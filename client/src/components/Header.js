import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useDocumentScrollThrottled from './useDocumentScrollThrottled';

const Header = () => {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldShowShadow(currentScrollTop > 2);

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const shadowStyle = shouldShowShadow ? 'shadow' : '';
    const hiddenStyle = shouldHideHeader ? 'hidden' : '';
    return (
        <header className={`topnav ${shadowStyle} ${hiddenStyle}`}>
            <nav>
                <NavLink className="brand" to="/">
                    <img src="/images/logo.png" alt="Ryan Spoone Logo" />
                </NavLink>
                <div className="sections">
                    <ol className="sections-list">
                        <li className="sections-item">
                            <a className="" href="#about">
                                About
                            </a>
                        </li>
                        <li className="sections-item">
                            <a className="" href="#experience">
                                Experience
                            </a>
                        </li>
                        <li className="sections-item">
                            <a className="" href="#work">
                                Work
                            </a>
                        </li>
                        <li className="sections-item">
                            <a className="" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ol>
                    <div>
                        <Link className="btn btn-primary" to="/blog">
                            Blog
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
