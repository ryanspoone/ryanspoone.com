import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import useDocumentScrollThrottled from './useDocumentScrollThrottled';

export default function Header(props) {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 200;

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldShowShadow(currentScrollTop > 2);

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const isShowing = props.isShowing;
    const toggle = props.toggle;

    // Header should only hide when the following conditions are met:
    // - Not at top of the page
    // - Side menu not showing (mobile only)
    const shadowStyle = shouldShowShadow || isShowing ? 'shadow' : '';
    const hiddenStyle = shouldHideHeader && !isShowing ? 'hidden' : '';

    const topOfPage = () => {
        window.scrollTo(0, 0);
    };

    return (
        <header className={`head ${shadowStyle} ${hiddenStyle}`}>
            <nav>
                <NavLink className="brand" to="/" onClick={topOfPage}>
                    <img src="/images/logo.png" alt="Ryan Spoone Logo" />
                </NavLink>
                <div className="hamburger" onClick={toggle}>
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </div>
                <div className="sections">
                    <ol className="sections-list">
                        <li className="sections-item">
                            <a className="" href="/#about">
                                About
                            </a>
                        </li>
                        <li className="sections-item">
                            <a className="" href="/#experience">
                                Experience
                            </a>
                        </li>
                        <li className="sections-item">
                            <a className="" href="/#projects">
                                Projects
                            </a>
                        </li>
                        <li className="sections-item">
                            <a className="" href="/#contact">
                                Contact
                            </a>
                        </li>
                    </ol>
                    <div>
                        <NavLink className="btn btn-primary" to="/blog">
                            Blog
                        </NavLink>
                    </div>
                </div>
            </nav>
            <div
                aria-hidden={!!isShowing}
                tabIndex={isShowing ? '1' : '-1'}
                className={isShowing ? 'menu-open' : 'menu-closed'}
            >
                <aside className="menu-sidebar">
                    <nav className="menu-nav">
                        <ol className="menu-nav-list">
                            <li className="menu-nav-item">
                                <a className="menu-nav-link" href="/#about" onClick={toggle}>
                                    About
                                </a>
                            </li>
                            <li className="menu-nav-item">
                                <a className="menu-nav-link" href="/#experience" onClick={toggle}>
                                    Experience
                                </a>
                            </li>
                            <li className="menu-nav-item">
                                <a className="menu-nav-link" href="/#projects" onClick={toggle}>
                                    Projects
                                </a>
                            </li>
                            <li className="menu-nav-item">
                                <a className="menu-nav-link" href="/#contact" onClick={toggle}>
                                    Contact
                                </a>
                            </li>
                        </ol>
                        <a className="menu-btn" href="/blog" onClick={toggle}>
                            Blog
                        </a>
                    </nav>
                </aside>
            </div>
        </header>
    );
}

Header.propTypes = {
    isShowing: PropTypes.bool,
    toggle: PropTypes.func
};
