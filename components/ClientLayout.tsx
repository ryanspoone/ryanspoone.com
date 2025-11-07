'use client';

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import EmailSidebar from './EmailSidebar';
import SocialSidebar from './SocialSidebar';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isMenuShowing, setIsMenuShowing] = useState(false);

  const toggleMenu = () => {
    setIsMenuShowing(!isMenuShowing);
  };

  return (
    <>
      <Header isShowing={isMenuShowing} toggle={toggleMenu} />
      <EmailSidebar />
      <SocialSidebar />
      {children}
      <Footer />
    </>
  );
}
