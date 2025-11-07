'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDocumentScrollThrottled } from '@/lib/hooks';
import { SCROLL } from '@/lib/constants';
import '@/styles/Header.css';

interface HeaderProps {
  isShowing: boolean;
  toggle: () => void;
}

export default function Header({ isShowing, toggle }: HeaderProps) {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > SCROLL.MINIMUM;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, SCROLL.HIDE_DELAY);
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
          <Image src="/images/logo.png" alt="Ryan Spoone Logo" width={40} height={40} />
        </Link>
        <div className="hamburger" onClick={toggle}>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
        <div className="sections">
          <ol className="sections-list">
            <li className="sections-item">
              <Link className="" href="/#about">
                About
              </Link>
            </li>
            <li className="sections-item">
              <Link className="" href="/#experience">
                Experience
              </Link>
            </li>
            <li className="sections-item">
              <Link className="" href="/#projects">
                Projects
              </Link>
            </li>
            <li className="sections-item">
              <Link className="" href="/#contact">
                Contact
              </Link>
            </li>
          </ol>
          <div>
            <Link className="btn btn-primary" href="/archive">
              Archive
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
                <Link className="menu-nav-link" href="/#about" onClick={toggle}>
                  About
                </Link>
              </li>
              <li className="menu-nav-item">
                <Link className="menu-nav-link" href="/#experience" onClick={toggle}>
                  Experience
                </Link>
              </li>
              <li className="menu-nav-item">
                <Link className="menu-nav-link" href="/#projects" onClick={toggle}>
                  Projects
                </Link>
              </li>
              <li className="menu-nav-item">
                <Link className="menu-nav-link" href="/#contact" onClick={toggle}>
                  Contact
                </Link>
              </li>
            </ol>
            <Link className="menu-btn" href="/archive" onClick={toggle}>
              Archive
            </Link>
          </nav>
        </aside>
      </div>
    </header>
  );
}
