'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useDocumentScrollThrottled } from '@/lib/hooks';
import '@/styles/Header.css';

interface HeaderProps {
  isShowing: boolean;
  toggle: () => void;
}

export default function Header({ isShowing, toggle }: HeaderProps) {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 100;
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

  const shadowStyle = shouldShowShadow || isShowing ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader && !isShowing ? 'hidden' : '';

  const topOfPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className={`head ${shadowStyle} ${hiddenStyle}`}>
      <nav>
        <Link className="brand" href="/" onClick={topOfPage}>
          <img src="/images/logo.png" alt="Ryan Spoone Logo" />
        </Link>
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
            <Link className="btn btn-primary" href="/blog">
              Blog
            </Link>
          </div>
        </div>
      </nav>
      <div
        aria-hidden={!!isShowing}
        tabIndex={isShowing ? 1 : -1}
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
